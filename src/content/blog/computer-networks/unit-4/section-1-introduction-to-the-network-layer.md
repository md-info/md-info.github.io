---
title: "Section 1 Introduction to the Network Layer"
description: "Computer Networks study notes · Unit 4"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 4"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document for Exam Prep
## Section 4.1: Overview of the Network Layer

---

**Question 1:** What is the network layer?

**Answer:** The network layer is the layer in the Internet protocol stack responsible for host-to-host communication. It transports segments from a sending host to a receiving host by encapsulating them into datagrams and delivering those datagrams to the destination host. The network layer is critically important because it is the layer that enables any two hosts on the Internet to communicate with each other, regardless of their physical locations or the paths that exist between them.

---

**Question 2:** What are the two important network-layer functions?

**Answer:** The two important network-layer functions are forwarding and routing. Forwarding is the action of moving a packet from a router's input link to the appropriate output link. Routing is the network-wide process that determines the end-to-end path that packets take from source to destination. Together, these two functions enable the network layer to deliver packets across an interconnected network of routers.

---

**Question 3:** What does forwarding do for a router?

**Answer:** Forwarding is the action performed by a router when it moves an arriving packet from an input link to the appropriate output link. When a packet arrives at a router's input port, the router examines the packet's header, specifically the destination address, and consults its forwarding table to determine which output link the packet should be directed to. Forwarding is a local, per-router action that occurs in the data plane. It is sometimes called "switching" because the router switches the packet from an input port to an output port.

---

**Question 4:** What does routing do for an interconnected network?

**Answer:** Routing is the network-wide process that determines the end-to-end path that packets take from a source host to a destination host as they traverse the network of routers. Routing algorithms running in the control plane compute the routes and populate the forwarding tables that routers use to forward packets. Routing ensures that packets can find their way through the interconnected network of routers to reach their final destination. Without routing, routers would not know in which direction to forward packets.

---

**Question 5:** What is the difference between the data plane and the control plane?

**Answer:** The data plane is the local, per-router function that determines how a datagram arriving on one of a router's input links is forwarded to one of the router's output links. The control plane is the network-wide logic that determines how a datagram is routed among routers along the end-to-end path from source host to destination host. The data plane operates at the level of individual packets and individual routers, while the control plane operates at the network level and coordinates the behavior of all routers. The data plane is concerned with the actual forwarding of packets, while the control plane is concerned with the computation of routes and the configuration of forwarding tables.

---

**Question 6:** Why were networks divided into the data plane and the control plane?

**Answer:** Networks were divided into the data plane and the control plane to separate the local, high-speed, per-packet forwarding function from the network-wide, slower, route computation function. This separation allows each plane to be designed, implemented, and optimized independently. The data plane can be implemented in specialized hardware for high-speed forwarding, while the control plane can be implemented in software and can run sophisticated routing algorithms. This division also enables software-defined networking, in which the control plane is implemented in a remote controller that manages the forwarding tables of many routers, giving network operators greater flexibility and programmability.

---

**Question 7:** What is the primary role of the data plane in the network layer?

**Answer:** The primary role of the data plane in the network layer is to forward packets from an input link to the appropriate output link within a router. The data plane performs the actual movement of packets through the router, using the forwarding table to determine the correct output port for each packet. The data plane operates on a per-packet basis and must do so at extremely high speeds, often in hardware, to keep up with the line rates of the router's links. The data plane is responsible for the local forwarding decision that determines how each individual packet is handled.

---

**Question 8:** What is the primary role of the control plane of the network layer?

**Answer:** The primary role of the control plane of the network layer is to determine the routes that packets take from source to destination through the network of routers. The control plane runs routing algorithms that compute the least-cost paths between all pairs of routers and uses this information to populate the forwarding tables in the data plane. The control plane is responsible for the network-wide logic that coordinates the behavior of all routers, ensuring that packets can be forwarded along consistent end-to-end paths. The control plane can be implemented either in the routers themselves, as in traditional routing, or in a remote controller, as in software-defined networking.

---

**Question 9:** What is a forwarding table?

**Answer:** A forwarding table is a data structure stored in a router that the router uses to determine the appropriate output link for each arriving packet. The forwarding table contains entries that map destination addresses or prefixes to output links. When a packet arrives at a router, the router extracts the destination address from the packet's header and searches the forwarding table for the matching entry. The forwarding table is populated by the control plane, either through routing algorithms running in the routers or through a remote controller in software-defined networking. The forwarding table is the key tool that enables the data plane to make forwarding decisions.

---

**Question 10:** What is software-defined networking?

**Answer:** Software-defined networking, abbreviated SDN, is a network architecture in which the control plane is implemented in a remote controller that manages the forwarding tables of many routers. In SDN, the controller computes the routes and determines the forwarding tables for all routers in the network, and then communicates these tables to the routers. The routers then perform only the data plane function of forwarding packets according to their tables. SDN separates the control plane from the data plane and centralizes the control plane in a remote controller, giving network operators greater flexibility, programmability, and centralized control over the network's behavior.

---

**Question 11:** What is the network layer service model?

**Answer:** The network layer service model defines the characteristics of the end-to-end transport of packets between sending and receiving hosts. The service model specifies what services the network layer provides to the transport layer above it, such as guaranteed delivery, guaranteed delivery with bounded delay, in-order packet delivery, guaranteed minimal bandwidth, guaranteed maximum jitter, and security services. The service model also specifies the relationship between the network layer and the layers below and above it in the Internet protocol stack. Different network architectures may provide different service models, ranging from best-effort service to guaranteed quality-of-service guarantees.

---

**Question 12:** What services are provided by network layer protocols?

**Answer:** Network layer protocols can provide a range of services, including guaranteed delivery, which ensures that a packet will eventually arrive at its destination; guaranteed delivery with bounded delay, which ensures that a packet will arrive within a specified time limit; in-order packet delivery, which ensures that packets arrive in the same order in which they were sent; guaranteed minimal bandwidth, which ensures that a certain minimum transmission rate is available; guaranteed maximum jitter, which limits the variation in packet arrival times; and security services, which provide confidentiality, authentication, and integrity. The Internet's network layer provides only a best-effort service, while other network architectures such as ATM provide more extensive guarantees.

---

**Question 13:** What is guaranteed delivery?

**Answer:** Guaranteed delivery is a network layer service that ensures a packet sent by a source host will eventually arrive at its destination host. This service provides assurance that no packet will be lost or dropped due to network congestion, buffer overflow, or other network failures. Guaranteed delivery is a strong service guarantee that requires the network to have mechanisms for detecting and recovering from packet loss, such as acknowledgments and retransmissions. The Internet's network layer does not provide guaranteed delivery; it provides only best-effort service, in which packets may be lost.

---

**Question 14:** What is guaranteed delivery with bounded delay?

**Answer:** Guaranteed delivery with bounded delay is a network layer service that ensures a packet will not only eventually arrive at its destination but will also arrive within a specified maximum delay. This service provides a bound on the end-to-end delay that a packet can experience, which is important for real-time applications such as voice and video that require timely delivery. Guaranteed delivery with bounded delay is a stronger guarantee than simple guaranteed delivery because it imposes a time constraint in addition to the delivery guarantee. This service is not provided by the Internet's network layer.

---

**Question 15:** What is in-order packet delivery?

**Answer:** In-order packet delivery is a network layer service that ensures packets arrive at the destination in the same order in which they were sent by the source. This service is important for applications that require the data stream to be delivered in sequence, such as file transfers and streaming media. In-order delivery simplifies the design of the transport layer and the application layer because they do not need to reorder packets that arrive out of sequence. The Internet's network layer does not guarantee in-order delivery; packets may arrive out of order and must be reordered by the transport layer if necessary.

---

**Question 16:** What is guaranteed minimal bandwidth?

**Answer:** Guaranteed minimal bandwidth is a network layer service that ensures a certain minimum transmission rate is available to a flow of packets. This service is important for applications that require a certain amount of bandwidth to function properly, such as streaming video or voice over IP. Guaranteed minimal bandwidth provides assurance that the network will allocate at least a specified amount of bandwidth to the flow, regardless of the level of congestion in the network. This service is not provided by the Internet's network layer, which provides only best-effort service with no bandwidth guarantees.

---

**Question 17:** What is guaranteed maximum jitter?

**Answer:** Guaranteed maximum jitter is a network layer service that limits the variation in the delay experienced by packets in a flow. Jitter is the difference in end-to-end delay between consecutive packets, and excessive jitter can cause problems for real-time applications such as voice and video. Guaranteed maximum jitter provides assurance that the variation in delay will not exceed a specified maximum, which helps ensure smooth and consistent delivery of real-time media. This service is not provided by the Internet's network layer.

---

**Question 18:** What is a security service in the context of the network layer?

**Answer:** A security service in the context of the network layer provides confidentiality, authentication, and integrity for packets transmitted across the network. Confidentiality ensures that the contents of packets cannot be read by unauthorized parties. Authentication ensures that the source of a packet is who it claims to be. Integrity ensures that the contents of a packet have not been altered during transmission. Security services are important for protecting sensitive information and preventing attacks such as eavesdropping, spoofing, and tampering. The Internet's network layer does not provide security services by default, but security can be added through protocols such as IPsec.

---

**Question 19:** What is best-effort service?

**Answer:** Best-effort service is the network layer service model provided by the Internet. In best-effort service, the network makes a best-effort attempt to deliver packets to their destination, but provides no guarantees regarding delivery, delay, order, bandwidth, or jitter. Packets may be lost, may arrive out of order, may experience varying delays, and may be delivered at varying rates. Best-effort service is simple and scalable, which has contributed to the Internet's success, but it is not suitable for applications that require strict quality-of-service guarantees. Applications that need stronger guarantees must implement them at higher layers or use techniques such as buffering and retransmission.

---

**Question 20:** What is a virtual-circuit network?

**Answer:** A virtual-circuit network is a network architecture in which a path between a source and destination host is established before any packets are sent, and all packets between the two hosts follow the same path. The path is called a virtual circuit because it behaves like a dedicated circuit between the two hosts, even though it is implemented using packet switching. Virtual-circuit networks provide a connection-oriented service, in which a connection must be set up before data can be transferred and torn down after the transfer is complete. Asynchronous Transfer Mode, or ATM, is an example of a virtual-circuit network architecture.

---

**Question 21:** What is the virtual-circuit network service model?

**Answer:** The virtual-circuit network service model is a connection-oriented service model in which a virtual circuit must be established between the source and destination hosts before any packets can be sent. The virtual circuit is identified by a virtual circuit identifier, or VCI, which is carried in the header of each packet. All packets belonging to the same virtual circuit follow the same path through the network, and the routers along the path maintain state information about the virtual circuit. The virtual-circuit service model provides guarantees such as guaranteed delivery, in-order delivery, and guaranteed bandwidth, depending on the specific network architecture.

---

**Question 22:** What are the three identifiable phases in a virtual circuit?

**Answer:** The three identifiable phases in a virtual circuit are virtual-circuit setup, data transfer, and virtual-circuit teardown. During virtual-circuit setup, the source host sends a setup message to the network, and the network establishes the virtual circuit by allocating resources and configuring the routers along the path. During data transfer, packets are sent along the established virtual circuit, and each packet carries the virtual circuit identifier in its header. During virtual-circuit teardown, the source or destination host informs the network that the virtual circuit is no longer needed, and the network releases the resources allocated to the virtual circuit.

---

**Question 23:** What is the datagram network service model?

**Answer:** The datagram network service model is a connectionless service model in which no connection setup is required before packets are sent. Each packet, called a datagram, is treated independently and is forwarded through the network based on its destination address. Different datagrams between the same pair of hosts may follow different paths through the network. Routers do not maintain state information about connections; they simply forward each datagram according to their forwarding tables. The Internet's network layer uses the datagram service model and provides best-effort service.

---

**Question 24:** What is the constant bit rate network service model for ATM networks?

**Answer:** The constant bit rate service model, abbreviated CBR, is an ATM network service model that provides a fixed transmission rate for the duration of a connection. CBR is designed for applications that require a steady, predictable flow of data, such as voice telephony and real-time video. With CBR, the network guarantees a constant bandwidth and bounded delay and jitter, making it suitable for real-time applications that cannot tolerate variation in transmission rate. CBR is one of several service models defined for ATM networks, and it provides the strongest quality-of-service guarantees.

---

**Question 25:** What is the unspecified bit rate network service model for ATM networks?

**Answer:** The unspecified bit rate service model, abbreviated UBR, is an ATM network service model that provides best-effort service with no guarantees regarding bandwidth, delay, or jitter. UBR is similar to the Internet's best-effort service model in that it makes no promises about the quality of service provided to the connection. UBR is suitable for applications that can tolerate variable delays and packet loss, such as file transfers and web browsing. UBR is the simplest and least expensive ATM service model.

---

**Question 26:** What is the variable bit rate network service model for ATM networks?

**Answer:** The variable bit rate service model, abbreviated VBR, is an ATM network service model that provides guarantees on bandwidth, delay, and jitter while allowing the transmission rate to vary over time. VBR is designed for applications that have variable transmission rates but still require quality-of-service guarantees, such as compressed video and multimedia applications. VBR comes in two forms: real-time VBR, which provides guarantees on delay and jitter for real-time applications, and non-real-time VBR, which provides guarantees on bandwidth for applications that can tolerate some delay. VBR provides a middle ground between the strict guarantees of CBR and the no-guarantee service of UBR.

---

**Question 27:** What are the origins of the datagram and virtual-circuit service models?

**Answer:** The datagram and virtual-circuit service models originated from different approaches to network design. The datagram service model originated from the design of the Internet, which was built on the principle of a simple, connectionless network layer that provides best-effort service. The virtual-circuit service model originated from the design of telephone networks, which established a dedicated circuit between two parties before communication began. ATM networks adopted the virtual-circuit model to provide quality-of-service guarantees for multimedia applications. The two models represent fundamentally different approaches to providing network services, with the datagram model emphasizing simplicity and scalability and the virtual-circuit model emphasizing quality-of-service guarantees.

---

**Question 28:** What functions does an input port on a router perform?

**Answer:** An input port on a router performs several functions. First, it terminates the incoming physical link, converting the optical or electrical signals into digital data. Second, it performs link-layer processing, such as framing and error detection. Third, it performs lookup and forwarding, using the forwarding table to determine the appropriate output port for each arriving packet. Fourth, it may perform queuing if packets arrive faster than they can be forwarded. Fifth, it may perform header processing, such as decrementing the time-to-live field. The input port is the entry point for packets entering the router and is responsible for directing them to the switching fabric.

---

**Question 29:** In detail, what does the switching fabric do in a router?

**Answer:** The switching fabric in a router connects the router's input ports to its output ports and is responsible for moving packets from an input port to the appropriate output port. The switching fabric is the core of the router and determines the router's overall switching capacity. It must be capable of moving packets at high speeds to keep up with the line rates of the router's links. The switching fabric can be implemented in several ways, including switching via memory, switching via a bus, and switching via an interconnection network. The switching fabric must handle contention when multiple packets arrive simultaneously and need to be forwarded to the same output port.

---

**Question 30:** How does switching via memory work?

**Answer:** Switching via memory is the simplest and earliest method of implementing a switching fabric in a router. In switching via memory, the input port stores the arriving packet in memory and then notifies the central processor. The processor extracts the destination address from the packet's header, looks up the forwarding table to determine the appropriate output port, and copies the packet to the output port's buffer. Switching via memory is limited by the memory bandwidth, which must be at least twice the line rate to allow a packet to be written to memory and read from memory simultaneously. This method is suitable for low-speed routers but does not scale to high-speed routers.

---

**Question 31:** How does switching via a bus work?

**Answer:** Switching via a bus is a method of implementing a switching fabric in which the input ports and output ports are connected by a shared bus. When a packet arrives at an input port, the input port places the packet on the bus, and all output ports receive the packet. The output port for which the packet is destined accepts the packet, while the other output ports ignore it. The packet's header includes a label that identifies the appropriate output port. Switching via a bus is limited by the bus bandwidth, which must be sufficient to handle all the traffic passing through the router. Only one packet can be transferred across the bus at a time, so the bus can become a bottleneck in high-speed routers.

---

**Question 32:** How does switching via an interconnection network work?

**Answer:** Switching via an interconnection network is a method of implementing a switching fabric in which the input ports and output ports are connected by a network of switches, such as a crossbar switch or a multistage switch. The interconnection network can establish multiple simultaneous paths between input ports and output ports, allowing multiple packets to be transferred at the same time. A crossbar switch is a grid of switches that can connect any input port to any output port, but the number of switches grows as the square of the number of ports. A multistage switch uses multiple stages of smaller switches to reduce the number of switches required. Switching via an interconnection network can achieve very high speeds and is used in high-performance routers.

---

**Question 33:** What does an output port on a router do?

**Answer:** An output port on a router performs several functions. First, it receives packets from the switching fabric and stores them in a buffer. Second, it performs queuing, managing the buffer to hold packets until they can be transmitted. Third, it performs link-layer processing, such as framing and error detection. Fourth, it terminates the outgoing physical link, converting the digital data into optical or electrical signals for transmission. The output port is the exit point for packets leaving the router and is responsible for transmitting them onto the outgoing link.

---

**Question 34:** What does the router processor do for a router?

**Answer:** The router processor performs several functions in a router. In traditional routers, the processor runs the routing protocols that compute the routes and populate the forwarding table. It also performs network management functions, such as responding to management queries and configuring the router. In software-defined networking, the router processor may communicate with a remote controller to receive the forwarding table. The router processor also handles exception cases, such as packets that cannot be forwarded by the data plane and must be handled by software. The processor is responsible for the control plane functions of the router.

---

**Question 35:** What is an SDN router?

**Answer:** An SDN router is a router designed for software-defined networking. Unlike traditional routers, which run routing protocols and compute their own forwarding tables, SDN routers receive their forwarding tables from a remote controller. The SDN router performs only the data plane function of forwarding packets according to the table provided by the controller. The controller, which is implemented in software on a remote server, computes the routes and determines the forwarding tables for all routers in the network. SDN routers are simpler than traditional routers because they do not need to run routing protocols, and they give network operators centralized control over the network's behavior.

---

**Question 36:** Destination-based forwarding is easy to understand. What is the rationale for generalized forwarding on a router?

**Answer:** Generalized forwarding is a forwarding method in which the router makes forwarding decisions based on multiple fields in the packet header, not just the destination address. The rationale for generalized forwarding is that it enables more flexible and sophisticated network policies. For example, a router could forward packets based on the source address, the destination address, the type of traffic, or other criteria. Generalized forwarding is used in software-defined networking, where the controller can program the router to forward packets according to a wide range of policies. Generalized forwarding enables network operators to implement firewalls, load balancers, and other middleboxes using the router itself, rather than requiring separate specialized hardware.

---

**Question 37:** What critical questions do router and switch designers face?

**Answer:** Router and switch designers face several critical questions. First, how can the router forward packets at high speed to keep up with the line rates of its links? Second, how can the router handle contention when multiple packets arrive simultaneously and need to be forwarded to the same output port? Third, how can the router buffer packets effectively to absorb bursts of traffic and minimize packet loss? Fourth, how can the router implement quality-of-service guarantees to provide different levels of service to different flows? Fifth, how can the router scale to support large numbers of ports and high line rates? These questions drive the design of the switching fabric, the buffering strategy, and the scheduling algorithms used in routers.

---

**Question 38:** What is prefix matching in the context of looking up a forwarding table to decide the destination of a packet?

**Answer:** Prefix matching is a technique used in forwarding table lookup in which the router matches the destination address of a packet against prefixes stored in the forwarding table. A prefix is the initial portion of an address, such as the first 24 bits of a 32-bit IP address. The forwarding table contains entries that map prefixes to output links. When a packet arrives, the router extracts the destination address and searches the forwarding table for the longest prefix that matches the destination address. The router then forwards the packet to the output link associated with that prefix. Prefix matching allows the forwarding table to be compact, because a single entry can represent a large range of addresses.

---

**Question 39:** What is the longest prefix matching rule?

**Answer:** The longest prefix matching rule is a rule used in forwarding table lookup that specifies that when multiple prefixes in the forwarding table match the destination address of a packet, the router should use the prefix with the longest length, that is, the most specific prefix. For example, if the forwarding table contains entries for the prefixes 128.16.0.0/16 and 128.16.8.0/24, and the destination address is 128.16.8.5, the router should use the /24 prefix because it is longer and more specific. The longest prefix matching rule allows the forwarding table to contain entries for both large ranges of addresses and smaller subranges, with the more specific entries taking precedence.

---

**Question 40:** Where does queuing occur inside a router?

**Answer:** Queuing occurs at both the input ports and the output ports of a router. At the input port, queuing occurs when packets arrive faster than they can be forwarded through the switching fabric. This can happen when multiple input ports are trying to send packets to the same output port at the same time, a situation known as head-of-line blocking. At the output port, queuing occurs when packets arrive from the switching fabric faster than they can be transmitted on the outgoing link. The output port buffer holds the packets until the link becomes available. The amount of buffering and the scheduling algorithm used determine the delay and loss characteristics of the router.

---

**Question 41:** When does packet loss occur in a router?

**Answer:** Packet loss occurs in a router when a packet arrives at a router's input or output port and there is no buffer space available to store it. This can happen when the arrival rate of packets exceeds the transmission rate of the link and the buffer fills up. When the buffer is full, the router must drop incoming packets, resulting in packet loss. Packet loss can also occur due to errors in transmission or due to the time-to-live field in the packet header expiring. In the Internet's best-effort service model, packet loss is an accepted part of normal operation, and higher-layer protocols such as TCP are responsible for detecting and recovering from lost packets.

---

**Question 42:** What is head-of-line blocking?

**Answer:** Head-of-line blocking is a phenomenon that occurs in a router's input port when a packet at the head of the input queue is waiting to be forwarded to an output port that is currently busy, while other packets behind it in the queue are waiting to be forwarded to different output ports that are available. Because the first packet cannot be forwarded, the packets behind it must also wait, even though they could be forwarded. Head-of-line blocking reduces the throughput of the router because it prevents packets from being forwarded to available output ports. It can be mitigated by using a virtual output queue, in which each input port maintains a separate queue for each output port.

---

**Question 43:** What is the relationship between the network layer and the transport layer?

**Answer:** The network layer provides services to the transport layer above it. The transport layer passes segments down to the network layer, which encapsulates them into datagrams and delivers them to the destination host. The network layer's service model determines what guarantees the transport layer can rely on. For example, if the network layer provides guaranteed delivery, the transport layer does not need to implement retransmission. If the network layer provides only best-effort service, as in the Internet, the transport layer must implement its own mechanisms for reliability, ordering, and congestion control. The transport layer runs on the end hosts, while the network layer runs on both the end hosts and the routers.

---

**Question 44:** What is the relationship between the network layer and the link layer?

**Answer:** The network layer relies on the link layer below it to transmit datagrams across individual links. The network layer passes datagrams down to the link layer, which encapsulates them into frames and transmits them across the physical link. The link layer provides services such as framing, error detection, and medium access control. The network layer's service model is independent of the link layer's characteristics, but the performance of the network layer depends on the link layer's reliability and speed. The network layer operates on a host-to-host basis, while the link layer operates on a link-by-link basis. Routers implement both the network layer and the link layer, while hosts implement all layers of the protocol stack.

---

**Question 45:** What is the difference between a link-layer switch and a router?

**Answer:** A link-layer switch operates at the link layer of the protocol stack and forwards frames based on link-layer addresses, such as MAC addresses. A router operates at the network layer and forwards packets based on network-layer addresses, such as IP addresses. Link-layer switches are used to connect hosts within a single network, while routers are used to connect different networks together. Link-layer switches do not modify the network-layer header of the packets they forward, while routers decrement the time-to-live field and may perform other network-layer processing. Link-layer switches are transparent to the network layer, while routers are active participants in the network layer.

---

**Question 46:** What is connection setup in the context of the network layer?

**Answer:** Connection setup is a function that some network architectures provide at the network layer, in which a connection is established between the source and destination hosts before any data is sent. During connection setup, the network allocates resources and configures the routers along the path to support the connection. Connection setup is used in virtual-circuit networks, such as ATM, but is not used in the Internet's datagram network. In the Internet, connection setup is performed at the transport layer by protocols such as TCP, not at the network layer. The network layer's connectionless service model means that routers do not need to maintain state information about connections.

---

**Question 47:** What is the ATM network architecture?

**Answer:** ATM, which stands for Asynchronous Transfer Mode, is a network architecture that uses virtual circuits and fixed-size packets called cells. ATM was designed to provide quality-of-service guarantees for multimedia applications, including voice, video, and data. ATM defines several service models, including constant bit rate, variable bit rate, available bit rate, and unspecified bit rate. ATM uses a connection-oriented service model in which a virtual circuit must be established before data can be sent. ATM was widely deployed in the 1990s and early 2000s but has largely been replaced by Ethernet and IP-based networks.

---

**Question 48:** What is the available bit rate ATM network service?

**Answer:** The available bit rate service, abbreviated ABR, is an ATM network service model that provides a minimum guaranteed bandwidth and allows the source to use additional bandwidth when it is available. ABR is designed for applications that can adapt their transmission rate to the available bandwidth, such as file transfers and web browsing. With ABR, the network provides feedback to the source about the available bandwidth, and the source adjusts its transmission rate accordingly. ABR provides a compromise between the strict guarantees of CBR and VBR and the no-guarantee service of UBR.

---

**Question 49:** What is the relationship between the network service model and the layers below and above it in the Internet protocol stack?

**Answer:** The network service model defines the services that the network layer provides to the transport layer above it and the assumptions it makes about the link layer below it. The transport layer relies on the network layer to deliver segments to the destination host, and the network service model determines what guarantees the transport layer can expect. The link layer provides the physical transmission of datagrams across individual links, and the network service model is independent of the link layer's characteristics. The network service model is a key part of the Internet architecture because it determines the division of responsibility between the network layer and the transport layer.

---

**Question 50:** What are the key differences between virtual-circuit networks and datagram networks?

**Answer:** The key differences between virtual-circuit networks and datagram networks are as follows. First, virtual-circuit networks require connection setup before data can be sent, while datagram networks do not. Second, virtual-circuit networks maintain state information about connections in the routers, while datagram networks do not. Third, virtual-circuit networks ensure that all packets belonging to a connection follow the same path, while datagram networks may route different packets along different paths. Fourth, virtual-circuit networks can provide quality-of-service guarantees, while datagram networks typically provide only best-effort service. Fifth, virtual-circuit networks use virtual circuit identifiers in packet headers, while datagram networks use destination addresses. The Internet uses the datagram model, while ATM uses the virtual-circuit model.

---

**Question 51:** What is the role of the forwarding table in the data plane?

**Answer:** The forwarding table is the key data structure that enables the data plane to make forwarding decisions. When a packet arrives at a router's input port, the router extracts the destination address from the packet's header and searches the forwarding table for a matching entry. The forwarding table maps destination prefixes to output links, and the router uses the longest prefix matching rule to select the most specific matching entry. The forwarding table is populated by the control plane, either through routing protocols running in the routers or through a remote controller in software-defined networking. Without the forwarding table, the router would not know how to forward packets.

---

**Question 52:** What is the role of the control plane in software-defined networking?

**Answer:** In software-defined networking, the control plane is implemented in a remote controller that manages the forwarding tables of many routers. The controller runs routing algorithms to compute the routes and determines the forwarding tables for all routers in the network. The controller then communicates these tables to the routers, which perform only the data plane function of forwarding packets. The controller has a global view of the network and can make centralized decisions about routing, traffic engineering, and network policy. SDN gives network operators greater flexibility and programmability by separating the control plane from the data plane and centralizing it in software.

---

**Question 53:** What are the advantages of the datagram network service model?

**Answer:** The datagram network service model has several advantages. First, it is simple, because routers do not need to maintain state information about connections. Second, it is scalable, because the network can grow without requiring additional state in the routers. Third, it is robust, because routers can adapt to failures by routing packets along alternative paths. Fourth, it is flexible, because it can support a wide range of applications with different requirements. Fifth, it is efficient, because it does not require connection setup and teardown, which would add overhead. These advantages have contributed to the success of the Internet, which uses the datagram service model.

---

**Question 54:** What are the disadvantages of the datagram network service model?

**Answer:** The datagram network service model has several disadvantages. First, it provides only best-effort service, with no guarantees regarding delivery, delay, order, bandwidth, or jitter. Second, it may deliver packets out of order, requiring the transport layer to reorder them. Third, it may lose packets, requiring the transport layer to detect and recover from losses. Fourth, it may deliver packets with varying delays, which can be problematic for real-time applications. Fifth, it does not provide quality-of-service guarantees, making it difficult to support applications that require strict performance guarantees. These disadvantages are mitigated by higher-layer protocols such as TCP, which provide reliability and ordering.

---

**Question 55:** What are the advantages of the virtual-circuit network service model?

**Answer:** The virtual-circuit network service model has several advantages. First, it can provide quality-of-service guarantees, including guaranteed delivery, in-order delivery, guaranteed bandwidth, and bounded delay and jitter. Second, it can reserve resources along the path, ensuring that the connection has the resources it needs. Third, it can provide a consistent path for all packets in a connection, simplifying the management of the connection. Fourth, it can support real-time applications that require strict performance guarantees. These advantages make virtual-circuit networks suitable for applications such as voice and video that cannot tolerate the variability of best-effort service.

---

**Question 56:** What are the disadvantages of the virtual-circuit network service model?

**Answer:** The virtual-circuit network service model has several disadvantages. First, it requires connection setup before data can be sent, which adds delay and overhead. Second, it requires routers to maintain state information about connections, which limits scalability. Third, it is less robust than the datagram model, because a failure along the path can disrupt the connection. Fourth, it is more complex to implement, because it requires signaling protocols for connection setup and teardown. Fifth, it may waste resources if the connection is idle, because resources are reserved for the duration of the connection. These disadvantages have limited the adoption of virtual-circuit networks in the Internet.

---

**Question 57:** How does the network layer handle congestion?

**Answer:** The network layer handles congestion through a combination of mechanisms, including buffering, scheduling, and congestion control. Buffering allows routers to absorb bursts of traffic and smooth out variations in arrival rates. Scheduling algorithms determine the order in which packets are transmitted and can prioritize certain flows over others. Congestion control mechanisms, such as the congestion notification bit in IP, allow routers to signal congestion to end hosts, which can then reduce their transmission rates. In the Internet, congestion control is primarily implemented at the transport layer by TCP, while the network layer provides feedback through mechanisms such as explicit congestion notification.

---

**Question 58:** What is the time-to-live field in the network layer?

**Answer:** The time-to-live field, abbreviated TTL, is a field in the IP header that limits the lifetime of a packet in the network. Each router that forwards the packet decrements the TTL field by one. If the TTL field reaches zero, the router discards the packet and sends an error message back to the source. The TTL field prevents packets from circulating indefinitely in the network due to routing loops. It also limits the scope of multicast packets. The TTL field is an important part of the network layer's best-effort service model, as it ensures that packets do not persist in the network indefinitely.

---

**Question 59:** What is the difference between forwarding and routing?

**Answer:** Forwarding and routing are two distinct functions of the network layer. Forwarding is the local, per-router action of moving a packet from an input link to the appropriate output link. It is performed in the data plane and operates on a per-packet basis at high speed. Routing is the network-wide process of determining the end-to-end path that packets take from source to destination. It is performed in the control plane and operates on a network-wide basis, computing the routes that populate the forwarding tables. Forwarding is concerned with the actual movement of packets, while routing is concerned with the computation of the paths that packets follow. Together, they enable the network layer to deliver packets across an interconnected network.

---

**Question 60:** What is the significance of the network layer in the Internet protocol stack?

**Answer:** The network layer is significant in the Internet protocol stack because it is the layer that enables host-to-host communication across the global Internet. It provides the addressing and forwarding functions that allow any two hosts on the Internet to communicate with each other, regardless of their physical locations or the paths that exist between them. The network layer's datagram service model and best-effort service have contributed to the Internet's scalability, flexibility, and robustness. The network layer is also the layer at which the Internet's addressing architecture, including IP addresses and subnet masks, is implemented. Without the network layer, the Internet as we know it would not be possible.

---

This concludes the comprehensive Text-to-Speech Q&A document for Section 4.1: Overview of the Network Layer.