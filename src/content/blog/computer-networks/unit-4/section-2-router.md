---
title: "Section 2  Router"
description: "Computer Networks study notes · Unit 4"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 4"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document for Exam Prep
## Section 4.2: What's Inside a Router?

---

**Question 1:** What is a router?

**Answer:** A router is a device that forwards data packets along networks. It takes a packet arriving on one of its incoming communication links and forwards that packet on one of its outgoing communication links. Routers operate at Layer 3, the network layer, of the Internet protocol stack. They examine header fields in all IP datagrams passing through them and move datagrams from input ports to output ports to transfer datagrams along end-to-end paths. Routers are located at gateways, the places where two or more networks connect, and they normally connect LANs and WANs together.

---

**Question 2:** What are routers used for?

**Answer:** Routers are used to connect different networks together and to forward packets between them. They route and forward data packets based on their IP addresses. Routers have dynamically updating routing tables based on which they make decisions on routing the incoming packets. They are essential for the Internet to work because they enable communication between hosts on different networks by determining the path that packets take from source to destination. Without routers, the global Internet, which consists of millions of interconnected networks, would not be possible.

---

**Question 3:** Why are routers very important for the Internet to work?

**Answer:** Routers are very important for the Internet to work because they are the devices that connect different networks together and forward packets between them. The Internet is a network of networks, and routers are the glue that holds these networks together. Routers examine the destination address of each packet and use their forwarding tables to determine the appropriate output link. They also run routing protocols that compute the paths through the network, ensuring that packets can find their way from any source to any destination. Without routers, packets would not be able to travel beyond their local network, and the global Internet as we know it would not exist.

---

**Question 4:** What is inside a router?

**Answer:** A router consists of four principal components: input ports, a switching fabric, output ports, and a routing processor. The input ports perform physical and link-layer functions and determine the output port for incoming packets. The switching fabric connects the input ports to the output ports. The output ports store packets received from the switching fabric and transmit them on the outgoing link. The routing processor performs control-plane functions, maintains routing tables and link state information, and computes the forwarding table.

---

**Question 5:** What do the input ports do?

**Answer:** Input ports in a router perform several functions. First, they implement physical-layer logic, terminating an incoming physical link. Second, they perform link-layer functions, such as receiving Ethernet frames. Third, they perform the lookup function, using header field values to look up the output port using the forwarding table in input port memory, a process known as "match plus action". The goal is to complete input port processing at line speed. Input port queuing occurs if datagrams arrive faster than the forwarding rate into the switch fabric.

---

**Question 6:** How does the switching fabric work inside a router?

**Answer:** The switching fabric connects the router's input ports to its output ports and is responsible for moving packets from an input port to the appropriate output port. It transfers packets from input buffers to the appropriate output buffers. The switching rate is the rate at which packets can be transferred from inputs to outputs, and with N inputs, a switching rate N times the line rate is desirable. The switching fabric is the core of the router and determines the router's overall switching capacity.

---

**Question 7:** What are the three different switching techniques?

**Answer:** The three major types of switching fabrics are switching via memory, switching via bus, and switching via an interconnection network. These three techniques represent the evolution of router switching technology from the earliest routers to modern high-performance routers.

---

**Question 8:** How does switching via memory work?

**Answer:** Switching via memory is the simplest and earliest method of switching. In this technique, the input and output ports function as traditional I/O devices in a traditional operating system. The input port sends an interrupt to the routing processor when a packet arrives, and the packet is copied into memory. The routing processor then extracts the destination address from the header, looks up the appropriate output port in the forwarding table, and copies the packet to the output port's buffers. The limitation of first-generation routers using this technique is that speed is limited by memory bandwidth.

---

**Question 9:** How does switching via a bus work?

**Answer:** In switching via a bus, the input port transfers a packet directly to the output port over a shared bus, without intervention by the routing processor. The input port puts an internal header onto the packet that designates the output port, and sends it to the shared bus. All output ports receive the packet, but only the designated one keeps it and removes the header. Because the bus is shared, only one packet at a time can be transferred over the bus, so the speed of the bus is the bottleneck.

---

**Question 10:** How does switching via an interconnection network work?

**Answer:** Switching via an interconnection network uses a crossbar switch or a multistage switch to connect input ports to output ports. A crossbar switch is an interconnection network consisting of 2n buses that connect n input ports to n output ports. This technique exploits parallelism by fragmenting datagrams into fixed-length cells on entry, switching cells through the fabric, and reassembling the datagram at exit. Multiple switching planes can be used in parallel to further scale the switching capacity. However, at high speeds, this comes with problems and limitations such as head-of-line blocking.

---

**Question 11:** What do the output ports do?

**Answer:** Output ports store packets received from the switching fabric and transmit these packets on the outgoing link by performing the necessary link-layer and physical-layer functions. When a link is bidirectional, an output port is typically paired with the input port for that link on the same line card. Output port queuing occurs when datagrams arrive from the fabric faster than the link transmission rate. Buffering is required in this case, and datagrams can be lost due to congestion and lack of buffers.

---

**Question 12:** Where does queuing occur in a router?

**Answer:** Queuing occurs at both input ports and output ports in a router. Input port queuing occurs if datagrams arrive faster than the forwarding rate into the switch fabric, which can cause queueing delay and loss due to input buffer overflow. Output port queuing occurs when datagrams arrive from the fabric faster than the link transmission rate, causing queueing delay and loss due to output port buffer overflow. Buffer management and scheduling disciplines determine how queued packets are handled.

---

**Question 13:** How do routing protocols deal with packet queuing?

**Answer:** Routing protocols such as RIP, OSPF, and BGP are used to determine the routes that packets take through the network. These protocols populate the forwarding tables that routers use to make forwarding decisions. While routing protocols themselves do not directly manage packet queuing, the routes they compute affect the traffic patterns that lead to queuing. By computing efficient routes, routing protocols can help distribute traffic across the network and reduce congestion. At the router level, buffer management and packet scheduling policies determine how queuing is handled.

---

**Question 14:** What is a gateway router?

**Answer:** A gateway router is a router that connects an autonomous system to other autonomous systems. In the context of the Internet, a gateway router is the router through which packets enter and leave an autonomous system. It is the boundary router that handles inter-autonomous system routing. Gateway routers run both intra-AS routing protocols and the inter-AS routing protocol, BGP, to exchange routing information with other autonomous systems. A default gateway, in simpler terms, is the "exit door" a device uses to reach the rest of the internet.

---

**Question 15:** What are the fundamental differences between a router and a link-layer switch?

**Answer:** The fundamental difference between a router and a link-layer switch is the layer at which they operate. Switches operate at Layer 2, the data link layer, using MAC addresses to forward data within a local network. Routers operate at Layer 3, the network layer, using IP addresses to forward data across different networks. A link-layer switch is a multi-port network bridge that uses MAC addresses, while a router is a device that routes and forwards data packets based on their IP addresses and connects LANs and WANs together. Routers examine IP headers, while switches examine frame headers.

---

**Question 16:** What is the intra-autonomous routing protocol?

**Answer:** The intra-autonomous system routing protocol is the routing algorithm running within an autonomous system. Routers within the same AS all run the same routing algorithm and have information about each other. Interior gateway protocols are used for intra-autonomous system routing, which is routing inside an autonomous system. When routing a packet between a source and destination within the same AS, the route the packet follows is entirely determined by the intra-AS routing protocol. Examples of intra-AS routing protocols include RIP and OSPF.

---

**Question 17:** What is the difference between a routing table and a forwarding table?

**Answer:** The routing table is maintained by the routing processor in the control plane and contains the routes computed by routing protocols. The forwarding table is derived from the routing table and is used by the input ports in the data plane to make per-packet forwarding decisions. The routing processor computes the forwarding table for the router. The forwarding table contains the mapping from destination prefixes to output links that the input ports use for the lookup function.

---

**Question 18:** What is the routing processor?

**Answer:** The routing processor performs control-plane functions in a router. In traditional routers, it executes the routing protocols, maintains routing tables and attached link state information, and computes the forwarding table for the router. The routing processor operates primarily in the control plane, distinguishing it from the input ports, switching fabric, and output ports, which operate primarily in the data plane. In software-defined networking, the routing processor may communicate with a remote controller instead of running routing protocols itself.

---

**Question 19:** What is an SDN router?

**Answer:** An SDN router is a router designed for software-defined networking. In SDN, a remote controller computes and installs forwarding tables in routers. The SDN router receives its forwarding table from the remote controller rather than computing it locally through routing protocols. This separates the control plane from the data plane, with the controller implementing the control plane functions in software on a remote server. SDN routers are simpler than traditional routers because they do not need to run routing protocols, and they give network operators centralized control.

---

**Question 20:** What is destination-based forwarding?

**Answer:** Destination-based forwarding is the traditional forwarding method in which the router forwards based only on the destination IP address. When a packet arrives, the router reads the destination IP address from the header and uses the forwarding table to determine the appropriate output port. This is the method used in traditional routers and is simple to implement. The lookup uses the longest prefix matching rule to find the most specific matching entry in the forwarding table.

---

**Question 21:** What is generalized forwarding?

**Answer:** Generalized forwarding is a forwarding method in which the router forwards based on any set of header field values, not just the destination IP address. This allows the router to make forwarding decisions based on source address, destination address, type of traffic, or other criteria. Generalized forwarding is used in software-defined networking, where the controller can program the router to forward packets according to a wide range of policies. It enables network operators to implement firewalls, load balancers, and other middleboxes using the router itself.

---

**Question 22:** What is the router forwarding plane?

**Answer:** The router forwarding plane, also called the data plane, is the local, per-router function that determines how a datagram arriving on a router input port is forwarded to a router output port. It operates on a per-packet basis and must do so at extremely high speeds. The forwarding plane includes the input ports, switching fabric, and output ports, which all operate primarily in the data plane. The forwarding plane performs the actual movement of packets through the router.

---

**Question 23:** What is the router control plane?

**Answer:** The router control plane is the network-wide logic that determines how a datagram is routed among routers along the end-to-end path from source host to destination host. It includes the routing processor, which performs control-plane functions. The control plane has two main approaches: traditional routing algorithms implemented in routers, and software-defined networking where a remote controller computes and installs forwarding tables. The control plane computes the routes that the forwarding plane uses to forward packets.

---

**Question 24:** What is packet loss at input ports?

**Answer:** Packet loss at input ports occurs when the input buffer overflows because datagrams arrive faster than the forwarding rate into the switch fabric. If the switch fabric is slower than the combined input ports, queueing may occur at input queues, leading to queueing delay and loss due to input buffer overflow. Head-of-line blocking can also contribute to input port packet loss by preventing packets from being forwarded to available output ports.

---

**Question 25:** What is packet loss at output ports?

**Answer:** Packet loss at output ports occurs when the output buffer overflows because datagrams arrive from the switching fabric faster than the link transmission rate. Datagrams can be lost due to congestion and lack of buffers. Buffer management policies, such as drop-tail or active queue management, determine which packets are dropped when the buffer is full. The amount of buffering and the scheduling discipline used determine the delay and loss characteristics of the output port.

---

**Question 26:** What is a packet scheduler?

**Answer:** A packet scheduler is the mechanism in a router's output port that chooses among queued datagrams for transmission. It decides which packet to send next on the link. Scheduling disciplines include first-come-first-served, also known as first-in-first-out, priority scheduling, round robin, and weighted fair queuing. The scheduling discipline determines the order in which packets are transmitted and can be used to provide quality-of-service guarantees and priority to certain traffic classes.

---

**Question 27:** What is first-come-first-served scheduling?

**Answer:** First-come-first-served, abbreviated FCFS, is a packet scheduling discipline in which packets are transmitted in the order of their arrival to the output port. It is also known as first-in-first-out, or FIFO. In FCFS, there is no prioritization among packets; the packet that arrived first is transmitted first. While simple to implement, FCFS does not provide any quality-of-service guarantees or differentiation among traffic classes.

---

**Question 28:** What is weighted fair queuing?

**Answer:** Weighted fair queuing, abbreviated WFQ, is a generalized round robin scheduling discipline in which each class or flow has a weight, and each class gets a weighted amount of service in each cycle. The weight determines the minimum bandwidth guarantee for each traffic class. WFQ provides a way to allocate bandwidth among different classes of traffic according to their weights, ensuring that each class receives at least its guaranteed share of the link capacity. It is used to provide quality-of-service guarantees and to implement fair bandwidth allocation.

---

**Question 29:** What are quality of service guarantees?

**Answer:** Quality of service guarantees are assurances about the performance characteristics of a network connection, such as guaranteed delivery, bounded delay, guaranteed bandwidth, and bounded jitter. In routers, quality of service guarantees can be provided through mechanisms such as priority scheduling, weighted fair queuing, and buffer management policies. These mechanisms allow the router to differentiate among traffic classes and provide different levels of service according to the requirements of each class. Quality of service guarantees are important for real-time applications such as voice and video.

---

**Question 30:** What is the drop-tail policy?

**Answer:** The drop-tail policy is a buffer management policy in which the router drops an arriving packet when the buffer is full. It is the simplest buffer management policy. When a packet arrives and there is no free buffer space, the packet is dropped. Drop-tail does not differentiate among packets and does not provide any mechanism for signaling congestion to the source before the buffer overflows.

---

**Question 31:** What is active queue management?

**Answer:** Active queue management, abbreviated AQM, is a class of buffer management policies that proactively manage the queue to prevent buffer overflow and to signal congestion to sources before the buffer becomes full. Unlike drop-tail, which waits until the buffer is full before dropping packets, AQM policies may drop or mark packets before the buffer is full to signal congestion. This allows sources to reduce their transmission rates before severe congestion occurs. AQM can improve network performance and reduce delay.

---

**Question 32:** What is random early detection?

**Answer:** Random early detection, abbreviated RED, is an active queue management policy. RED monitors the average queue length and randomly drops or marks packets when the average queue length exceeds a minimum threshold. As the average queue length increases toward a maximum threshold, the probability of dropping or marking packets increases. By randomly dropping packets before the buffer is full, RED signals congestion to sources and encourages them to reduce their transmission rates. RED helps prevent global synchronization of TCP flows and reduces average queueing delay.

---

**Question 33:** What is head-of-the-line blocking in an input-queued switch?

**Answer:** Head-of-the-line blocking, abbreviated HOL, occurs in an input-queued switch when a queued datagram at the front of the queue prevents others in the queue from moving forward. This happens when the packet at the head of the input queue is waiting to be forwarded to an output port that is currently busy, while other packets behind it in the queue are waiting to be forwarded to different output ports that are available. Because the first packet cannot be forwarded, the packets behind it must also wait, even though they could be forwarded. HOL blocking reduces the throughput of the router. It can be mitigated by using virtual output queues, in which each input port maintains a separate queue for each output port.

---

**Question 34:** What are routing control plane architectures and techniques?

**Answer:** There are two main control-plane architectures: traditional routing algorithms implemented in each router, and software-defined networking with a remote controller. In the traditional approach, individual routing algorithm components in each router interact in the control plane to compute routes and populate forwarding tables. In SDN, a remote controller computes and installs forwarding tables in routers, separating the control plane from the data plane. Routing protocols such as RIP, OSPF, and BGP are used in the traditional approach. The intra-autonomous system routing protocol operates within an autonomous system, while inter-autonomous system routing protocols such as BGP operate between autonomous systems.

---

**Question 35:** What are the key differences between routers and link-layer switches?

**Answer:** The key differences are that routers operate at Layer 3 (network layer) and forward based on IP addresses, while link-layer switches operate at Layer 2 (data link layer) and forward based on MAC addresses. Routers connect different networks together, while switches connect devices within the same network. Routers have dynamically updating routing tables based on IP addressing, while switches use MAC address tables. Routers perform network-layer functions such as decrementing TTL, while switches do not modify network-layer headers.

---

**Question 36:** What is the role of buffer management in a router?

**Answer:** Buffer management determines which packets to drop when the buffer is full and how to manage the buffer to prevent congestion. The drop policy determines which packets are dropped when there is no free buffer space. Drop-tail and priority-based dropping are two drop policies. Buffer management also includes active queue management policies such as RED, which proactively drop or mark packets to signal congestion. Effective buffer management is essential for maintaining high throughput and low delay in a router.

---

**Question 37:** What is the significance of line speed in router design?

**Answer:** Line speed is significant in router design because the goal is to complete input port processing at line speed. This means that the router must be able to process incoming packets as fast as they arrive on the link, without introducing delays. If the router cannot process packets at line speed, packets will queue up in the input buffer, leading to delay and potential packet loss. Achieving line speed requires efficient lookup algorithms and fast switching fabric. The switching rate should be N times the line rate for N inputs to avoid bottlenecks.

---

**Question 38:** What is the difference between the data plane and the control plane in a router?

**Answer:** The data plane is the local, per-router function that determines how a datagram arriving on a router input port is forwarded to a router output port. It operates on a per-packet basis at high speed and includes the input ports, switching fabric, and output ports. The control plane is the network-wide logic that determines how a datagram is routed among routers along the end-to-end path. It includes the routing processor and runs routing protocols. The data plane is concerned with the actual forwarding of individual packets, while the control plane is concerned with computing the routes that determine the paths packets take.

---

**Question 39:** How does the router handle congestion?

**Answer:** The router handles congestion through buffering, scheduling, and buffer management. Buffering holds packets temporarily when the output link is congested before they are transmitted. Scheduling disciplines such as priority scheduling and weighted fair queuing determine which packets are transmitted first and can provide quality-of-service guarantees. Buffer management policies such as drop-tail and RED determine which packets to drop when the buffer is full. These mechanisms work together to manage congestion and minimize its impact on network performance.

---

**Question 40:** What is the most crucial function performed at the input port of a router?

**Answer:** The most crucial function performed at the input port of a router is the lookup function, where the router uses header field values to look up the output port using the forwarding table in input port memory. This is known as "match plus action". The input port examines the destination address of the arriving packet and consults the forwarding table to determine the appropriate output port to which the datagram should be directed. This lookup must be performed at line speed to avoid delays and packet loss.

---

This concludes the comprehensive Text-to-Speech Q&A document for Section 4.2: What's Inside a Router?