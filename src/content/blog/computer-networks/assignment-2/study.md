---
title: "Assignment 2 — Study"
description: "Computer Networks study notes · Assignment 2"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Assignment 2"
tags: ["computer-networks"]
listed: false
draft: false
---

# COMP347 — Assignment 2: Exam Prep Q&A Document

## Text-to-Speech Study Guide

---

## PART 1: SHORT ANSWER QUESTIONS

---

### Question 1.1 — How TCP Provides Reliable Data Transfer

**Question:** TCP provides a reliable data transfer service on top of IP's unreliable best-effort service. Explain how TCP provides a reliable data transfer service.

**Answer:**

TCP (Transmission Control Protocol) is built on top of IP, which is an unreliable, best-effort delivery service. IP makes no guarantees that packets will arrive at their destination, that they will arrive in order, or that they will arrive only once. TCP compensates for these deficiencies by implementing a set of mechanisms at the transport layer that together provide reliable, in-order, exactly-once delivery of a byte stream between two endpoints.

The first mechanism TCP uses is **sequence numbers**. Every byte of data that TCP sends is assigned a sequence number. The sequence number of the first data byte in a segment is carried in the segment header. This allows the receiver to place arriving data in the correct order and to detect missing or duplicate data. Because TCP is a byte-oriented protocol, sequence numbers refer to bytes rather than to segments.

The second mechanism is **acknowledgements**. The receiver sends back an acknowledgement, called an ACK, indicating the next byte it expects to receive. TCP uses cumulative acknowledgements, meaning that an ACK for sequence number N indicates that all bytes up to and including N minus one have been received correctly. This lets the sender know exactly what has arrived safely and what still needs to be retransmitted.

The third mechanism is **retransmission on timeout**. Whenever TCP sends a segment, it starts a timer for that segment. If the corresponding acknowledgement does not arrive before the timer expires, TCP assumes the segment or its ACK was lost and retransmits the segment. The timeout interval is computed dynamically based on measured round-trip times, using a weighted average and a safety margin, so that it adapts to changing network conditions.

The fourth mechanism is **fast retransmit**. If the sender receives three duplicate ACKs for the same sequence number, it infers that the segment following that sequence number was lost, even before the timeout expires. The sender then retransmits the missing segment immediately, without waiting for the timer. This speeds up recovery from isolated packet losses.

The fifth mechanism is **checksums**. Each TCP segment includes a checksum computed over the header and data. The receiver recomputes the checksum and compares it with the received value. If they differ, the segment is corrupted and is silently discarded, so the sender will eventually retransmit it. This protects against bit errors introduced during transmission.

The sixth mechanism is **connection management**. TCP is connection-oriented. Before any data is exchanged, the two endpoints perform a three-way handshake to establish a connection and synchronize initial sequence numbers. When data transfer is complete, the connection is torn down gracefully. This ensures that both sides are ready and that resources are allocated consistently.

The seventh mechanism is **flow control**. TCP uses a receive window advertised by the receiver to prevent the sender from overwhelming the receiver's buffer. The receiver tells the sender how many bytes it can still accept, and the sender limits the amount of unacknowledged data in flight accordingly.

Finally, TCP uses **congestion control**. It maintains a congestion window that limits how much data can be in the network at once. Through slow start, congestion avoidance, fast retransmit, and fast recovery, TCP adjusts its sending rate to avoid congesting the network while still using available bandwidth efficiently.

Taken together, these mechanisms—sequence numbers, acknowledgements, timers and retransmission, fast retransmit, checksums, connection management, flow control, and congestion control—allow TCP to transform IP's unreliable best-effort service into a reliable, in-order, byte-stream delivery service.

---

### Question 1.2 — How GBN Achieves Multiple Outstanding Packets

**Question:** While the RDT protocols are essentially stop-and-wait protocols, the GBN protocol allows the sender to send multiple packets without waiting for acknowledgement from the receiving parties. How does GBN achieve that?

**Answer:**

The Reliable Data Transfer protocols, or RDT protocols, are essentially stop-and-wait protocols. In a stop-and-wait protocol, the sender transmits one packet and then must wait until it receives an acknowledgement for that packet before it can send the next one. This wastes bandwidth because the sender is idle while waiting for the ACK to travel back across the network. Go-Back-N, or GBN, removes this limitation by allowing the sender to have multiple unacknowledged packets in flight at the same time.

GBN achieves this through a combination of mechanisms. The first is the **sending window**. GBN allows the sender to have up to N unacknowledged packets outstanding, where N is the window size. The sender maintains a window of sequence numbers that it is allowed to send. As long as the sequence number of the next packet to be sent falls within this window, the sender can transmit it immediately without waiting for any acknowledgement.

The second mechanism is **cumulative acknowledgement**. In GBN, the receiver sends an acknowledgement for the highest sequence number it has received correctly and in order. For example, if the receiver has correctly received packets 0, 1, and 2, it sends an ACK for packet 2, meaning "I have received everything up to and including packet 2." This single ACK can acknowledge multiple packets at once, which reduces overhead and allows the sender to slide its window forward by more than one position at a time.

The third mechanism is the **sliding window**. When the sender receives a cumulative ACK for sequence number n, it knows that all packets up to n have been received correctly. It can then slide its window forward so that the base of the window becomes n plus one. This frees up space in the window for new packets to be sent.

The fourth mechanism is **buffering at the receiver**. In GBN, the receiver only accepts packets that arrive in order. If a packet arrives out of order, the receiver discards it and sends an ACK for the last in-order packet it received. This means the receiver does not need to buffer out-of-order packets, which simplifies receiver design.

The fifth mechanism is **retransmission of the entire window on timeout**. If the sender's timer for the oldest outstanding packet expires, the sender retransmits all packets in the current window, starting from the base. This is why the protocol is called "Go-Back-N": the sender goes back to the base of the window and retransmits everything from that point forward. Although this can be wasteful if only one packet was lost, it guarantees that the receiver will eventually receive all packets in order.

The sixth mechanism is **a single timer**. GBN typically uses a single timer for the oldest unacknowledged packet. When that timer expires, all packets in the window are retransmitted. When an ACK arrives for the oldest packet, the timer is restarted for the next oldest unacknowledged packet, if any.

By allowing multiple packets to be outstanding, using cumulative acknowledgements, and sliding the window forward as ACKs arrive, GBN keeps the sender busy and improves link utilization compared to stop-and-wait. The trade-off is that a single lost packet can cause many packets to be retransmitted, which is less efficient than the selective repeat approach.

---

### Question 1.3 — IPv6: Problems and Transition

**Question:** Invention and adoption of IPv6 is a big advance in computer networking. What problems was IPv6 intended to solve? With the large number of networking devices and applications using IPv4 still in use, how is the transition from IPv4 to IPv6 being resolved?

**Answer:**

IPv6 was designed to address several serious problems with IPv4, the fourth version of the Internet Protocol that has powered the Internet for decades. The most pressing problem was **address exhaustion**. IPv4 uses 32-bit addresses, which provide approximately 4.3 billion unique addresses. When IPv4 was designed in the 1970s and 1980s, this seemed like an enormous number. However, the explosive growth of the Internet, the proliferation of personal computers, smartphones, tablets, servers, and now Internet of Things devices has consumed the available IPv4 address space at an alarming rate. The Internet Assigned Numbers Authority allocated the last blocks of new IPv4 addresses in 2011, and regional registries have since exhausted their supplies.

The second problem was **routing table growth**. As the number of networks connected to the Internet grew, the size of the global routing table in core routers also grew. IPv4's class-based addressing and the need for fragmentation of address blocks created a large number of routes that core routers had to maintain. IPv6's larger address space and hierarchical allocation were intended to allow more efficient aggregation of routes, reducing the burden on core routers.

The third problem was **header complexity**. The IPv4 header contains fields such as fragmentation information, header checksum, and options that make processing more complex and slower. IPv6 was designed with a simplified, fixed-length header that removes the checksum, moves optional information to extension headers, and eliminates router-based fragmentation. This simplifies processing and improves router performance.

The fourth problem was **quality of service and security**. IPv4 had limited support for prioritizing different types of traffic and for authenticating and encrypting packets. IPv6 includes a flow label field for identifying flows that need special handling, and it was designed with IPsec in mind as a built-in security mechanism, although IPsec is also available for IPv4.

The fifth problem was **auto-configuration**. IPv4 required manual configuration or reliance on DHCP to assign addresses. IPv6 includes stateless address autoconfiguration, which allows devices to generate their own addresses without a server, simplifying network setup.

The transition from IPv4 to IPv6 is a massive undertaking because the two protocols are not directly interoperable. An IPv4-only device cannot directly communicate with an IPv6-only device. Several strategies have been developed to manage the transition.

The first strategy is **dual stack**. In a dual-stack implementation, a device or router runs both IPv4 and IPv6 simultaneously. It can communicate with IPv4 hosts using IPv4 and with IPv6 hosts using IPv6. When a host wants to communicate with another host, it uses DNS to determine which protocol to use, or it may prefer IPv6 if both are available. Dual stack is the most common approach and is widely deployed.

The second strategy is **tunneling**. Tunneling allows IPv6 packets to be carried across an IPv4-only region of the network. The IPv6 packet is encapsulated inside an IPv4 packet, travels across the IPv4 network, and is decapsulated at the other end. This allows isolated IPv6 networks to communicate with each other even when the path between them only supports IPv4. Common tunneling mechanisms include 6to4, Teredo, and ISATAP.

The third strategy is **translation**. Translation allows an IPv6-only host to communicate with an IPv4-only host by translating between the two protocols at a gateway. NAT64 and DNS64 are examples of translation mechanisms. The gateway rewrites IPv6 headers and addresses into IPv4 headers and addresses and vice versa. Translation is more complex than dual stack or tunneling and can break applications that embed IP addresses in their payloads.

In practice, the transition is happening gradually. Many ISPs, content providers, and enterprises now support IPv6 alongside IPv4. Mobile networks have been particularly aggressive in deploying IPv6. However, a complete transition to IPv6-only networking is still many years away, and dual-stack operation is expected to remain common for the foreseeable future.

---

### Question 1.4 — SNMP GetRequest, SetRequest, and UDP Transport

**Question:** SNMP is a protocol for network management. It has seven message types. What are the purposes of the SNMP GetRequest and SetRequest messages? Why were UDP datagrams chosen to transport SNMP messages?

**Answer:**

SNMP, the Simple Network Management Protocol, is the standard protocol for managing devices on IP networks. It allows a management station to query and control managed devices such as routers, switches, servers, printers, and other network equipment. SNMP defines seven message types: GetRequest, GetNextRequest, GetBulkRequest, SetRequest, Response, Trap, and InformRequest.

The **GetRequest** message is sent by a management station to a managed device to retrieve the value of one or more managed objects. The management station specifies the object identifiers, or OIDs, of the variables it wants to read. The managed device responds with a Response message containing the current values of those objects. GetRequest is used for polling: the management station periodically asks devices for the values of counters, status indicators, configuration parameters, and other variables. This allows the management station to monitor the health and performance of the network.

The **SetRequest** message is sent by a management station to a managed device to modify the value of one or more managed objects. The management station specifies the OIDs and the new values it wants to assign. The managed device responds with a Response message indicating whether the operation succeeded or failed. SetRequest is used for configuration and control: changing a router's routing table, disabling an interface, setting a system name, adjusting thresholds, or performing other management actions that require writing to the device's management information base.

Together, GetRequest and SetRequest give the management station read and write access to the managed device's management information base, or MIB. GetRequest reads, and SetRequest writes. The other message types complement these: GetNextRequest and GetBulkRequest traverse tables and retrieve large amounts of data efficiently, Response carries replies, Trap reports unsolicited events, and InformRequest acknowledges traps.

SNMP was designed to run over **UDP** rather than TCP for several reasons. The first reason is **simplicity and low overhead**. SNMP is intended to be lightweight so that it can run on devices with limited processing power and memory, such as small routers, switches, and embedded devices. UDP has a much smaller header than TCP, only eight bytes compared to TCP's twenty bytes, and it does not require connection establishment, teardown, or state maintenance. This reduces the burden on managed devices.

The second reason is **the request-response nature of SNMP**. Most SNMP operations are simple request-response exchanges. The management station sends a request, and the managed device sends a response. There is no need for a long-lived connection or for reliable streaming. UDP is well suited to this kind of brief, transactional communication.

The third reason is **avoidance of TCP overhead and congestion control**. TCP's congestion control and retransmission mechanisms can introduce delays and complexity that are unnecessary for SNMP. If a management query is lost, the management station can simply retry it after a timeout. SNMP itself provides application-level reliability through timeouts and retries, so it does not need TCP's reliability.

The fourth reason is **support for broadcast and multicast**. SNMP traps, which are unsolicited notifications sent by managed devices to management stations, can be sent to multiple destinations. UDP supports broadcast and multicast, while TCP is strictly point-to-point. This makes UDP a better fit for trap delivery.

The fifth reason is **statelessness**. UDP is connectionless and stateless, which means a managed device does not need to maintain per-connection state for each management station. This is important for devices that may be managed by multiple stations simultaneously.

For these reasons, SNMP was designed to use UDP as its transport protocol. While SNMP can theoretically run over TCP, UDP is the standard and most common choice.

---

### Question 1.5 — Preferable Features of SDN-Enabled Networking Devices

**Question:** In today's market and its applications, there are many SDN-enabled networking devices. What are the preferable features that an SDN-enabled networking device usually has?

**Answer:**

Software-Defined Networking, or SDN, is an architectural approach that separates the control plane of a network from the data plane. In traditional networking, each device makes its own forwarding decisions based on distributed routing protocols. In SDN, a centralized controller makes forwarding decisions and programs the data plane devices with the resulting rules. An SDN-enabled networking device is a device that can participate in this architecture. Several features are preferable, and often essential, for such a device.

The first preferable feature is **support for a standardized southbound interface**. The southbound interface is the protocol that the SDN controller uses to program the device. OpenFlow is the most widely known standard, but others exist, such as P4Runtime, NETCONF, and Open vSwitch Database Management Protocol. A device that supports a standardized southbound interface can be controlled by multiple controllers and can interoperate with other vendors' equipment, avoiding vendor lock-in.

The second feature is **flow table support**. An SDN-enabled device typically maintains one or more flow tables. Each flow table contains entries that match on packet header fields, such as source and destination MAC addresses, IP addresses, ports, and VLAN tags, and specify actions such as forward, drop, modify, or send to the controller. The device must be able to match on a rich set of fields and perform a variety of actions.

The third feature is **programmability**. The device must be programmable by the controller. This means it must accept instructions from the controller to add, modify, or delete flow entries. It must also be able to report events, such as packet-in messages when a packet does not match any flow entry, or port status changes, to the controller.

The fourth feature is **high performance and line-rate forwarding**. Even though the control plane is centralized, the data plane must still forward packets at high speed. An SDN-enabled device should be able to forward packets at line rate, with low latency and high throughput. This often requires hardware support, such as application-specific integrated circuits or network processors, rather than pure software forwarding.

The fifth feature is **support for multiple flow tables and pipeline processing**. More advanced SDN devices support multiple flow tables arranged in a pipeline, where a packet is matched against table 0, then table 1, and so on. This allows complex policies to be implemented in stages, improving scalability and flexibility.

The sixth feature is **group table support**. Group tables allow a single flow entry to point to a group of actions, such as multicast, load balancing, or failover. This is useful for implementing advanced services like multipath forwarding and fast rerouting.

The seventh feature is **metering and quality of service**. An SDN-enabled device should support meters, which measure the rate of packets or bytes matching a flow and can be used to police or shape traffic. It should also support queueing and scheduling mechanisms to provide quality of service guarantees.

The eighth feature is **support for controller redundancy and high availability**. Because the controller is a single point of failure in a pure SDN architecture, SDN-enabled devices should support connections to multiple controllers and be able to fail over from one controller to another. They should also support graceful restart and state synchronization.

The ninth feature is **security features**. SDN devices should support authentication and encryption of the control channel, isolation of control and data traffic, and protection against denial-of-service attacks. They should also support access control lists and other security policies.

The tenth feature is **manageability and observability**. SDN devices should provide statistics, counters, and logs that can be used for monitoring, troubleshooting, and capacity planning. They should support standard management protocols such as SNMP and NETCONF, in addition to the SDN southbound interface.

The eleventh feature is **interoperability with legacy protocols**. In real networks, SDN devices often need to coexist with traditional devices. An SDN-enabled device should be able to participate in legacy protocols such as STP, OSPF, BGP, and LLDP, or at least not break them.

The twelfth feature is **scalability**. The device should be able to handle a large number of flow entries, a large number of ports, and a high rate of flow setup and teardown. It should also support hierarchical flow tables and efficient matching algorithms.

Finally, an SDN-enabled device should be **cost-effective and energy-efficient**. It should provide the benefits of SDN without excessive cost or power consumption.

In summary, an SDN-enabled networking device should support a standardized southbound interface, flow tables, programmability, high-performance forwarding, multiple flow tables, group tables, metering and QoS, controller redundancy, security, manageability, interoperability, scalability, and cost-effectiveness.

---

### Question 1.6 — BGP Loops: Definition, Problems, and Detection

**Question:** BGP is a routing protocol used for routing among ISPs. One problem that BGP faces is detecting loops in paths. What are the loops? Why should loops be avoided? How does BGP detect the loops in paths?

**Answer:**

BGP, the Border Gateway Protocol, is the routing protocol that glues the Internet together. It is used to exchange routing information between autonomous systems, or ASes, which are networks operated by ISPs, large enterprises, and other organizations. BGP is a path-vector protocol, meaning that each route advertisement includes the full AS path to the destination. This is different from distance-vector protocols, which only advertise a cost, and from link-state protocols, which flood topology information.

A **loop** in BGP occurs when a route advertisement travels through a sequence of ASes and eventually returns to an AS that is already in the path. For example, suppose AS A advertises a route to a destination. AS B receives the route, adds itself to the path, and advertises it to AS C. AS C receives the route, adds itself, and advertises it to AS D. If AS D advertises the route back to AS A, and AS A accepts it, then a loop has formed. Packets destined for the destination could circulate endlessly among A, B, C, and D, never reaching their destination.

Loops should be avoided for several reasons. First, **packets may never reach their destination**. If a loop exists, packets can be forwarded around the loop indefinitely, consuming bandwidth and never arriving. Second, **network resources are wasted**. Looped packets consume link bandwidth, router CPU, and buffer space. Third, **routing instability can result**. Loops can cause routing tables to oscillate, with routes being added and withdrawn repeatedly. Fourth, **the loop can spread**. If a looped route is advertised to other ASes, the loop can propagate, affecting more and more of the Internet. Fifth, **the loop can cause congestion collapse**. If enough traffic is caught in a loop, links can become saturated, causing widespread performance degradation.

BGP detects loops using the **AS path**. When a BGP router receives a route advertisement, it examines the AS path attribute. The AS path is a list of AS numbers that the route has traversed. If the router sees its own AS number already in the AS path, it knows that accepting the route would create a loop. The router therefore rejects the route. This simple rule prevents loops from forming in the first place.

For example, suppose AS 100 receives a route advertisement with the AS path "200 300 400." AS 100 checks whether 100 appears in the path. It does not, so AS 100 accepts the route. If AS 100 later receives an advertisement with the AS path "200 300 100 400," it sees its own AS number, 100, in the path. It rejects the route because accepting it would create a loop.

BGP also uses other mechanisms to detect and prevent loops. The **next-hop attribute** helps ensure that the next hop is reachable and is not the router itself. **Route refresh** and **route dampening** help manage instability. **Maximum AS path length** limits can be configured to reject routes with excessively long paths, which may indicate a loop or a misconfiguration.

In addition to the AS path, BGP uses **iBGP** and **eBGP** rules. Within an AS, iBGP speakers must be fully meshed or use route reflectors or confederations to avoid loops. iBGP does not modify the AS path, so loop detection within an AS relies on other mechanisms, such as the BGP router ID and the cluster list in route reflectors.

In summary, a BGP loop is a cycle in the AS path of a route advertisement. Loops are harmful because they waste resources and can prevent packets from reaching their destination. BGP detects loops by checking whether its own AS number appears in the AS path of an incoming route advertisement. If it does, the route is rejected. This simple but effective mechanism, combined with other attributes and rules, keeps the Internet's routing system stable and loop-free.

---

## PART 2: LONG ANSWER QUESTIONS

---

### Question 2.1 — UDP and TCP Checksums

**Question:** UDP and TCP use 1's complement for their checksums to detect errors. Suppose you have the following 8-bit bytes: 11011001, 01010010, 11001010, 10100100 and 01011001.

#### Part A: What is the 1's complement of the sum of these 8-bit bytes? Show all the details of your work.

**Answer:**

To compute the 1's complement sum of the given bytes, we add them together using 1's complement arithmetic. In 1's complement arithmetic, if a carry is generated out of the most significant bit, it is wrapped around and added to the least significant bit.

The bytes are:

- Byte 1: 11011001
- Byte 2: 01010010
- Byte 3: 11001010
- Byte 4: 10100100
- Byte 5: 01011001

**Step 1: Add Byte 1 and Byte 2.**

```
  11011001
+ 01010010
-----------
```

Let us add bit by bit from right to left:

- Bit 0: 1 + 0 = 1
- Bit 1: 0 + 1 = 1
- Bit 2: 0 + 0 = 0
- Bit 3: 1 + 1 = 10 (0 with carry 1)
- Bit 4: 1 + 0 + 1 (carry) = 10 (0 with carry 1)
- Bit 5: 0 + 1 + 1 (carry) = 10 (0 with carry 1)
- Bit 6: 1 + 0 + 1 (carry) = 10 (0 with carry 1)
- Bit 7: 1 + 0 + 1 (carry) = 10 (0 with carry 1)

So the sum is 00110011 with a carry out of 1. In 1's complement addition, we wrap the carry around and add it to the least significant bit:

```
  00110011
+        1
-----------
  00110100
```

So the running sum after Byte 1 and Byte 2 is **00110100**.

**Step 2: Add Byte 3 (11001010) to the running sum (00110100).**

```
  00110100
+ 11001010
-----------
```

Bit by bit:

- Bit 0: 0 + 0 = 0
- Bit 1: 0 + 1 = 1
- Bit 2: 1 + 0 = 1
- Bit 3: 0 + 1 = 1
- Bit 4: 1 + 0 = 1
- Bit 5: 1 + 0 = 1
- Bit 6: 0 + 1 = 1
- Bit 7: 0 + 1 = 1

So the sum is **11111110**. No carry out.

Running sum: **11111110**.

**Step 3: Add Byte 4 (10100100) to the running sum (11111110).**

```
  11111110
+ 10100100
-----------
```

Bit by bit:

- Bit 0: 0 + 0 = 0
- Bit 1: 1 + 0 = 1
- Bit 2: 1 + 1 = 10 (0 with carry 1)
- Bit 3: 1 + 0 + 1 (carry) = 10 (0 with carry 1)
- Bit 4: 1 + 1 + 1 (carry) = 11 (1 with carry 1)
- Bit 5: 1 + 0 + 1 (carry) = 10 (0 with carry 1)
- Bit 6: 1 + 1 + 1 (carry) = 11 (1 with carry 1)
- Bit 7: 1 + 1 + 1 (carry) = 11 (1 with carry 1)

So the sum is 10010010 with a carry out of 1. Wrap the carry around:

```
  10010010
+        1
-----------
  10010011
```

Running sum: **10010011**.

**Step 4: Add Byte 5 (01011001) to the running sum (10010011).**

```
  10010011
+ 01011001
-----------
```

Bit by bit:

- Bit 0: 1 + 1 = 10 (0 with carry 1)
- Bit 1: 1 + 0 + 1 (carry) = 10 (0 with carry 1)
- Bit 2: 0 + 0 + 1 (carry) = 1
- Bit 3: 0 + 1 = 1
- Bit 4: 1 + 1 = 10 (0 with carry 1)
- Bit 5: 0 + 0 + 1 (carry) = 1
- Bit 6: 0 + 1 = 1
- Bit 7: 1 + 0 = 1

So the sum is **11110110**. No carry out.

Running sum: **11110110**.

**Step 5: Compute the 1's complement of the final sum.**

The final sum is 11110110. The 1's complement is obtained by flipping every bit:

- 1 becomes 0
- 1 becomes 0
- 1 becomes 0
- 1 becomes 0
- 0 becomes 1
- 1 becomes 0
- 1 becomes 0
- 0 becomes 1

So the 1's complement is **00001001**.

Therefore, the 1's complement of the sum of the five 8-bit bytes is **00001001**.

#### Part B: Why do UDP and TCP take the 1's complement of the sum as their checksum, instead of just the sum of these bytes?

**Answer:**

UDP and TCP take the 1's complement of the sum rather than the plain sum for several important reasons.

The first reason is **to make the checksum independent of byte order**. In 1's complement arithmetic, the sum is the same regardless of the order in which the bytes are added. This means that the checksum does not depend on the endianness of the machines computing it. A big-endian machine and a little-endian machine will produce the same checksum for the same data. If the plain sum were used, different byte orders could produce different sums, causing checksum mismatches even when the data is correct.

The second reason is **to ensure that the all-zeros value is not used**. In 1's complement representation, there are two representations of zero: all zeros (00000000) and all ones (11111111), which is negative zero. By taking the 1's complement of the sum, the checksum is the negative of the sum. This means that when the receiver adds the checksum to the sum of the received bytes, the result should be all ones (11111111) if there are no errors. If the checksum were just the sum, a sum of zero would produce a checksum of zero, which could be confused with a missing or zeroed checksum field. The 1's complement scheme avoids this ambiguity.

The third reason is **to simplify error detection at the receiver**. With the 1's complement scheme, the receiver can simply add all the received bytes, including the checksum, and check whether the result is all ones. If it is, the data is presumed correct. If it is not, an error has occurred. This is a simple and efficient operation.

The fourth reason is **to provide a consistent mathematical framework**. 1's complement arithmetic has the property that the sum of a set of numbers and the 1's complement of that sum is always all ones. This property is what makes the checksum work. If the plain sum were used, the receiver would have to compare the computed sum with the received sum, which is also possible, but the 1's complement approach is more elegant and has the other advantages mentioned above.

The fifth reason is **historical and standardization**. The 1's complement checksum was chosen early in the development of TCP and IP and has been retained for compatibility. It is simple to implement in software and hardware, and it has proven adequate for detecting common errors.

In summary, UDP and TCP use the 1's complement of the sum because it is byte-order independent, avoids the ambiguity of zero, simplifies receiver processing, provides a consistent mathematical framework, and is standardized and simple to implement.

#### Part C: With the 1's complement scheme, how does the receiver detect errors?

**Answer:**

With the 1's complement checksum scheme, the receiver detects errors by performing the same 1's complement addition that the sender performed, but including the checksum field in the addition.

Here is how it works. The sender computes the 1's complement sum of all the 16-bit words in the segment, including the header and data, and then takes the 1's complement of that sum. This value is placed in the checksum field. The segment is then transmitted.

When the receiver receives the segment, it treats the checksum field as just another 16-bit word. It computes the 1's complement sum of all the 16-bit words in the segment, including the checksum field. If there are no errors, the result of this addition should be all ones, that is, 11111111 11111111 in binary, or 0xFFFF in hexadecimal.

Why is the result all ones? Because the checksum is the 1's complement of the sum of the other words. Let S be the sum of the other words. The checksum is the 1's complement of S, which is denoted as ~S. When the receiver adds S and ~S using 1's complement arithmetic, the result is all ones. This is a fundamental property of 1's complement arithmetic: x plus the 1's complement of x equals all ones.

If the computed sum is not all ones, the receiver knows that an error has occurred. The segment is discarded, and the receiver may send a negative acknowledgement or simply remain silent, relying on the sender's timeout and retransmission mechanisms to recover.

The receiver does not need to know which bits are in error or how many errors occurred. It only needs to determine whether the checksum is valid. If it is not, the segment is treated as lost or corrupted.

This method is simple and fast. It can be implemented in software with a loop that adds 16-bit words and folds carries, or in hardware with an adder and a complement circuit. It detects many common errors, including single-bit errors, most multi-bit errors, and some burst errors.

#### Part D: With this checksum scheme, is it possible that any 1-bit error will go undetected? How about a 2-bit error? Explain your answer.

**Answer:**

With the 1's complement checksum scheme, a **1-bit error will never go undetected**. This is a important property of the scheme.

To understand why, consider what happens when a single bit flips. The 16-bit word containing the flipped bit changes by a power of two. For example, if bit position i flips from 0 to 1, the word increases by 2^i. If it flips from 1 to 0, the word decreases by 2^i. In either case, the sum of all the words changes by plus or minus 2^i, where i is between 0 and 15.

The checksum is the 1's complement of the sum. When the receiver adds all the words including the checksum, the result is all ones if there is no error. If one bit has flipped, the sum has changed by plus or minus 2^i. The receiver's computed sum will therefore differ from all ones by plus or minus 2^i. Since 2^i is not zero modulo 2^16 minus 1, the result cannot be all ones. Therefore, the error is detected.

In other words, a single-bit error always changes the sum by a nonzero amount, and the 1's complement addition cannot produce all ones when the sum is off by a nonzero amount. So 1-bit errors are always detected.

Now consider a **2-bit error**. It is possible for a 2-bit error to go undetected if the two bit flips cancel each other out in the 1's complement sum. For example, suppose one bit flips from 0 to 1 in one word, increasing the sum by 2^i, and another bit flips from 1 to 0 in another word, decreasing the sum by 2^j. If 2^i equals 2^j modulo 2^16 minus 1, then the net change in the sum is zero, and the checksum will still be valid. This can happen if the two flipped bits are in the same bit position in different 16-bit words, or if the sum of the changes is a multiple of 2^16 minus 1.

For a concrete example, suppose the original data has two 16-bit words: 00000000 00000001 and 00000000 00000000. The sum is 00000000 00000001. The checksum is the 1's complement, which is 11111111 11111110. Now suppose a 2-bit error flips bit 0 of the first word from 1 to 0, and flips bit 0 of the second word from 0 to 1. The first word becomes 00000000 00000000, and the second word becomes 00000000 00000001. The sum is still 00000000 00000001, and the checksum is still valid. The error goes undetected.

So 2-bit errors can go undetected if they occur in the same bit position in different words, or more generally, if their effects on the sum cancel out. The 1's complement checksum is not perfect, but it detects many errors, including all 1-bit errors and many multi-bit errors. For stronger error detection, protocols like TCP and UDP rely on the checksum as a first line of defense, with higher layers or link-layer protocols providing additional protection.

---

### Question 2.2 — Dijkstra's Shortest Path Algorithm

**Question:** The following table is used to compute the shortest path from A to all other nodes in a network, according to the link-state algorithm, which is better known as Dijkstra's shortest path algorithm.

| Step | N' | D(v),P(v) | D(w),P(w) | D(x),P(x) | D(y),P(y) | D(z),P(z) |
|------|----|-----------|-----------|-----------|-----------|-----------|
| 0 | u | 2,u | 5,u | 1,u | ∞ | ∞ |
| 1 | ux | 2,u | 4,x | | 2,x | ∞ |
| 2 | uxy | 2,u | 3,y | | | 4,y |
| 3 | uxyv | | 3,y | | | 4,y |
| 4 | uxyvw | | | | | 4,y |
| 5 | uxyvwz | | | | | |

#### Part A: Interpret the table above in your words: what it is showing and what are each row and each column showing?

**Answer:**

The table shows the step-by-step execution of Dijkstra's shortest path algorithm, which is also known as the link-state routing algorithm. Dijkstra's algorithm computes the least-cost path from a single source node to all other nodes in a network. In this table, the source node is u, which is the node from which all shortest paths are being computed.

The table is organized into rows and columns. Each row represents one step of the algorithm. Each column represents a destination node in the network, except for the first two columns, which represent the step number and the set N'.

The first column, labeled "Step," shows the step number. Step 0 is the initialization step, before any nodes have been permanently added to the shortest path tree. Steps 1 through 5 are the iterations of the algorithm, each of which adds one node to the set N'.

The second column, labeled "N'," shows the set of nodes that have been permanently added to the shortest path tree at that step. The set N' starts empty at step 0, except for the source node u, which is implicitly included. At each subsequent step, the node with the smallest tentative distance is added to N'. The notation "ux" means that nodes u and x are in N'. The notation "uxy" means u, x, and y are in N'. And so on.

The remaining columns, labeled D(v),P(v), D(w),P(w), D(x),P(x), D(y),P(y), and D(z),P(z), show the current best-known distance and predecessor for each destination node. The letter in parentheses is the destination node: v, w, x, y, or z. The D value is the current estimate of the shortest distance from the source u to that destination. The P value is the predecessor node on the current best path to that destination. For example, "2,u" means that the current best distance to node v is 2, and the predecessor is u. The infinity symbol, ∞, means that no path has been found yet.

At step 0, the algorithm initializes the distances. The distance to u itself is 0, but u is not shown in the table because it is the source. The distances to the neighbors of u are set to the link costs: v is 2 via u, w is 5 via u, and x is 1 via u. The distances to y and z are infinity because they are not directly connected to u.

At each subsequent step, the algorithm selects the node with the smallest D value among the nodes not yet in N', adds it to N', and then relaxes all edges from that node. Relaxing an edge means checking whether the path through the newly added node is shorter than the current best path to a neighbor. If it is, the D and P values for that neighbor are updated.

For example, at step 1, node x is added to N' because its distance is 1, the smallest among the remaining nodes. Then the edges from x are relaxed. The distance to w through x is 1 + 3 = 4, which is less than the current 5, so D(w) becomes 4 and P(w) becomes x. The distance to y through x is 1 + 1 = 2, which is less than infinity, so D(y) becomes 2 and P(y) becomes x. The distance to v through x is 1 + 2 = 3, which is greater than the current 2, so D(v) remains 2 and P(v) remains u.

At step 2, node y is added to N' because its distance is 2, the smallest among the remaining nodes. Then the edges from y are relaxed. The distance to w through y is 2 + 1 = 3, which is less than the current 4, so D(w) becomes 3 and P(w) becomes y. The distance to z through y is 2 + 2 = 4, which is less than infinity, so D(z) becomes 4 and P(z) becomes y.

At step 3, node v is added to N' because its distance is 2, the smallest among the remaining nodes. The edges from v are relaxed, but no distances improve.

At step 4, node w is added to N' because its distance is 3, the smallest among the remaining nodes. The edges from w are relaxed, but no distances improve.

At step 5, node z is added to N' because its distance is 4. The algorithm terminates because all nodes are now in N'.

The final shortest path tree has the following paths from u:

- To v: u → v, cost 2
- To w: u → x → y → w, cost 3
- To x: u → x, cost 1
- To y: u → x → y, cost 2
- To z: u → x → y → z, cost 4

In summary, the table shows the iterative execution of Dijkstra's algorithm, with each row representing a step, the N' column showing the set of permanently added nodes, and the D and P columns showing the current best distance and predecessor for each destination node. The algorithm builds the shortest path tree one node at a time, always choosing the node with the smallest tentative distance.

#### Part B: Consider the network shown in the following diagram. With the indicated link costs, use Dijkstra's shortest path algorithm to compute the shortest path from x to all other network nodes. Show how the algorithm works by computing a table like the one above.

**Answer:**

Since the diagram is not included in the text provided, I will describe the general procedure for computing the table. The network diagram would show nodes and link costs. The source node is x. The table would have the following columns: Step, N', D(u),P(u), D(v),P(v), D(w),P(w), D(y),P(y), D(z),P(z). Note that the source is x, so the destinations are u, v, w, y, and z. The algorithm proceeds as follows.

**Initialization (Step 0):**

- N' = {x}
- For each neighbor of x, set D(neighbor) to the link cost from x to that neighbor, and P(neighbor) = x.
- For all other nodes, set D = ∞.

**Iteration:**

- At each step, find the node not in N' with the smallest D value. Add it to N'.
- For each neighbor of the newly added node, compute the new distance as D(newly added) + link cost. If this is less than the current D(neighbor), update D(neighbor) and P(neighbor).

**Termination:**

- The algorithm terminates when all nodes are in N'.

The final table would show the shortest path from x to each other node, and the predecessor of each node on that path. The shortest path tree can then be reconstructed by following the predecessors back to x.

Without the specific network diagram, I cannot provide the exact numbers. However, the procedure is exactly as described above. The key is to always choose the node with the smallest tentative distance, add it to N', and relax its edges. The table records the state of the algorithm at each step.

---

### Question 2.3 — CIDR Router Routing

**Question:** A router running classless interdomain routing (CIDR) has the following entries in its routing table:

| Address/mask | Next hop |
|--------------|----------|
| 135.46.56.0/22 | Interface 0 |
| 135.46.60.0/22 | Interface 1 |
| 192.53.40.0/23 | Router 2 |
| Default | Router 3 |

How does a CIDR router route the packets it receives? For each of the following IP addresses, explain what the router will do if a packet with that address arrives.

1. 135.46.61.10
2. 135.46.53.16
3. 192.53.40.6
4. 192.53.56.7

**Answer:**

A CIDR router routes packets by using the longest prefix match rule. When a packet arrives, the router extracts the destination IP address and compares it against each entry in its routing table. Each entry consists of an address prefix and a mask, which together define a range of addresses. The router finds all entries whose prefix matches the destination address. Among those matching entries, the router chooses the one with the longest prefix, that is, the most specific match. The packet is then forwarded to the next hop associated with that entry. If no entry matches, the router uses the default route.

The longest prefix match rule is important because it allows a router to have overlapping routes. More specific routes take precedence over less specific ones. This provides flexibility and allows hierarchical addressing.

Now let us apply this to each of the given IP addresses.

**1. 135.46.61.10**

First, we convert the relevant parts of the address and the table entries to binary or examine the prefix lengths.

The routing table entries are:

- 135.46.56.0/22 → Interface 0
- 135.46.60.0/22 → Interface 1
- 192.53.40.0/23 → Router 2
- Default → Router 3

The destination address is 135.46.61.10.

Let us check the first entry: 135.46.56.0/22. A /22 mask means the first 22 bits are the network prefix. The address 135.46.56.0 in binary is:

135 = 10000111
46 = 00101110
56 = 00111000
0 = 00000000

So the first 22 bits are: 10000111 00101110 001110 (the first 6 bits of the third octet).

The destination 135.46.61.10 in binary is:

135 = 10000111
46 = 00101110
61 = 00111101
10 = 00001010

The first 22 bits are: 10000111 00101110 001111 (the first 6 bits of the third octet).

Compare: 001110 vs 001111. They differ in the last bit. So the destination does not match the first entry.

Now check the second entry: 135.46.60.0/22. The address 135.46.60.0 in binary:

135 = 10000111
46 = 00101110
60 = 00111100
0 = 00000000

First 22 bits: 10000111 00101110 001111.

Destination first 22 bits: 10000111 00101110 001111.

They match! So the destination 135.46.61.10 matches the second entry, 135.46.60.0/22.

Does it match any other entry? The third entry is 192.53.40.0/23, which starts with 192, so it does not match. The default route matches everything, but it is less specific.

Therefore, the router forwards the packet to Interface 1.

**2. 135.46.53.16**

Destination: 135.46.53.16.

Check first entry: 135.46.56.0/22. Address 135.46.56.0 first 22 bits: 10000111 00101110 001110.

Destination 135.46.53.16 in binary:

135 = 10000111
46 = 00101110
53 = 00110101
16 = 00010000

First 22 bits: 10000111 00101110 001101.

Compare: 001110 vs 001101. They differ in the third bit of the third octet. So no match.

Check second entry: 135.46.60.0/22. First 22 bits: 10000111 00101110 001111. Destination first 22 bits: 10000111 00101110 001101. They differ. No match.

Check third entry: 192.53.40.0/23. Starts with 192, so no match.

The destination does not match any specific entry. Therefore, the router uses the default route and forwards the packet to Router 3.

**3. 192.53.40.6**

Destination: 192.53.40.6.

Check third entry: 192.53.40.0/23. A /23 mask means the first 23 bits are the network prefix.

192.53.40.0 in binary:

192 = 11000000
53 = 00110101
40 = 00101000
0 = 00000000

First 23 bits: 11000000 00110101 0010100 (the first 7 bits of the third octet).

Destination 192.53.40.6 in binary:

192 = 11000000
53 = 00110101
40 = 00101000
6 = 00000110

First 23 bits: 11000000 00110101 0010100.

They match! So the destination matches 192.53.40.0/23.

The first two entries start with 135, so they do not match. The default route matches but is less specific.

Therefore, the router forwards the packet to Router 2.

**4. 192.53.56.7**

Destination: 192.53.56.7.

Check third entry: 192.53.40.0/23. First 23 bits of the entry: 11000000 00110101 0010100.

Destination 192.53.56.7 in binary:

192 = 11000000
53 = 00110101
56 = 00111000
7 = 00000111

First 23 bits: 11000000 00110101 0011100.

Compare: 0010100 vs 0011100. They differ. So no match with the third entry.

The first two entries start with 135, so no match.

The destination does not match any specific entry. Therefore, the router uses the default route and forwards the packet to Router 3.

In summary:

- 135.46.61.10 → Interface 1 (matches 135.46.60.0/22)
- 135.46.53.16 → Router 3 (default route)
- 192.53.40.6 → Router 2 (matches 192.53.40.0/23)
- 192.53.56.7 → Router 3 (default route)

---

### Question 2.4 — TCP Congestion Window and Throughput

**Question:** Consider that only a single TCP connection uses a 1 Gbps link, which does not buffer any data. Suppose that this link is the only congested link between the sending and receiving hosts. Assume that the TCP sender has a huge file to send to the receiver and the receiver's receive buffer is much larger than the congestion window. Further assume that each TCP segment size is 1,500 bytes; the two-way propagation delay of this connection is 15 msec; and this TCP connection is always in the congestion avoidance phase (ignore slow start).

1. What is the maximum window size (in segments) that this TCP connection can achieve?
2. What is the average window size (in segments) and average throughput (in bps) of this TCP connection?
3. How long would it take for this TCP connection to reach its maximum window again after recovering from a packet loss?
4. Assume we want the 1 Gbps link to buffer a finite number of segments and always keep the link busy sending data. How would you choose a buffer size? Justify your answer.

**Answer:**

**Given:**

- Link rate: 1 Gbps = 1,000,000,000 bits per second
- Segment size: 1,500 bytes = 12,000 bits
- Two-way propagation delay: 15 msec = 0.015 seconds
- TCP is always in congestion avoidance phase
- Link does not buffer any data
- Receiver buffer is much larger than congestion window

**Part 1: What is the maximum window size (in segments) that this TCP connection can achieve?**

The maximum window size is determined by the link's capacity and the round-trip time. The link is 1 Gbps, and the round-trip time is 15 msec. The bandwidth-delay product is the amount of data that can be in flight on the link at any given time.

Bandwidth-delay product = link rate × round-trip time
= 1,000,000,000 bits/sec × 0.015 sec
= 15,000,000 bits

Convert to bytes: 15,000,000 bits / 8 = 1,875,000 bytes.

Convert to segments: 1,875,000 bytes / 1,500 bytes per segment = 1,250 segments.

So the bandwidth-delay product is 1,250 segments. This is the maximum number of segments that can be in flight on the link at once. If the window size is larger than this, the sender will be sending faster than the link can carry, causing queueing and loss. If the window size is smaller, the link will be underutilized.

Therefore, the maximum window size that this TCP connection can achieve is **1,250 segments**.

**Part 2: What is the average window size (in segments) and average throughput (in bps) of this TCP connection?**

In the congestion avoidance phase of TCP, the window size increases linearly by one segment per round-trip time until a loss occurs, and then it is halved. This is known as additive increase, multiplicative decrease, or AIMD. The window size oscillates between a maximum value W_max and half that value, W_max/2.

If the maximum window size is 1,250 segments, then the minimum window size after a loss is 1,250 / 2 = 625 segments.

The average window size is the average of the maximum and minimum, assuming a linear increase:

Average window size = (W_max + W_max/2) / 2
= (1,250 + 625) / 2
= 1,875 / 2
= 937.5 segments

So the average window size is approximately **937.5 segments**.

The average throughput is the average window size divided by the round-trip time, converted to bits per second.

Average throughput = (average window size × segment size) / round-trip time
= (937.5 × 12,000 bits) / 0.015 sec
= 11,250,000 bits / 0.015 sec
= 750,000,000 bits per second

So the average throughput is **750 Mbps**, or 750,000,000 bps.

Alternatively, we can compute the throughput as a fraction of the link rate. The average window size is 937.5 segments, and the maximum is 1,250 segments. The ratio is 937.5 / 1,250 = 0.75. So the average throughput is 0.75 × 1 Gbps = 750 Mbps. This matches.

**Part 3: How long would it take for this TCP connection to reach its maximum window again after recovering from a packet loss?**

After a packet loss, TCP reduces its window size to half of the maximum. In congestion avoidance, the window increases by one segment per round-trip time. So the window size increases linearly from W_max/2 to W_max.

The number of segments to increase is W_max - W_max/2 = W_max/2 = 1,250 / 2 = 625 segments.

Since the window increases by one segment per round-trip time, it will take 625 round-trip times to increase from 625 to 1,250 segments.

The round-trip time is 15 msec = 0.015 seconds.

Time to reach maximum window = 625 × 0.015 sec = 9.375 seconds.

So it would take **9.375 seconds** for the TCP connection to reach its maximum window again after recovering from a packet loss.

**Part 4: Assume we want the 1 Gbps link to buffer a finite number of segments and always keep the link busy sending data. How would you choose a buffer size? Justify your answer.**

The question asks how to choose a buffer size for the link so that it can always keep busy sending data. The link is the only congested link, and it does not buffer any data by default. We want to add a finite buffer to the link.

The purpose of buffering is to absorb bursts of data and to allow the link to remain busy even when the sender's window size fluctuates or when there are transient delays. In TCP congestion control, the window size oscillates. When the window size is at its maximum, the sender may send a burst of segments that exceeds the link's immediate capacity. A buffer can hold these extra segments until the link can transmit them.

The buffer size should be large enough to accommodate the maximum amount of data that can arrive while the link is busy transmitting. According to the bandwidth-delay product rule, the buffer should be at least the bandwidth-delay product. But here, the link is the only congested link, and the round-trip time is 15 msec. The bandwidth-delay product is 1,250 segments.

However, there is a well-known rule of thumb for buffer sizing in the Internet: the buffer size should be equal to the bandwidth-delay product divided by the square root of the number of TCP flows. This is known as the Stanford rule or the Appenzeller rule. But the question does not specify the number of flows. It says "only a single TCP connection uses a 1 Gbps link." So there is one flow.

For a single TCP flow, the buffer should be at least the bandwidth-delay product to keep the link busy. If the buffer is smaller than the bandwidth-delay product, the link may go idle when the sender's window is full and waiting for acknowledgements. If the buffer is larger, it can absorb more bursts, but it also increases queueing delay.

Since the link does not buffer any data, and we want it to always keep busy, we should choose a buffer size that can hold at least the amount of data that can be in flight during one round-trip time. That is the bandwidth-delay product, which is 1,250 segments.

But we also need to consider the TCP window size. The maximum window size is 1,250 segments. If the buffer is 1,250 segments, it can hold all the segments that the sender can have in flight. This ensures that when the sender sends a full window, the link can buffer any excess and continue transmitting.

Therefore, a reasonable buffer size is **1,250 segments**, which is equal to the bandwidth-delay product and the maximum window size.

Alternatively, if we want to be more conservative and account for the fact that the window size oscillates, we might choose a buffer size of half the maximum window size, or 625 segments, because the window never exceeds 1,250 and never goes below 625. But to guarantee that the link never goes idle, the buffer should be at least the maximum window size minus the link's capacity to transmit during the round-trip time. Actually, the link can transmit 1,250 segments in one round-trip time. So if the sender sends 1,250 segments at once, the link can transmit them all in one round-trip time without needing a buffer. But if the sender sends them in a burst, the buffer needs to hold them until they can be transmitted. The link rate is 1 Gbps, and the segment size is 12,000 bits. The time to transmit one segment is 12,000 / 1,000,000,000 = 0.000012 seconds = 12 microseconds. The round-trip time is 15 msec = 15,000 microseconds. So the link can transmit 15,000 / 12 = 1,250 segments in one round-trip time. This matches the bandwidth-delay product.

If the sender sends a full window of 1,250 segments at once, the link will take 15 msec to transmit them all. The sender will then wait for acknowledgements. If the buffer is 1,250 segments, it can hold all the segments until they are transmitted. If the buffer is smaller, some segments may be dropped, causing retransmissions and reducing throughput.

Therefore, to always keep the link busy, the buffer size should be at least the bandwidth-delay product, which is **1,250 segments**. This ensures that the link can absorb a full window of data and continue transmitting without idle time.

In practice, buffer sizes are often chosen to be the bandwidth-delay product divided by the square root of the number of flows, but for a single flow, the full bandwidth-delay product is appropriate. So the buffer size should be **1,250 segments**, or about 1.875 MB.

Justification: The buffer must be large enough to hold the data that can arrive during one round-trip time. The bandwidth-delay product gives this amount. For a single TCP flow, the maximum window size is equal to the bandwidth-delay product, so the buffer should be at least that size to prevent the link from going idle when the sender's window is full. A larger buffer would only add unnecessary delay.

---

## End of Exam Prep Q&A Document

This document covers all questions from COMP347 Assignment 2, including short answer questions on TCP reliability, GBN, IPv6, SNMP, SDN, and BGP, as well as long answer questions on checksums, Dijkstra's algorithm, CIDR routing, and TCP congestion control. Each answer is presented in a comprehensive, rigorous manner suitable for exam preparation.