---
title: "Section 3 UDP and TCP"
description: "Computer Networks study notes · Unit 3"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 3"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document for Exam Prep
## UDP and TCP: Transport Layer Protocols

---

## SECTION 1: INTRODUCTION TO TRANSPORT LAYER PROTOCOLS

**Question 1:** What are the two main transport layer protocols discussed in this unit?

**Answer:** The two main transport layer protocols are UDP, which stands for User Datagram Protocol, and TCP, which stands for Transmission Control Protocol.

---

**Question 2:** What is the full form of UDP?

**Answer:** UDP stands for User Datagram Protocol.

---

**Question 3:** What is the full form of TCP?

**Answer:** TCP stands for Transmission Control Protocol.

---

**Question 4:** What are the learning objectives for this unit on UDP and TCP?

**Answer:** After successfully completing this unit, you should be able to explain how UDP and TCP work, describe the differences between UDP and TCP, explain how data errors can be detected, and explain how reliable data transfer can be achieved at the transport layer.

---

**Question 5:** What textbook sections are required for study in this unit?

**Answer:** The required textbook sections are Section 3.3 on Connectionless Transport covering UDP, Section 3.4 on Principles of Reliable Data Transfer, and Section 3.5 on Connection-Oriented Transport covering TCP.

---

## SECTION 2: UDP SEGMENT STRUCTURE AND CHECKSUM

**Question 6:** What is a UDP segment structure?

**Answer:** A UDP segment structure refers to the format and organization of fields within a UDP datagram, which includes the source port number, destination port number, length field, checksum field, and the application data payload.

---

**Question 7:** What is UDP checksum?

**Answer:** UDP checksum is a value computed from the contents of the UDP segment, including the data and certain header fields, which is used by the receiver to detect errors that may have occurred during transmission.

---

**Question 8:** What is the purpose of the UDP checksum?

**Answer:** The purpose of the UDP checksum is to detect errors in the transmitted UDP segment. The sender computes the checksum and includes it in the segment, and the receiver recomputes the checksum and compares it with the received value to determine if any errors occurred during transmission.

---

**Question 9:** What is meant by 1s complement in the context of UDP checksum?

**Answer:** 1s complement is a method of representing negative numbers in binary where all bits are inverted. In UDP checksum calculation, the sender performs 1s complement addition of all 16-bit words in the segment, then takes the 1s complement of the sum to produce the checksum. The receiver performs the same calculation including the checksum field and checks if the result is all 1s.

---

**Question 10:** How is the UDP checksum calculated?

**Answer:** The UDP checksum is calculated by treating the entire UDP segment, including a pseudo-header containing source and destination IP addresses, as a sequence of 16-bit words. All words are added together using 1s complement arithmetic, and the 1s complement of the final sum is placed in the checksum field.

---

**Question 11:** Why is UDP called a connectionless transport protocol?

**Answer:** UDP is called a connectionless transport protocol because it does not establish a connection before sending data. Each UDP datagram is independent and can take a different path to the destination. There is no handshaking between the sender and receiver before data transmission begins.

---

**Question 12:** What advantages does UDP have over TCP?

**Answer:** UDP has several advantages over TCP. It has lower overhead because it does not establish connections or maintain connection state. It has smaller header size, requiring only 8 bytes compared to TCP's minimum 20 bytes. It provides faster transmission because there is no connection setup delay, no congestion control, and no retransmission delays. UDP also supports broadcasting and multicasting, which TCP does not.

---

**Question 13:** How is a UDP segment formatted?

**Answer:** A UDP segment is formatted with a header that is 8 bytes long, containing four fields of 2 bytes each: source port number, destination port number, length, and checksum. The length field specifies the total length of the UDP segment including header and data. The checksum field is used for error detection. Following the header is the application data payload.

---

**Question 14:** What is checksum?

**Answer:** A checksum is a value computed from data using a mathematical algorithm, which is transmitted along with the data. The receiver performs the same computation and compares results. If the computed checksum matches the received checksum, the data is likely error-free. If they differ, an error has occurred.

---

**Question 15:** What is the end-end principle in system design?

**Answer:** The end-end principle in system design states that functions that can be implemented at the endpoints of a communication system should be implemented there, rather than in the intermediate network nodes. This principle suggests that the network core should remain simple, and complexity should be placed at the edges of the network where applications and end systems reside.

---

## SECTION 3: PRINCIPLES OF RELIABLE DATA TRANSFER

**Question 16:** What is reliable data transfer?

**Answer:** Reliable data transfer is a service that ensures data sent by a sender application is delivered to the receiver application correctly, completely, and in order. It means no data is lost, corrupted, duplicated, or delivered out of sequence.

---

**Question 17:** What is unidirectional data transfer?

**Answer:** Unidirectional data transfer is a mode of communication where data flows in only one direction, from a sender to a receiver. The receiver does not send data back to the sender, though it may send acknowledgments or control information.

---

**Question 18:** What is bidirectional data transfer?

**Answer:** Bidirectional data transfer is a mode of communication where data can flow in both directions simultaneously between two endpoints. Both parties can act as both sender and receiver at the same time.

---

**Question 19:** What is the reliable data transfer principle?

**Answer:** The reliable data transfer principle encompasses the mechanisms and protocols designed to ensure that data is transferred correctly and completely across a network that may introduce errors, lose packets, or reorder packets. It involves techniques such as acknowledgments, retransmissions, sequence numbers, and timers.

---

**Question 20:** What is a First State Machine or FSM?

**Answer:** A First State Machine, abbreviated as FSM, is a mathematical model of computation consisting of a finite number of states, transitions between those states based on inputs, and actions performed during transitions or in states. In reliable data transfer protocols, FSMs describe the behavior of senders and receivers.

---

**Question 21:** What is positive acknowledgement?

**Answer:** Positive acknowledgement is a message sent by a receiver to a sender indicating that a data packet has been received correctly and without errors. It confirms successful delivery.

---

**Question 22:** What is negative acknowledgement?

**Answer:** Negative acknowledgement is a message sent by a receiver to a sender indicating that a data packet was received with errors or was not received at all. It signals the sender to retransmit the packet.

---

**Question 23:** What are Automatic Request reQuest protocols, also known as ARQ protocols?

**Answer:** Automatic Request reQuest protocols, abbreviated as ARQ protocols, are reliable data transfer protocols that use acknowledgments, timeouts, and retransmissions to ensure reliable delivery. When the sender does not receive a positive acknowledgement within a timeout period, it automatically retransmits the data.

---

**Question 24:** What is the stop-and-wait protocol?

**Answer:** The stop-and-wait protocol is a reliable data transfer protocol where the sender transmits one packet and then waits for an acknowledgement before sending the next packet. The sender stops after each transmission and waits for confirmation of receipt.

---

**Question 25:** What are duplicate data packets?

**Answer:** Duplicate data packets are packets that are received more than once by the receiver. They can occur when an acknowledgement is lost and the sender retransmits a packet that was already successfully received.

---

**Question 26:** What is a sequence number in packets?

**Answer:** A sequence number in packets is a field that identifies the order of packets in a stream. It allows the receiver to detect duplicate packets, reorder out-of-order packets, and identify missing packets.

---

**Question 27:** What are duplicate ACKs?

**Answer:** Duplicate ACKs are acknowledgements with the same acknowledgement number received multiple times. They indicate that the receiver is missing a packet and has received subsequent packets, triggering fast retransmission in TCP.

---

**Question 28:** What is the use of countdown timer?

**Answer:** A countdown timer is used in reliable data transfer protocols to detect lost packets. When the sender transmits a packet, it starts a timer. If an acknowledgement is not received before the timer expires, the sender assumes the packet or its acknowledgement was lost and retransmits the packet.

---

**Question 29:** What is the alternating-bit protocol?

**Answer:** The alternating-bit protocol is a stop-and-wait protocol that uses sequence numbers that alternate between 0 and 1. The sender alternates the sequence number with each new packet, allowing the receiver to distinguish new packets from retransmissions.

---

**Question 30:** What is RDT1.0?

**Answer:** RDT1.0 is a reliable data transfer protocol designed for a perfectly reliable channel. In RDT1.0, the sender simply sends data, and the receiver simply receives data. There is no need for error detection, acknowledgements, or retransmissions because the channel is assumed to be perfect.

---

**Question 31:** What is RDT2.0?

**Answer:** RDT2.0 is a reliable data transfer protocol designed for a channel that may have bit errors but no packet loss. It uses checksums for error detection, positive and negative acknowledgements, and retransmission when errors are detected.

---

**Question 32:** What is RDT2.1?

**Answer:** RDT2.1 is an improved version of RDT2.0 that handles the problem of corrupted acknowledgements. It adds sequence numbers to packets, allowing the receiver to distinguish between new packets and retransmissions.

---

**Question 33:** What is RDT2.2?

**Answer:** RDT2.2 is a further improvement over RDT2.1 that eliminates the need for negative acknowledgements. Instead of sending NAK, the receiver sends an ACK with the sequence number of the last correctly received packet, which implicitly acknowledges all packets up to that sequence number.

---

**Question 34:** What is RDT3.0?

**Answer:** RDT3.0 is a reliable data transfer protocol that handles both bit errors and packet loss. It adds a countdown timer to the mechanisms of RDT2.2. If an acknowledgement is not received within the timeout period, the sender retransmits the packet.

---

**Question 35:** How could reliable data transfer be achieved over a perfectly reliable channel?

**Answer:** Over a perfectly reliable channel, reliable data transfer is achieved simply by the sender sending data and the receiver receiving it. No error detection, acknowledgements, or retransmissions are needed because the channel never loses or corrupts data.

---

**Question 36:** How could reliable data transfer be achieved over a channel with bit errors?

**Answer:** Over a channel with bit errors, reliable data transfer is achieved using error detection through checksums, positive and negative acknowledgements, and retransmission of corrupted packets. Sequence numbers are used to handle corrupted acknowledgements.

---

**Question 37:** How could reliable data transfer be achieved over a lossy channel with bit errors?

**Answer:** Over a lossy channel with bit errors, reliable data transfer is achieved by combining all the mechanisms for bit errors with a countdown timer. The sender retransmits packets when acknowledgements are not received within the timeout period, handling both packet loss and bit errors.

---

**Question 38:** What do the sender and receiver need to do in order to achieve reliable data transfer over a perfectly reliable channel?

**Answer:** Over a perfectly reliable channel, the sender only needs to send data, and the receiver only needs to receive data. No additional mechanisms are required because the channel is assumed to be error-free and lossless.

---

## SECTION 4: PIPELINING AND SLIDING WINDOW PROTOCOLS

**Question 39:** What is pipelining?

**Answer:** Pipelining is a technique where the sender transmits multiple packets without waiting for acknowledgements for each one. It allows multiple packets to be in transit simultaneously, greatly improving channel utilization compared to stop-and-wait protocols.

---

**Question 40:** What are pipelined reliable data transfer protocols?

**Answer:** Pipelined reliable data transfer protocols are protocols that allow multiple packets to be outstanding, meaning sent but not yet acknowledged. They use sequence numbers, buffering, and either Go-Back-N or Selective Repeat mechanisms to ensure reliability.

---

**Question 41:** What is utilization of communication channel?

**Answer:** Utilization of communication channel is a measure of how efficiently the channel is being used for transmitting data. It is calculated as the fraction of time the channel is busy transmitting data versus the total time. Pipelining greatly improves channel utilization.

---

**Question 42:** What is the Go-Back-N protocol?

**Answer:** The Go-Back-N protocol, abbreviated as GBN, is a pipelined reliable data transfer protocol where the sender can have multiple outstanding packets. When a packet is lost or an error occurs, the sender retransmits that packet and all subsequent packets, hence the name Go-Back-N.

---

**Question 43:** What is the key feature of a Go-Back-N protocol?

**Answer:** The key feature of Go-Back-N protocol is that the receiver only accepts packets in order. If a packet is missing, the receiver discards all subsequent packets and sends a duplicate ACK for the last correctly received packet. The sender then retransmits all packets from the lost one onward.

---

**Question 44:** Why is the GBN protocol also called a sliding-window protocol?

**Answer:** The GBN protocol is called a sliding-window protocol because the sender maintains a window of sequence numbers that it is allowed to send. As acknowledgements are received, the window slides forward, allowing new packets to be sent.

---

**Question 45:** What is the Selective Repeat protocol?

**Answer:** The Selective Repeat protocol, abbreviated as SR, is a pipelined reliable data transfer protocol where the receiver accepts and buffers out-of-order packets. When a packet is lost, only that specific packet is retransmitted, not the entire window of subsequent packets.

---

**Question 46:** What is the key feature of the selective repeat protocol?

**Answer:** The key feature of Selective Repeat protocol is that the receiver individually acknowledges correctly received packets and buffers out-of-order packets. The sender retransmits only those packets that are not acknowledged, avoiding unnecessary retransmissions.

---

**Question 47:** What problem is the selective repeat protocol intended to solve?

**Answer:** Selective Repeat is intended to solve the inefficiency of Go-Back-N, where a single lost packet causes retransmission of many correctly received packets. Selective Repeat only retransmits the specific lost packets.

---

**Question 48:** What is a sliding-window protocol?

**Answer:** A sliding-window protocol is a protocol that uses a window of sequence numbers to control the flow of packets. The sender can transmit packets within the window without waiting for acknowledgements. As acknowledgements arrive, the window slides forward.

---

**Question 49:** What is window size in sliding window protocol?

**Answer:** Window size in sliding window protocol is the number of packets that can be outstanding, meaning sent but not yet acknowledged, at any given time. It determines how many packets the sender can transmit before receiving acknowledgements.

---

**Question 50:** What are the two basic approaches to pipelined error recovery?

**Answer:** The two basic approaches to pipelined error recovery are Go-Back-N, where the sender retransmits all packets from the lost packet onward, and Selective Repeat, where the sender retransmits only the specific lost packets.

---

**Question 51:** Protocol RDT3.0 is a stop-and-wait data transfer protocol with poor performance. What techniques can be used to improve its performance?

**Answer:** The performance of RDT3.0 can be improved through pipelining, which allows multiple packets to be in transit simultaneously. This can be implemented using Go-Back-N or Selective Repeat protocols, which greatly increase channel utilization.

---

## SECTION 5: TCP FUNDAMENTALS

**Question 52:** Why is TCP called a connection-oriented transport protocol?

**Answer:** TCP is called a connection-oriented transport protocol because it establishes a connection between the sender and receiver before data transfer begins. This connection setup involves a three-way handshake, and the connection state is maintained at both endpoints throughout the data transfer.

---

**Question 53:** Why is TCP said to be point-to-point?

**Answer:** TCP is said to be point-to-point because it establishes a connection between exactly two endpoints, one sender and one receiver. Unlike UDP, TCP does not support multicasting or broadcasting to multiple destinations.

---

**Question 54:** What is a three-way handshake?

**Answer:** A three-way handshake is the process TCP uses to establish a connection. It involves three steps. First, the client sends a SYN segment to the server. Second, the server responds with a SYNACK segment. Third, the client sends an ACK segment to the server. This establishes a reliable connection between the two endpoints.

---

**Question 55:** What is a SYNACK segment?

**Answer:** A SYNACK segment is a TCP segment that combines both SYN and ACK flags. It is sent by the server in response to a client's SYN segment during the three-way handshake. It acknowledges the client's SYN and simultaneously sends the server's own SYN.

---

**Question 56:** What is the full duplex service?

**Answer:** Full duplex service is a communication mode where data can be transmitted in both directions simultaneously. TCP provides full duplex service, allowing both endpoints to send and receive data at the same time.

---

**Question 57:** What transport protocols are used by SMTP?

**Answer:** SMTP, which stands for Simple Mail Transfer Protocol, uses TCP as its transport protocol.

---

**Question 58:** What transport protocols are used by Telnet?

**Answer:** Telnet uses TCP as its transport protocol.

---

**Question 59:** What transport protocols are used by HTTP?

**Answer:** HTTP, which stands for Hypertext Transfer Protocol, uses TCP as its transport protocol.

---

**Question 60:** What transport protocols are used by FTP?

**Answer:** FTP, which stands for File Transfer Protocol, uses TCP as its transport protocol.

---

**Question 61:** What transport protocols are used by NFS?

**Answer:** NFS, which stands for Network File System, typically uses UDP, though it can also use TCP.

---

**Question 62:** What transport protocols are used by SNMP?

**Answer:** SNMP, which stands for Simple Network Management Protocol, typically uses UDP as its transport protocol.

---

**Question 63:** What transport protocols are used by RIP?

**Answer:** RIP, which stands for Routing Information Protocol, uses UDP as its transport protocol.

---

**Question 64:** What transport protocols are used by DNS?

**Answer:** DNS, which stands for Domain Name System, typically uses UDP for queries, but uses TCP for zone transfers and for queries that require reliable delivery.

---

## SECTION 6: TCP SEGMENT STRUCTURE

**Question 65:** What is the TCP connection sender buffer?

**Answer:** The TCP connection sender buffer is a storage area in the sender's memory where data is held after being passed from the application but before being transmitted and acknowledged. It allows the sender to retransmit lost data and manage flow control.

---

**Question 66:** What is Maximum Segment Size, abbreviated as MSS?

**Answer:** Maximum Segment Size, abbreviated as MSS, is the largest amount of data, measured in bytes, that TCP is willing to receive in a single segment. It is typically determined by the maximum transmission unit of the underlying network.

---

**Question 67:** What is Maximum Transmission Unit, abbreviated as MTU?

**Answer:** Maximum Transmission Unit, abbreviated as MTU, is the largest packet size that can be transmitted over a network link. It includes both the TCP header and the data payload. TCP uses the MTU to determine the Maximum Segment Size.

---

**Question 68:** What is TCP segment structure?

**Answer:** TCP segment structure refers to the format of a TCP segment, which includes a header of at least 20 bytes and a data payload. The header contains fields for source port, destination port, sequence number, acknowledgement number, header length, flags, receive window, checksum, urgent pointer, and options.

---

**Question 69:** What are source and destination port numbers in TCP?

**Answer:** Source and destination port numbers in TCP are 16-bit fields that identify the sending and receiving application processes. The source port number identifies the application on the sender's host, and the destination port number identifies the application on the receiver's host.

---

**Question 70:** What is the Internet checksum field in TCP?

**Answer:** The Internet checksum field in TCP is a 16-bit field used for error detection. The sender computes the checksum over the TCP header, data, and a pseudo-header containing IP addresses, and the receiver verifies it to detect transmission errors.

---

**Question 71:** What is the sequence number field in TCP?

**Answer:** The sequence number field in TCP is a 32-bit field that identifies the byte stream number of the first byte in the segment's data. It allows the receiver to order segments correctly and detect missing or duplicate data.

---

**Question 72:** What is the acknowledge number field in TCP?

**Answer:** The acknowledge number field in TCP is a 32-bit field that contains the sequence number of the next byte the receiver expects to receive. It acknowledges that all bytes up to this number minus one have been received correctly.

---

**Question 73:** What is the receive window in TCP?

**Answer:** The receive window in TCP is a 16-bit field that specifies the number of bytes the receiver is willing to accept. It is used for flow control to prevent the sender from overwhelming the receiver with too much data.

---

**Question 74:** What is the header length field in TCP?

**Answer:** The header length field in TCP is a 4-bit field that specifies the length of the TCP header in 32-bit words. It indicates where the data begins and is necessary because the options field can vary in length.

---

**Question 75:** What is the options field in TCP?

**Answer:** The options field in TCP is a variable-length field that allows for additional TCP features not covered by the standard header. Common options include maximum segment size, window scaling, selective acknowledgement, and timestamps.

---

**Question 76:** What is the flag field in TCP?

**Answer:** The flag field in TCP is a 6-bit field containing control bits that indicate the type and purpose of the segment. The flags include URG, ACK, PSH, RST, SYN, and FIN.

---

**Question 77:** What is the ACK bit in TCP?

**Answer:** The ACK bit in TCP is a flag that, when set to 1, indicates that the acknowledgement number field contains a valid acknowledgement. It confirms that the segment is acknowledging previously received data.

---

**Question 78:** What is the RST bit in TCP?

**Answer:** The RST bit in TCP is a flag that, when set to 1, indicates that the connection should be reset. It is used to abort a connection due to an error or to refuse a connection request.

---

**Question 79:** What is the SYN bit in TCP?

**Answer:** The SYN bit in TCP is a flag that, when set to 1, indicates that the segment is a connection request. It is used during the three-way handshake to establish a new connection.

---

**Question 80:** What is the PSH bit in TCP?

**Answer:** The PSH bit in TCP is a flag that, when set to 1, indicates that the receiver should pass the data to the application immediately rather than buffering it. It is used for interactive applications.

---

**Question 81:** What is the URG bit in TCP?

**Answer:** The URG bit in TCP is a flag that, when set to 1, indicates that the urgent pointer field is valid and there is urgent data in the segment. It is rarely used in practice.

---

**Question 82:** What is the urgent data pointer field in TCP?

**Answer:** The urgent data pointer field in TCP is a 16-bit field that points to the last byte of urgent data in the segment. It is only meaningful when the URG flag is set.

---

**Question 83:** What is cumulative acknowledgement in TCP?

**Answer:** Cumulative acknowledgement in TCP is a mechanism where an acknowledgement number acknowledges all bytes up to but not including the acknowledgement number. A single ACK can acknowledge multiple received segments.

---

**Question 84:** What fields does a TCP segment have, and what role is assigned to each?

**Answer:** A TCP segment has the following fields. The source port identifies the sending application. The destination port identifies the receiving application. The sequence number identifies the byte stream position of the data. The acknowledgement number confirms receipt of data. The header length specifies header size. The flags control connection state and behavior. The receive window provides flow control. The checksum detects errors. The urgent pointer indicates urgent data. The options provide additional features.

---

## SECTION 7: TCP RELIABILITY AND FLOW CONTROL

**Question 85:** The Internet Protocol, abbreviated as IP, is an unreliable best-effort protocol, which runs under TCP. How does TCP provide reliable data transfer service over the unreliable IP?

**Answer:** TCP provides reliable data transfer over unreliable IP through several mechanisms. It uses sequence numbers to detect missing or out-of-order segments. It uses acknowledgements to confirm receipt. It uses retransmission timers to detect lost segments and retransmit them. It uses checksums to detect corrupted data. It uses cumulative acknowledgements and fast retransmit to recover efficiently from losses.

---

**Question 86:** What is Exponential Weighted Moving Average, abbreviated as EWMA?

**Answer:** Exponential Weighted Moving Average, abbreviated as EWMA, is a technique used by TCP to estimate the round-trip time and its variance. It gives more weight to recent measurements while still considering historical data, allowing TCP to adapt its retransmission timeout dynamically.

---

**Question 87:** What is fast retransmit?

**Answer:** Fast retransmit is a TCP mechanism where the sender retransmits a lost segment upon receiving three duplicate acknowledgements, without waiting for the retransmission timer to expire. This speeds up recovery from packet loss.

---

**Question 88:** Why does TCP need flow control?

**Answer:** TCP needs flow control to prevent the sender from overwhelming the receiver with more data than it can process. The receiver has limited buffer space, and flow control ensures the sender does not send data faster than the receiver can handle.

---

**Question 89:** What is the flow control service in TCP?

**Answer:** The flow control service in TCP is a mechanism that allows the receiver to control the rate at which the sender transmits data. The receiver advertises a receive window indicating how many bytes it can accept, and the sender limits outstanding data accordingly.

---

**Question 90:** What is the congestion control service in TCP?

**Answer:** The congestion control service in TCP is a mechanism that prevents the sender from overwhelming the network. It adjusts the transmission rate based on perceived network congestion, using algorithms like slow start, congestion avoidance, fast retransmit, and fast recovery.

---

## SECTION 8: TCP CONNECTION MANAGEMENT

**Question 91:** How is a TCP connection managed?

**Answer:** A TCP connection is managed through a series of states and transitions. It begins with connection establishment using the three-way handshake. Data transfer occurs in the ESTABLISHED state. Connection termination uses a four-way handshake with FIN and ACK segments. Various states track the progress of connection setup and teardown.

---

**Question 92:** What are the various TCP states?

**Answer:** The various TCP states include CLOSED, LISTEN, SYN_SENT, SYN_RECEIVED, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT, and CLOSED. Each state represents a specific phase in the connection lifecycle.

---

**Question 93:** What is the TCP connection control management?

**Answer:** TCP connection control management refers to the procedures and mechanisms used to establish, maintain, and terminate TCP connections. It includes the three-way handshake for connection establishment, data transfer with acknowledgements, and the four-way handshake for connection termination.

---

**Question 94:** How is a transport layer segment formatted?

**Answer:** A transport layer segment is formatted with a header containing control information and a data payload containing application data. For UDP, the header is 8 bytes with source port, destination port, length, and checksum. For TCP, the header is at least 20 bytes with additional fields for sequence numbers, acknowledgements, flags, window size, and options.

---

**Question 95:** How is each field in a transport layer segment created?

**Answer:** Each field in a transport layer segment is created by the sending transport layer protocol. Port numbers are assigned by the application or operating system. Sequence and acknowledgement numbers are maintained by the protocol. Flags are set based on connection state and segment purpose. Checksums are computed from the segment contents. Window size is determined by available buffer space. Options are configured based on protocol settings.

---

**Question 96:** How is a UDP segment formatted?

**Answer:** A UDP segment is formatted with an 8-byte header containing source port number, destination port number, length, and checksum, followed by the application data. The length field includes both header and data. The checksum is optional in IPv4 but mandatory in IPv6.

---

**Question 97:** What is the purpose of the length field in a UDP segment?

**Answer:** The length field in a UDP segment specifies the total length of the UDP datagram, including both the header and the data payload. It allows the receiver to determine where the data ends.

---

**Question 98:** What is the purpose of the checksum field in a UDP segment?

**Answer:** The checksum field in a UDP segment is used for error detection. The sender computes a checksum over the segment contents, and the receiver recomputes it to verify that the data was not corrupted during transmission.

---

## SECTION 9: COMPARISON AND APPLICATION

**Question 99:** What are the differences between UDP and TCP?

**Answer:** UDP is connectionless, while TCP is connection-oriented. UDP does not guarantee delivery, ordering, or error recovery, while TCP provides reliable, ordered delivery with error recovery. UDP has smaller header overhead of 8 bytes, while TCP has at least 20 bytes. UDP is faster with lower latency, while TCP is slower but more reliable. UDP supports broadcasting and multicasting, while TCP is point-to-point only. UDP has no flow control or congestion control, while TCP has both.

---

**Question 100:** Why is UDP called a connectionless transport protocol?

**Answer:** UDP is called connectionless because it does not establish a connection before sending data. Each UDP datagram is independent, and there is no handshaking, no connection state maintained, and no guarantee of delivery or ordering.

---

**Question 101:** Why is TCP called a connection-oriented transport protocol?

**Answer:** TCP is called connection-oriented because it establishes a connection through a three-way handshake before data transfer. It maintains connection state at both endpoints, provides reliable and ordered delivery, and gracefully terminates the connection when done.

---

**Question 102:** What is the end-end principle in system design?

**Answer:** The end-end principle states that network functionality should be implemented at the endpoints of the network rather than in the intermediate nodes. This keeps the network core simple and places complexity at the edges where applications reside. TCP reliability is an example of this principle.

---

**Question 103:** What is reliable data transfer?

**Answer:** Reliable data transfer is a service that ensures data is delivered correctly, completely, and in order from sender to receiver, despite potential errors, losses, or reordering in the underlying network.

---

**Question 104:** What is unidirectional data transfer?

**Answer:** Unidirectional data transfer is communication where data flows in only one direction, from sender to receiver, without reverse data flow.

---

**Question 105:** What is bidirectional data transfer?

**Answer:** Bidirectional data transfer is communication where data can flow in both directions simultaneously between two endpoints.

---

**Question 106:** What is a First State Machine, or FSM?

**Answer:** A First State Machine is a model of computation with states, transitions, and actions used to describe the behavior of protocols, including senders and receivers in reliable data transfer.

---

**Question 107:** What is positive acknowledgement?

**Answer:** Positive acknowledgement is a signal from receiver to sender confirming correct receipt of data.

---

**Question 108:** What is negative acknowledgement?

**Answer:** Negative acknowledgement is a signal from receiver to sender indicating that data was received with errors or not at all.

---

**Question 109:** What are Automatic Request reQuest protocols?

**Answer:** Automatic Request reQuest protocols, or ARQ protocols, use acknowledgements, timeouts, and retransmissions to achieve reliable data transfer.

---

**Question 110:** What is the stop-and-wait protocol?

**Answer:** The stop-and-wait protocol sends one packet at a time and waits for acknowledgement before sending the next packet.

---

**Question 111:** What are duplicate data packets?

**Answer:** Duplicate data packets are packets received more than once, often due to lost acknowledgements causing unnecessary retransmissions.

---

**Question 112:** What is a sequence number in packets?

**Answer:** A sequence number identifies the order of packets, allowing detection of duplicates, missing packets, and out-of-order delivery.

---

**Question 113:** What are duplicate ACKs?

**Answer:** Duplicate ACKs are repeated acknowledgements indicating a missing packet and triggering fast retransmission.

---

**Question 114:** What is the use of countdown timer?

**Answer:** A countdown timer detects lost packets by triggering retransmission when acknowledgement is not received within the timeout period.

---

**Question 115:** What is the alternating-bit protocol?

**Answer:** The alternating-bit protocol uses sequence numbers that alternate between 0 and 1 in a stop-and-wait protocol.

---

**Question 116:** What is RDT1.0?

**Answer:** RDT1.0 is a reliable data transfer protocol for perfectly reliable channels with no error handling needed.

---

**Question 117:** What is RDT2.0?

**Answer:** RDT2.0 handles bit errors using checksums, acknowledgements, and retransmissions.

---

**Question 118:** What is RDT2.1?

**Answer:** RDT2.1 adds sequence numbers to handle corrupted acknowledgements.

---

**Question 119:** What is RDT2.2?

**Answer:** RDT2.2 uses ACK with sequence numbers instead of NAK, eliminating negative acknowledgements.

---

**Question 120:** What is RDT3.0?

**Answer:** RDT3.0 adds countdown timers to handle packet loss in addition to bit errors.

---

**Question 121:** What is pipelining?

**Answer:** Pipelining allows multiple packets to be in transit simultaneously, improving channel utilization.

---

**Question 122:** What are pipelined reliable data transfer protocols?

**Answer:** Pipelined protocols allow multiple outstanding packets using Go-Back-N or Selective Repeat mechanisms.

---

**Question 123:** What is utilization of communication channel?

**Answer:** Utilization measures how efficiently the channel transmits data, improved by pipelining.

---

**Question 124:** What is the Go-Back-N protocol?

**Answer:** Go-Back-N retransmits a lost packet and all subsequent packets when an error occurs.

---

**Question 125:** What is the key feature of Go-Back-N?

**Answer:** Go-Back-N receiver only accepts in-order packets and discards out-of-order packets.

---

**Question 126:** Why is GBN called a sliding-window protocol?

**Answer:** GBN uses a sliding window of sequence numbers that advances as acknowledgements arrive.

---

**Question 127:** What is the Selective Repeat protocol?

**Answer:** Selective Repeat retransmits only lost packets and buffers out-of-order packets at the receiver.

---

**Question 128:** What is the key feature of Selective Repeat?

**Answer:** Selective Repeat individually acknowledges packets and only retransmits missing ones.

---

**Question 129:** What problem does Selective Repeat solve?

**Answer:** Selective Repeat solves Go-Back-N inefficiency of retransmitting correctly received packets.

---

**Question 130:** What is a sliding-window protocol?

**Answer:** A sliding-window protocol uses a window of sequence numbers to control packet transmission.

---

**Question 131:** What is window size?

**Answer:** Window size is the number of outstanding packets allowed at any time.

---

**Question 132:** What are the two basic approaches to pipelined error recovery?

**Answer:** Go-Back-N and Selective Repeat are the two pipelined error recovery approaches.

---

**Question 133:** How can RDT3.0 performance be improved?

**Answer:** RDT3.0 performance can be improved through pipelining using Go-Back-N or Selective Repeat.

---

**Question 134:** Why is TCP point-to-point?

**Answer:** TCP connects exactly two endpoints, one sender and one receiver.

---

**Question 135:** What is a three-way handshake?

**Answer:** The three-way handshake establishes TCP connections using SYN, SYNACK, and ACK segments.

---

**Question 136:** What is a SYNACK segment?

**Answer:** A SYNACK segment combines SYN and ACK flags, sent by server during connection establishment.

---

**Question 137:** What is full duplex service?

**Answer:** Full duplex allows simultaneous bidirectional data transmission.

---

**Question 138:** What is the TCP connection sender buffer?

**Answer:** The sender buffer holds data until acknowledged, enabling retransmission and flow control.

---

**Question 139:** What is Maximum Segment Size?

**Answer:** MSS is the largest data amount TCP will receive in a single segment.

---

**Question 140:** What is Maximum Transmission Unit?

**Answer:** MTU is the largest packet size a network link can transmit.

---

**Question 141:** What is TCP segment structure?

**Answer:** TCP segment structure includes a 20-byte minimum header and data payload.

---

**Question 142:** What are source and destination port numbers?

**Answer:** Port numbers identify sending and receiving applications.

---

**Question 143:** What is the Internet checksum field?

**Answer:** The checksum field detects errors in TCP segments.

---

**Question 144:** What is the sequence number field?

**Answer:** The sequence number identifies the byte stream position of segment data.

---

**Question 145:** What is the acknowledge number field?

**Answer:** The acknowledge number confirms receipt of data up to that byte.

---

**Question 146:** What is the receive window?

**Answer:** The receive window specifies bytes the receiver can accept for flow control.

---

**Question 147:** What is the header length field?

**Answer:** The header length field specifies TCP header size in 32-bit words.

---

**Question 148:** What is the options field?

**Answer:** The options field provides additional TCP features like MSS and window scaling.

---

**Question 149:** What is the flag field?

**Answer:** The flag field contains control bits URG, ACK, PSH, RST, SYN, FIN.

---

**Question 150:** What is the ACK bit?

**Answer:** The ACK bit indicates the acknowledgement number is valid.

---

**Question 151:** What is the RST bit?

**Answer:** The RST bit resets the connection.

---

**Question 152:** What is the SYN bit?

**Answer:** The SYN bit requests connection establishment.

---

**Question 153:** What is the PSH bit?

**Answer:** The PSH bit requests immediate data delivery to application.

---

**Question 154:** What is the URG bit?

**Answer:** The URG bit indicates urgent data present.

---

**Question 155:** What is the urgent data pointer field?

**Answer:** The urgent pointer points to the last byte of urgent data.

---

**Question 156:** What is cumulative acknowledgement?

**Answer:** Cumulative acknowledgement confirms all bytes up to the acknowledgement number.

---

**Question 157:** What is Exponential Weighted Moving Average?

**Answer:** EWMA estimates round-trip time for TCP retransmission timeout.

---

**Question 158:** What is fast retransmit?

**Answer:** Fast retransmit retransmits on three duplicate ACKs without waiting for timeout.

---

**Question 159:** Why does TCP need flow control?

**Answer:** Flow control prevents sender from overwhelming receiver's buffer.

---

**Question 160:** What is the flow control service?

**Answer:** Flow control uses receive window to limit sender's transmission rate.

---

**Question 161:** What is the congestion control service?

**Answer:** Congestion control prevents network overload using slow start and congestion avoidance.

---

**Question 162:** How is a TCP connection managed?

**Answer:** TCP connections are managed through states, three-way handshake, data transfer, and four-way termination.

---

**Question 163:** What are the various TCP states?

**Answer:** TCP states include CLOSED, LISTEN, SYN_SENT, SYN_RECEIVED, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT.

---

**Question 164:** How is a transport layer segment formatted?

**Answer:** Transport segments have headers with control information and data payloads, formatted differently for UDP and TCP.

---

**Question 165:** How is each field in a transport layer segment created?

**Answer:** Fields are created by the protocol based on application data, connection state, and protocol configuration.

---

**Question 166:** Why is UDP called connectionless?

**Answer:** UDP does not establish connections or maintain state before sending data.

---

**Question 167:** Why is TCP called connection-oriented?

**Answer:** TCP establishes connections through handshaking and maintains state.

---

**Question 168:** What advantages does UDP have over TCP?

**Answer:** UDP has lower overhead, smaller headers, faster transmission, and supports broadcasting.

---

**Question 169:** What transport protocols are used by SMTP, Telnet, HTTP, FTP, NFS, SNMP, RIP, and DNS?

**Answer:** SMTP uses TCP. Telnet uses TCP. HTTP uses TCP. FTP uses TCP. NFS uses UDP or TCP. SNMP uses UDP. RIP uses UDP. DNS uses UDP for queries and TCP for zone transfers.

---

**Question 170:** How is a UDP segment formatted?

**Answer:** UDP segments have an 8-byte header with source port, destination port, length, and checksum, followed by data.

---

**Question 171:** What is checksum?

**Answer:** A checksum is a computed value for error detection in transmitted data.

---

**Question 172:** How is checksum calculated in UDP?

**Answer:** UDP checksum uses 1s complement addition of 16-bit words including pseudo-header, with 1s complement of sum in checksum field.

---

**Question 173:** What is reliable data transfer?

**Answer:** Reliable data transfer ensures correct, complete, in-order delivery despite network errors.

---

**Question 174:** What is unidirectional data transfer?

**Answer:** Unidirectional data transfer flows in only one direction.

---

**Question 175:** What is bidirectional data transfer?

**Answer:** Bidirectional data transfer flows in both directions simultaneously.

---

**Question 176:** What do sender and receiver do for reliable data transfer over a perfectly reliable channel?

**Answer:** Sender sends data, receiver receives data, no error handling needed.

---

**Question 177:** How is reliable data transfer achieved over a channel with bit errors?

**Answer:** Using checksums, acknowledgements, negative acknowledgements, and retransmissions.

---

**Question 178:** How is reliable data transfer achieved over a lossy channel with bit errors?

**Answer:** Adding countdown timers to detect and recover from packet loss.

---

**Question 179:** What techniques improve RDT3.0 performance?

**Answer:** Pipelining with Go-Back-N or Selective Repeat improves performance.

---

**Question 180:** What are the two basic approaches to pipelined error recovery?

**Answer:** Go-Back-N and Selective Repeat.

---

**Question 181:** What is the key feature of Go-Back-N?

**Answer:** Receiver accepts only in-order packets and discards out-of-order packets.

---

**Question 182:** Why is GBN called a sliding-window protocol?

**Answer:** GBN uses a sliding window of sequence numbers that advances with acknowledgements.

---

**Question 183:** What is the key feature of Selective Repeat?

**Answer:** Receiver buffers out-of-order packets and sender retransmits only lost packets.

---

**Question 184:** What problem does Selective Repeat solve?

**Answer:** It avoids unnecessary retransmission of correctly received packets.

---

**Question 185:** Why is TCP point-to-point?

**Answer:** TCP connects exactly two endpoints.

---

**Question 186:** What is a three-way handshake?

**Answer:** Connection establishment using SYN, SYNACK, and ACK.

---

**Question 187:** What fields does a TCP segment have?

**Answer:** Source port, destination port, sequence number, acknowledgement number, header length, flags, receive window, checksum, urgent pointer, options.

---

**Question 188:** How does TCP provide reliable data transfer over unreliable IP?

**Answer:** Through sequence numbers, acknowledgements, retransmission timers, checksums, and fast retransmit.

---

**Question 189:** Why does TCP need flow control?

**Answer:** To prevent overwhelming the receiver's buffer.

---

**Question 190:** How is a TCP connection managed?

**Answer:** Through connection establishment, data transfer, and connection termination with state management.

---

**Question 191:** What are the various TCP states?

**Answer:** CLOSED, LISTEN, SYN_SENT, SYN_RECEIVED, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT.

---

**Question 192:** What is the end-end principle?

**Answer:** Network functionality should be at endpoints, keeping network core simple.

---

**Question 193:** What is the purpose of the UDP checksum?

**Answer:** To detect errors in transmitted UDP segments.

---

**Question 194:** What is the purpose of the TCP checksum?

**Answer:** To detect errors in transmitted TCP segments.

---

**Question 195:** What is the difference between UDP and TCP headers?

**Answer:** UDP header is 8 bytes with 4 fields. TCP header is at least 20 bytes with 10 required fields plus options.

---

**Question 196:** What is the purpose of sequence numbers in TCP?

**Answer:** To order segments, detect missing data, and identify duplicates.

---

**Question 197:** What is the purpose of acknowledgement numbers in TCP?

**Answer:** To confirm receipt of data up to the acknowledgement number.

---

**Question 198:** What is the purpose of the receive window in TCP?

**Answer:** To provide flow control by indicating available buffer space.

---

**Question 199:** What is the purpose of the flags in TCP?

**Answer:** To control connection state and segment handling.

---

**Question 200:** What is the purpose of the options field in TCP?

**Answer:** To provide additional features like MSS, window scaling, and selective acknowledgement.

---

This concludes the comprehensive Text-to-Speech Q&A document for exam preparation on UDP and TCP transport layer protocols.