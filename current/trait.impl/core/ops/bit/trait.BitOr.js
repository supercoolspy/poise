(function() {var implementors = {
"dashmap":[["impl&lt;'a, K, V: 'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Q&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Q</a>&gt; for &amp;'a <a class=\"struct\" href=\"dashmap/struct.DashMap.html\" title=\"struct dashmap::DashMap\">DashMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt; + 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"]],
"hashbrown":[["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: Allocator,</div>"]],
"indexmap":[["impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div>"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"mio/struct.Interest.html\" title=\"struct mio::Interest\">Interest</a>"]],
"serenity":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.SystemChannelFlags.html\" title=\"struct serenity::model::guild::SystemChannelFlags\">SystemChannelFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.GuildMemberFlags.html\" title=\"struct serenity::model::guild::GuildMemberFlags\">GuildMemberFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/channel/struct.MessageFlags.html\" title=\"struct serenity::model::channel::MessageFlags\">MessageFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/permissions/struct.Permissions.html\" title=\"struct serenity::model::permissions::Permissions\">Permissions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.ThreadMemberFlags.html\" title=\"struct serenity::model::guild::ThreadMemberFlags\">ThreadMemberFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/gateway/struct.ActivityFlags.html\" title=\"struct serenity::model::gateway::ActivityFlags\">ActivityFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/application/struct.ApplicationFlags.html\" title=\"struct serenity::model::application::ApplicationFlags\">ApplicationFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/user/struct.UserPublicFlags.html\" title=\"struct serenity::model::user::UserPublicFlags\">UserPublicFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/application/struct.InteractionResponseFlags.html\" title=\"struct serenity::model::application::InteractionResponseFlags\">InteractionResponseFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/channel/struct.ChannelFlags.html\" title=\"struct serenity::model::channel::ChannelFlags\">ChannelFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"serenity/model/gateway/struct.GatewayIntents.html\" title=\"struct serenity::model::gateway::GatewayIntents\">GatewayIntents</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"tokio/io/struct.Interest.html\" title=\"struct tokio::io::Interest\">Interest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"tokio/io/struct.Ready.html\" title=\"struct tokio::io::Ready\">Ready</a>"]],
"typenum":[["impl&lt;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;U&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>"],["impl&lt;Ul, Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;<div class=\"where\">where\n    Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt; + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</div>"],["impl&lt;Ul, Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;<div class=\"where\">where\n    Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt; + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>"],["impl&lt;B: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>"],["impl&lt;Rhs: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>"],["impl&lt;Ul, Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;<div class=\"where\">where\n    Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt; + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</div>"],["impl&lt;Ul, Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;<div class=\"where\">where\n    Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Ur&gt; + <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()