---
title: "Section 3 Link Layer Protocols and Local Area Networks"
description: "Computer Networks study notes · Unit 6"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 6"
tags: ["computer-networks"]
listed: false
draft: false
---

# Link-Layer Protocols and Local Area Networks: Comprehensive Exam Prep Q&A

---

## SECTION 1: MULTIPLE ACCESS LINKS AND PROTOCOLS

---

**Q1: What is a point-to-point link?**

**A:** A point-to-point link consists of a single sender at one end of the link and a single receiver at the other end. The sender and receiver are directly connected by a dedicated communication channel. This type of link is common in dial-up connections, leased lines, and some wide-area network (WAN) technologies. Because only two devices share the link, there is no need for complex multiple-access coordination—the sender can transmit whenever the link is idle, and the receiver simply receives whatever is sent. Point-to-point links contrast with broadcast links, where multiple devices share the same communication medium.

---

**Q2: What is a multicast link?**

**A:** A multicast link is a type of communication link where multiple senders and multiple receivers share the same broadcast channel. When one node transmits a frame, all other nodes connected to the link receive a copy of that frame. This is also referred to as a broadcast link or multiple-access link. The term "multicast" emphasizes that a single transmission can be received by multiple destinations. Because multiple nodes share the same medium, a multiple-access protocol is required to coordinate transmissions and avoid collisions.

---

**Q3: What is the multiple-access problem? How is it solved?**

**A:** The multiple-access problem arises when multiple nodes share a single broadcast communication channel and all need to transmit data. If two or more nodes transmit simultaneously, their signals overlap and interfere with each other, causing a frame collision. When a collision occurs, the frames involved are corrupted and cannot be correctly received by any destination. The multiple-access problem is: how do we coordinate the transmissions of multiple nodes so that they can share the channel efficiently and fairly, without excessive collisions?

The problem is solved using multiple-access protocols, which fall into three broad categories:
1. **Channel partitioning protocols** — divide the channel into smaller pieces (time slots, frequency bands, or code sequences) and allocate each piece to a node.
2. **Random access protocols** — allow nodes to transmit at full rate whenever they wish, with rules for detecting and recovering from collisions.
3. **Taking-turns protocols** — nodes take turns transmitting in a coordinated fashion, either through polling or token passing.

---

**Q4: What is a frame collision?**

**A:** A frame collision occurs when two or more nodes transmit frames simultaneously on a shared broadcast channel. The signals from the different nodes overlap in time and frequency, causing interference that corrupts the data in all colliding frames. When a collision occurs, none of the involved frames can be successfully received by any destination. Collisions waste channel bandwidth and increase delay, so multiple-access protocols are designed to minimize their occurrence and recover efficiently when they do happen.

---

**Q5: What are the characteristics of a multiple access protocol for a broadcast channel?**

**A:** An effective multiple-access protocol for a broadcast channel should have the following characteristics:

1. **High throughput** — When only one node has data to send, that node should be able to transmit at the full channel rate (R bps).
2. **Fairness** — When multiple nodes have data to send, they should share the channel fairly, with no node being starved of bandwidth.
3. **Decentralization** — The protocol should not rely on a single central controller that could fail or become a bottleneck.
4. **Simplicity** — The protocol should be simple to implement and inexpensive.
5. **Efficiency** — The protocol should minimize the fraction of time the channel is idle or wasted on collisions.
6. **Low overhead** — The protocol should not require excessive signaling or control messages.

---

**Q6: What are channel partitioning protocols? How do they work?**

**A:** Channel partitioning protocols divide the communication channel into smaller, independent pieces and allocate each piece to a specific node or group of nodes. There are three main types:

1. **Time Division Multiplexing (TDM):** Time is divided into time frames, and each time frame is divided into time slots. Each node is assigned a specific time slot in each frame. A node can transmit only during its assigned slot. This guarantees collision-free transmission but wastes bandwidth when a node has nothing to send during its slot.

2. **Frequency Division Multiplexing (FDM):** The channel's frequency spectrum is divided into frequency bands, and each node is assigned a specific frequency band. A node can transmit continuously in its own band. Like TDM, this is collision-free but wastes bandwidth when a node is idle.

3. **Code Division Multiple Access (CDMA):** All nodes transmit simultaneously over the entire frequency spectrum. Each node is assigned a unique code (a sequence of chips). The receiver can extract a specific node's signal by using that node's code. CDMA allows all nodes to transmit at all times without collision, but it requires complex encoding and decoding.

Channel partitioning protocols are efficient when the number of nodes is small and all nodes have steady traffic to send. They become inefficient when traffic is bursty and only a few nodes are active at any given time.

---

**Q7: What is TDM? What is FDM? How do they work?**

**A:**

**TDM (Time Division Multiplexing):**
- Time is divided into repeating time frames.
- Each time frame is divided into N time slots, where N is the number of nodes.
- Each node is assigned one time slot per frame.
- A node can transmit only during its assigned slot.
- When a node has no data to send, its slot goes idle, wasting bandwidth.
- TDM is collision-free because only one node transmits at a time.
- TDM is efficient when all nodes have a steady stream of data to send.

**FDM (Frequency Division Multiplexing):**
- The channel's frequency spectrum is divided into N frequency bands.
- Each node is assigned a specific frequency band.
- A node can transmit continuously in its assigned band.
- When a node has no data to send, its band goes unused, wasting spectrum.
- FDM is collision-free because each node uses a different frequency.
- FDM is efficient when all nodes have a steady stream of data to send.

Both TDM and FDM are channel partitioning protocols that pre-allocate resources to nodes. They work well under heavy, steady load but poorly under bursty traffic.

---

**Q8: What is Code Division Multiple Access (CDMA)? How does it work?**

**A:** CDMA (Code Division Multiple Access) is a channel partitioning protocol in which all nodes transmit simultaneously over the entire frequency spectrum at all times. Instead of separating users by time (TDM) or frequency (FDM), CDMA separates users by code.

Each node is assigned a unique code sequence, called a chip sequence. When a node transmits a data bit, it multiplies the bit by its chip sequence, producing a signal that is spread across the entire frequency spectrum. The receiver, knowing the sender's code, can extract the original data by correlating the received signal with the sender's code. Signals from other nodes appear as noise and are filtered out.

Key properties:
- All nodes can transmit simultaneously without collision.
- The receiver must know the sender's code to decode the signal.
- CDMA is robust against interference and eavesdropping.
- It is widely used in cellular networks and military communications.

---

**Q9: What is the chipping rate?**

**A:** The chipping rate is the rate at which chips (the individual elements of a CDMA code sequence) are transmitted. In CDMA, each data bit is multiplied by a chip sequence containing multiple chips. For example, if a data bit is multiplied by a code of 8 chips, then for every data bit transmitted, 8 chips are sent. The chipping rate is typically much higher than the data rate. For instance, if the data rate is 1 Mbps and each bit is encoded with 8 chips, the chipping rate is 8 Mcps (megachips per second). The ratio of chipping rate to data rate is called the spreading factor or processing gain.

---

**Q10: What are random access protocols? How do they work?**

**A:** Random access protocols allow nodes to transmit at the full channel rate whenever they have data to send. There is no pre-allocation of time slots or frequency bands. Instead, nodes follow a set of rules to decide when to transmit and how to recover from collisions.

Key characteristics:
- A node with data to send transmits immediately at full rate.
- If a collision occurs, the node waits a random amount of time and retransmits.
- There is no central controller; each node makes its own decisions.
- Random access protocols are simple and efficient for bursty traffic.

Examples include:
- **ALOHA** — the simplest random access protocol; nodes transmit whenever they have data.
- **Slotted ALOHA** — time is divided into slots; nodes transmit only at the beginning of a slot.
- **CSMA (Carrier Sense Multiple Access)** — nodes listen to the channel before transmitting.
- **CSMA/CD (CSMA with Collision Detection)** — nodes detect collisions and abort transmission early.

Random access protocols work well when the number of active nodes is small and traffic is bursty. Under heavy load, collisions increase and throughput decreases.

---

**Q11: What are the ALOHA protocols?**

**A:** The ALOHA protocols are the earliest random access protocols, developed at the University of Hawaii in the 1970s for wireless packet radio networks. There are two versions:

1. **Pure ALOHA:**
   - A node transmits whenever it has a frame to send.
   - If a collision occurs (i.e., the frame is not acknowledged), the node waits a random time and retransmits.
   - The maximum throughput of pure ALOHA is approximately 18.4% of the channel capacity (1/(2e)).
   - Collisions can occur even if transmissions overlap only partially.

2. **Slotted ALOHA:**
   - Time is divided into equal-length slots.
   - A node can transmit only at the beginning of a slot.
   - If a collision occurs, the node retransmits at the beginning of a later slot.
   - The maximum throughput of slotted ALOHA is approximately 36.8% of the channel capacity (1/e).
   - Slotted ALOHA doubles the efficiency of pure ALOHA because collisions can only occur when nodes transmit in the same slot.

Both protocols are simple but inefficient under heavy load. They are rarely used in modern networks but are important historically and theoretically.

---

**Q12: What is the slotted ALOHA protocol?**

**A:** Slotted ALOHA is an improvement over pure ALOHA. In slotted ALOHA:

- Time is divided into discrete slots of equal length (one slot = one frame transmission time).
- All nodes are synchronized so that they agree on slot boundaries.
- A node with a frame to send waits until the beginning of the next slot and then transmits the entire frame in that slot.
- If a collision occurs (two or more nodes transmit in the same slot), the frames are corrupted.
- Each colliding node waits a random number of slots before retransmitting.

Advantages:
- Collisions can only occur when nodes transmit in the same slot, reducing the collision window.
- Maximum throughput is 1/e ≈ 36.8%, double that of pure ALOHA.

Disadvantages:
- Requires synchronization among all nodes.
- Still inefficient under heavy load.
- Idle slots waste bandwidth when no node has data to send.

---

**Q13: What are the Carrier Sense Multiple Access (CSMA) protocols?**

**A:** CSMA (Carrier Sense Multiple Access) protocols improve on ALOHA by requiring nodes to listen to the channel before transmitting. The key idea is: "Listen before you speak."

How CSMA works:
1. A node with a frame to send first listens to the channel (carrier sensing).
2. If the channel is idle, the node begins transmitting.
3. If the channel is busy, the node waits until the channel becomes idle, then transmits.
4. If a collision occurs, the node waits a random time and retransmits.

CSMA reduces collisions compared to ALOHA because nodes avoid transmitting when the channel is already in use. However, collisions can still occur due to propagation delay: a node may sense the channel as idle just before another node's transmission reaches it.

Variants of CSMA:
- **1-persistent CSMA:** When the channel becomes idle, a node transmits with probability 1.
- **Non-persistent CSMA:** When the channel is busy, a node waits a random time before sensing again.
- **p-persistent CSMA:** When the channel becomes idle, a node transmits with probability p.

CSMA is used in Ethernet (as CSMA/CD) and Wi-Fi (as CSMA/CA).

---

**Q14: How does the CSMA/CD protocol work?**

**A:** CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is an enhancement of CSMA used in wired Ethernet networks. It adds collision detection to carrier sensing.

Step-by-step operation:

1. **Carrier sensing:** A node with a frame to send listens to the channel. If the channel is idle, it begins transmitting. If the channel is busy, it waits until it becomes idle.

2. **Transmission:** The node transmits its frame while continuing to monitor the channel.

3. **Collision detection:** If the node detects a collision (by observing signal interference), it immediately stops transmitting and sends a jam signal to ensure all other nodes detect the collision.

4. **Backoff:** After sending the jam signal, the node waits a random amount of time (determined by the binary exponential backoff algorithm) before attempting to retransmit.

5. **Retransmission:** The node returns to step 1 and repeats the process.

CSMA/CD is efficient because collisions are detected quickly, and transmission is aborted early, saving bandwidth. It is used in traditional Ethernet (10 Mbps and 100 Mbps) but not in modern switched Ethernet, where collisions are eliminated by full-duplex operation.

---

**Q15: What is channel propagation delay, and why is it important in CSMA/CD?**

**A:** Channel propagation delay is the time it takes for a signal to travel from one end of the communication channel to the other. It is determined by the physical length of the channel and the speed of signal propagation (typically about 2/3 the speed of light in copper or fiber).

In CSMA/CD, propagation delay is critical because it determines the maximum time it takes for a transmitting node to detect a collision. If a node begins transmitting and another node at the far end of the channel also begins transmitting, the first node will not detect the collision until the second node's signal reaches it. This means the first node must continue transmitting long enough to detect the collision.

The worst-case collision detection time is 2 × propagation delay (round-trip time). For CSMA/CD to work correctly, the frame transmission time must be at least twice the propagation delay. This imposes a minimum frame size for a given network length and data rate. If frames are too short, a node might finish transmitting before the collision signal reaches it, leading to undetected collisions.

---

**Q16: What is binary exponential backoff?**

**A:** Binary exponential backoff is the algorithm used by CSMA/CD (and other random access protocols) to determine how long a node should wait after a collision before attempting to retransmit.

How it works:
1. After the first collision, the node chooses a random value K from {0, 1}. It waits K × 512 bit times before retransmitting.
2. After the second collision, K is chosen from {0, 1, 2, 3}.
3. After the third collision, K is chosen from {0, 1, 2, 3, 4, 5, 6, 7}.
4. In general, after the nth collision, K is chosen from {0, 1, ..., 2^n - 1}.
5. After 10 collisions, the range is frozen at {0, 1, ..., 1023}.
6. After 16 collisions, the node gives up and reports an error.

The backoff time is K × 512 bit times. This means that as the number of collisions increases, the average waiting time increases exponentially, reducing the likelihood of repeated collisions. The algorithm adapts to the level of congestion: when many nodes are competing, the backoff intervals become longer, spreading out retransmissions and reducing collision probability.

---

**Q17: What is CSMA/CD efficiency?**

**A:** The efficiency of CSMA/CD is defined as the fraction of time the channel is used for successful transmissions when there are many nodes with frames to send. A commonly used formula for CSMA/CD efficiency is:

Efficiency = 1 / (1 + 5 × (propagation delay / transmission time))

where:
- Propagation delay = time for a signal to travel the length of the channel (τ).
- Transmission time = time to transmit a maximum-size frame (T).

Alternatively, efficiency can be expressed as:

Efficiency = 1 / (1 + 5 × τ / T)

Key observations:
- As the propagation delay (τ) approaches 0, efficiency approaches 1.
- As the transmission time (T) becomes very large (i.e., large frames), efficiency approaches 1.
- As τ / T increases (e.g., long cables, small frames, high data rates), efficiency decreases.

CSMA/CD efficiency is high when the channel is short and frames are large. It decreases when the channel is long or frames are small.

---

**Q18: What are taking-turns protocols?**

**A:** Taking-turns protocols are multiple-access protocols in which nodes take turns transmitting in a coordinated manner. Unlike random access protocols, which allow nodes to transmit whenever they wish, taking-turns protocols ensure that only one node transmits at a time, eliminating collisions.

There are two main types:

1. **Polling protocols:** A central controller (the poll master) polls each node in turn. When polled, a node may transmit up to a maximum number of frames. If a node has nothing to send, the master moves on to the next node. Polling eliminates collisions but introduces polling delay and a single point of failure (the master).

2. **Token-passing protocols:** A special control frame called a token circulates around the network in a predetermined order. A node can transmit only when it holds the token. After transmitting, the node passes the token to the next node. Token passing is decentralized (no master) but requires complex token management and can suffer from token loss or duplication.

Taking-turns protocols are efficient under heavy load because they eliminate collisions. However, they can be inefficient under light load because nodes must wait for their turn even when the channel is idle.

---

**Q19: What is a polling protocol? What are polls?**

**A:** A polling protocol is a taking-turns multiple-access protocol in which a central controller (called the poll master) coordinates transmissions by polling each node in turn.

How it works:
- The poll master sends a polling message (a "poll") to each node in sequence.
- When a node receives a poll, it may transmit one or more frames.
- If the node has no data to send, it sends a negative acknowledgment or simply remains silent.
- The master then polls the next node.

Polls are the control messages sent by the master to grant transmission permission to a node. A poll typically contains the address of the node being polled and may specify the maximum number of frames the node is allowed to send.

Advantages:
- No collisions.
- Fair access to the channel.
- Can provide priority or guaranteed bandwidth.

Disadvantages:
- Polling delay (the time to poll all nodes).
- Single point of failure (the master).
- Overhead of polling messages.
- Inefficient when few nodes have data to send.

Polling is used in some wireless networks, Bluetooth, and industrial control systems.

---

**Q20: What is a token-passing protocol? What is a token?**

**A:** A token-passing protocol is a taking-turns multiple-access protocol in which a special control frame called a token circulates around the network. A node can transmit only when it holds the token.

How it works:
- The token is passed from node to node in a predetermined order (a logical ring).
- When a node receives the token and has data to send, it transmits its frames and then passes the token to the next node.
- If the node has no data to send, it immediately passes the token to the next node.
- Only one node can transmit at a time because only one node holds the token.

The token is a small control frame that grants the holder the right to transmit. It contains no data (or minimal control information) and is distinct from data frames.

Advantages:
- No collisions.
- Fair access.
- Deterministic access time (bounded delay).
- Decentralized (no master).

Disadvantages:
- Token management overhead (token loss, duplicate tokens).
- Delay when the token is passed through idle nodes.
- Complexity of implementation.

Token-passing protocols are used in Token Ring (IEEE 802.5) and FDDI (Fiber Distributed Data Interface) networks.

---

**Q21: What is DOCSIS?**

**A:** DOCSIS (Data Over Cable Service Interface Specification) is the link-layer protocol used for cable access networks (i.e., internet access over cable TV infrastructure). It defines how cable modems communicate with the cable modem termination system (CMTS) at the cable headend.

Key features of DOCSIS:
- Uses a combination of FDM and TDM for downstream (headend to subscriber) and upstream (subscriber to headend) channels.
- Downstream channels are broadcast to all subscribers; each modem filters the packets addressed to it.
- Upstream channels are shared among subscribers; access is coordinated using a request-grant mechanism similar to polling.
- Supports data rates of tens to hundreds of Mbps.
- Provides quality of service (QoS) guarantees.
- Versions include DOCSIS 1.0, 1.1, 2.0, 3.0, and 3.1, with increasing speeds and capabilities.

DOCSIS is important because it enables high-speed internet access over existing cable TV infrastructure.

---

## SECTION 2: SWITCHED LOCAL AREA NETWORKS

---

**Q22: What is a switched local area network?**

**A:** A switched local area network (switched LAN) is a LAN that uses link-layer switches to interconnect devices. Unlike shared-medium LANs (e.g., Ethernet using hubs), where all devices share the same collision domain, a switched LAN divides the network into multiple collision domains, with each switch port providing a dedicated connection to a device or segment.

Key characteristics:
- Each switch port operates in full-duplex mode, eliminating collisions.
- Switches forward frames only to the port leading to the destination, based on MAC addresses.
- Switches self-learn which MAC addresses are reachable via which ports.
- Switches can interconnect segments with different speeds (e.g., 10 Mbps, 100 Mbps, 1 Gbps).
- Switched LANs provide higher aggregate throughput, lower latency, and better security than shared-medium LANs.

Switched LANs are the dominant LAN technology today.

---

**Q23: What is link-layer addressing?**

**A:** Link-layer addressing is the mechanism used to identify devices at the link layer (Layer 2 of the OSI model). Each network interface card (NIC) has a unique link-layer address, called a MAC address (Media Access Control address) or LAN address. This address is used to deliver frames within a local area network.

Link-layer addresses are flat (no hierarchy) and are 48 bits long (6 bytes) for Ethernet. They are typically written as six groups of two hexadecimal digits, separated by colons or hyphens (e.g., 00:1A:2B:3C:4D:5E).

Link-layer addressing is necessary because different link-layer technologies (Ethernet, Wi-Fi, etc.) have different addressing schemes, and because network-layer addresses (IP addresses) are not sufficient for delivering frames within a LAN.

---

**Q24: What is a LAN address? What is a physical address? What is a MAC address?**

**A:** A LAN address, physical address, or MAC address (Media Access Control address) is a unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment. These terms are often used interchangeably.

Key facts:
- MAC addresses are 48 bits long (6 bytes) for Ethernet.
- They are typically written in hexadecimal notation (e.g., 00:1A:2B:3C:4D:5E).
- The first 24 bits are the Organizationally Unique Identifier (OUI), assigned by the IEEE to the manufacturer.
- The last 24 bits are assigned by the manufacturer to the specific device.
- MAC addresses are flat (no hierarchy) and are used only within a local network.
- They are not routable across the internet; routers use IP addresses for global routing.
- MAC addresses can be changed in software (MAC spoofing), but the hardware address is fixed.

---

**Q25: Why does a node in a network have a LAN address in addition to a network-layer address?**

**A:** A node has both a LAN address (MAC address) and a network-layer address (IP address) because they serve different purposes and operate at different layers of the network stack.

Reasons for having both:
1. **Layer independence:** The link layer and network layer are independent. A node may use different link-layer technologies (Ethernet, Wi-Fi, etc.) while still using the same network-layer protocol (IP). The MAC address identifies the specific hardware interface, while the IP address identifies the node's location in the global network topology.

2. **Local vs. global delivery:** MAC addresses are used for local delivery within a LAN (hop-by-hop), while IP addresses are used for end-to-end delivery across multiple networks (source-to-destination).

3. **Hierarchical routing:** IP addresses are hierarchical (network prefix + host suffix), enabling efficient routing across the internet. MAC addresses are flat, making them unsuitable for global routing.

4. **Address resolution:** When a node wants to send a packet to another node on the same LAN, it knows the destination's IP address but needs the destination's MAC address to construct the link-layer frame. ARP (Address Resolution Protocol) is used to map IP addresses to MAC addresses.

5. **Flexibility:** Separating the two addressing schemes allows devices to move between networks (changing IP address) without changing their MAC address, and allows network interfaces to be replaced (changing MAC address) without changing the IP address.

---

**Q26: What is the broadcast address for a LAN?**

**A:** The broadcast address for a LAN is a special MAC address that all devices on the LAN recognize as intended for them. For Ethernet and most IEEE 802 LANs, the broadcast address is:

**FF:FF:FF:FF:FF:FF**

When a frame is sent to this address, all devices on the LAN receive and process it. Broadcast frames are used for protocols like ARP (to discover MAC addresses), DHCP (to obtain IP addresses), and other network management functions.

---

**Q27: What is the Address Resolution Protocol (ARP)? Why is it necessary?**

**A:** ARP (Address Resolution Protocol) is a protocol used to map a network-layer address (IP address) to a link-layer address (MAC address) on a local area network. When a node wants to send an IP datagram to another node on the same LAN, it needs to encapsulate the datagram in a link-layer frame, which requires the destination's MAC address. ARP provides the mechanism to discover this MAC address.

Why ARP is necessary:
- IP addresses and MAC addresses are independent. A node may know the IP address of a destination but not its MAC address.
- Link-layer frames require MAC addresses for delivery within the LAN.
- ARP dynamically resolves IP addresses to MAC addresses without manual configuration.
- ARP is essential for the operation of IP over Ethernet and other broadcast LAN technologies.

How ARP works:
1. When a node needs to resolve an IP address, it broadcasts an ARP request packet to all devices on the LAN.
2. The ARP request contains the sender's IP and MAC addresses and the target IP address.
3. The device with the target IP address responds with an ARP reply containing its MAC address.
4. The requesting node caches the IP-to-MAC mapping in its ARP table for future use.

---

**Q28: What is an ARP table? What is an ARP packet?**

**A:** An ARP table (also called an ARP cache) is a data structure maintained by each node on a LAN that stores recent mappings of IP addresses to MAC addresses. Each entry typically contains:
- IP address
- MAC address
- Type of entry (dynamic or static)
- Time-to-live (TTL) or expiration time

ARP tables are populated dynamically through ARP requests and replies. Entries expire after a certain period (typically 15-20 minutes) to accommodate changes in the network (e.g., a device changing its MAC address or being replaced).

An ARP packet is the message format used by ARP to request or reply to address resolution queries. An ARP packet contains:
- Hardware type (e.g., Ethernet)
- Protocol type (e.g., IPv4)
- Hardware address length (e.g., 6 bytes for MAC)
- Protocol address length (e.g., 4 bytes for IPv4)
- Operation code (1 = request, 2 = reply)
- Sender hardware address (MAC)
- Sender protocol address (IP)
- Target hardware address (MAC; zero in requests)
- Target protocol address (IP)

ARP packets are encapsulated directly in link-layer frames (e.g., Ethernet frames) with a special EtherType value (0x0806 for ARP).

---

**Q29: How does ARP help send a datagram to a node outside the LAN?**

**A:** When a node wants to send a datagram to a destination outside its LAN (i.e., on a different network), it cannot directly resolve the destination's MAC address because ARP only works within a LAN. Instead, the node uses ARP to resolve the MAC address of the next-hop router (the default gateway).

The process:
1. The source node determines that the destination IP address is not on its local subnet (by comparing network prefixes).
2. The source node looks up the IP address of its default gateway (router) in its ARP table.
3. If the gateway's MAC address is not in the ARP table, the source node broadcasts an ARP request for the gateway's IP address.
4. The gateway responds with its MAC address.
5. The source node encapsulates the IP datagram in a link-layer frame addressed to the gateway's MAC address.
6. The frame is delivered to the gateway, which then forwards the datagram toward the destination (possibly through multiple routers).

Thus, ARP is used to resolve the MAC address of the next-hop router, not the final destination.

---

**Q30: What is Ethernet?**

**A:** Ethernet is the most widely used LAN technology in the world. It was developed in the 1970s by Xerox PARC and standardized by the IEEE as IEEE 802.3. Ethernet operates at the link layer (Layer 2) and defines the physical and data link layer protocols for wired LANs.

Key characteristics:
- Uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) for shared-medium access (in older versions).
- Uses MAC addresses for addressing.
- Supports data rates from 10 Mbps to 400 Gbps and beyond.
- Uses a frame format with fields for destination MAC, source MAC, type/length, data, and CRC.
- Provides connectionless, unreliable service (no acknowledgments, no retransmissions at the link layer).
- Dominates the LAN market due to its simplicity, low cost, and scalability.

---

**Q31: What is the structure of Ethernet frames?**

**A:** An Ethernet frame consists of the following fields:

1. **Preamble (7 bytes):** A pattern of alternating 1s and 0s used for synchronization. It allows the receiver to lock onto the incoming bit stream.

2. **Start Frame Delimiter (SFD) (1 byte):** The sequence 10101011, indicating the start of the actual frame.

3. **Destination MAC Address (6 bytes):** The MAC address of the intended recipient.

4. **Source MAC Address (6 bytes):** The MAC address of the sender.

5. **Type/Length (2 bytes):** Indicates either the type of network-layer protocol (e.g., 0x0800 for IPv4, 0x0806 for ARP, 0x86DD for IPv6) or the length of the data field (if value ≤ 1500).

6. **Data/Payload (46–1500 bytes):** The actual data from the network layer. If the payload is less than 46 bytes, padding is added to meet the minimum frame size.

7. **Frame Check Sequence (FCS) (4 bytes):** A CRC-32 checksum used for error detection.

Total minimum frame size: 64 bytes (excluding preamble and SFD).
Total maximum frame size: 1518 bytes (excluding preamble and SFD).

---

**Q32: Why is Ethernet said to provide unreliable connectionless services?**

**A:** Ethernet is described as providing unreliable connectionless services for the following reasons:

**Connectionless:**
- Ethernet does not establish a connection before sending data.
- There is no handshake or connection setup between the sender and receiver.
- Each frame is sent independently, and the network does not maintain state about the communication.

**Unreliable:**
- Ethernet does not provide acknowledgments for received frames.
- If a frame is lost or corrupted (detected by CRC), Ethernet simply drops it; there is no retransmission at the link layer.
- Error recovery is left to higher-layer protocols (e.g., TCP), which can detect lost data and request retransmission.

This design keeps Ethernet simple and efficient. Reliability is handled end-to-end by transport-layer protocols, which is more appropriate for heterogeneous networks.

---

**Q33: What band is used for data transmission in Ethernet?**

**A:** Ethernet uses baseband transmission, meaning the entire bandwidth of the cable is used for a single data signal. The digital signal is transmitted directly over the medium without modulation onto a carrier frequency. This is in contrast to broadband transmission, which divides the bandwidth into multiple channels.

Baseband transmission is simple and inexpensive, making it suitable for LANs. Ethernet variants are named according to their speed and medium (e.g., 10BASE-T, 100BASE-TX, 1000BASE-LX), where "BASE" indicates baseband transmission.

---

**Q34: Why is Manchester encoding used in Ethernet?**

**A:** Manchester encoding is used in traditional Ethernet (10 Mbps) for the following reasons:

1. **Self-clocking:** Manchester encoding combines the clock signal with the data signal. Each bit period is divided into two halves: a transition occurs in the middle of each bit period. This allows the receiver to synchronize its clock with the sender's clock without a separate clock line.

2. **DC balance:** Manchester encoding ensures that the signal has no DC component, which is important for transformer-coupled interfaces and for avoiding baseline wander.

3. **Error detection:** The guaranteed mid-bit transition makes it easy to detect certain types of errors (e.g., loss of signal).

4. **Simplicity:** Manchester encoding is simple to implement in hardware.

The disadvantage of Manchester encoding is that it requires twice the bandwidth of the data rate (e.g., 10 Mbps Ethernet requires 20 MHz of bandwidth). This is why it is not used in faster Ethernet variants (100 Mbps and above), which use more efficient encoding schemes like 4B/5B, 8B/10B, or PAM-5.

---

**Q35: What multicast access protocol is used in Ethernet?**

**A:** Ethernet uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) as its multiple access protocol for shared-medium (half-duplex) operation. In modern switched Ethernet, CSMA/CD is not used because switches provide full-duplex, collision-free operation.

---

**Q36: Why is a jam signal used in Ethernet?**

**A:** A jam signal is used in Ethernet CSMA/CD to ensure that all nodes on the network detect a collision. When a transmitting node detects a collision, it immediately stops transmitting its data and sends a jam signal (a 32-bit pattern) instead. The jam signal is long enough to ensure that all other nodes on the network also detect the collision and stop transmitting. This prevents a situation where a node might finish transmitting a short frame before the collision signal reaches it, leading to undetected collisions. After sending the jam signal, the node waits a random backoff time before retransmitting.

---

**Q37: How is the efficiency of Ethernet defined?**

**A:** The efficiency of Ethernet (specifically CSMA/CD) is defined as the fraction of time the channel is used for successful transmissions when there are many nodes with frames to send. A commonly used formula is:

Efficiency = 1 / (1 + 5 × (propagation delay / transmission time))

where:
- Propagation delay (τ) = time for a signal to travel the length of the channel.
- Transmission time (T) = time to transmit a maximum-size frame.

Alternatively:

Efficiency = 1 / (1 + 5 × τ / T)

Key points:
- Efficiency approaches 1 as τ/T approaches 0.
- Efficiency decreases as the network becomes longer (larger τ) or the data rate increases (smaller T for a given frame size).
- For a given network, efficiency can be improved by using larger frames.

---

**Q38: What is a repeater in LANs?**

**A:** A repeater is a physical-layer device that regenerates and amplifies signals to extend the distance over which data can be transmitted. It receives a signal, cleans it up (removes noise and distortion), and retransmits it at full strength. Repeaters operate at the bit level and do not understand frames, MAC addresses, or protocols. They simply extend the physical medium.

In Ethernet, repeaters were used to connect segments of a LAN, allowing the network to span longer distances. However, repeaters do not isolate collision domains; all segments connected by a repeater form a single collision domain. Modern networks use switches instead of repeaters.

---

**Q39: What is 10BASE2 Ethernet? What physical medium is used?**

**A:** 10BASE2 is an early Ethernet standard (IEEE 802.3a) that uses thin coaxial cable as the physical medium. Key characteristics:
- Data rate: 10 Mbps
- Transmission: Baseband
- Maximum segment length: 185 meters (hence "2" for approximately 200 meters)
- Topology: Bus (all devices connect to a single coaxial cable)
- Connections: BNC T-connectors and terminators at each end
- Collision domain: All devices on the bus share the same collision domain
- Also known as "Thinnet" or "Cheapernet"

10BASE2 was popular in the late 1980s and early 1990s due to its low cost and ease of installation compared to 10BASE5 (thick coax). However, it was replaced by 10BASE-T (twisted-pair) in the 1990s.

---

**Q40: What are the main topologies for LAN implementation?**

**A:** The main topologies for LAN implementation are:

1. **Bus topology:** All devices connect to a single shared communication medium (e.g., coaxial cable). Data is broadcast to all devices; only the intended recipient accepts the frame. 10BASE2 and 10BASE5 Ethernet are examples. Bus topologies are simple but suffer from collisions and are difficult to troubleshoot.

2. **Star topology:** All devices connect to a central device (hub or switch) via point-to-point links. In a hub-based star, all devices share a single collision domain. In a switch-based star, each device has a dedicated collision domain. Star topologies are easy to manage and are the dominant LAN topology today.

3. **Ring topology:** Devices connect in a closed loop, with each device connected to exactly two neighbors. Data travels around the ring in one direction. Token Ring and FDDI are examples. Ring topologies provide deterministic access but are complex and prone to failure if a link breaks.

4. **Tree topology:** A hierarchical combination of star and bus topologies. Multiple star networks are connected to a backbone bus. This is common in large LANs.

5. **Mesh topology:** Every device connects to every other device. Full mesh is expensive and impractical for LANs; partial mesh is used in some backbone networks.

Modern LANs predominantly use star topologies with switches at the center.

---

**Q41: What are the important devices used to build 10BASE-T or 100BASE-T Ethernet?**

**A:** The important devices used to build 10BASE-T (10 Mbps) or 100BASE-T (100 Mbps) Ethernet networks are:

1. **Hubs:** A central connection point for devices in a star topology. Hubs operate at the physical layer, repeating signals to all ports. All devices connected to a hub share a single collision domain. Hubs are half-duplex and use CSMA/CD.

2. **Switches:** A central connection point that operates at the data link layer (Layer 2). Switches forward frames only to the port leading to the destination, based on MAC addresses. Each switch port is a separate collision domain. Switches support full-duplex operation, eliminating collisions.

3. **Network Interface Cards (NICs):** Installed in each device (computer, printer, etc.) to provide the physical and data link layer interface to the network. Each NIC has a unique MAC address.

4. **Twisted-pair cables:** Category 3, 4, or 5 UTP (Unshielded Twisted Pair) cables with RJ-45 connectors. 10BASE-T uses Category 3 or better; 100BASE-TX uses Category 5 or better.

5. **Patch panels and wall jacks:** Used for structured cabling in buildings.

6. **Routers:** Used to connect the LAN to other networks (e.g., the internet). Routers operate at the network layer (Layer 3).

---

**Q42: What is Gigabit Ethernet?**

**A:** Gigabit Ethernet (IEEE 802.3z and 802.3ab) is a version of Ethernet that supports data rates of 1 Gbps (1000 Mbps). It was introduced in the late 1990s and is now widely deployed in LANs and backbone networks.

Key characteristics:
- Data rate: 1 Gbps
- Variants:
  - 1000BASE-SX: Short-wavelength fiber, up to 550 m
  - 1000BASE-LX: Long-wavelength fiber, up to 5 km
  - 1000BASE-CX: Shielded copper cable, up to 25 m
  - 1000BASE-T: Category 5e or better UTP, up to 100 m
- Uses 8B/10B encoding for fiber and shielded copper; uses 4D-PAM5 for twisted pair.
- Supports full-duplex operation, eliminating collisions.
- Uses CSMA/CD only in half-duplex mode (rarely used).
- Supports jumbo frames (up to 9000 bytes) in some implementations.

Gigabit Ethernet is backward compatible with 10 Mbps and 100 Mbps Ethernet, allowing easy upgrades.

---

**Q43: What are buffered distributors?**

**A:** Buffered distributors are a concept used in Gigabit Ethernet (and other high-speed Ethernet variants) to improve efficiency in half-duplex shared-medium networks. In a buffered distributor, the shared medium is replaced by a central device that buffers incoming frames and schedules their transmission to avoid collisions.

How it works:
- Nodes send frames to the buffered distributor.
- The distributor stores incoming frames in buffers.
- The distributor schedules transmissions to the shared medium in a way that avoids collisions.
- This allows the network to operate at higher efficiency than CSMA/CD, especially under heavy load.

Buffered distributors were proposed as an alternative to CSMA/CD for Gigabit Ethernet but were not widely adopted because switched Ethernet (full-duplex) became the dominant technology.

---

**Q44: What are link-layer switches?**

**A:** Link-layer switches (also called Layer 2 switches or simply switches) are network devices that operate at the data link layer (Layer 2) to forward frames between devices on a LAN. They are the central connection point in modern star-topology LANs.

Key characteristics:
- Forward frames based on MAC addresses.
- Maintain a switch table (MAC address table) that maps MAC addresses to switch ports.
- Self-learn which MAC addresses are reachable via which ports.
- Provide dedicated, full-duplex connections to each device, eliminating collisions.
- Can interconnect segments with different speeds (e.g., 10/100/1000 Mbps).
- Support VLANs (Virtual LANs) for network segmentation.
- Are transparent to higher-layer protocols (IP, TCP, etc.).

Switches are essential for building scalable, high-performance LANs.

---

**Q45: What is forwarding and filtering at switches?**

**A:** Forwarding and filtering are the two main functions of a link-layer switch:

**Forwarding:** The process of determining which switch port a frame should be sent to, based on the destination MAC address. When a frame arrives at a switch port, the switch looks up the destination MAC address in its switch table. If the address is found, the switch forwards the frame only to the port associated with that address. If the address is not found, the switch floods the frame to all ports except the one it arrived on.

**Filtering:** The process of determining whether a frame should be dropped or forwarded. A switch filters a frame if the destination MAC address is on the same port as the source (i.e., the frame does not need to be forwarded). Filtering reduces unnecessary traffic on other segments.

Together, forwarding and filtering allow switches to efficiently deliver frames only where they need to go, improving network performance and security.

---

**Q46: What is a switch table?**

**A:** A switch table (also called a MAC address table or forwarding table) is a data structure maintained by a link-layer switch that maps MAC addresses to switch ports. Each entry in the table contains:
- MAC address
- Switch port number
- Timestamp (for aging)

The switch uses the table to make forwarding decisions. When a frame arrives, the switch looks up the destination MAC address in the table. If found, the frame is forwarded to the corresponding port. If not found, the frame is flooded to all ports except the incoming port.

The switch table is populated through self-learning: when a frame arrives on a port, the switch records the source MAC address and the port it arrived on. Entries expire after a period of inactivity (typically 5 minutes) to accommodate changes in the network topology.

---

**Q47: What is self-learning of switches?**

**A:** Self-learning is the ability of a link-layer switch to automatically build and maintain its switch table by observing the source MAC addresses of incoming frames. The switch does not require manual configuration of MAC-to-port mappings.

How self-learning works:
1. When a frame arrives on a switch port, the switch examines the source MAC address.
2. The switch records the source MAC address and the port it arrived on in its switch table (if not already present).
3. If the source MAC address is already in the table but associated with a different port, the switch updates the entry (the device has moved).
4. The switch uses the table to forward subsequent frames destined for that MAC address only to the correct port.
5. Entries in the table age out after a period of inactivity (typically 5 minutes) to keep the table current.

Self-learning makes switches plug-and-play: they can be installed without configuration and will automatically learn the network topology.

---

**Q48: What are the properties of link-layer switches?**

**A:** Link-layer switches have the following properties:

1. **Collision elimination:** Each switch port is a separate collision domain. Full-duplex operation eliminates collisions entirely.

2. **High aggregate throughput:** Multiple frames can be forwarded simultaneously on different ports, increasing total network capacity.

3. **MAC address learning:** Switches self-learn MAC addresses and their associated ports, requiring no manual configuration.

4. **Selective forwarding:** Frames are forwarded only to the port leading to the destination, reducing unnecessary traffic.

5. **Transparency:** Switches are transparent to hosts; they do not modify frames (except for VLAN tagging) and do not require changes to host software.

6. **Speed adaptation:** Switches can interconnect segments operating at different speeds (e.g., 10 Mbps, 100 Mbps, 1 Gbps).

7. **VLAN support:** Many switches support Virtual LANs, allowing logical segmentation of the network independent of physical topology.

8. **Plug-and-play:** Switches work out of the box without configuration.

9. **Spanning Tree Protocol:** Switches use STP to prevent loops when multiple switches are interconnected.

10. **Limited scalability:** Switches use flat MAC addressing, which does not scale to large internetworks. Routers are needed to connect large networks.

---

**Q49: What are the differences between switches and routers?**

**A:** The main differences between switches and routers are:

| Feature | Switch (Layer 2) | Router (Layer 3) |
|---------|------------------|------------------|
| OSI Layer | Data link layer (Layer 2) | Network layer (Layer 3) |
| Addressing | MAC addresses | IP addresses |
| Forwarding table | MAC address table | Routing table |
| Table construction | Self-learning (automatic) | Routing protocols (manual/automatic) |
| Broadcast domains | Single broadcast domain (unless VLANs) | Separate broadcast domains per interface |
| Collision domains | Separate collision domain per port | Separate collision domain per interface |
| Loop prevention | Spanning Tree Protocol (STP) | Routing protocols (e.g., OSPF, BGP) |
| Speed | Faster (hardware-based forwarding) | Slower (software-based forwarding, though modern routers use hardware) |
| Cost | Less expensive | More expensive |
| Scalability | Limited (flat MAC addressing) | Highly scalable (hierarchical IP addressing) |
| Security | Limited (MAC filtering, VLANs) | Extensive (ACLs, firewalls, NAT) |
| Traffic isolation | VLANs | Subnets, routing policies |
| Plug-and-play | Yes | No (requires configuration) |

Switches are used within LANs to connect devices; routers are used to connect networks (LANs to WANs, LANs to LANs).

---

**Q50: What are Virtual Local Area Networks (VLANs)?**

**A:** Virtual Local Area Networks (VLANs) are a technology that allows a physical network to be logically partitioned into multiple independent networks. Devices on different VLANs cannot communicate directly at the link layer, even if they are connected to the same physical switch.

How VLANs work:
- Switch ports are assigned to specific VLANs (e.g., VLAN 10, VLAN 20).
- Frames are tagged with a VLAN identifier (IEEE 802.1Q tag) when they traverse trunk links between switches.
- Each VLAN forms a separate broadcast domain.
- Communication between VLANs requires a router (or Layer 3 switch).

Benefits of VLANs:
- **Traffic isolation:** Broadcast traffic is contained within each VLAN.
- **Security:** Devices on different VLANs are isolated from each other.
- **Flexibility:** VLAN membership can be based on port, MAC address, or protocol, independent of physical location.
- **Cost savings:** Multiple logical networks can share the same physical infrastructure.
- **Simplified management:** Moves, adds, and changes are easier because they are logical rather than physical.

VLANs are widely used in enterprise networks.

---

**Q51: What is VLAN trunking?**

**A:** VLAN trunking is a mechanism for carrying traffic from multiple VLANs over a single physical link between two switches (or between a switch and a router). Instead of using a separate physical link for each VLAN, a trunk link carries frames from all VLANs, with each frame tagged with its VLAN identifier.

How it works:
- The trunk link is configured on specific ports of both switches.
- When a frame from VLAN X needs to cross the trunk, the switch adds an IEEE 802.1Q tag containing the VLAN ID.
- The receiving switch reads the tag and forwards the frame to the appropriate ports in VLAN X.
- Untagged frames are assigned to a default VLAN (native VLAN).

Benefits:
- Reduces the number of physical links required.
- Simplifies network management.
- Scales to many VLANs.

VLAN trunking is standardized as IEEE 802.1Q.

---

**Q52: What is a VLAN tag?**

**A:** A VLAN tag is a 4-byte field inserted into an Ethernet frame header to identify the VLAN to which the frame belongs. It is defined by the IEEE 802.1Q standard.

The VLAN tag consists of:
1. **Tag Protocol Identifier (TPID) (2 bytes):** Set to 0x8100 to indicate an 802.1Q-tagged frame.
2. **Tag Control Information (TCI) (2 bytes):**
   - **Priority (3 bits):** Used for quality of service (QoS).
   - **Canonical Format Indicator (CFI) (1 bit):** Indicates whether the MAC address is in canonical format.
   - **VLAN Identifier (VID) (12 bits):** Identifies the VLAN (0–4095; 0 and 4095 are reserved).

When a frame is tagged, the tag is inserted between the source MAC address and the Type/Length field. The receiving switch examines the VID to determine which VLAN the frame belongs to.

VLAN tagging is essential for VLAN trunking.

---

## SECTION 3: ADDITIONAL TOPICS AND REVIEW QUESTIONS

---

**Q53: What are two desirable properties of a multiple access protocol?**

**A:** Two desirable properties of a multiple access protocol are:

1. **Efficiency:** When a single node has data to send, it should be able to transmit at the full channel rate (R bps). The protocol should minimize idle time and collision overhead.

2. **Fairness:** When multiple nodes have data to send, they should share the channel fairly. No node should be starved of bandwidth, and each node should get a reasonable share of the channel capacity.

Additional desirable properties include decentralization (no single point of failure), simplicity (low implementation cost), and low overhead.

---

**Q54: What are the main reasons for the success of Ethernet?**

**A:** The main reasons for the success of Ethernet are:

1. **Simplicity:** Ethernet is simple to implement and understand.
2. **Low cost:** Ethernet hardware (NICs, cables, switches) is inexpensive.
3. **Scalability:** Ethernet supports data rates from 10 Mbps to 400 Gbps and beyond.
4. **Flexibility:** Ethernet can run over various physical media (twisted pair, coax, fiber).
5. **Backward compatibility:** Newer Ethernet versions are compatible with older ones.
6. **Widespread adoption:** Ethernet is the dominant LAN technology, supported by all major vendors.
7. **Continuous improvement:** Ethernet has evolved to meet changing needs (switched Ethernet, full-duplex, VLANs, Power over Ethernet).
8. **Standards:** IEEE 802.3 standards ensure interoperability.
9. **Reliability:** Ethernet is robust and reliable.
10. **Plug-and-play:** Ethernet devices work with minimal configuration.

---

**Q55: What is the PPP protocol and where is it commonly used?**

**A:** PPP (Point-to-Point Protocol) is a data link layer protocol used to establish a direct connection between two nodes. It is commonly used for:
- Dial-up internet connections
- DSL (Digital Subscriber Line) connections
- Leased lines
- VPNs (Virtual Private Networks)
- Serial connections between routers

PPP provides:
- Framing: Defines how data is encapsulated in frames.
- Link Control Protocol (LCP): Establishes, configures, and tests the data link.
- Network Control Protocols (NCPs): Configure network-layer protocols (e.g., IP, IPX).
- Authentication: Supports PAP (Password Authentication Protocol) and CHAP (Challenge Handshake Authentication Protocol).
- Error detection: Uses CRC.
- Compression: Optional.

PPP is designed to work over various physical media and is widely used in WAN links.

---

**Q56: What are the original requirements for the design of PPP?**

**A:** The original requirements for the design of PPP were:

1. **Packet framing:** PPP must be able to encapsulate network-layer packets (e.g., IP datagrams) into link-layer frames.
2. **Link control:** PPP must provide a Link Control Protocol (LCP) for establishing, configuring, and testing the data link.
3. **Network-layer protocol support:** PPP must support multiple network-layer protocols simultaneously (e.g., IP, IPX).
4. **Authentication:** PPP must support authentication (PAP, CHAP).
5. **Error detection:** PPP must detect errors in received frames (using CRC).
6. **Simplicity:** PPP should be simple to implement.
7. **Transparency:** PPP should be able to carry any network-layer protocol.
8. **Multiple physical media:** PPP should work over various physical media (serial lines, dial-up, DSL, etc.).

PPP was designed to be a general-purpose, robust, and flexible point-to-point protocol.

---

**Q57: What fields are contained in a PPP frame?**

**A:** A PPP frame contains the following fields:

1. **Flag (1 byte):** 0x7E, indicates the start and end of the frame.
2. **Address (1 byte):** 0xFF, a broadcast address (PPP is point-to-point, so this field is fixed).
3. **Control (1 byte):** 0x03, an unnumbered information frame (fixed).
4. **Protocol (2 bytes):** Identifies the network-layer protocol (e.g., 0x0021 for IP, 0xC021 for LCP, 0x8021 for IPCP).
5. **Payload (variable):** The data from the network layer (e.g., IP datagram). Maximum length is typically 1500 bytes (can be negotiated).
6. **Frame Check Sequence (FCS) (2 or 4 bytes):** CRC for error detection.
7. **Flag (1 byte):** 0x7E, indicates the end of the frame.

The Address, Control, and Protocol fields are sometimes compressed to save bandwidth.

---

**Q58: What is byte stuffing? How is it used in PPP design?**

**A:** Byte stuffing is a technique used to ensure that special characters in the data do not interfere with framing. In PPP, the flag byte 0x7E marks the beginning and end of a frame. If the byte 0x7E appears in the data, it must be escaped to prevent it from being mistaken for a flag.

PPP uses byte stuffing as follows:
- If the byte 0x7E appears in the data, it is replaced by the two-byte sequence 0x7D, 0x5E.
- If the byte 0x7D (the escape character) appears in the data, it is replaced by 0x7D, 0x5D.
- If the byte is less than 0x20 (control character), it may also be escaped (depending on configuration).

The escape character (0x7D) is followed by the original byte XORed with 0x20. This ensures that the flag byte never appears in the data, allowing the receiver to correctly identify frame boundaries.

Byte stuffing is also called character stuffing. It is similar to bit stuffing used in HDLC.

---

**Q59: What is the difference between a hub and a bridge?**

**A:** The main differences between a hub and a bridge are:

| Feature | Hub | Bridge |
|---------|-----|--------|
| OSI Layer | Physical layer (Layer 1) | Data link layer (Layer 2) |
| Collision domain | Single collision domain (all ports) | Separate collision domain per port |
| Broadcast domain | Single broadcast domain | Single broadcast domain (unless VLANs) |
| Forwarding | Repeats signals to all ports | Forwards frames based on MAC addresses |
| Intelligence | None (dumb device) | Self-learning (learns MAC addresses) |
| Bandwidth | Shared among all devices | Dedicated per port |
| Duplex | Half-duplex | Full-duplex (in modern switches) |
| Filtering | No filtering | Filters frames based on destination |
| Cost | Less expensive | More expensive |
| Performance | Lower performance, more collisions | Higher performance, fewer collisions |

Hubs are obsolete; bridges evolved into modern switches.

---

**Q60: What are the differences between a bridge and a switch?**

**A:** A bridge and a switch are functionally similar—both operate at the data link layer and forward frames based on MAC addresses. However, there are some differences:

| Feature | Bridge | Switch |
|---------|--------|--------|
| Ports | Typically 2–4 ports | Typically 8–48+ ports |
| Forwarding | Software-based | Hardware-based (ASIC) |
| Speed | Slower | Faster (wire-speed) |
| Collision domains | Separate per port | Separate per port |
| Full-duplex | Usually half-duplex | Full-duplex |
| VLAN support | Limited or none | Extensive |
| Spanning Tree | Supported | Supported |
| Cost | Less expensive | More expensive |
| Use case | Connecting small segments | Building entire LANs |

In modern usage, the terms are often used interchangeably, but "switch" generally refers to a high-port-count, high-performance bridge.

---

**Q61: What is a backbone hub? What is a multi-tier hub design? What is a LAN segment?**

**A:** A backbone hub is a central hub that interconnects multiple LAN segments in a hierarchical network design. It provides connectivity between different workgroup hubs or switches.

A multi-tier hub design is a hierarchical network topology where multiple levels of hubs (or switches) are used to connect devices. For example:
- Tier 1: Workgroup hubs connect end devices.
- Tier 2: Departmental hubs connect workgroup hubs.
- Tier 3: Backbone hub connects departmental hubs.

A LAN segment is a portion of a LAN that is connected by a shared medium (e.g., a cable segment or a hub). In a hub-based network, all devices on a segment share the same collision domain.

Multi-tier hub designs were common in early Ethernet networks but have been replaced by switched networks.

---

**Q62: Why is it said that all the LAN segments are in the same collision domain?**

**A:** In a hub-based Ethernet network, all LAN segments connected by hubs are in the same collision domain because hubs operate at the physical layer and simply repeat signals to all ports. When a device on one segment transmits, the signal is repeated to all other segments. If two devices on different segments transmit simultaneously, their signals collide. Thus, all devices connected by hubs share a single collision domain, regardless of how many hubs are used. This limits the total number of devices and the total length of the network.

Switches, in contrast, create separate collision domains per port, allowing multiple simultaneous transmissions.

---

**Q63: What are the limitations of using a backbone hub as an interconnection device?**

**A:** The limitations of using a backbone hub as an interconnection device are:

1. **Single collision domain:** All segments connected to the backbone hub form one large collision domain, increasing collision probability and reducing performance.
2. **Shared bandwidth:** The backbone hub's bandwidth is shared among all connected segments, limiting total throughput.
3. **No filtering:** Hubs repeat all traffic to all segments, wasting bandwidth on segments that don't need the traffic.
4. **Limited scalability:** The more devices and segments connected, the worse the performance.
5. **Half-duplex:** Hubs operate in half-duplex mode, preventing simultaneous transmission and reception.
6. **No support for multiple speeds:** Hubs typically operate at a single speed.
7. **No VLAN support:** Hubs cannot segment traffic logically.
8. **Single point of failure:** If the backbone hub fails, the entire network goes down.

These limitations led to the replacement of hubs with switches in modern networks.

---

**Q64: What abilities does a bridge have?**

**A:** A bridge has the following abilities:

1. **Self-learning:** Automatically learns MAC addresses and their associated ports.
2. **Forwarding:** Forwards frames only to the port leading to the destination.
3. **Filtering:** Drops frames that do not need to be forwarded (destination on same port).
4. **Collision domain isolation:** Each bridge port is a separate collision domain.
5. **Transparent operation:** Hosts are unaware of the bridge's presence.
6. **Speed adaptation:** Can connect segments with different speeds (e.g., 10 Mbps and 100 Mbps).
7. **Spanning Tree Protocol:** Prevents loops in networks with redundant paths.
8. **Buffering:** Can buffer frames during periods of congestion.
9. **Error filtering:** Drops frames with CRC errors.
10. **Flooding:** Forwards frames with unknown destination addresses to all ports except the incoming port.

---

**Q65: How is the self-learning capability accomplished in bridges?**

**A:** Self-learning in bridges (and switches) is accomplished by examining the source MAC address of incoming frames. When a frame arrives on a port:

1. The bridge reads the source MAC address.
2. It records the source MAC address and the port it arrived on in its forwarding table (also called a filter table or bridge table).
3. If the source MAC address is already in the table but associated with a different port, the bridge updates the entry (the device has moved).
4. The bridge uses the table to forward subsequent frames destined for that MAC address only to the correct port.
5. Entries in the table age out after a period of inactivity (typically 5 minutes) to keep the table current.

Self-learning allows bridges to operate without manual configuration, making them plug-and-play devices.

---

**Q66: Why are bridges described as transparent?**

**A:** Bridges are described as transparent because they are invisible to the hosts on the network. Hosts do not need to know that a bridge exists, and they do not need any special software or configuration to work with a bridge. The bridge forwards frames based on MAC addresses without modifying the frames (except for buffering). Hosts behave as if they are on a single shared LAN, even though the network may be segmented by bridges.

Transparency is a key advantage of bridges: they can be added to a network without disrupting existing devices or requiring changes to host software.

---

**Q67: What are the advantages of pure hierarchical design for interconnected LAN segments?**

**A:** The advantages of a pure hierarchical design for interconnected LAN segments are:

1. **Scalability:** Hierarchical designs can be expanded by adding more tiers or segments.
2. **Manageability:** The network is organized into logical groups, making it easier to manage and troubleshoot.
3. **Performance:** Traffic is localized within segments; only inter-segment traffic traverses the backbone.
4. **Fault isolation:** Problems in one segment do not affect other segments.
5. **Cost-effectiveness:** Uses inexpensive devices at lower tiers and higher-capacity devices at the backbone.
6. **Flexibility:** Different segments can use different technologies or speeds.
7. **Security:** Traffic between segments can be monitored and controlled.
8. **Simplicity:** The design is easy to understand and implement.

Hierarchical designs are the foundation of modern enterprise networks.

---

**Q68: Why are multiple paths between LAN segments necessary? What problems are caused by using multiple paths? How is this problem solved by using bridges?**

**A:** Multiple paths between LAN segments are necessary to provide redundancy. If one path fails, traffic can be rerouted through an alternate path, improving reliability and availability.

However, multiple paths cause problems in bridge-based networks:
- **Broadcast storms:** Frames (especially broadcast frames) can circulate endlessly around loops, consuming all available bandwidth.
- **Duplicate frames:** The same frame can arrive at a destination multiple times.
- **Forwarding table instability:** The bridge's forwarding table can become inconsistent because the same MAC address is seen on multiple ports.

These problems are solved by the **Spanning Tree Protocol (STP)**. STP allows bridges to communicate and elect a root bridge. Each bridge then determines which ports to block so that the network forms a loop-free tree topology. Blocked ports do not forward data frames (except for STP control frames). If a link fails, STP reconfigures the tree to restore connectivity.

---

**Q69: What is the Spanning Tree Protocol?**

**A:** The Spanning Tree Protocol (STP) is a link-layer protocol defined in IEEE 802.1D that prevents loops in Ethernet networks with redundant paths. It works by creating a logical loop-free topology (a spanning tree) from a physical topology that may contain loops.

How STP works:
1. **Root bridge election:** Bridges exchange Bridge Protocol Data Units (BPDUs) to elect a root bridge (the bridge with the lowest bridge ID).
2. **Root port selection:** Each non-root bridge selects one port (the root port) that provides the lowest-cost path to the root bridge.
3. **Designated port selection:** For each LAN segment, one bridge is selected as the designated bridge, and its port on that segment becomes the designated port. The designated port forwards frames toward the root.
4. **Port blocking:** Ports that are neither root ports nor designated ports are blocked. Blocked ports do not forward data frames but can forward BPDUs.
5. **Reconfiguration:** If a link or bridge fails, STP recalculates the spanning tree and unblocks ports as needed to restore connectivity.

STP ensures a loop-free topology while maintaining redundancy.

---

**Q70: What are the differences between bridges and routers?**

**A:** The main differences between bridges and routers are:

| Feature | Bridge | Router |
|---------|--------|--------|
| OSI Layer | Data link layer (Layer 2) | Network layer (Layer 3) |
| Addressing | MAC addresses | IP addresses |
| Forwarding table | MAC address table | Routing table |
| Table construction | Self-learning | Routing protocols |
| Broadcast domains | Single broadcast domain | Separate broadcast domain per interface |
| Loop prevention | Spanning Tree Protocol | Routing protocols |
| Speed | Faster | Slower (but modern routers are fast) |
| Cost | Less expensive | More expensive |
| Scalability | Limited | Highly scalable |
| Security | Limited | Extensive |
| Traffic isolation | VLANs | Subnets |
| Plug-and-play | Yes | No |

Bridges connect devices within a LAN; routers connect networks.

---

**Q71: What are the pros and cons of routers?**

**A:** **Pros of routers:**
1. **Scalability:** Hierarchical addressing (IP) allows routers to scale to large internetworks.
2. **Traffic isolation:** Routers block broadcasts, reducing unnecessary traffic.
3. **Security:** Routers can filter traffic using access control lists (ACLs) and firewalls.
4. **Quality of Service (QoS):** Routers can prioritize traffic.
5. **Multiple paths:** Routing protocols support load balancing and redundancy.
6. **Interconnection:** Routers connect heterogeneous networks (different link-layer technologies).
7. **Network management:** Routers provide tools for monitoring and troubleshooting.

**Cons of routers:**
1. **Cost:** Routers are more expensive than switches.
2. **Complexity:** Routers require configuration and management.
3. **Slower forwarding:** Routers process packets at the network layer, which is slower than switch forwarding (though modern routers are very fast).
4. **Latency:** Routers add latency due to packet processing.
5. **Single point of failure:** If a router fails, connectivity between networks is lost (unless redundancy is configured).

---

**Q72: Which IEEE standard is used for Ethernet?**

**A:** Ethernet is standardized by the IEEE 802.3 working group. The original Ethernet standard was published in 1983 as IEEE 802.3. Since then, numerous amendments and supplements have been added to support higher speeds, different media, and new features. Key standards include:
- IEEE 802.3: 10 Mbps Ethernet
- IEEE 802.3u: 100 Mbps Fast Ethernet
- IEEE 802.3z/ab: 1 Gbps Gigabit Ethernet
- IEEE 802.3ae: 10 Gbps Ethernet
- IEEE 802.3ba: 40/100 Gbps Ethernet
- IEEE 802.3bs: 200/400 Gbps Ethernet

---

**Q73: What advantages does a switch have?**

**A:** A switch has the following advantages:

1. **Collision elimination:** Each port is a separate collision domain; full-duplex operation eliminates collisions.
2. **High throughput:** Multiple simultaneous transmissions increase aggregate bandwidth.
3. **Selective forwarding:** Frames are forwarded only to the destination port, reducing unnecessary traffic.
4. **Self-learning:** No manual configuration required.
5. **Speed adaptation:** Can connect segments with different speeds.
6. **VLAN support:** Allows logical network segmentation.
7. **Spanning Tree Protocol:** Prevents loops in redundant topologies.
8. **Security:** MAC filtering, port security, VLANs.
9. **Plug-and-play:** Works out of the box.
10. **Cost-effective:** Inexpensive compared to routers.

---

**Q74: What is cut-through switching?**

**A:** Cut-through switching is a switching technique where the switch begins forwarding a frame as soon as it reads the destination MAC address (the first 6 bytes after the preamble), without waiting to receive the entire frame. This reduces latency compared to store-and-forward switching, where the switch must receive the entire frame and verify the CRC before forwarding.

Advantages:
- Lower latency.
- Faster forwarding.

Disadvantages:
- Cannot detect CRC errors before forwarding (may forward corrupted frames).
- Cannot perform speed adaptation (if incoming and outgoing speeds differ).
- May forward frames to ports where the destination is not present (if using cut-through with unknown addresses).

Cut-through is used in low-latency environments (e.g., high-performance computing). Store-and-forward is more common in general-purpose networks because it ensures error-free forwarding.

---

**Q75: What are the main topologies for LAN implementation?**

**A:** (Duplicate of Q40 — see above for detailed answer.)

The main topologies for LAN implementation are:
1. Bus topology
2. Star topology
3. Ring topology
4. Tree topology
5. Mesh topology

Modern LANs predominantly use star topologies with switches at the center.

---

## SECTION 4: REVIEW OF KEY TERMS AND CONCEPTS

---

**Q76: Define the following terms: time frames, time slots, chipping rate, carrier sensing, collision detection.**

**A:**

- **Time frames:** In TDM (Time Division Multiplexing), a time frame is a repeating period of time divided into time slots. Each node is assigned one or more slots per frame.

- **Time slots:** In TDM, a time slot is a specific interval within a time frame during which a particular node is allowed to transmit.

- **Chipping rate:** In CDMA, the rate at which chips (elements of a code sequence) are transmitted. It is typically much higher than the data rate.

- **Carrier sensing:** The process by which a node listens to the channel to determine whether it is idle or busy before transmitting. Used in CSMA protocols.

- **Collision detection:** The process by which a transmitting node detects that a collision has occurred (by observing signal interference) and aborts transmission. Used in CSMA/CD.

---

**Q77: Define the following terms: binary exponential backoff, CSMA/CD efficiency, polling, token, token-passing protocol.**

**A:**

- **Binary exponential backoff:** An algorithm used in CSMA/CD to determine the random waiting time after a collision. The range of possible wait times doubles with each successive collision.

- **CSMA/CD efficiency:** The fraction of time the channel is used for successful transmissions. Formula: 1 / (1 + 5 × τ/T).

- **Polling:** A taking-turns protocol where a central controller (master) polls each node in turn, granting permission to transmit.

- **Token:** A special control frame in token-passing protocols that grants the holder the right to transmit.

- **Token-passing protocol:** A taking-turns protocol where a token circulates around the network, and only the node holding the token may transmit.

---

**Q78: Define the following terms: LAN address, MAC address, physical address, broadcast address, ARP, ARP table, ARP packet.**

**A:**

- **LAN address / MAC address / Physical address:** A 48-bit address assigned to a network interface card (NIC) for identification at the link layer. Written in hexadecimal (e.g., 00:1A:2B:3C:4D:5E).

- **Broadcast address:** FF:FF:FF:FF:FF:FF — the MAC address that all devices on a LAN recognize as intended for them.

- **ARP (Address Resolution Protocol):** A protocol used to map an IP address to a MAC address on a LAN.

- **ARP table:** A cache maintained by each node that stores recent IP-to-MAC mappings.

- **ARP packet:** The message format used by ARP to request or reply to address resolution queries.

---

**Q79: Define the following terms: Ethernet frame, repeater, hub, switch, Gigabit Ethernet.**

**A:**

- **Ethernet frame:** The format of data transmission in Ethernet, including preamble, SFD, destination MAC, source MAC, type/length, data, and FCS.

- **Repeater:** A physical-layer device that regenerates and amplifies signals to extend the distance of a LAN.

- **Hub:** A multiport repeater that connects multiple devices in a star topology. All ports share a single collision domain.

- **Switch:** A data link layer device that forwards frames based on MAC addresses. Each port is a separate collision domain.

- **Gigabit Ethernet:** Ethernet operating at 1 Gbps. Variants include 1000BASE-T, 1000BASE-SX, 1000BASE-LX.

---

**Q80: Define the following terms: forwarding, filtering, switch table, self-learning, VLAN, VLAN trunking, VLAN tag.**

**A:**

- **Forwarding:** The process of determining which switch port a frame should be sent to, based on the destination MAC address.

- **Filtering:** The process of determining whether a frame should be dropped or forwarded. A switch filters a frame if the destination is on the same port as the source.

- **Switch table:** A data structure in a switch that maps MAC addresses to switch ports.

- **Self-learning:** The ability of a switch to automatically learn MAC addresses and their associated ports by examining source MAC addresses of incoming frames.

- **VLAN (Virtual LAN):** A logical network segmentation that allows devices on different physical LANs to be grouped together, or devices on the same physical LAN to be isolated.

- **VLAN trunking:** A mechanism for carrying traffic from multiple VLANs over a single physical link between switches.

- **VLAN tag:** A 4-byte field inserted into an Ethernet frame header to identify the VLAN to which the frame belongs (IEEE 802.1Q).

---

**Q81: Define the following terms: PPP, byte stuffing, LCP, NCP, PAP, CHAP.**

**A:**

- **PPP (Point-to-Point Protocol):** A data link layer protocol used for direct connections between two nodes. Commonly used for dial-up, DSL, and leased lines.

- **Byte stuffing:** A technique used in PPP to escape special characters (like the flag byte 0x7E) in the data so they are not mistaken for frame delimiters.

- **LCP (Link Control Protocol):** A PPP protocol used to establish, configure, and test the data link.

- **NCP (Network Control Protocol):** PPP protocols used to configure network-layer protocols (e.g., IPCP for IP).

- **PAP (Password Authentication Protocol):** A simple PPP authentication protocol that sends passwords in cleartext.

- **CHAP (Challenge Handshake Authentication Protocol):** A more secure PPP authentication protocol that uses a challenge-response mechanism.

---

**Q82: What is the difference between a collision domain and a broadcast domain?**

**A:**

- **Collision domain:** A network segment where data packets can collide with one another when being sent on a shared medium. In Ethernet, collisions occur in half-duplex shared-medium segments. Hubs extend collision domains; switches and routers separate them.

- **Broadcast domain:** A network segment where a broadcast frame (destined for FF:FF:FF:FF:FF:FF) is propagated. All devices in a broadcast domain receive broadcast frames. Hubs and switches (without VLANs) extend broadcast domains; routers (and VLANs) separate them.

Key differences:
- Collision domains are about physical media access; broadcast domains are about logical network segmentation.
- Switches separate collision domains but not broadcast domains (unless VLANs are used).
- Routers separate both collision domains and broadcast domains.

---

**Q83: What is the difference between half-duplex and full-duplex operation?**

**A:**

- **Half-duplex:** A communication mode where a device can either transmit or receive, but not both at the same time. Collisions can occur. Used in hub-based Ethernet and CSMA/CD.

- **Full-duplex:** A communication mode where a device can transmit and receive simultaneously. No collisions occur. Used in switched Ethernet with point-to-point links.

Full-duplex operation doubles the effective bandwidth and eliminates the need for CSMA/CD.

---

**Q84: What is the difference between store-and-forward and cut-through switching?**

**A:**

- **Store-and-forward:** The switch receives the entire frame, verifies the CRC, and then forwards it. Ensures error-free forwarding but adds latency.

- **Cut-through:** The switch begins forwarding the frame as soon as it reads the destination MAC address. Reduces latency but may forward corrupted frames.

Store-and-forward is more common in general-purpose networks; cut-through is used in low-latency environments.

---

**Q85: What is the difference between a hub, a switch, and a router?**

**A:**

| Feature | Hub | Switch | Router |
|---------|-----|--------|--------|
| Layer | 1 (Physical) | 2 (Data Link) | 3 (Network) |
| Addressing | None | MAC | IP |
| Collision domains | Single | Separate per port | Separate per interface |
| Broadcast domains | Single | Single (unless VLANs) | Separate per interface |
| Forwarding | Broadcast to all ports | Based on MAC table | Based on routing table |
| Intelligence | None | Self-learning | Routing protocols |
| Speed | Shared | Dedicated per port | Dedicated per interface |
| Cost | Low | Medium | High |
| Use case | Obsolete | LAN connectivity | Network interconnection |

---

## SECTION 5: STEP-BY-STEP CSMA/CD PROBLEM SOLVING

---

**Q86: Run the CSMA/CD protocol step-by-step to solve the following problem: Node A and Node B are on a 10 Mbps Ethernet network with a propagation delay of 25.6 μs. Node A begins transmitting a frame at time t = 0. Node B begins transmitting at time t = 10 μs. Show the sequence of events, including collision detection, jam signal, and backoff.**

**A:**

**Given:**
- Data rate: 10 Mbps
- Propagation delay (τ): 25.6 μs (one-way)
- Round-trip time (2τ): 51.2 μs
- Slot time: 512 bit times = 51.2 μs (at 10 Mbps, 1 bit time = 0.1 μs)

**Step-by-step:**

**t = 0 μs:** Node A senses the channel, finds it idle, and begins transmitting its frame.

**t = 0 to 10 μs:** Node A's signal propagates toward Node B. Node B has not yet sensed the channel.

**t = 10 μs:** Node B senses the channel. Due to propagation delay, Node A's signal has not yet reached Node B. Node B thinks the channel is idle and begins transmitting.

**t = 10 μs to 25.6 μs:** Both nodes are transmitting. Their signals propagate toward each other.

**t = 25.6 μs:** Node A's signal reaches Node B. Node B detects a collision (it hears Node A's signal while transmitting). Node B immediately stops transmitting its data and sends a jam signal (32 bits).

**t = 25.6 μs + 3.2 μs = 28.8 μs:** Node B finishes sending the jam signal.

**t = 25.6 μs to 51.2 μs:** Node B's signal (including jam) propagates toward Node A. Meanwhile, Node A is still transmitting (it has not yet detected the collision).

**t = 51.2 μs:** Node B's signal reaches Node A. Node A detects the collision. Node A stops transmitting its data and sends a jam signal.

**t = 51.2 μs + 3.2 μs = 54.4 μs:** Node A finishes sending the jam signal.

**Backoff:**
- Node A: First collision. Chooses K from {0, 1}. Suppose K = 0. Waits 0 × 51.2 μs = 0 μs. Retransmits at t = 54.4 μs.
- Node B: First collision. Chooses K from {0, 1}. Suppose K = 1. Waits 1 × 51.2 μs = 51.2 μs. Retransmits at t = 28.8 + 51.2 = 80.0 μs.

**Result:** Node A retransmits first (at t = 54.4 μs). Node B waits and retransmits later. No collision occurs on retransmission (assuming no other nodes transmit).

**Key observations:**
- Collision detection takes up to 2τ (51.2 μs).
- Jam signal ensures all nodes detect the collision.
- Binary exponential backoff randomizes retransmission times.

---

**Q87: Run the CSMA/CD protocol step-by-step to solve the following problem: A 100 Mbps Ethernet network has a maximum segment length of 100 meters. The signal propagation speed is 2 × 10^8 m/s. What is the minimum frame size required for CSMA/CD to work correctly?**

**A:**

**Given:**
- Data rate (R): 100 Mbps = 100 × 10^6 bps
- Maximum segment length (d): 100 m
- Propagation speed (v): 2 × 10^8 m/s

**Step 1: Calculate one-way propagation delay (τ):**
τ = d / v = 100 m / (2 × 10^8 m/s) = 5 × 10^-7 s = 0.5 μs

**Step 2: Calculate round-trip propagation delay (2τ):**
2τ = 2 × 0.5 μs = 1.0 μs

**Step 3: Calculate minimum frame transmission time (T_min):**
For CSMA/CD to work, the frame transmission time must be at least 2τ.
T_min ≥ 2τ = 1.0 μs

**Step 4: Calculate minimum frame size (L_min):**
L_min = R × T_min = 100 × 10^6 bps × 1.0 × 10^-6 s = 100 bits

**Step 5: Compare with Ethernet standard:**
The IEEE 802.3 standard for 100 Mbps Ethernet (Fast Ethernet) specifies a minimum frame size of 64 bytes = 512 bits. This is larger than the calculated 100 bits, providing a safety margin and ensuring correct operation with repeaters and hubs.

**Answer:** The minimum frame size required is 100 bits, but the standard mandates 512 bits (64 bytes) for Fast Ethernet.

---

**Q88: Run the CSMA/CD protocol step-by-step to solve the following problem: A 10 Mbps Ethernet network has a slot time of 51.2 μs. Node A experiences 3 consecutive collisions. What is the range of possible backoff times after the 3rd collision? What is the average backoff time?**

**A:**

**Given:**
- Data rate: 10 Mbps
- Slot time: 51.2 μs
- Number of collisions: 3

**Step 1: Determine the backoff range after the nth collision:**
After the nth collision, K is chosen from {0, 1, ..., 2^n - 1}.
After 3 collisions: K ∈ {0, 1, 2, 3, 4, 5, 6, 7} (8 possible values)

**Step 2: Calculate backoff time:**
Backoff time = K × slot time = K × 51.2 μs

Possible backoff times:
- K = 0: 0 μs
- K = 1: 51.2 μs
- K = 2: 102.4 μs
- K = 3: 153.6 μs
- K = 4: 204.8 μs
- K = 5: 256.0 μs
- K = 6: 307.2 μs
- K = 7: 358.4 μs

**Step 3: Calculate average backoff time:**
Average K = (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7) / 8 = 28 / 8 = 3.5
Average backoff time = 3.5 × 51.2 μs = 179.2 μs

**Answer:** The range of possible backoff times is 0 to 358.4 μs. The average backoff time is 179.2 μs.

---

**Q89: Run the CSMA/CD protocol step-by-step to solve the following problem: Two nodes, X and Y, are on a 10 Mbps Ethernet network. The propagation delay between them is 20 μs. Node X starts transmitting at t = 0. Node Y starts transmitting at t = 15 μs. At what time does each node detect the collision? What is the minimum frame size for this network?**

**A:**

**Given:**
- Data rate: 10 Mbps
- Propagation delay (τ): 20 μs
- Round-trip time (2τ): 40 μs

**Step 1: Determine when Node Y detects collision:**
Node X starts at t = 0. Node X's signal reaches Node Y at t = 20 μs.
Node Y starts at t = 15 μs. At t = 15 μs, Node Y senses the channel but does not yet hear Node X's signal (it arrives at t = 20 μs).
Node Y detects collision at t = 20 μs (when Node X's signal arrives).

**Step 2: Determine when Node X detects collision:**
Node Y starts at t = 15 μs. Node Y's signal reaches Node X at t = 15 + 20 = 35 μs.
Node X detects collision at t = 35 μs.

**Step 3: Calculate minimum frame size:**
For CSMA/CD to work, Node X must still be transmitting when it detects the collision at t = 35 μs. Therefore, the frame transmission time must be at least 35 μs.
Minimum frame size = 10 Mbps × 35 μs = 10 × 10^6 × 35 × 10^-6 = 350 bits.

However, the standard minimum frame size for 10 Mbps Ethernet is 512 bits (64 bytes), which is larger than 350 bits. The standard accounts for worst-case scenarios (e.g., longer cables, repeaters).

**Answer:**
- Node Y detects collision at t = 20 μs.
- Node X detects collision at t = 35 μs.
- Minimum frame size (theoretical): 350 bits. Standard: 512 bits.

---

**Q90: Run the CSMA/CD protocol step-by-step to solve the following problem: A network has a CSMA/CD efficiency of 0.75. If the propagation delay is 10 μs and the frame transmission time is 100 μs, what is the efficiency? If the frame size is doubled, what is the new efficiency?**

**A:**

**Given:**
- Propagation delay (τ): 10 μs
- Transmission time (T): 100 μs
- Efficiency formula: E = 1 / (1 + 5 × τ/T)

**Step 1: Calculate efficiency with original frame size:**
E = 1 / (1 + 5 × 10/100) = 1 / (1 + 5 × 0.1) = 1 / (1 + 0.5) = 1 / 1.5 = 0.667 (approximately 66.7%)

Wait — the problem states the efficiency is 0.75, but using the formula gives 0.667. Let me recalculate.

If E = 0.75:
0.75 = 1 / (1 + 5 × τ/T)
1 + 5 × τ/T = 1/0.75 = 1.333
5 × τ/T = 0.333
τ/T = 0.0667
T = τ / 0.0667 = 10 / 0.0667 = 150 μs

So the transmission time would need to be 150 μs for efficiency 0.75. But the problem states T = 100 μs. Let me proceed with T = 100 μs and calculate the actual efficiency.

**Step 1 (corrected): Calculate efficiency with T = 100 μs:**
E = 1 / (1 + 5 × 10/100) = 1 / (1 + 0.5) = 1 / 1.5 = 0.667

**Step 2: Calculate new efficiency if frame size is doubled:**
If frame size is doubled, transmission time T doubles to 200 μs.
E_new = 1 / (1 + 5 × 10/200) = 1 / (1 + 5 × 0.05) = 1 / (1 + 0.25) = 1 / 1.25 = 0.8

**Answer:**
- Original efficiency: 0.667 (66.7%)
- New efficiency (doubled frame size): 0.8 (80%)

**Note:** If the problem intended efficiency 0.75 with T = 100 μs, the formula would need adjustment, but the standard formula gives 0.667.

---

## SECTION 6: COMPREHENSIVE REVIEW QUESTIONS

---

**Q91: Compare and contrast channel partitioning, random access, and taking-turns multiple access protocols. Give examples of each.**

**A:**

| Feature | Channel Partitioning | Random Access | Taking Turns |
|---------|---------------------|---------------|--------------|
| **Approach** | Divide channel into pieces (time, frequency, code) | Allow collisions, recover from them | Coordinate transmission order |
| **Collision** | No collisions | Collisions possible | No collisions |
| **Efficiency (light load)** | Low (idle slots/bands wasted) | High (full rate when alone) | Low (waiting for turn) |
| **Efficiency (heavy load)** | High (pre-allocated) | Low (many collisions) | High (no collisions) |
| **Fairness** | Guaranteed | Probabilistic | Guaranteed |
| **Examples** | TDM, FDM, CDMA | ALOHA, Slotted ALOHA, CSMA, CSMA/CD | Polling, Token Passing |
| **Complexity** | Moderate | Simple | Moderate |
| **Central control** | No | No | Polling: yes; Token: no |
| **Use cases** | Cellular, satellite | Ethernet (legacy), Wi-Fi | Bluetooth, Token Ring, FDDI |

---

**Q92: Explain the complete process of sending a datagram from a host on one LAN to a host on another LAN, including ARP, routing, and Ethernet frame forwarding.**

**A:**

**Step 1: Source host prepares datagram**
- Source host (H1) has an IP datagram to send to destination host (H2) on a different LAN.
- H1 compares its subnet mask with the destination IP address. Since H2 is on a different subnet, H1 knows it must send the datagram to its default gateway (router R1).

**Step 2: ARP for default gateway**
- H1 needs the MAC address of R1's interface on H1's LAN.
- H1 checks its ARP table. If not found, H1 broadcasts an ARP request: "Who has IP address of R1? Tell H1."
- R1 replies with its MAC address.
- H1 caches the mapping in its ARP table.

**Step 3: Create Ethernet frame**
- H1 encapsulates the IP datagram in an Ethernet frame:
  - Destination MAC: R1's MAC address
  - Source MAC: H1's MAC address
  - Type: 0x0800 (IPv4)
  - Data: IP datagram
  - FCS: CRC
- H1 transmits the frame onto its LAN.

**Step 4: Frame delivery to router**
- The frame is delivered to R1 (switch forwards based on MAC address).
- R1 receives the frame, checks the FCS, and extracts the IP datagram.

**Step 5: Router forwarding**
- R1 examines the destination IP address in the datagram.
- R1 looks up the destination in its routing table.
- R1 determines the next-hop router (R2) and the outgoing interface.

**Step 6: ARP for next-hop router**
- R1 needs the MAC address of R2's interface on the next LAN.
- R1 broadcasts an ARP request on that LAN (or uses its ARP table if cached).
- R2 replies with its MAC address.

**Step 7: Create new Ethernet frame**
- R1 encapsulates the IP datagram in a new Ethernet frame:
  - Destination MAC: R2's MAC address
  - Source MAC: R1's MAC address (outgoing interface)
  - Type: 0x0800
  - Data: IP datagram (unchanged)
  - FCS: new CRC
- R1 transmits the frame onto the next LAN.

**Step 8: Repeat Steps 5–7 until datagram reaches H2's LAN**
- Each router along the path repeats the forwarding process.

**Step 9: Final delivery to H2**
- The last router (Rn) is on the same LAN as H2.
- Rn uses ARP to find H2's MAC address.
- Rn encapsulates the datagram in an Ethernet frame with H2's MAC address.
- H2 receives the frame, verifies the FCS, extracts the IP datagram, and passes it to the network layer.

**Key points:**
- MAC addresses change at each hop; IP addresses remain constant.
- ARP is used at each hop to resolve the next-hop MAC address.
- Routers decapsulate and re-encapsulate datagrams at each hop.

---

**Q93: Describe the complete operation of a link-layer switch, including self-learning, forwarding, filtering, and aging.**

**A:**

**1. Initial state:**
- Switch table is empty.
- Switch has no knowledge of MAC addresses or port mappings.

**2. Frame arrival:**
- A frame arrives on port 1 from Host A (source MAC: AA:AA:AA:AA:AA:AA) destined for Host B (destination MAC: BB:BB:BB:BB:BB:BB).

**3. Self-learning:**
- Switch examines source MAC address (AA:AA:AA:AA:AA:AA).
- Switch records: MAC AA:AA:AA:AA:AA:AA → port 1, with current timestamp.
- If the address was already in the table on a different port, the switch updates the entry.

**4. Forwarding decision:**
- Switch examines destination MAC address (BB:BB:BB:BB:BB:BB).
- Switch looks up BB:BB:BB:BB:BB:BB in its switch table.
- If found on port 3: Switch forwards the frame only to port 3.
- If not found: Switch floods the frame to all ports except port 1 (the incoming port).

**5. Filtering:**
- If the destination MAC address is on the same port as the source (e.g., both on port 1), the switch drops the frame (filtering). This happens when two hosts on the same port communicate (e.g., through a hub).

**6. Aging:**
- Each entry in the switch table has a timestamp.
- If no frames are received from a MAC address for a certain period (typically 5 minutes), the entry is removed.
- This ensures that the table reflects the current network topology (e.g., if a device moves to a different port).

**7. Loop prevention:**
- If multiple switches are interconnected with redundant paths, the Spanning Tree Protocol (STP) is used to block certain ports and prevent loops.

**8. VLAN support:**
- If VLANs are configured, the switch associates each port with a VLAN.
- Frames are tagged (802.1Q) when traversing trunk links.
- Forwarding is restricted within the same VLAN.

**Summary:**
- Switches are plug-and-play, self-learning devices.
- They forward frames efficiently based on MAC addresses.
- They isolate collision domains but not broadcast domains (unless VLANs are used).

---

**Q94: Explain the Spanning Tree Protocol (STP) in detail, including root bridge election, port roles, and reconfiguration.**

**A:**

**Spanning Tree Protocol (STP) — IEEE 802.1D**

**Purpose:** Prevent loops in Ethernet networks with redundant paths while maintaining redundancy.

**1. Root Bridge Election:**
- All bridges exchange Bridge Protocol Data Units (BPDUs).
- Each bridge has a Bridge ID (8 bytes): 2-byte priority + 6-byte MAC address.
- The bridge with the lowest Bridge ID becomes the root bridge.
- Initially, all bridges assume they are the root and send BPDUs with their own Bridge ID.
- When a bridge receives a BPDU with a lower Bridge ID, it stops claiming to be root and forwards the superior BPDU.

**2. Port Roles:**
- **Root port:** On each non-root bridge, the port with the lowest-cost path to the root bridge. Each non-root bridge has exactly one root port.
- **Designated port:** On each LAN segment, the port that provides the lowest-cost path to the root bridge. Each segment has exactly one designated port. The designated port forwards frames toward the root.
- **Blocked port:** Ports that are neither root nor designated. Blocked ports do not forward data frames but can receive BPDUs.

**3. Path Cost:**
- Each link has a cost (typically inversely proportional to bandwidth).
- The root path cost is the sum of link costs from the bridge to the root.
- Lower cost = better path.

**4. BPDU Exchange:**
- The root bridge sends BPDUs every 2 seconds (Hello Time).
- Non-root bridges forward BPDUs received from the root.
- BPDUs contain: Root ID, Root Path Cost, Bridge ID, Port ID, Message Age, Max Age, Hello Time, Forward Delay.

**5. Convergence:**
- Initially, all ports are in blocking state (except on the root bridge).
- Ports transition through states: Blocking → Listening → Learning → Forwarding.
- Listening (15 seconds): Processes BPDUs, does not forward data or learn MAC addresses.
- Learning (15 seconds): Learns MAC addresses, does not forward data.
- Forwarding: Normal operation.
- Total convergence time: ~30–50 seconds.

**6. Reconfiguration:**
- If a link or bridge fails, STP recalculates the spanning tree.
- Blocked ports may become designated or root ports.
- The network reconverges, restoring connectivity.
- Rapid Spanning Tree Protocol (RSTP, IEEE 802.1w) reduces convergence time to a few seconds.

**7. Key Timers:**
- Hello Time: 2 seconds (interval between BPDUs).
- Max Age: 20 seconds (BPDU expiration).
- Forward Delay: 15 seconds (listening and learning states).

**Summary:**
STP ensures a loop-free topology by electing a root bridge, assigning port roles, and blocking redundant ports. It provides redundancy while preventing broadcast storms and duplicate frames.

---

**Q95: Compare and contrast TDM, FDM, and CDMA in terms of how they partition the channel, their advantages, disadvantages, and typical applications.**

**A:**

| Feature | TDM | FDM | CDMA |
|---------|-----|-----|------|
| **Partitioning** | Time slots | Frequency bands | Code sequences |
| **Principle** | Each node gets a time slot | Each node gets a frequency band | All nodes transmit simultaneously using unique codes |
| **Collision** | None | None | None (codes are orthogonal) |
| **Synchronization** | Required | Not required (but frequency separation required) | Required (code synchronization) |
| **Bandwidth efficiency** | Low when nodes idle | Low when nodes idle | High (all nodes can transmit continuously) |
| **Complexity** | Low | Low | High |
| **Security** | Low | Low | High (spread spectrum) |
| **Applications** | Telephone networks, SONET | Radio, TV, cellular (FDMA) | Cellular (CDMA), GPS, military |
| **Advantages** | Simple, collision-free | Simple, collision-free | High capacity, secure, resistant to interference |
| **Disadvantages** | Wastes bandwidth when idle | Wastes spectrum when idle | Complex, requires power control |

---

**Q96: Explain how a switch handles a frame when the destination MAC address is unknown. What is this process called?**

**A:**

When a switch receives a frame and the destination MAC address is not found in its switch table, the switch floods the frame. Flooding means the switch forwards the frame to all ports except the port on which the frame arrived.

**Process:**
1. Frame arrives on port X.
2. Switch reads source MAC address and records it in the switch table (source MAC → port X).
3. Switch reads destination MAC address and looks it up in the switch table.
4. If the destination MAC address is not found (unknown unicast), the switch floods the frame to all ports except port X.
5. If the destination responds, the switch learns the destination's MAC address and port from the response frame.
6. Subsequent frames destined for that MAC address are forwarded only to the correct port (no flooding).

**This process is called flooding.** Flooding is also used for broadcast frames (destination MAC = FF:FF:FF:FF:FF:FF) and multicast frames (if the switch does not support multicast filtering).

**Note:** Flooding is different from broadcasting. Broadcasting sends to all ports (including the incoming port in some cases), while flooding sends to all ports except the incoming port.

---

**Q97: What is the difference between a broadcast frame and a multicast frame? How does a switch handle each?**

**A:**

| Feature | Broadcast Frame | Multicast Frame |
|---------|----------------|-----------------|
| **Destination MAC** | FF:FF:FF:FF:FF:FF | 01:00:5E:xx:xx:xx (IPv4) or 33:33:xx:xx:xx:xx (IPv6) |
| **Recipients** | All devices on the LAN | Devices that have joined the multicast group |
| **Switch handling** | Floods to all ports except incoming | Floods to all ports (unless IGMP snooping is enabled) |
| **Purpose** | ARP requests, DHCP discovery | Streaming media, multicast applications |
| **Scope** | Entire broadcast domain | Multicast group members |

**Switch handling:**
- **Broadcast:** Switch floods to all ports except the incoming port. All devices process the frame.
- **Multicast:** Without IGMP snooping, the switch floods to all ports. With IGMP snooping, the switch listens to IGMP messages and forwards multicast frames only to ports with interested receivers.

---

**Q98: Explain the differences between a collision domain and a broadcast domain. How do hubs, switches, and routers affect each?**

**A:**

| Device | Collision Domains | Broadcast Domains |
|--------|-------------------|-------------------|
| **Hub** | All ports in one collision domain | All ports in one broadcast domain |
| **Switch** | Each port is a separate collision domain | All ports in one broadcast domain (unless VLANs are configured) |
| **Router** | Each interface is a separate collision domain | Each interface is a separate broadcast domain |

**Explanation:**
- **Collision domain:** A network segment where collisions can occur. Hubs extend collision domains; switches and routers separate them.
- **Broadcast domain:** A network segment where broadcast frames are propagated. Hubs and switches (without VLANs) extend broadcast domains; routers (and VLANs) separate them.

**Key points:**
- Switches reduce collisions by creating separate collision domains per port.
- Routers reduce broadcast traffic by blocking broadcasts at network boundaries.
- VLANs allow switches to create multiple broadcast domains on a single physical switch.

---

**Q99: What is the purpose of the preamble and SFD in an Ethernet frame? Why are they needed?**

**A:**

**Preamble (7 bytes):**
- A pattern of alternating 1s and 0s: 10101010...
- Purpose: Allows the receiver's clock to synchronize with the sender's clock.
- The receiver uses the preamble to lock onto the incoming bit stream and establish bit boundaries.

**Start Frame Delimiter (SFD) (1 byte):**
- The sequence 10101011.
- Purpose: Marks the end of the preamble and the beginning of the actual frame (starting with the destination MAC address).
- The last two bits (11) indicate that the next bit is the first bit of the destination MAC address.

**Why they are needed:**
- Ethernet uses Manchester encoding (in 10 Mbps) or other encoding schemes that embed clock information. However, the receiver still needs a known pattern to synchronize its clock before the frame begins.
- Without the preamble and SFD, the receiver might not correctly identify the start of the frame or the bit boundaries, leading to errors.
- The preamble and SFD are not considered part of the frame itself (they are not included in the frame length or FCS calculation).

---

**Q100: Explain the complete process of ARP resolution, including the ARP request, ARP reply, and ARP table caching. What happens if the target is on a different subnet?**

**A:**

**ARP Resolution Within the Same Subnet:**

1. **Need for ARP:** Host A wants to send an IP datagram to Host B on the same subnet. Host A knows Host B's IP address but needs Host B's MAC address.

2. **Check ARP table:** Host A checks its ARP table for an entry for Host B's IP address.
   - If found: Use the cached MAC address.
   - If not found: Proceed to ARP request.

3. **ARP request:**
   - Host A constructs an ARP request packet:
     - Sender MAC: Host A's MAC
     - Sender IP: Host A's IP
     - Target MAC: 00:00:00:00:00:00 (unknown)
     - Target IP: Host B's IP
     - Operation: Request (1)
   - Host A encapsulates the ARP packet in an Ethernet frame:
     - Destination MAC: FF:FF:FF:FF:FF:FF (broadcast)
     - Source MAC: Host A's MAC
     - Type: 0x0806 (ARP)
   - Host A broadcasts the frame on the LAN.

4. **ARP request processing:**
   - All devices on the LAN receive the broadcast frame.
   - Each device checks the target IP address in the ARP request.
   - If the target IP does not match, the device discards the ARP request.
   - Host B (the target) recognizes its IP address.

5. **ARP reply:**
   - Host B constructs an ARP reply packet:
     - Sender MAC: Host B's MAC
     - Sender IP: Host B's IP
     - Target MAC: Host A's MAC
     - Target IP: Host A's IP
     - Operation: Reply (2)
   - Host B encapsulates the ARP reply in an Ethernet frame:
     - Destination MAC: Host A's MAC (unicast)
     - Source MAC: Host B's MAC
     - Type: 0x0806 (ARP)
   - Host B sends the frame directly to Host A.

6. **ARP table update:**
   - Host A receives the ARP reply.
   - Host A extracts Host B's MAC address and adds an entry to its ARP table:
     - IP address: Host B's IP
     - MAC address: Host B's MAC
     - Type: Dynamic
     - TTL: Typically 15–20 minutes
   - Host A can now send the IP datagram to Host B.

**If the Target is on a Different Subnet:**

1. Host A determines that Host B is on a different subnet (by comparing network prefixes).
2. Host A knows it must send the datagram to its default gateway (router R).
3. Host A uses ARP to resolve the MAC address of the router's interface on Host A's subnet (not Host B's MAC address).
4. Host A sends the frame to the router's MAC address.
5. The router forwards the datagram toward Host B (possibly through multiple routers).
6. ARP is used at each hop to resolve the next-hop MAC address.

**Key points:**
- ARP is used only within a subnet.
- ARP requests are broadcast; ARP replies are unicast.
- ARP tables reduce the need for repeated ARP requests.
- ARP entries expire to accommodate network changes.

---

**Q101: What is the purpose of the FCS field in an Ethernet frame? How is it calculated? What happens if the FCS check fails?**

**A:**

**Purpose of FCS:**
The Frame Check Sequence (FCS) is a 4-byte (32-bit) field in the Ethernet frame used for error detection. It allows the receiver to determine whether the frame was corrupted during transmission.

**Calculation:**
- The FCS is calculated using a Cyclic Redundancy Check (CRC-32) algorithm.
- The sender computes the CRC over the entire frame (excluding the preamble, SFD, and FCS itself).
- The resulting 32-bit value is placed in the FCS field.
- The receiver performs the same calculation on the received frame and compares the result with the FCS field.

**If the FCS check fails:**
- The receiver assumes the frame was corrupted during transmission.
- The frame is discarded (dropped).
- No error notification is sent to the sender (Ethernet is unreliable).
- Higher-layer protocols (e.g., TCP) are responsible for detecting lost data and requesting retransmission.

**Key points:**
- FCS detects bit errors but does not correct them.
- FCS is not a cryptographic checksum; it is designed for error detection, not security.
- The CRC-32 polynomial used in Ethernet is: x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1.

---

**Q102: Explain the complete process of data transmission in a 10BASE-T Ethernet network using a hub. Include CSMA/CD operation, collision handling, and the role of the hub.**

**A:**

**10BASE-T Ethernet with a Hub:**

**Network Setup:**
- Devices connect to a central hub via twisted-pair cables (Cat 3 or better) with RJ-45 connectors.
- Maximum segment length: 100 meters.
- Data rate: 10 Mbps.
- Topology: Star (physical), Bus (logical).
- All devices share a single collision domain.

**Data Transmission Process:**

1. **Carrier sensing:**
   - Device A has a frame to send.
   - Device A listens to the channel (via the hub) to determine if it is idle.
   - If idle, Device A begins transmitting.

2. **Transmission:**
   - Device A sends the frame to the hub.
   - The hub repeats the signal to all other ports (broadcast).
   - All devices on the network receive the frame.

3. **Frame reception:**
   - Each device checks the destination MAC address.
   - The intended recipient (Device B) accepts the frame.
   - Other devices discard the frame.

4. **Collision:**
   - If Device C also transmits while Device A is transmitting, a collision occurs.
   - The hub detects the collision (signal overlap) and sends a jam signal to all ports.
   - All transmitting devices detect the collision and stop transmitting.

5. **Backoff:**
   - Each colliding device waits a random time (binary exponential backoff) before retransmitting.
   - After the backoff, devices return to step 1.

6. **Hub's role:**
   - The hub operates at the physical layer.
   - It regenerates and amplifies signals.
   - It broadcasts all incoming frames to all other ports.
   - It does not filter or forward intelligently.
   - It does not learn MAC addresses.
   - It extends the collision domain to all connected devices.

**Limitations:**
- All devices share the 10 Mbps bandwidth.
- Collisions increase as more devices are added.
- Performance degrades under heavy load.
- Half-duplex operation only.

**Comparison with Switched Ethernet:**
- Switches eliminate collisions by providing dedicated per-port collision domains.
- Switches forward frames only to the destination port.
- Switches support full-duplex operation.
- Switches provide higher aggregate throughput.

---

**Q103: What are the key differences between 10BASE-T, 100BASE-TX, and 1000BASE-T Ethernet? Include data rate, cable type, encoding, and maximum segment length.**

**A:**

| Feature | 10BASE-T | 100BASE-TX | 1000BASE-T |
|---------|----------|------------|------------|
| **Data Rate** | 10 Mbps | 100 Mbps | 1000 Mbps (1 Gbps) |
| **IEEE Standard** | 802.3i | 802.3u | 802.3ab |
| **Cable Type** | Cat 3, 4, or 5 UTP | Cat 5 UTP or STP | Cat 5e or Cat 6 UTP |
| **Pairs Used** | 2 pairs (1 Tx, 1 Rx) | 2 pairs (1 Tx, 1 Rx) | 4 pairs (bidirectional) |
| **Encoding** | Manchester | 4B/5B + MLT-3 | 4D-PAM5 |
| **Signaling** | Baseband | Baseband | Baseband |
| **Max Segment Length** | 100 m | 100 m | 100 m |
| **Duplex** | Half-duplex (full-duplex with switches) | Half or full-duplex | Full-duplex only |
| **Connector** | RJ-45 | RJ-45 | RJ-45 |
| **Topology** | Star | Star | Star |
| **Collision Domain** | Shared (hub) or per-port (switch) | Shared (hub) or per-port (switch) | Per-port (switch only) |

**Key differences:**
- 10BASE-T uses Manchester encoding, which requires 20 MHz bandwidth for 10 Mbps.
- 100BASE-TX uses 4B/5B encoding and MLT-3 signaling, requiring 125 MHz for 100 Mbps.
- 1000BASE-T uses 4D-PAM5 encoding, transmitting on all 4 pairs simultaneously, with 125 Msymbols/s per pair.
- 1000BASE-T requires Cat 5e or better cable to reduce crosstalk.
- 1000BASE-T is full-duplex only; CSMA/CD is not used.

---

**Q104: Explain the concept of a VLAN. How does it improve network performance, security, and manageability? What is VLAN trunking, and why is it needed?**

**A:**

**VLAN (Virtual Local Area Network):**
A VLAN is a logical grouping of devices on a network that allows them to communicate as if they were on the same physical LAN, regardless of their physical location. VLANs are configured on switches and are based on IEEE 802.1Q.

**How VLANs Work:**
- Switch ports are assigned to VLANs (e.g., VLAN 10, VLAN 20).
- Each VLAN is a separate broadcast domain.
- Devices on different VLANs cannot communicate directly at the link layer.
- Communication between VLANs requires a router or Layer 3 switch.

**Benefits of VLANs:**

1. **Performance:**
   - Reduces broadcast traffic by containing broadcasts within each VLAN.
   - Limits collision domains (each VLAN is a separate broadcast domain).
   - Improves overall network performance.

2. **Security:**
   - Isolates sensitive traffic (e.g., HR, finance) from other departments.
   - Devices on different VLANs cannot eavesdrop on each other's traffic.
   - Access control lists (ACLs) can be applied between VLANs.

3. **Manageability:**
   - Logical grouping independent of physical location.
   - Moves, adds, and changes are easier (configuration changes instead of physical rewiring).
   - Simplifies network administration.

4. **Cost Savings:**
   - Multiple logical networks share the same physical infrastructure.
   - Reduces the need for additional switches and cabling.

**VLAN Trunking:**
- VLAN trunking is a mechanism for carrying traffic from multiple VLANs over a single physical link between switches (or between a switch and a router).
- Frames are tagged with a VLAN identifier (IEEE 802.1Q tag) when they traverse the trunk.
- The receiving switch reads the tag and forwards the frame to the appropriate VLAN.
- Trunking reduces the number of physical links required and simplifies network management.
- Trunk links are typically between switches, between a switch and a router, or between a switch and a server that needs to serve multiple VLANs.

**VLAN Tag (IEEE 802.1Q):**
- 4-byte field inserted into the Ethernet frame header.
- Contains TPID (0x8100), priority (3 bits), CFI (1 bit), and VLAN ID (12 bits).
- Allows switches to identify which VLAN a frame belongs to.

---

**Q105: What is the difference between a hub, a bridge, a switch, and a router? Provide a detailed comparison.**

**A:**

| Feature | Hub | Bridge | Switch | Router |
|---------|-----|--------|--------|--------|
| **OSI Layer** | 1 (Physical) | 2 (Data Link) | 2 (Data Link) | 3 (Network) |
| **Addressing** | None | MAC | MAC | IP |
| **Forwarding** | Broadcast to all ports | Based on MAC table | Based on MAC table | Based on routing table |
| **Table Construction** | None | Self-learning | Self-learning | Routing protocols |
| **Collision Domains** | Single | Separate per port | Separate per port | Separate per interface |
| **Broadcast Domains** | Single | Single | Single (unless VLANs) | Separate per interface |
| **Duplex** | Half | Half or full | Full | Full |
| **Speed** | Shared | Dedicated per port | Dedicated per port | Dedicated per interface |
| **Ports** | 4–24 | 2–4 | 8–48+ | 2–100+ |
| **Cost** | Low | Medium | Medium | High |
| **Intelligence** | None | Low | Medium | High |
| **Loop Prevention** | N/A | STP | STP | Routing protocols |
| **VLAN Support** | No | No | Yes | Yes (via subinterfaces) |
| **Security** | None | Limited | Moderate | Extensive |
| **Use Case** | Obsolete | Legacy | LAN connectivity | Network interconnection |
| **Plug-and-Play** | Yes | Yes | Yes | No |

**Summary:**
- **Hub:** Physical layer device; repeats signals to all ports; single collision domain; obsolete.
- **Bridge:** Data link layer device; forwards based on MAC addresses; separates collision domains; limited ports.
- **Switch:** High-port-count bridge; hardware-based forwarding; full-duplex; VLAN support; dominant LAN device.
- **Router:** Network layer device; forwards based on IP addresses; separates broadcast domains; connects networks; essential for internetworking.

---

## END OF DOCUMENT

---

**Total Questions: 105**

This comprehensive Q&A document covers all learning objectives, terms, topics, and leading questions from the provided material on Link-Layer Protocols and Local Area Networks. It is designed for exam preparation and includes detailed explanations, comparisons, and step-by-step problem-solving for CSMA/CD.