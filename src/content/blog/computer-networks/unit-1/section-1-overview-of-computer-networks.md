---
title: "Section 1 Overview of Computer Networks"
description: "Computer Networks study notes · Unit 1"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 1"
tags: ["computer-networks"]
listed: false
draft: false
---

## Section 1 – Overview of Computer Networks

---

### Introduction

This document is designed as a comprehensive, rigorous study guide for the first section of your computer networking course. It is formatted as a Question-and-Answer (Q&A) document, specifically structured to be read aloud using text-to-speech (TTS) software. Each question is followed by a detailed, exam-ready answer. The content covers all learning objectives, required textbook sections (1.1–1.4), suggested readings, and the extensive "Terms and Topics" list provided in your course materials.

---

### Part 1: Core Concepts and Definitions

**Q1: What is a computer network?**

**A1:** A computer network is a collection of interconnected computing devices—such as computers, smartphones, servers, and printers—that can communicate with one another and share resources. These devices are connected through communication links, which can be wired (e.g., copper wire, fiber optics) or wireless (e.g., radio, satellite). The primary purpose of a computer network is to enable the exchange of data, such as files, emails, web pages, and streaming video, between users and applications. Networks can range in scale from a small home network connecting a few devices to the global Internet, which connects billions of devices worldwide. Key components of a computer network include end systems (hosts), communication links, packet switches (like routers and switches), and the protocols that govern communication.

---

**Q2: What is the Internet?**

**A2:** The Internet is a specific, global computer network—a "network of networks"—that connects billions of computing devices worldwide. It is a public, decentralized infrastructure that uses a common set of protocols, most notably TCP/IP (Transmission Control Protocol/Internet Protocol), to allow disparate networks and devices to communicate. The Internet provides the underlying infrastructure and services upon which many applications run, including the World Wide Web, email, file transfer, online gaming, and voice-over-IP. From a service perspective, the Internet can be viewed as an infrastructure that provides services to distributed applications. From a components perspective, it consists of end systems, communication links, packet switches, and a hierarchy of Internet Service Providers (ISPs).

---

**Q3: What is the World Wide Web (WWW or Web)?**

**A3:** The World Wide Web is an application-layer service that runs on top of the Internet. It is a system of interlinked hypertext documents and resources, accessed via the Internet using web browsers. The Web was invented by Tim Berners-Lee at CERN in 1989–1991. It relies on technologies such as HTTP (Hypertext Transfer Protocol), HTML (Hypertext Markup Language), and URLs (Uniform Resource Locators). The Web allows users to navigate between documents through hyperlinks, view multimedia content, and interact with web applications. It is important to distinguish the Web from the Internet: the Internet is the global network infrastructure, while the Web is one of many services that use that infrastructure.

---

**Q4: How are computer networks, the Internet, and the Web related?**

**A4:** Computer networks are the foundational building blocks. They are interconnected collections of devices that can communicate. The Internet is a specific, global network of networks that connects millions of these computer networks together using common protocols (TCP/IP). The World Wide Web is an application that runs on the Internet. In other words: computer networks are the basic components; the Internet is the global infrastructure that interconnects them; and the Web is a service (one of many) that uses the Internet to share hyperlinked documents and resources. Without computer networks, there would be no Internet; without the Internet, the Web could not function globally.

---

### Part 2: The Network Edge

**Q5: What is the network edge?**

**A5:** The network edge refers to the part of the Internet that consists of the end systems (hosts) and the access networks that connect them to the Internet. End systems are the devices that users interact with directly, such as desktop computers, laptops, smartphones, tablets, servers, and IoT devices. The network edge is where applications run and where users generate and consume data. It is distinguished from the network core, which is the mesh of packet switches and links that interconnect the edge devices.

---

**Q6: What are hosts and end systems?**

**A6:** Hosts, also called end systems, are the devices at the edge of the Internet that run application programs. Examples include desktop PCs, laptops, smartphones, tablets, servers, and increasingly, everyday objects like smart TVs, thermostats, and cars (IoT devices). Hosts are called "end systems" because they sit at the ends of the Internet, as opposed to the core. They can be further classified as clients or servers, depending on their role in a communication session.

---

**Q7: What are clients and servers?**

**A7:** In a networking context, a client is a program or device that requests services or resources from another program or device. A server is a program or device that provides services or resources to clients. For example, a web browser (client) requests a web page from a web server. A server typically runs continuously, waiting for requests from clients. A client typically initiates communication. Many end systems can act as both client and server, depending on the application (e.g., peer-to-peer file sharing). The client-server model is a fundamental architectural paradigm for distributed applications.

---

**Q8: What are access networks?**

**A8:** Access networks are the networks that physically connect end systems to the first router (the edge router) on the path from the end system to any other distant end system. They provide the "last mile" of connectivity between homes, institutions, and mobile users and the Internet. Types of access networks include:
- **DSL (Digital Subscriber Line):** Uses existing telephone lines to provide high-speed Internet access.
- **Cable Internet access:** Uses coaxial cable from cable TV infrastructure.
- **Fiber to the Home (FTTH):** Provides optical fiber directly to residences.
- **Dial-up:** Uses traditional telephone lines with a modem; very slow and largely obsolete.
- **Satellite:** Uses geostationary or low-earth orbit satellites for remote areas.
- **Ethernet:** Common in institutional and enterprise settings (LAN).
- **WiFi:** Wireless local area access (IEEE 802.11).
- **Wide-area wireless access:** e.g., 3G, LTE (4G), 5G cellular networks.

---

**Q9: What is an edge router?**

**A9:** An edge router is the first router on the path from an end system into the Internet. It sits at the boundary between the access network and the core network. It aggregates traffic from multiple end systems in a home, institution, or mobile network and forwards it toward the Internet core. It is sometimes called the "first-hop router" or "gateway router."

---

### Part 3: Physical Media

**Q10: What is physical media in networking?**

**A10:** Physical media are the actual physical pathways over which bits are transmitted from one device to another. They can be classified into two broad categories: guided media and unguided media.

---

**Q11: What are guided media? Give examples.**

**A11:** Guided media are physical media in which the signals travel along a solid physical path. Examples include:
- **Unshielded Twisted Pair (UTP):** Common copper wiring used in Ethernet and telephone networks; consists of pairs of insulated copper wires twisted together to reduce interference.
- **Coaxial cable:** A copper core surrounded by insulation, a metallic shield, and an outer jacket; used in cable TV and cable Internet.
- **Fiber optics:** Glass or plastic fibers that carry pulses of light; extremely high bandwidth, low attenuation, immune to electromagnetic interference; used in backbone and FTTH networks.

---

**Q12: What are unguided media? Give examples.**

**A12:** Unguided media are physical media in which signals propagate through free space (air, vacuum, water) without a physical path. Examples include:
- **Terrestrial radio channels:** Signals transmitted through the atmosphere; used in WiFi, cellular, and radio broadcasting.
- **Satellite radio channels:** Signals transmitted between Earth stations and satellites; used for global communication, GPS, and satellite Internet.
  - **Geostationary satellite:** Orbits at ~35,786 km above the equator; appears stationary; high latency (~250 ms); used for TV and some Internet.
  - **Low-earth orbiting (LEO) satellite:** Orbits at 500–2,000 km; lower latency; used for satellite Internet constellations (e.g., Starlink).

---

### Part 4: The Network Core

**Q13: What is the network core?**

**A13:** The network core is the mesh of packet switches and communication links that interconnect the Internet's end systems. It is the central part of the Internet that provides the paths for data to travel between edge devices. The core consists of routers interconnected by high-speed fiber-optic links. It is managed by a hierarchy of Internet Service Providers (ISPs). The core uses two fundamental switching techniques: packet switching and circuit switching.

---

**Q14: What are packet switches?**

**A14:** Packet switches are devices in the network core that forward packets from an incoming link to an outgoing link. The two most common types are:
- **Routers:** Used in the network core; forward packets based on IP addresses using a forwarding table.
- **Link-layer switches:** Used in access networks and local area networks; forward packets based on MAC addresses.

---

**Q15: What is store-and-forward transmission?**

**A15:** Store-and-forward transmission is a switching technique in which a packet switch must receive the entire packet before it can begin to transmit the first bit of that packet onto the outgoing link. This introduces a delay proportional to the packet size and link transmission rate. Most packet switches use store-and-forward transmission.

---

**Q16: What are messages and message switching?**

**A16:** A message is a unit of data that an application wants to send. In message switching, the entire message is sent as a single unit, stored at each intermediate switch, and then forwarded. Message switching is not used in the modern Internet because it requires large buffers and can block links for long periods. Instead, the Internet uses packet switching, where messages are broken into smaller packets.

---

**Q17: What is an output buffer / output queue?**

**A17:** An output buffer (or output queue) is a memory area in a packet switch that temporarily holds packets waiting to be transmitted on an outgoing link. If packets arrive faster than the outgoing link can transmit them, they queue up in the buffer. If the buffer overflows, packets are dropped, resulting in packet loss.

---

**Q18: What are queuing delays?**

**A18:** Queuing delays are the delays experienced by packets while they wait in an output buffer before being transmitted. The amount of queuing delay depends on the traffic intensity—the rate at which packets arrive compared to the rate at which they can be transmitted. If traffic intensity is close to or exceeds 1, queuing delays become very large, and packet loss may occur.

---

**Q19: What is packet loss?**

**Q19:** Packet loss occurs when a packet arrives at a packet switch and finds the output buffer full. Since there is no place to store the packet, it is dropped (lost). Packet loss is a common phenomenon in packet-switched networks, especially under heavy load. Lost packets may be retransmitted by higher-layer protocols (e.g., TCP) if reliable delivery is required.

---

**Q20: What is a forwarding table?**

**A20:** A forwarding table is a data structure used by a router to determine the outgoing link to which an incoming packet should be forwarded. It maps destination IP addresses (or prefixes) to outgoing links. When a packet arrives, the router examines the destination IP address in the packet header and looks up the appropriate outgoing link in the forwarding table. Forwarding tables are populated by routing protocols.

---

**Q21: What are routing protocols?**

**A21:** Routing protocols are the set of rules and procedures used by routers to exchange information about network topology and to compute the paths (routes) through the network. Examples include OSPF (Open Shortest Path First), BGP (Border Gateway Protocol), and RIP (Routing Information Protocol). Routing protocols automatically determine the best paths and populate the forwarding tables so that packets can be forwarded correctly.

---

**Q22: What is circuit switching?**

**A22:** Circuit switching is a switching technique in which a dedicated communication path (a circuit) is established between two end systems for the duration of a communication session. Resources (e.g., bandwidth on links) are reserved for the exclusive use of that circuit. Traditional telephone networks use circuit switching. Advantages include guaranteed bandwidth and low, predictable delay once the circuit is established. Disadvantages include inefficiency—if the circuit is idle, the reserved resources are wasted—and the need to establish a connection before communication can begin.

---

**Q23: What is an end-to-end connection?**

**A23:** In circuit switching, an end-to-end connection is a dedicated path established between the sender and receiver before any data is transmitted. The path consists of a series of links and switches, each reserving a portion of its capacity for the connection. The connection remains active for the duration of the session and is torn down when the session ends. This is in contrast to packet switching, where no dedicated path is established, and packets may take different routes.

---

**Q24: What is multiplexing in circuit-switched networks?**

**A24:** Multiplexing is the technique of allowing multiple communication sessions to share a single physical link. In circuit-switched networks, multiplexing allows multiple circuits to share the same link's bandwidth. The two main types are:
- **TDM (Time Division Multiplexing):** The link's time is divided into frames, and each frame is divided into time slots. Each circuit is allocated a specific time slot in each frame.
- **FDM (Frequency Division Multiplexing):** The link's frequency spectrum is divided into frequency bands, and each circuit is allocated a specific frequency band.

---

**Q25: What is bandwidth?**

**A25:** Bandwidth is the range of frequencies that a communication link can carry, or more generally, the maximum rate at which data can be transmitted over a link. It is typically measured in bits per second (bps), kilobits per second (kbps), megabits per second (Mbps), or gigabits per second (Gbps). Higher bandwidth means more data can be transmitted per unit time.

---

**Q26: What are silent periods in circuit switching?**

**A26:** Silent periods are periods during a circuit-switched communication session when no data is being transmitted, yet the reserved circuit resources remain allocated and unavailable to other users. This leads to inefficiency because the bandwidth is wasted during silent periods. Packet switching avoids this inefficiency by allowing multiple users to share link capacity on demand.

---

### Part 5: Internet Service Providers (ISPs) and Internet Structure

**Q27: What are Internet Service Providers (ISPs)?**

**A27:** Internet Service Providers are organizations that provide Internet access to end users and other organizations. They own and operate the communication links and packet switches that make up the Internet. ISPs form a hierarchy:
- **Local ISPs:** Provide access to end users (homes, businesses).
- **Regional ISPs:** Connect local ISPs to the broader Internet.
- **Tier-1 ISPs:** Global backbone providers that interconnect with each other and with regional ISPs. They have global reach and do not pay for transit.
- **Content Provider Networks (CDNs):** Private networks built by content providers (e.g., Google, Netflix) to deliver content directly to users, bypassing traditional ISP hierarchies.

---

**Q28: What is a global transit ISP?**

**A28:** A global transit ISP is a Tier-1 ISP that provides global Internet connectivity. It operates a high-speed, long-haul backbone network that spans continents and connects with other Tier-1 ISPs and regional ISPs. Tier-1 ISPs exchange traffic with each other on a settlement-free basis (peering). They sell transit services to lower-tier ISPs.

---

**Q29: What is a regional ISP?**

**A29:** A regional ISP is an ISP that provides Internet access to a specific geographic region, such as a state or province. It connects local ISPs and end users to the global Internet by purchasing transit from Tier-1 ISPs. It may also peer with other regional ISPs.

---

**Q30: What is a Tier-1 ISP?**

**A30:** A Tier-1 ISP is a top-level ISP in the Internet hierarchy. It has a global backbone network, does not purchase transit from any other ISP, and peers with other Tier-1 ISPs on a settlement-free basis. Examples include AT&T, Verizon, Sprint, Lumen (CenturyLink), and NTT. Tier-1 ISPs are the backbone of the global Internet.

---

**Q31: What is an Internet Exchange Point (IXP)?**

**A31:** An Internet Exchange Point (IXP) is a physical location where multiple ISPs interconnect and exchange traffic directly. IXPs allow ISPs to peer with each other without paying for transit, reducing costs and improving performance. They are typically located in major data centers and are essential for the efficient operation of the Internet.

---

**Q32: What are Content Provider Networks (CDNs)?**

**A32:** Content Provider Networks, also known as Content Delivery Networks (CDNs), are private networks built by large content providers (e.g., Google, Netflix, Facebook, Akamai) to deliver content directly to users. They deploy servers in data centers around the world, often co-located with ISPs, to cache content close to users. This reduces latency, improves user experience, and reduces the load on the public Internet.

---

### Part 6: Delay, Loss, and Throughput in Packet-Switched Networks

**Q33: What are the types of delay in packet-switched networks?**

**A33:** There are four main types of delay:
1. **Nodal processing delay:** The time required for a router to examine the packet header and determine where to forward it. Typically very small (microseconds).
2. **Queuing delay:** The time a packet spends waiting in an output buffer before transmission. Depends on traffic intensity.
3. **Transmission delay:** The time required to push all the packet's bits onto the link. Calculated as L/R, where L is packet length (bits) and R is link transmission rate (bps).
4. **Propagation delay:** The time required for a bit to travel from the beginning of the link to the next router. Calculated as d/s, where d is link length and s is propagation speed (≈ 2×10^8 m/s).

---

**Q34: What is total nodal delay?**

**A34:** Total nodal delay is the sum of all delays experienced by a packet at a single node (router):
Total nodal delay = Nodal processing delay + Queuing delay + Transmission delay + Propagation delay.
This is the total time it takes for a packet to travel from the source to the destination through one node. End-to-end delay is the sum of nodal delays across all nodes on the path.

---

**Q35: What is traffic intensity?**

**A35:** Traffic intensity is a measure of how busy a link is. It is calculated as La/R, where L is packet length, a is average packet arrival rate, and R is link transmission rate. If La/R > 1, the arrival rate exceeds the transmission rate, and queuing delay grows without bound. If La/R ≤ 1, queuing delay is finite but can still be large if the ratio is close to 1.

---

**Q36: What is packet drop and packet loss?**

**A36:** Packet drop (or packet loss) occurs when a packet arrives at a router and the output buffer is full. The router has no place to store the packet, so it discards it. The packet is lost and may need to be retransmitted by a higher-layer protocol (e.g., TCP). Packet loss is a consequence of queuing and is a common occurrence in packet-switched networks under heavy load.

---

**Q37: What is instantaneous throughput?**

**A37:** Instantaneous throughput is the rate at which data is being transferred at a specific moment in time. It is typically measured in bits per second (bps) and can vary over time depending on network conditions, traffic load, and other factors.

---

**Q38: What is average throughput?**

**A38:** Average throughput is the average rate at which data is transferred over a period of time. It is calculated as the total amount of data transferred divided by the total time. For a file transfer, average throughput = F/T, where F is the file size (bits) and T is the time taken to transfer the file (seconds).

---

**Q39: What is a bottleneck link?**

**A39:** A bottleneck link is the link in a network path that has the lowest transmission rate (bandwidth) and therefore limits the overall end-to-end throughput. The throughput of a connection cannot exceed the transmission rate of the bottleneck link. For example, if a path consists of links with rates 10 Mbps, 100 Mbps, and 5 Mbps, the bottleneck link is the 5 Mbps link, and the maximum achievable throughput is 5 Mbps.

---

### Part 7: Protocols, Standards, and Organizations

**Q40: What is a protocol?**

**A40:** A protocol is a set of rules that governs communication between two or more entities in a network. It defines the format, order, and meaning of messages exchanged, as well as the actions taken when messages are sent or received. Protocols are essential for enabling devices from different vendors and with different operating systems to communicate. Examples include TCP, IP, HTTP, and Ethernet.

---

**Q41: What is a network protocol?**

**A41:** A network protocol is a protocol specifically designed for communication over a network. It defines how data is formatted, addressed, transmitted, routed, and received. Network protocols are typically organized in layers (e.g., the Internet protocol stack), with each layer providing services to the layer above it.

---

**Q42: What is Transmission Control Protocol (TCP)?**

**A42:** TCP is a core protocol of the Internet protocol suite. It provides reliable, ordered, and error-checked delivery of a stream of bytes between applications running on hosts communicating over an IP network. TCP is connection-oriented: it establishes a connection before data transfer, manages flow control and congestion control, and ensures that lost packets are retransmitted. It is used by applications such as web browsing, email, and file transfer.

---

**Q43: What is Internet Protocol (IP)?**

**A43:** IP is the principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. It provides addressing and routing functions. IP delivers packets from a source host to a destination host based on IP addresses. It is a connectionless, best-effort protocol: it does not guarantee delivery, order, or error checking. IPv4 and IPv6 are the two versions in use today.

---

**Q44: What are Internet standards?**

**A44:** Internet standards are documented, formal specifications that define protocols and procedures for the Internet. They are developed by the Internet Engineering Task Force (IETF) and published as Requests for Comments (RFCs). Standards ensure interoperability between different vendors' equipment and software. Examples include TCP (RFC 793), IP (RFC 791), HTTP (RFC 7230), and DNS (RFC 1034/1035).

---

**Q45: What are IETF and RFCs?**

**A45:** The Internet Engineering Task Force (IETF) is the organization responsible for developing and promoting Internet standards. It is an open, international community of network designers, operators, vendors, and researchers. RFCs (Requests for Comments) are the documents published by the IETF (and other organizations) that describe Internet standards, protocols, procedures, and best practices. Not all RFCs are standards; some are informational or experimental.

---

**Q46: What are distributed applications?**

**A46:** Distributed applications are software applications that run on multiple computers (hosts) simultaneously and communicate over a network. Examples include web browsers and web servers, email clients and servers, peer-to-peer file sharing, online gaming, and video conferencing. Distributed applications rely on the network infrastructure and protocols to exchange data between their components.

---

**Q47: What is an Application Programming Interface (API)?**

**A47:** An Application Programming Interface (API) is a set of rules and definitions that allows one piece of software to interact with another. In networking, APIs allow applications to send and receive data over the network without needing to know the details of the underlying hardware and protocols. For example, the Socket API provides a standard interface for applications to use TCP/IP services.

---

### Part 8: ISO Model and Internet Protocol Stack

**Q48: How many layers are there in the ISO network model? What are they?**

**A48:** The ISO (International Organization for Standardization) OSI (Open Systems Interconnection) model has seven layers:
1. **Physical Layer:** Transmits raw bits over a physical medium.
2. **Data Link Layer:** Provides reliable data transfer between directly connected nodes; handles framing, error detection, and MAC addressing.
3. **Network Layer:** Handles routing and forwarding of packets; provides logical addressing (IP).
4. **Transport Layer:** Provides end-to-end communication, reliability, flow control, and multiplexing (TCP, UDP).
5. **Session Layer:** Manages sessions (connections) between applications.
6. **Presentation Layer:** Translates data formats, encryption, and compression.
7. **Application Layer:** Provides network services to end-user applications (HTTP, FTP, SMTP).

---

**Q49: How many layers are there in the Internet protocol stack?**

**A49:** The Internet protocol stack has five layers:
1. **Physical Layer:** Moves bits over the physical medium.
2. **Link Layer:** Moves frames from one node to the next (Ethernet, WiFi).
3. **Network Layer:** Moves packets from source to destination (IP).
4. **Transport Layer:** Provides end-to-end data transfer (TCP, UDP).
5. **Application Layer:** Supports network applications (HTTP, DNS, SMTP).
The Internet stack does not have separate Session and Presentation layers; these functions are handled by the application layer or the application itself.

---

**Q50: What does each layer in the Internet protocol stack do?**

**A50:**
- **Application Layer:** Provides services to users and applications. Protocols include HTTP (web), SMTP (email), DNS (name resolution), FTP (file transfer).
- **Transport Layer:** Provides end-to-end communication between processes. TCP provides reliable, connection-oriented service; UDP provides unreliable, connectionless service.
- **Network Layer:** Provides host-to-host delivery of packets. IP handles addressing and routing. ICMP handles error reporting.
- **Link Layer:** Provides node-to-node delivery of frames. Ethernet, WiFi, and PPP are examples.
- **Physical Layer:** Transmits raw bits over the physical medium. Defines voltages, frequencies, and data rates.

---

### Part 9: Switching Techniques and Multiplexing

**Q51: What is circuit switching, packet switching, and message switching? What are the differences?**

**A51:**
- **Circuit Switching:** A dedicated path is established before communication; resources are reserved for the duration. Used in traditional telephony. Guarantees bandwidth, but wastes resources during silent periods.
- **Packet Switching:** Data is divided into packets; each packet is forwarded independently through the network. Resources are shared on demand. Used in the Internet. Efficient but can experience queuing delays and packet loss.
- **Message Switching:** The entire message is sent as a single unit and stored at each intermediate switch before forwarding. Not used in modern networks due to large buffer requirements and long delays.

**Differences:** Circuit switching reserves resources and provides guaranteed service; packet switching shares resources and provides best-effort service; message switching stores and forwards entire messages, leading to high latency and buffer requirements.

---

**Q52: What is multiplexing, and what are TDM and FDM?**

**A52:** Multiplexing is the technique of combining multiple signals or data streams over a single communication link. In circuit-switched networks:
- **TDM (Time Division Multiplexing):** The link's time is divided into frames; each circuit gets a specific time slot in each frame.
- **FDM (Frequency Division Multiplexing):** The link's frequency spectrum is divided into bands; each circuit gets a specific frequency band.
Both allow multiple users to share a single physical link.

---

**Q53: What is routing?**

**A53:** Routing is the process of selecting a path for traffic in a network. It involves determining the best route from a source to a destination based on network topology, link costs, and routing policies. Routing is performed by routing protocols (e.g., OSPF, BGP) that populate forwarding tables in routers. Forwarding is the actual movement of packets from an input link to an output link based on the forwarding table.

---

### Part 10: Internet Connections and Devices

**Q54: How are homes, institutions, and mobile users connected to the Internet?**

**A54:**
- **Homes:** Connected via DSL, cable Internet, FTTH, dial-up, or satellite. A home router (often with WiFi) connects devices to the access network.
- **Institutions (enterprises):** Connected via Ethernet LANs, which connect to an edge router, which connects to an ISP (often fiber or high-speed cable).
- **Mobile users:** Connected via cellular networks (3G, LTE/4G, 5G) using radio signals to cell towers, which connect to the core network.

**Components needed:** Modem (DSL, cable, fiber), router, access point (WiFi), network interface cards (NICs), and physical media (cables, fiber, radio).

---

**Q55: What devices are needed to build a simple computer network?**

**A55:** To build a simple computer network, you need:
- **End systems:** Computers, laptops, smartphones, printers.
- **Network Interface Cards (NICs):** Hardware that connects a device to the network.
- **Switch or router:** To connect multiple devices and forward data.
- **Access point:** For wireless connectivity (WiFi).
- **Cables or wireless media:** To physically or wirelessly connect devices.
- **Modem:** To connect to an ISP for Internet access.
- **Software:** Operating systems with networking support, protocols (TCP/IP), and applications.

---

**Q56: What is the hierarchy of Internet Service Providers (ISPs)? Describe NAP, regional ISP, local ISP, and end users.**

**A56:** The ISP hierarchy is roughly:
- **Tier-1 ISPs:** Global backbone providers (e.g., AT&T, NTT). They peer with each other and provide transit to lower tiers.
- **Regional ISPs:** Cover a region; purchase transit from Tier-1 ISPs.
- **Local ISPs:** Provide access to end users; purchase transit from regional ISPs.
- **End Users:** Homes, businesses, institutions that connect via local ISPs.
- **NAP (Network Access Point):** An older term for an Internet Exchange Point (IXP)—a physical location where ISPs interconnect and exchange traffic. Modern term: IXP.

---

**Q57: What are clients and servers? What is connection-oriented and connectionless service?**

**A57:**
- **Client:** A program/device that requests services.
- **Server:** A program/device that provides services.
- **Connection-oriented service:** A service that establishes a connection before data transfer, maintains state, and provides reliable, ordered delivery (e.g., TCP). Includes handshaking, flow control, and congestion control.
- **Connectionless service:** A service that sends data without establishing a connection; no guarantee of delivery, order, or reliability (e.g., UDP). Simpler and faster, but less reliable.

---

### Part 11: Standards Organizations

**Q58: What organization is responsible for computer networking standards? What standards are in place?**

**A58:** Several organizations develop networking standards:
- **IEEE (Institute of Electrical and Electronics Engineers):** Develops standards for LANs and WLANs (e.g., IEEE 802.3 Ethernet, IEEE 802.11 WiFi).
- **ISO (International Organization for Standardization):** Developed the OSI model.
- **ITU (International Telecommunication Union):** Develops standards for telecommunications.
- **ANSI (American National Standards Institute):** Coordinates voluntary standards in the U.S.

---

**Q59: What organization is responsible for Internet standards? What standards are being used today?**

**A59:** The **IETF (Internet Engineering Task Force)** is responsible for Internet standards. Standards are published as **RFCs (Requests for Comments)**. Key standards in use today include:
- **TCP/IP** (RFC 791, RFC 793)
- **HTTP/1.1, HTTP/2, HTTP/3**
- **DNS** (RFC 1034, RFC 1035)
- **SMTP** (RFC 5321)
- **IPv6** (RFC 8200)
- **TLS** (RFC 5246, RFC 8446)

---

**Q60: What organization is responsible for World Wide Web standards? What standards are being used today?**

**A60:** The **W3C (World Wide Web Consortium)** is responsible for Web standards. Key standards include:
- **HTML** (Hypertext Markup Language)
- **CSS** (Cascading Style Sheets)
- **XML** (Extensible Markup Language)
- **JavaScript** (ECMAScript)
- **DOM** (Document Object Model)
- **WCAG** (Web Content Accessibility Guidelines)
- **HTTP** (also standardized by IETF)

---

### Part 12: IP Addressing, DNS, and Security

**Q61: What are IP addresses? How are IP addresses classified?**

**A61:** An IP address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IPv4 addresses are 32-bit numbers, typically written in dotted-decimal notation (e.g., 192.168.1.1). IPv6 addresses are 128-bit numbers, written in hexadecimal. IPv4 addresses were traditionally classified into classes:
- **Class A:** 1.0.0.0 to 126.255.255.255 (large networks)
- **Class B:** 128.0.0.0 to 191.255.255.255 (medium networks)
- **Class C:** 192.0.0.0 to 223.255.255.255 (small networks)
- **Class D:** 224.0.0.0 to 239.255.255.255 (multicast)
- **Class E:** 240.0.0.0 to 255.255.255.255 (experimental)
Modern networking uses CIDR (Classless Inter-Domain Routing) instead of classes.

---

**Q62: What IP addresses are reserved, and for what purposes?**

**A62:** Reserved IP addresses include:
- **Private IP addresses (non-routable):**
  - 10.0.0.0 – 10.255.255.255 (Class A private)
  - 172.16.0.0 – 172.31.255.255 (Class B private)
  - 192.168.0.0 – 192.168.255.255 (Class C private)
  These are used within private networks and are not routable on the public Internet.
- **Loopback:** 127.0.0.0 – 127.255.255.255 (used for local testing; 127.0.0.1 is localhost).
- **Link-local:** 169.254.0.0 – 169.254.255.255 (APIPA; used when DHCP fails).
- **Multicast:** 224.0.0.0 – 239.255.255.255.
- **Broadcast:** 255.255.255.255 (limited broadcast).

---

**Q63: What are non-routable IP addresses, domain names, and host names?**

**A63:**
- **Non-routable IP addresses:** Private IP addresses (see above) that are not forwarded by routers on the public Internet. They are used within private networks and require NAT (Network Address Translation) to access the Internet.
- **Domain names:** Human-readable names for Internet resources (e.g., www.example.com). They are part of the Domain Name System (DNS).
- **Host names:** Names assigned to individual devices on a network (e.g., "mycomputer"). Host names can be resolved to IP addresses via DNS or local hosts files.

---

**Q64: How are host names mapped to IP addresses? What is DNS, and how does it work?**

**A64:** Host names are mapped to IP addresses using the **Domain Name System (DNS)**. DNS is a hierarchical, distributed database that translates domain names (e.g., www.example.com) into IP addresses (e.g., 93.184.216.34). How it works:
1. A user types a domain name into a browser.
2. The browser queries a DNS resolver (usually provided by the ISP).
3. The resolver queries root DNS servers, then top-level domain (TLD) servers, then authoritative DNS servers for the domain.
4. The authoritative server returns the IP address.
5. The resolver caches the result and returns it to the browser.
6. The browser uses the IP address to connect to the web server.

---

**Q65: What are firewalls and proxy servers, and why do we need them?**

**A65:**
- **Firewall:** A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks (like the Internet). Firewalls are needed to block unauthorized access, prevent attacks, and enforce security policies.
- **Proxy server:** An intermediary server that acts on behalf of clients to request resources from other servers. Proxies can provide anonymity, caching, content filtering, and access control. They are used to improve performance, enforce policies, and enhance security.

---

### Part 13: Leading Questions – Comprehensive Review

**Q66: What is a computer network? When, where, and by whom was the first computer network invented?**

**A66:** A computer network is a collection of interconnected devices that can communicate and share resources. The first computer network was **ARPANET** (Advanced Research Projects Agency Network), developed in the **late 1960s** in the **United States** by the **Advanced Research Projects Agency (ARPA)** of the U.S. Department of Defense. The first message was sent over ARPANET in **1969** between UCLA and Stanford Research Institute. Key figures include **J.C.R. Licklider**, **Lawrence Roberts**, **Bob Kahn**, and **Vint Cerf**.

---

**Q67: What are the different types of computer networks? How are they classified?**

**A67:** Computer networks are classified by scale and scope:
- **PAN (Personal Area Network):** Very small, e.g., Bluetooth.
- **LAN (Local Area Network):** A single building or campus; e.g., Ethernet, WiFi.
- **MAN (Metropolitan Area Network):** A city or metropolitan area.
- **WAN (Wide Area Network):** A large geographic area; e.g., the Internet.
- **CAN (Campus Area Network):** A university campus.
- **SAN (Storage Area Network):** For storage devices.
They can also be classified by topology (bus, star, ring, mesh), by transmission medium (wired, wireless), or by ownership (private, public).

---

**Q68: How many layers are there in the ISO network model? What are they? What does each layer do?**

**A68:** The ISO OSI model has **7 layers**: Physical, Data Link, Network, Transport, Session, Presentation, Application. (See Q48 for details on each layer's function.)

---

**Q69: How many layers are there in the Internet protocol stack?**

**A69:** The Internet protocol stack has **5 layers**: Physical, Link, Network, Transport, Application. (See Q49 for details.)

---

**Q70: What is circuit switching, packet switching, message switching, multiplexing, and routing respectively? What are the differences between circuit, packet, and message switching?**

**A70:** (See Q51 and Q52 for detailed answers.) In summary:
- **Circuit switching:** Dedicated path, reserved resources.
- **Packet switching:** Data divided into packets, shared resources, best-effort.
- **Message switching:** Entire message stored and forwarded.
- **Multiplexing:** Sharing a link among multiple signals (TDM, FDM).
- **Routing:** Selecting paths for traffic.

**Differences:** Circuit switching guarantees bandwidth but wastes resources; packet switching is efficient but best-effort; message switching has high latency and buffer requirements.

---

**Q71: What kinds of delays may occur in a computer network? How can each delay be calculated?**

**A71:** (See Q33 for details.) Delays:
1. **Processing delay:** Time to examine packet header. Typically microseconds.
2. **Queuing delay:** Time waiting in buffer. Depends on traffic intensity.
3. **Transmission delay:** L/R (packet length / link rate).
4. **Propagation delay:** d/s (distance / propagation speed).
Total nodal delay = sum of all four.

---

**Q72: How are homes, institutions, and mobile users connected to the Internet? What components are needed?**

**A72:** (See Q54.) Homes: DSL, cable, FTTH, satellite, dial-up. Institutions: Ethernet LAN, edge router, ISP. Mobile: cellular (3G/4G/5G). Components: modems, routers, access points, NICs, cables/fiber/radio, software.

---

**Q73: What devices are needed to build a simple computer network?**

**A73:** (See Q55.) End systems, NICs, switch/router, access point, cables/wireless media, modem, software.

---

**Q74: What is the hierarchy of Internet Service Providers (ISPs)? Describe NAP, regional ISP, local ISP, and end users.**

**A74:** (See Q56.) Tier-1 (global), regional, local, end users. NAP (Network Access Point) = IXP (Internet Exchange Point).

---

**Q75: In the context of computer networking, what are clients and what are servers? What is connection-oriented service? What is connectionless service?**

**A75:** (See Q57.) Client requests; server provides. Connection-oriented = TCP (reliable, ordered). Connectionless = UDP (unreliable, no connection).

---

**Q76: What organization is responsible for computer networking standards? What standards are in place?**

**A76:** (See Q58.) IEEE (Ethernet, WiFi), ISO (OSI), ITU, ANSI.

---

**Q77: What organization is responsible for Internet standards? What standards are being used today?**

**A77:** (See Q59.) IETF, RFCs. Standards: TCP/IP, HTTP, DNS, SMTP, IPv6, TLS.

---

**Q78: What organization is responsible for World Wide Web standards? What standards are being used today?**

**A78:** (See Q60.) W3C. Standards: HTML, CSS, XML, JavaScript, DOM, WCAG, HTTP.

---

**Q79: What are IP addresses? How are IP addresses classified? What are the classes of computer networks? What IP addresses are reserved, and for what purposes?**

**A79:** (See Q61 and Q62.) IP addresses are numerical labels. Classes A–E (historical). Reserved: private (10/8, 172.16/12, 192.168/16), loopback (127/8), link-local (169.254/16), multicast, broadcast.

---

**Q80: What are non-routable IP Addresses, domain names, and host names?**

**A80:** (See Q63.) Non-routable = private IPs. Domain names = human-readable names. Host names = device names.

---

**Q81: How are host names mapped to IP addresses? What is DNS, and how does it work?**

**A81:** (See Q64.) DNS maps host names to IP addresses via a hierarchical, distributed database.

---

**Q82: What are firewalls and proxy servers, and why do we need them?**

**A82:** (See Q65.) Firewalls control traffic; proxies act as intermediaries. Needed for security, privacy, caching, and policy enforcement.

---

### Part 14: Additional Terms and Topics (Quick Reference)

**Q83: Define the following terms: communication links, packet switches, transmission rate, packets, path, route, routers.**

**A83:**
- **Communication links:** Physical media (copper, fiber, radio) that carry data between devices.
- **Packet switches:** Devices (routers, switches) that forward packets.
- **Transmission rate:** Speed at which bits are sent over a link (bps).
- **Packets:** Small units of data formed by breaking messages into chunks.
- **Path:** The sequence of links and switches a packet traverses.
- **Route:** The path chosen for a packet.
- **Routers:** Packet switches in the network core that forward packets based on IP addresses.

---

**Q84: Define: Internet service providers, Protocol and network protocols, Transmission control protocol (TCP), Internet protocol (IP), Internet standards, IETF and RFCs, Distributed applications, Application Programming Interface (API).**

**A84:** (See Q40–Q47 for detailed definitions.) Quick reference:
- **ISPs:** Organizations providing Internet access.
- **Protocol:** Rules for communication.
- **Network protocols:** Protocols for network communication.
- **TCP:** Reliable, connection-oriented transport protocol.
- **IP:** Network layer protocol for addressing and routing.
- **Internet standards:** RFCs from IETF.
- **IETF:** Internet Engineering Task Force.
- **RFCs:** Requests for Comments (standard documents).
- **Distributed applications:** Apps running on multiple hosts.
- **API:** Interface for software interaction.

---

**Q85: Define: The network edge, Hosts and end systems, Clients, Servers, Access networks, Edge router, DSL, Cable Internet access, Fiber to the home (FTTH), Dial-up, Satellite, Ethernet, WiFi.**

**A85:** (See Q5–Q9 for details.) Quick reference:
- **Network edge:** End systems and access networks.
- **Hosts/end systems:** Devices running applications.
- **Clients:** Request services.
- **Servers:** Provide services.
- **Access networks:** Connect end systems to edge router.
- **Edge router:** First router on path to Internet.
- **DSL:** Digital Subscriber Line (phone lines).
- **Cable Internet:** Coaxial cable.
- **FTTH:** Fiber to the Home.
- **Dial-up:** Phone modem (obsolete).
- **Satellite:** Satellite Internet.
- **Ethernet:** Wired LAN (IEEE 802.3).
- **WiFi:** Wireless LAN (IEEE 802.11).

---

**Q86: Define: Wide-area wireless access, 3G network, LTE network, Physical media, Guided media, Unguided media, Unshielded twisted pair (UTP), Coaxial cable, Fiber optics, Terrestrial radio channels, Satellite radio channels, Geostationary satellite, Low-earth orbiting (LEO) satellite.**

**A86:** (See Q10–Q12 for details.) Quick reference:
- **Wide-area wireless:** Cellular (3G, LTE/4G, 5G).
- **3G:** Third-generation cellular.
- **LTE:** Long-Term Evolution (4G).
- **Physical media:** Pathways for signals.
- **Guided media:** Solid path (UTP, coax, fiber).
- **Unguided media:** Free space (radio, satellite).
- **UTP:** Unshielded twisted pair (copper).
- **Coaxial cable:** Copper core with shield.
- **Fiber optics:** Glass fibers, light pulses.
- **Terrestrial radio:** Ground-based radio.
- **Satellite radio:** Satellite-based radio.
- **Geostationary satellite:** High orbit, stationary.
- **LEO satellite:** Low orbit, lower latency.

---

**Q87: Define: The network core, Packet switches, Link-layer switches, Store-and-forward transmission, Messages and message switching, Output buffer / output queue, Queuing delays, Packet loss, Forwarding table (of routers), Routing protocols, Circuit and circuit switching, End-to-end connection.**

**A87:** (See Q13–Q23 for details.) Quick reference:
- **Network core:** Mesh of packet switches and links.
- **Packet switches:** Forward packets (routers, switches).
- **Link-layer switches:** Forward based on MAC addresses.
- **Store-and-forward:** Receive entire packet before forwarding.
- **Messages/message switching:** Entire message stored and forwarded.
- **Output buffer/queue:** Memory for waiting packets.
- **Queuing delays:** Waiting time in buffer.
- **Packet loss:** Dropped packets due to full buffer.
- **Forwarding table:** Maps destination to outgoing link.
- **Routing protocols:** Determine paths (OSPF, BGP).
- **Circuit switching:** Dedicated path, reserved resources.
- **End-to-end connection:** Dedicated path in circuit switching.

---

**Q88: Define: Multiplexing in circuit-switched networks, TDM, FDM, Bandwidth, Silent periods, Global transit ISP, Regional ISP, Tier-1 ISP, Internet Exchange Point (IXP), Content Provider Networks (CDNs).**

**A88:** (See Q24–Q32 for details.) Quick reference:
- **Multiplexing:** Sharing a link (TDM, FDM).
- **TDM:** Time Division Multiplexing.
- **FDM:** Frequency Division Multiplexing.
- **Bandwidth:** Data rate (bps).
- **Silent periods:** Idle time in circuit switching.
- **Global transit ISP:** Tier-1 global backbone.
- **Regional ISP:** Regional provider.
- **Tier-1 ISP:** Top-level global ISP.
- **IXP:** Internet Exchange Point (peering location).
- **CDNs:** Content Provider Networks (e.g., Netflix, Google).

---

**Q89: Define: Delay, loss, and throughput in packet-switched networks, Types of delay, Nodal processing delay, Queuing delay, Transmission delay, Propagation delay, Total nodal delay, Queuing delay and packet loss, Traffic intensity, Packet drop and packet loss, Instantaneous throughput, Average throughput, Bottleneck link.**

**A89:** (See Q33–Q39 for details.) Quick reference:
- **Delay, loss, throughput:** Key performance metrics.
- **Nodal processing delay:** Header examination time.
- **Queuing delay:** Buffer waiting time.
- **Transmission delay:** L/R.
- **Propagation delay:** d/s.
- **Total nodal delay:** Sum of all delays.
- **Queuing delay and packet loss:** Increase with traffic intensity.
- **Traffic intensity:** La/R.
- **Packet drop/loss:** Dropped when buffer full.
- **Instantaneous throughput:** Current data rate.
- **Average throughput:** F/T.
- **Bottleneck link:** Lowest-rate link on path.

---

### Part 15: Suggested Activities and Further Study

**Q90: What are the suggested activities for this section?**

**A90:**
- Read "A Little History of the World Wide Web" on the W3C site and "Brief History of the Internet" on the Internet Society site.
- Write an HTML document containing a list of networking terms and definitions.
- Visit an organization with a LAN or WAN and list devices, operating systems, and software.
- Visit the IETF and W3C sites to understand their roles.
- Read Section 1.6, Networks Under Attack, for background on network security.

---

**Q91: What is Section 1.6, Networks Under Attack, about?**

**A91:** Section 1.6 discusses network security threats, including malware (viruses, worms, Trojan horses), botnets, denial-of-service (DoS) attacks, packet sniffing, IP spoofing, and man-in-the-middle attacks. Although network security is not covered by this course, it is important background knowledge for understanding the vulnerabilities inherent in networked systems.

---

### Conclusion

This Q&A document has covered all the learning objectives, required textbook sections, suggested readings, terms, and leading questions for Section 1 – Overview of Computer Networks. It is designed to be comprehensive and rigorous, suitable for exam preparation and for reading aloud with text-to-speech software. Use it to test your understanding, reinforce key concepts, and prepare thoroughly for your assessments.

**End of Document.**