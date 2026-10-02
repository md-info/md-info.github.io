---
title: "Section 2 Network Protocols and Services"
description: "Computer Networks study notes · Unit 1"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 1"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text to Speech Q&A Document: Network Protocols and Services

**Course Section:** Section 2 – Network Protocols and Services
**Format:** Audio Q&A for Exam Preparation
**Topic Coverage:** Protocol Layers, Service Models, TCP/IP Stack, OSI Reference Model, Encapsulation, Packet Naming at Each Layer

---

## Part 1: Protocol Layers and Service Models

**Question:** What is a protocol layer and why do we use layered architecture in networking?

**Answer:** A protocol layer is a conceptual division of the complex task of network communication into smaller, more manageable pieces. Each layer is designed for a specific purpose and exists on both the sending and receiving systems. The layered architecture provides several key benefits: it allows for explicit structure and identification of complex system components, modularization eases maintenance and updating of system parts, and it enables interoperability between different vendors and technologies.

**Question:** What is a service and what is a service model in the context of network protocols?

**Answer:** A service defines the semantics of what a layer provides to the layer above it—essentially, the capabilities and guarantees that the upper layer can rely upon. A service model describes the specific set of services that a particular layer offers to the layer above it. For example, the transport layer may offer either a reliable, connection-oriented service or an unreliable, connectionless service.

**Question:** What is a protocol stack?

**Answer:** A protocol stack is a group of rules or procedures, called protocols, arranged on top of each other as part of a communication process. Each layer in the protocol stack receives services from the layer below it and provides services to the layer above it. For two computers to communicate, the same protocol stacks must be running on each computer, and each layer communicates with its equivalent, or peer, layer on the other computer.

---

## Part 2: Internet Protocol Stack

**Question:** What layers are included in the Internet protocol stack?

**Answer:** The Internet protocol stack, also known as the TCP/IP model, consists of five layers. From top to bottom, they are: the Application layer, the Transport layer, the Network layer (also called the Internet layer), the Link layer (also called the Network Access layer or Data Link layer), and the Physical layer.

**Question:** What services are provided by the Application layer in the Internet protocol stack?

**Answer:** The Application layer is responsible for supporting network applications. This layer defines the network applications and standard Internet services that users interact with directly. Examples of protocols at this layer include HTTP for the World Wide Web, SMTP for electronic mail, and FTP for file transfer.

**Question:** What services are provided by the Transport layer in the Internet protocol stack?

**Answer:** The Transport layer is responsible for transporting application-layer messages between the client and server sides of an application. This communication is described as end-to-end. The Internet has two primary transport protocols: TCP, which provides a connection-oriented, reliable service with guaranteed delivery and flow control, and UDP, which provides a connectionless, unreliable datagram service. TCP also segments long messages and provides congestion control.

**Question:** What services are provided by the Network layer in the Internet protocol stack?

**Answer:** The Network layer is responsible for routing datagrams from one host to another. The Internet's network layer has two principal components: the IP protocol, which defines the fields in the datagram and how end systems and routers act on these fields, and routing protocols that determine the routes that datagrams take. This layer is often simply referred to as the IP layer, reflecting that IP is the glue that binds the Internet together.

**Question:** What services are provided by the Link layer in the Internet protocol stack?

**Answer:** The Link layer is responsible for moving packets from one node to the next node in the route. At each node, IP passes the datagram to the link layer, which delivers it to the next node along the route. The services provided depend on the specific link-layer protocol employed, such as Ethernet or PPP. Some link-layer protocols provide reliable delivery on a link basis, which is different from TCP's end-to-end reliable delivery.

**Question:** What services are provided by the Physical layer in the Internet protocol stack?

**Answer:** The Physical layer is responsible for moving the individual bits within a frame from one node to the next. The protocols in this layer are link-dependent and depend on the actual transmission medium, such as twisted-pair copper wire, fiber optics, or wireless.

---

## Part 3: ISO OSI Reference Model

**Question:** What layers are included in the ISO OSI reference model?

**Answer:** The ISO OSI reference model has seven layers. From top to bottom, they are: the Application layer, the Presentation layer, the Session layer, the Transport layer, the Network layer, the Data Link layer, and the Physical layer. A helpful mnemonic to remember the order is "Please Do Not Throw Sausage Pizza Away."

**Question:** What are the functions of the upper three layers in the OSI model?

**Answer:** The upper three layers—Application, Presentation, and Session—are often referenced collectively as the upper layers. The Session layer establishes, maintains, and terminates sessions between two end systems, and manages dialog control (simplex, half-duplex, or full-duplex). The Presentation layer provides syntax translation services, enabling end systems to communicate despite different data compression, encryption, or encoding algorithms. The Application layer is the entrance point to the protocol stack for applications running on the computer.

**Question:** How do the OSI model and TCP/IP model compare?

**Answer:** The OSI model is an idealized network communication reference model, while TCP/IP is the practical, industrial model that is actually used on the Internet. TCP/IP either combines several OSI layers into a single layer or does not use certain layers at all. Specifically, TCP/IP's Application layer corresponds to the combined Session, Presentation, and Application layers of OSI. TCP/IP's Transport and Network layers correspond directly to their OSI counterparts. TCP/IP's Link and Physical layers correspond to OSI's Data Link and Physical layers.

---

## Part 4: Packet Names at Different Layers

**Question:** What is a packet called at the application layer?

**Answer:** At the Application layer, the data package is typically called a **message**. This term is used generically to describe a message from one entity to another on the network, though it does not always refer to an Application layer data package specifically.

**Question:** What is a packet called at the transport layer?

**Answer:** At the Transport layer, the data package is called a **segment** when using TCP. When UDP is used at the Transport layer, the data package may be called a datagram. The term "segment" specifically refers to the data package passed between TCP at the Transport layer and the Internet layer.

**Question:** What is a packet called at the network layer?

**Answer:** At the Network layer, the data package is called a **datagram**. IP assembles packets into units known as IP datagrams. The IP datagram is the data package passed between the Internet layer and the Network Access layer.

**Question:** What is a packet called at the link layer?

**Answer:** At the Link layer, the data package is called a **frame**. The Network Access layer creates one or more data frames designed for entry onto the physical network. In the case of a LAN system such as Ethernet, the frame may contain physical address information obtained through the ARP protocol.

**Question:** What is the general term for data packages at the physical layer?

**Answer:** At the Physical layer, the data is treated as a stream of **bits**. The data frame is converted to a stream of bits that is transmitted over the network medium.

---

## Part 5: Encapsulation

**Question:** What does encapsulation mean in the OSI reference model?

**Answer:** Encapsulation is the process by which a message can be wrapped up for delivery by entities other than those doing the communicating. At each layer in the protocol stack, the communication protocol adds information (headers) to the data from the layer above. Adding a header is called encapsulation. Specifically, the application layer attaches an HTTP header to the data, the transport layer attaches a TCP header, the Internet layer attaches an IP header, and the network interface layer attaches a physical header. On the receiving end, the process is reversed: headers are removed in order from the first layer to the fourth layer, a process called de-encapsulation.

**Question:** How does encapsulation work step by step during transmission?

**Answer:** During transmission, the data created by an application at the Application layer is passed to the Transport layer, where a TCP or UDP header is added, creating a segment. This segment passes to the Internet layer, where an IP header is added, creating a datagram. The IP datagram enters the Network Access layer, where it passes to software components designed to interface with the physical network, creating one or more data frames. Finally, the data frame is converted to a stream of bits that is transmitted over the network medium.

**Question:** What is the payload field in the context of encapsulation?

**Answer:** The payload field refers to the actual data being carried by a protocol data unit at any given layer. When a layer encapsulates data from the layer above, that data becomes the payload of the current layer's packet. For example, the IP datagram is the payload of an Ethernet frame. The Ethernet frame's type field, such as 0x0800, indicates that the data portion of the Ethernet frame contains an IPv4 datagram.

---

## Part 6: TCP/IP Protocol Layers Descriptive Summary

**Question:** Can you provide a descriptive summary of the TCP/IP Application layer?

**Answer:** The Application layer is the topmost layer of the TCP/IP stack. It defines the standard Internet services and network applications available to users. These services work with the Transport layer to send and receive data. Example protocols include FTP for file transfer, telnet for remote login, DNS for domain name resolution, SNMP for network management, and LDAP for directory services.

**Question:** Can you provide a descriptive summary of the TCP/IP Transport layer?

**Answer:** The Transport layer ensures that packets arrive in sequence and without error by exchanging acknowledgments of data receipt and retransmitting lost packets. This type of communication is called end-to-end. The primary protocols are TCP, which is reliable and connection-oriented, UDP, which is unreliable and connectionless, and SCTP, which is reliable and connection-oriented with support for multi-homed systems.

**Question:** Can you provide a descriptive summary of the TCP/IP Internet layer?

**Answer:** The Internet layer, also known as the Network layer, accepts and delivers packets for the network. This layer includes the Internet Protocol (IP), the Address Resolution Protocol (ARP), and the Internet Control Message Protocol (ICMP). IP is responsible for IP addressing, host-to-host communications by determining the path a packet must take, packet formatting into IP datagrams, and fragmentation when packets are too large for transmission. ARP maps Ethernet addresses to known IP addresses, and ICMP detects and reports network error conditions.

**Question:** Can you provide a descriptive summary of the TCP/IP Data Link layer?

**Answer:** The Data Link layer, also called the Network Access layer, identifies the network protocol type of the packet and provides error control and framing. Examples of data-link layer protocols include Ethernet IEEE 802.2 framing and Point-to-Point Protocol (PPP) framing. This layer interfaces with the physical network hardware.

**Question:** Can you provide a descriptive summary of the TCP/IP Physical Network layer?

**Answer:** The Physical Network layer specifies the characteristics of the hardware to be used for the network. It describes hardware standards such as IEEE 802.3 for Ethernet network media and RS-232 for standard pin connectors. This layer is concerned with transmitting raw bits over a communication channel.