searchState.loadedDescShard("mio", 0, "Mio is a fast, low-level I/O library for Rust focusing on …\nInterest used in registering.\nReturns a <code>Interest</code> set representing priority completion …\nPolls for readiness events on all registered values.\nReturns a <code>Interest</code> set representing readable interests.\nRegisters I/O resources.\nAssociates readiness events with <code>event::Source</code>s.\nReturns a <code>Interest</code> set representing writable interests.\nWaker allows cross-thread waking of <code>Poll</code>.\nAdd together two <code>Interest</code>.\nDeregister an <code>event::Source</code> with the <code>Poll</code> instance.\nReadiness event types and utilities.\nMio’s optional features.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGetting started guide.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if <code>Interest</code> contains AIO readiness.\nReturns true if <code>Interest</code> contains LIO readiness.\nReturns true if <code>Interest</code> contains priority readiness.\nReturns true if the value includes readable readiness.\nReturns true if the value includes writable readiness.\nNetworking primitives.\nReturn a new <code>Poll</code> handle.\nCreate a new <code>Waker</code>.\nWait for readiness events\nRegister an <code>event::Source</code> with the <code>Poll</code> instance.\nCreate a separate <code>Registry</code> which can be used to register …\nRemoves <code>other</code> <code>Interest</code> from <code>self</code>.\nRe-register an <code>event::Source</code> with the <code>Poll</code> instance.\nCreates a new independently owned <code>Registry</code>.\nUnix only extensions.\nWake up the <code>Poll</code> associated with this <code>Waker</code>.\nA readiness event.\nA collection of readiness events.\n<code>Events</code> iterator.\nAn event source that may be registered with <code>Registry</code>.\nReturns the number of <code>Event</code> values that <code>self</code> can hold.\nClearing all <code>Event</code> values from container explicitly.\nDeregister <code>self</code> from the given <code>Registry</code> instance.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the event contains AIO readiness.\nReturns <code>true</code> if <code>self</code> contains no <code>Event</code> values.\nReturns true if the event contains error readiness.\nReturns true if the event contains LIO readiness.\nReturns true if the event contains priority readiness.\nReturns true if the event contains read closed readiness.\nReturns true if the event contains readable readiness.\nReturns true if the event contains writable readiness.\nReturns true if the event contains write closed readiness.\nReturns an iterator over the <code>Event</code> values.\nRegister <code>self</code> with the given <code>Registry</code> instance.\nRe-register <code>self</code> with the given <code>Registry</code> instance.\nReturns the event’s token.\nReturn a new <code>Events</code> capable of holding up to <code>capacity</code> …\nAn address associated with a <code>mio</code> specific Unix socket.\nA structure representing a socket server\nA non-blocking TCP stream between a local socket and a …\nA User Datagram Protocol socket.\nA Unix datagram socket.\nA non-blocking Unix domain socket server.\nA non-blocking Unix stream socket.\nAccepts a new <code>TcpStream</code>.\nAccepts a new incoming connection to this listener.\nReturns the contents of this address if it is an abstract …\nReturns the contents of this address if it is a <code>pathname</code> …\nConvenience method to bind a new TCP listener to the …\nCreates a UDP socket from the given address.\nCreates a Unix datagram socket bound to the given path.\nCreates a new <code>UnixListener</code> bound to the specified socket …\nCreates a new <code>UnixListener</code> bound to the specified socket …\nGets the value of the <code>SO_BROADCAST</code> option for this socket.\nCreate a new TCP stream and issue a non-blocking connect …\nConnects the UDP socket setting the default destination …\nConnects the socket to the specified address.\nConnects to the socket named by <code>path</code>.\nConnects to the socket named by <code>address</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a <code>RawFd</code> to a <code>TcpListener</code>.\nConverts a <code>RawFd</code> to a <code>TcpStream</code>.\nConverts a <code>RawFd</code> to a <code>UdpSocket</code>.\nConverts a <code>RawFd</code> to a <code>UnixDatagram</code>.\nConverts a <code>RawFd</code> to a <code>UnixListener</code>.\nConverts a <code>RawFd</code> to a <code>UnixStream</code>.\nCreates a new <code>TcpListener</code> from a standard <code>net::TcpListener</code>.\nCreates a new <code>TcpStream</code> from a standard <code>net::TcpStream</code>.\nCreates a new <code>UdpSocket</code> from a standard <code>net::UdpSocket</code>.\nCreates a new <code>UnixDatagram</code> from a standard …\nCreates a new <code>UnixListener</code> from a standard …\nCreates a new <code>UnixStream</code> from a standard <code>net::UnixStream</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the address is unnamed.\nExecutes an operation of the <code>IP_ADD_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IPV6_ADD_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IP_DROP_MEMBERSHIP</code> type.\nExecutes an operation of the <code>IPV6_DROP_MEMBERSHIP</code> type.\nReturns the local socket address of this listener.\nReturns the socket address of the local half of this TCP …\nReturns the socket address that this socket was created …\nReturns the address of this socket.\nReturns the local socket address of this listener.\nReturns the socket address of the local half of this …\nGets the value of the <code>IP_MULTICAST_LOOP</code> option for this …\nGets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …\nGets the value of the <code>IP_MULTICAST_TTL</code> option for this …\nGets the value of the <code>TCP_NODELAY</code> option on this socket.\nGet the value of the <code>IPV6_V6ONLY</code> option on this socket.\nCreate an unnamed pair of connected sockets.\nCreates an unnamed pair of connected sockets.\nReceives data on the socket from the remote address to …\nReceives data from the socket, without removing it from …\nReceives data from the socket, without removing it from …\nReturns the socket address of the remote peer of this TCP …\nReturns the socket address of the remote peer this socket …\nReturns the address of this socket’s peer.\nReturns the socket address of the remote half of this …\nReceives data from the socket previously bound with …\nReceives data from the socket.\nReceives data from the socket. On success, returns the …\nReceives data from the socket.\nSends data on the socket to the address previously bound …\nSends data on the socket to the socket’s peer.\nSends data on the socket to the given address. On success, …\nSends data on the socket to the specified address.\nSets the value of the <code>SO_BROADCAST</code> option for this socket.\nSets the value of the <code>IP_MULTICAST_LOOP</code> option for this …\nSets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …\nSets the value of the <code>IP_MULTICAST_TTL</code> option for this …\nSets the value of the <code>TCP_NODELAY</code> option on this socket.\nSets the value for the <code>IP_TTL</code> option on this socket.\nSets the value for the <code>IP_TTL</code> option on this socket.\nSets the value for the <code>IP_TTL</code> option on this socket.\nShuts down the read, write, or both halves of this …\nShut down the read, write, or both halves of this …\nShuts down the read, write, or both halves of this …\nGet the value of the <code>SO_ERROR</code> option on this socket.\nGet the value of the <code>SO_ERROR</code> option on this socket.\nGet the value of the <code>SO_ERROR</code> option on this socket.\nReturns the value of the <code>SO_ERROR</code> option.\nReturns the value of the <code>SO_ERROR</code> option.\nReturns the value of the <code>SO_ERROR</code> option.\nExecute an I/O operation ensuring that the socket receives …\nExecute an I/O operation ensuring that the socket receives …\nExecute an I/O operation ensuring that the socket receives …\nExecute an I/O operation ensuring that the socket receives …\nGets the value of the <code>IP_TTL</code> option for this socket.\nGets the value of the <code>IP_TTL</code> option for this socket.\nGets the value of the <code>IP_TTL</code> option for this socket.\nCreates a Unix Datagram socket which is not bound to any …\nAdapter for <code>RawFd</code> providing an <code>event::Source</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUnix pipe.\nReceiving end of an Unix pipe.\nSending end of an Unix pipe.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new non-blocking Unix pipe.\nSet the <code>Sender</code> into or out of non-blocking mode.\nSet the <code>Receiver</code> into or out of non-blocking mode.\nExecute an I/O operation ensuring that the socket receives …\nExecute an I/O operation ensuring that the socket receives …")