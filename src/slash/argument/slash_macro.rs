//! Infrastructure to parse received slash command arguments into Rust types.

#[allow(unused_imports)] // import is required if serenity simdjson feature is enabled
use crate::serenity::json::prelude::*;
#[allow(unused_imports)] // required for introdoc-links in doc comments
use crate::serenity_prelude as serenity;

/// Possible errors when parsing slash command arguments
#[derive(Debug)]
pub enum SlashArgError {
    /// Expected a certain argument type at a certain position in the unstructured list of
    /// arguments, but found something else.
    ///
    /// Most often the result of the bot not having registered the command in Discord, so Discord
    /// stores an outdated version of the command and its parameters.
    CommandStructureMismatch(&'static str),
    /// A string parameter was found, but it could not be parsed into the target type.
    Parse {
        /// Error that occured while parsing the string into the target type
        error: Box<dyn std::error::Error + Send + Sync>,
        /// Original input string
        input: String,
    },
}
impl std::fmt::Display for SlashArgError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::CommandStructureMismatch(detail) => {
                write!(
                    f,
                    "Bot author did not register their commands correctly ({})",
                    detail
                )
            }
            Self::Parse { error, input } => {
                write!(f, "Failed to parse `{}` as argument: {}", input, error)
            }
        }
    }
}
impl std::error::Error for SlashArgError {
    fn cause(&self) -> Option<&dyn std::error::Error> {
        match self {
            Self::Parse { error, input: _ } => Some(&**error),
            Self::CommandStructureMismatch(_) => None,
        }
    }
}

#[doc(hidden)]
#[macro_export]
macro_rules! _parse_slash {
    // Extract Option<T>
    ($ctx:ident, $guild_id:ident, $channel_id:ident, $args:ident => $name:ident: Option<$type:ty $(,)*>) => {
        if let Some(arg) = $args.iter().find(|arg| arg.name == stringify!($name)) {
            let arg = arg.value
            .as_ref()
            .ok_or($crate::SlashArgError::CommandStructureMismatch("expected argument value"))?;
            Some($crate::extract_slash_argument!($type, $ctx, $guild_id, Some($channel_id), arg)
                .await?)
        } else {
            None
        }
    };

    // Extract Vec<T> (delegating to Option<T> because slash commands don't support variadic
    // arguments right now)
    ($ctx:ident, $guild_id:ident, $channel_id:ident, $args:ident => $name:ident: Vec<$type:ty $(,)*>) => {
        match $crate::_parse_slash!($ctx, $guild_id, $channel_id, $args => $name: Option<$type>) {
            Some(value) => vec![value],
            None => vec![],
        }
    };

    // Extract #[flag]
    ($ctx:ident, $guild_id:ident, $channel_id:ident, $args:ident => $name:ident: FLAG) => {
        $crate::_parse_slash!($ctx, $guild_id, $channel_id, $args => $name: Option<bool>)
            .unwrap_or(false)
    };

    // Extract T
    ($ctx:ident, $guild_id:ident, $channel_id:ident, $args:ident => $name:ident: $($type:tt)*) => {
        $crate::_parse_slash!($ctx, $guild_id, $channel_id, $args => $name: Option<$($type)*>)
            .ok_or($crate::SlashArgError::CommandStructureMismatch("a required argument is missing"))?
    };
}

/**
Macro for extracting and parsing slash command arguments out of an array of
[`serenity::ApplicationCommandInteractionDataOption`].

An invocation of this macro is generated by `crate::command`, so you usually don't need this macro
directly.

```rust,no_run
# #[tokio::main] async fn main() -> Result<(), Box<dyn std::error::Error>> {
# use poise::serenity_prelude as serenity;
let ctx: serenity::Context = todo!();
let guild_id: Option<serenity::GuildId> = todo!();
let channel_id: serenity::ChannelId = todo!();
let args: &[serenity::ApplicationCommandInteractionDataOption] = todo!();

let (arg1, arg2) = poise::parse_slash_args!(
    &ctx, guild_id, channel_id,
    args => (arg1: String), (arg2: Option<u32>)
).await?;

# Ok(()) }
```
*/
#[macro_export]
macro_rules! parse_slash_args {
    ($ctx:expr, $guild_id:expr, $channel_id:expr, $args:expr => $(
        ( $name:ident: $($type:tt)* )
    ),* $(,)? ) => {
        async /* not move! */ {
            use $crate::SlashArgumentHack;

            let (ctx, guild_id, channel_id, args) = ($ctx, $guild_id, $channel_id, $args);

            Ok::<_, $crate::SlashArgError>(( $(
                $crate::_parse_slash!( ctx, guild_id, channel_id, args => $name: $($type)* ),
            )* ))
        }
    };
}
