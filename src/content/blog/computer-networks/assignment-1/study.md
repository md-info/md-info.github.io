---
title: "Assignment 1 — Study"
description: "Computer Networks study notes · Assignment 1"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Assignment 1"
tags: ["computer-networks"]
listed: false
draft: false
---

# COMP347 — Assignment 1
## Text-to-Speech Q&A Exam Prep Document

---

## PART 1: SHORT ANSWER QUESTIONS

---

### Q1.1 — Traceroute Experiment (5%)

**Question:** Run Traceroute, TRACERT (on Windows), or another similar utility between a source and a destination in the country in which you reside. Do this at three different times of the day. Summarize your findings at each of the times with respect to the following, and explain your findings:

- average and standard deviation of the round-trip delays
- number of routers in the path

**Answer:**

Traceroute (or TRACERT on Windows) is a network diagnostic utility that maps the path that data takes from a source computer to a destination host across an IP network. It works by sending a series of Internet Control Message Protocol (ICMP) Echo Request messages (or UDP datagrams, depending on the implementation) with incrementally increasing Time-To-Live (TTL) values. Each router along the path decrements the TTL by one; when the TTL reaches zero, the router discards the packet and sends back an ICMP "Time Exceeded" message to the source. By recording the source of each ICMP Time Exceeded message and the round-trip time (RTT) for each hop, Traceroute builds a complete picture of the route and the delay to each router along the way.

**Findings at Three Different Times of Day:**

The results of a Traceroute experiment will vary depending on the specific source and destination chosen, the geographic distance between them, and the network infrastructure involved. However, the following general patterns typically emerge:

**Morning (e.g., 8:00 AM):**
- **Number of routers:** Typically 10–15 hops for a domestic destination.
- **Average RTT:** Moderate, perhaps 20–60 ms for the first few hops, increasing gradually to 100–200 ms at the destination.
- **Standard deviation:** Relatively low (e.g., 2–10 ms per hop), because morning traffic is building but not yet at peak.
- **Explanation:** Morning is a transition period. Residential users are waking up and checking email and social media, while businesses are starting operations. The network is moderately loaded, so queuing delays are present but not extreme. The standard deviation is low because traffic is relatively stable and predictable.

**Afternoon (e.g., 2:00 PM):**
- **Number of routers:** Similar to morning, typically 10–15 hops. The path itself rarely changes unless there is a routing update or link failure.
- **Average RTT:** Higher than morning, perhaps 30–80 ms for the first few hops and 150–300 ms at the destination.
- **Standard deviation:** Higher than morning (e.g., 5–20 ms per hop), because traffic is heavier and more variable.
- **Explanation:** Afternoon is peak usage time for both businesses and residential users. More packets are traversing the network, leading to increased queuing delays at routers. The higher standard deviation reflects the greater variability in queue lengths and processing loads. Video conferencing, cloud applications, and web browsing all contribute to the load.

**Evening (e.g., 9:00 PM):**
- **Number of routers:** Typically the same 10–15 hops, unless the ISP has shifted traffic to different links to handle peak demand.
- **Average RTT:** Highest of the three times, perhaps 40–100 ms for the first few hops and 200–400 ms at the destination.
- **Standard deviation:** Highest of the three times (e.g., 10–30 ms per hop), because evening is the peak period for streaming video, online gaming, and social media.
- **Explanation:** Evening is the busiest time for residential internet usage. Streaming services like Netflix, YouTube, and Twitch generate enormous amounts of traffic. Routers experience long queues, and the variability in delay is high because traffic bursts are common. The standard deviation is large because the network is congested and delays fluctuate significantly.

**General Explanations:**

1. **Average RTT:** The average round-trip delay increases from morning to afternoon to evening because network traffic load increases throughout the day. More traffic means more packets waiting in router queues, which increases queuing delay. The RTT also increases with the number of hops because each hop adds processing, transmission, and propagation delays.

2. **Standard Deviation of RTT:** The standard deviation measures the variability or "jitter" in the delay. It is low during off-peak hours (morning) because traffic is light and consistent. It is high during peak hours (evening) because traffic is heavy and bursty, causing queue lengths to fluctuate rapidly. High jitter is problematic for real-time applications like VoIP and video conferencing.

3. **Number of Routers:** The number of routers in the path is generally stable throughout the day because the underlying network topology and routing policies do not change frequently. However, the number can change if the ISP performs traffic engineering (e.g., shifting traffic to less congested links) or if there is a link failure and rerouting occurs. The number of hops is determined by the routing protocols (e.g., BGP, OSPF) and the physical topology of the network.

**Conclusion:** The experiment demonstrates that network performance is not constant. It varies with time of day due to changes in traffic load. Understanding these variations is important for network design, capacity planning, and quality-of-service (QoS) provisioning. For delay-sensitive applications, it is crucial to account for peak-hour congestion and jitter.

---

### Q1.2 — Five Layers of the Internet Protocol Stack (5%)

**Question:** What are the five layers in the Internet protocol stack? Develop a table to summarise what each layer does.

**Answer:**

The Internet protocol stack is organized into five layers, each responsible for a specific set of functions. This layered architecture allows for modular design, where each layer provides services to the layer above it and relies on services from the layer below it. The five layers, from top to bottom, are: Application, Transport, Network, Link, and Physical.

| **Layer** | **Name** | **Primary Function** | **Key Protocols** | **Data Unit** |
|-----------|----------|----------------------|-------------------|---------------|
| 5 | **Application** | Supports network applications and user services. Provides interfaces for applications to communicate over the network. | HTTP, SMTP, FTP, DNS, IMAP, POP3 | Message |
| 4 | **Transport** | Provides end-to-end communication between processes on different hosts. Responsible for segmentation, reassembly, flow control, and error control. | TCP, UDP | Segment (TCP), Datagram (UDP) |
| 3 | **Network** | Routes packets from source to destination across multiple networks. Handles logical addressing and path determination. | IP, ICMP, ARP (sometimes), routing protocols (OSPF, BGP) | Packet (Datagram) |
| 2 | **Link** | Transfers data between adjacent network nodes. Handles framing, physical addressing (MAC), error detection, and medium access control. | Ethernet, Wi-Fi (802.11), PPP, HDLC | Frame |
| 1 | **Physical** | Transmits raw bits over a physical medium. Defines electrical, mechanical, and procedural specifications for the transmission medium. | Ethernet physical layer, DSL, fiber optics, coaxial cable | Bit |

**Detailed Description of Each Layer:**

**1. Application Layer:**
The Application layer is the topmost layer and is closest to the end user. It provides the interface through which network applications (such as web browsers, email clients, and file transfer programs) access the network. This layer includes protocols that directly support user applications, such as HTTP for web browsing, SMTP for sending email, IMAP and POP3 for retrieving email, FTP for file transfer, and DNS for translating domain names to IP addresses. The Application layer is responsible for formatting data, establishing communication sessions, and handling application-specific errors. It does not concern itself with how data is transmitted across the network; that is the responsibility of lower layers.

**2. Transport Layer:**
The Transport layer provides end-to-end communication between application processes running on different hosts. It takes messages from the Application layer, breaks them into smaller segments (if necessary), and ensures that they are delivered reliably and in order (in the case of TCP) or efficiently without guarantees (in the case of UDP). The Transport layer also handles flow control (preventing a fast sender from overwhelming a slow receiver) and congestion control (preventing the network from becoming overloaded). TCP (Transmission Control Protocol) is connection-oriented and provides reliable, ordered delivery with error checking and retransmission. UDP (User Datagram Protocol) is connectionless and provides best-effort delivery without guarantees, making it suitable for real-time applications like streaming and gaming where speed is more important than reliability.

**3. Network Layer:**
The Network layer is responsible for routing packets from the source host to the destination host across multiple networks. It handles logical addressing (IP addresses) and determines the best path for each packet based on routing algorithms and network topology. The primary protocol at this layer is IP (Internet Protocol), which comes in two versions: IPv4 and IPv6. The Network layer also includes ICMP (Internet Control Message Protocol) for error reporting and diagnostics (e.g., ping and traceroute), and routing protocols such as OSPF (Open Shortest Path First) and BGP (Border Gateway Protocol) that routers use to exchange routing information. The Network layer does not guarantee delivery; it provides best-effort service, leaving reliability to the Transport layer.

**4. Link Layer:**
The Link layer (also called the Data Link layer) is responsible for transferring data between adjacent network nodes (e.g., between a computer and a router, or between two routers on the same link). It handles framing (encapsulating packets into frames), physical addressing (MAC addresses), error detection (using checksums or CRCs), and medium access control (deciding which device can transmit on a shared medium). Common Link layer protocols include Ethernet (for wired LANs), Wi-Fi (802.11 for wireless LANs), PPP (Point-to-Point Protocol for dial-up and DSL connections), and HDLC (High-Level Data Link Control). The Link layer ensures that data is reliably transferred over a single link, but it does not handle end-to-end routing.

**5. Physical Layer:**
The Physical layer is the lowest layer and is responsible for transmitting raw bits over a physical medium. It defines the electrical, mechanical, and procedural specifications for the transmission medium, including voltage levels, timing, data rates, and connector types. The Physical layer deals with how bits are represented as electrical signals, light pulses, or radio waves, depending on the medium (copper wire, fiber optic cable, or wireless). It also handles synchronization (ensuring that the receiver can distinguish individual bits) and modulation (encoding digital data onto analog carriers). Examples of Physical layer technologies include Ethernet physical layers (e.g., 1000BASE-T), DSL, fiber optics (e.g., 1000BASE-SX), and wireless radio frequencies.

**Summary:** The five-layer Internet protocol stack provides a structured approach to network communication. Each layer performs a specific function and interacts with the layers directly above and below it. This modular design simplifies network design, implementation, and troubleshooting, and it allows different technologies to be used at different layers without affecting the others.

---

### Q1.3 — Packet-Switched vs. Circuit-Switched Networks (5%)

**Question:** What are packet-switched network and circuit-switched network, respectively? Develop a table to summarise their features, pros, and cons.

**Answer:**

**Packet-Switched Network:**
A packet-switched network is a type of network in which data is broken into small units called packets, which are transmitted independently across the network. Each packet contains a header with destination address and other control information, and it may take a different path to the destination than other packets. Routers along the path examine the destination address in each packet's header and forward the packet toward its destination based on routing tables. Packet-switched networks do not reserve resources in advance; instead, they share network capacity among many users on a demand basis. The Internet is the most prominent example of a packet-switched network. Packet switching is efficient for bursty traffic (traffic that occurs in short, irregular bursts) because it allows statistical multiplexing, where the network capacity is shared dynamically among users.

**Circuit-Switched Network:**
A circuit-switched network is a type of network in which a dedicated communication path (circuit) is established between the source and destination before data transmission begins. This path remains reserved for the duration of the communication session, even if no data is being transmitted. The public switched telephone network (PSTN) is the classic example of a circuit-switched network. In circuit switching, resources (such as bandwidth on each link) are reserved for the entire duration of the call, guaranteeing a fixed data rate and minimal delay once the circuit is established. However, circuit switching is inefficient for bursty data traffic because the reserved capacity is wasted during idle periods.

**Comparison Table:**

| **Feature** | **Packet-Switched Network** | **Circuit-Switched Network** |
|-------------|----------------------------|------------------------------|
| **Resource Allocation** | Resources are shared dynamically; no advance reservation. | Resources are reserved in advance for the entire session. |
| **Data Transmission** | Data is divided into packets; each packet may take a different path. | Data is transmitted as a continuous stream over a dedicated path. |
| **Path** | No fixed path; packets are routed independently. | Fixed path established before transmission. |
| **Bandwidth** | Shared among many users; variable available bandwidth. | Dedicated bandwidth; guaranteed data rate. |
| **Efficiency** | High for bursty traffic; statistical multiplexing improves utilization. | Low for bursty traffic; idle capacity is wasted. |
| **Delay** | Variable delay (jitter) due to queuing and different paths. | Constant delay once circuit is established; minimal jitter. |
| **Setup Time** | No setup time required; packets can be sent immediately. | Setup time required to establish the circuit before data transfer. |
| **Reliability** | Packets may be lost, duplicated, or arrive out of order; protocols handle recovery. | Reliable once circuit is established; no packet loss due to congestion. |
| **Cost** | Generally lower cost; efficient use of resources. | Generally higher cost; dedicated resources are expensive. |
| **Examples** | Internet, Ethernet, Wi-Fi, Frame Relay, ATM (partially). | PSTN (traditional telephone), ISDN, leased lines. |
| **Pros** | - Efficient use of bandwidth<br>- Low cost<br>- Scalable<br>- Handles bursty traffic well<br>- No setup delay | - Guaranteed bandwidth<br>- Low and constant delay<br>- No congestion during session<br>- Suitable for real-time voice<br>- Simple once established |
| **Cons** | - Variable delay (jitter)<br>- Packet loss possible<br>- Out-of-order delivery<br>- Congestion possible<br>- Overhead for headers | - Inefficient for bursty data<br>- High cost<br>- Long setup time<br>- Wasted bandwidth during silence<br>- Limited scalability |

**Detailed Explanation:**

**Packet-Switched Networks:**
In a packet-switched network, when a host wants to send data, it divides the data into packets. Each packet is sent independently and may follow a different route to the destination. Routers along the way store and forward packets: they receive a packet, examine its header, consult their routing table, and forward the packet to the next hop. This store-and-forward approach introduces queuing delays, especially when many packets arrive at a router simultaneously. However, packet switching is highly efficient because it allows statistical multiplexing: the network's transmission capacity is shared among many users, and a user only consumes bandwidth when they actually have data to send. This makes packet switching ideal for bursty applications like web browsing, email, and file transfer. The main drawbacks are variable delay (jitter), potential packet loss, and out-of-order delivery, which must be handled by higher-layer protocols like TCP.

**Circuit-Switched Networks:**
In a circuit-switched network, a dedicated circuit is established between the source and destination before any data is transmitted. This involves signaling messages to set up the path and reserve resources (e.g., a time slot or frequency band) on each link along the way. Once the circuit is established, data can be transmitted at a constant rate with minimal delay and no congestion. This makes circuit switching ideal for real-time applications like voice calls, where consistent delay is critical. However, circuit switching is inefficient for bursty data because the reserved capacity is wasted when no data is being sent. For example, during a telephone call, there are periods of silence, but the circuit remains reserved and cannot be used by other users. Circuit switching also has a longer setup time and is generally more expensive due to the need for dedicated resources.

**Conclusion:**
Packet switching and circuit switching represent two fundamentally different approaches to network design. Packet switching is the foundation of the modern Internet because it is efficient, scalable, and well-suited to bursty data traffic. Circuit switching is still used in traditional telephone networks because it provides guaranteed quality of service for voice. However, modern networks are increasingly converging on packet-switched technologies (such as VoIP and IP-based telephony) that can emulate circuit-switched services while retaining the efficiency of packet switching.

---

### Q1.4 — Network Delays and Traffic Intensity (5%)

**Question:** What are processing delay, queuing delay, transmission delay, and propagation delay, respectively? Where does each delay occur? What is traffic intensity? Why should the traffic intensity be no greater than one (1) when designing a computer network?

**Answer:**

In a packet-switched network, the total time it takes for a packet to travel from source to destination is the sum of several different types of delays encountered at each node (router or switch) along the path. These delays are: processing delay, queuing delay, transmission delay, and propagation delay. Together, they determine the total nodal delay.

**1. Processing Delay:**
Processing delay is the time required for a router or switch to examine the packet's header, determine where to forward the packet (based on the destination address and routing table), and perform other necessary processing (such as error checking or updating header fields). This delay occurs at each router along the path. Processing delay is typically very small, on the order of microseconds to milliseconds, and is largely determined by the speed of the router's processor and the complexity of the processing tasks. In high-speed routers, processing delay is often negligible compared to other delays.

**2. Queuing Delay:**
Queuing delay is the time a packet spends waiting in a queue (buffer) at a router before it can be transmitted onto the outgoing link. This delay occurs at each router when packets arrive faster than they can be transmitted. The amount of queuing delay depends on the traffic load: when traffic is light, queuing delay is minimal; when traffic is heavy, queues build up and queuing delay can become very large. Queuing delay is the most variable of the four delays and is the primary cause of jitter (variation in delay) in packet-switched networks. It is also the delay that is most affected by congestion.

**3. Transmission Delay:**
Transmission delay (also called store-and-forward delay) is the time required to push all the bits of a packet onto the outgoing link. It depends on the packet size (L bits) and the transmission rate of the link (R bits per second). The formula is: **Transmission Delay = L / R**. For example, if a packet is 10,000 bits long and the link speed is 1 Mbps (1,000,000 bits per second), the transmission delay is 10,000 / 1,000,000 = 0.01 seconds (10 ms). Transmission delay occurs at the sender's network interface card (NIC) and at each router along the path. It is determined by the link speed and packet size, not by distance.

**4. Propagation Delay:**
Propagation delay is the time it takes for a single bit to travel from the beginning of the link to the end of the link. It depends on the physical distance (d) between the two nodes and the propagation speed (s) of the signal in the medium (which is close to the speed of light, typically 2×10⁸ meters per second in copper or fiber). The formula is: **Propagation Delay = d / s**. For example, if the distance is 1,000 kilometers (1,000,000 meters) and the propagation speed is 2×10⁸ m/s, the propagation delay is 1,000,000 / 200,000,000 = 0.005 seconds (5 ms). Propagation delay occurs along the physical medium (wire, fiber, or wireless) and is independent of packet size or link speed.

**Summary Table:**

| **Delay Type** | **Symbol** | **Formula** | **Where It Occurs** | **Depends On** | **Typical Magnitude** |
|----------------|------------|-------------|---------------------|----------------|----------------------|
| Processing Delay | d_proc | Varies | At each router (CPU processing) | Router speed, complexity | Microseconds to milliseconds |
| Queuing Delay | d_queue | Varies | At each router (output buffer) | Traffic load, queue length | Microseconds to seconds |
| Transmission Delay | d_trans | L / R | At sender and each router (NIC) | Packet size, link speed | Microseconds to milliseconds |
| Propagation Delay | d_prop | d / s | Along the physical link | Distance, propagation speed | Milliseconds to hundreds of ms |

**Total Nodal Delay:**
The total delay at a single node (router) is the sum of these four delays: **d_nodal = d_proc + d_queue + d_trans + d_prop**. The total end-to-end delay is the sum of the nodal delays at all routers along the path, plus the transmission and propagation delays at the source and destination.

**Traffic Intensity:**
Traffic intensity (also called utilization or offered load) is a measure of how busy a link is. It is defined as the ratio of the average arrival rate of bits to the transmission rate of the link. Mathematically: **Traffic Intensity = (L × a) / R**, where:
- L = packet size in bits
- a = average packet arrival rate (packets per second)
- R = transmission rate of the link (bits per second)

Alternatively, if we let λ (lambda) be the average arrival rate of packets (packets/sec), then the average arrival rate of bits is L × λ, and traffic intensity ρ = (L × λ) / R.

**Why Traffic Intensity Should Be No Greater Than 1:**
Traffic intensity must be kept below 1 (i.e., ρ < 1) for a network to function properly. If ρ > 1, it means that bits are arriving at the link faster than the link can transmit them. In this case, the queue at the router will grow without bound, and queuing delay will increase indefinitely. Eventually, the router's buffer will overflow, and packets will be dropped, leading to packet loss and retransmissions (if using TCP), which further increases traffic and worsens congestion. This condition is called congestion collapse. When ρ = 1, the link is fully utilized, and any slight increase in traffic will cause queues to build up. In practice, network designers aim to keep traffic intensity well below 1 (e.g., ρ < 0.8) to provide headroom for bursty traffic and to ensure acceptable queuing delays. The relationship between traffic intensity and average queuing delay is highly non-linear: as ρ approaches 1, the average queuing delay increases dramatically, approaching infinity. Therefore, keeping traffic intensity below 1 is essential for stable, reliable network operation.

**Conclusion:**
Understanding the four types of delays and traffic intensity is fundamental to network performance analysis and design. Processing and transmission delays are largely fixed by hardware and packet size, while queuing delay depends on traffic load and is the main source of variability. Propagation delay depends on distance. Traffic intensity is a key metric for assessing link utilization and congestion. Designing networks with traffic intensity less than 1 ensures that queues do not grow unbounded and that delays remain manageable.

---

### Q1.5 — Web Caching and Conditional GET (5%)

**Question:** What is Web-caching? When may Web-caching be more useful in a university? What problem does the conditional GET in HTTP aim to solve?

**Answer:**

**What is Web Caching?**
Web caching (also called proxy caching or HTTP caching) is a technique used to store copies of web objects (such as HTML pages, images, videos, and other files) closer to the users who request them. When a user requests a web object, the request first goes to a cache (typically a proxy server) rather than directly to the origin server. If the cache has a fresh copy of the requested object, it can serve the object directly to the user without contacting the origin server. If the cache does not have the object or the cached copy is stale, the cache forwards the request to the origin server, retrieves the object, stores a copy for future use, and returns it to the user.

Web caching can be implemented at various levels:
- **Browser cache:** Each web browser maintains a local cache of recently visited pages and images.
- **Proxy cache:** A shared cache server on a local network (e.g., a university or ISP) that serves multiple users.
- **Content Delivery Network (CDN):** A distributed network of cache servers located around the world, used by large content providers to deliver content efficiently.

**When May Web Caching Be More Useful in a University?**
Web caching is particularly useful in a university environment for several reasons:

1. **High concentration of users with similar interests:** University students and faculty often access the same web resources (e.g., course websites, research papers, online journals, library databases, and educational videos). A proxy cache can serve these popular objects to many users without repeatedly fetching them from the origin server, significantly reducing bandwidth consumption and improving response times.

2. **Limited bandwidth and high cost of internet connectivity:** Universities often have limited bandwidth to the external internet and pay high costs for that bandwidth. Web caching reduces the amount of traffic that must traverse the external link, saving bandwidth and reducing costs.

3. **Peak usage periods:** During peak times (e.g., before exams, during class registration, or when a popular video is assigned), many students may access the same resources simultaneously. A cache can handle these bursts efficiently by serving cached copies, reducing load on the origin server and the university's internet link.

4. **Improved response time:** Cached objects are served from a local server, which is typically much faster than fetching them from a remote origin server over the internet. This improves the user experience, especially for large files like videos and software packages.

5. **Offline access and resilience:** If the external internet link fails, users may still be able to access cached content, providing some level of continuity.

6. **Reduced load on origin servers:** By serving repeated requests from the cache, the university reduces the load on external web servers, which is beneficial for both the university and the content providers.

**What Problem Does Conditional GET in HTTP Aim to Solve?**
Conditional GET is a mechanism in HTTP that allows a client (e.g., a browser or proxy cache) to check whether a cached object is still fresh (i.e., whether it has been modified since it was last retrieved) before downloading the entire object again. The problem it solves is **the inefficient use of bandwidth and time when a cached copy is still valid.**

Without conditional GET, a client that has a cached copy of an object would either:
- Assume the cached copy is still valid and serve it without checking (risking serving stale content), or
- Re-download the entire object from the origin server every time it is requested (wasting bandwidth and time if the object has not changed).

Conditional GET solves this problem by allowing the client to ask the server: "Has this object changed since the version I have?" If the object has not changed, the server responds with a small "304 Not Modified" message, and the client serves its cached copy. If the object has changed, the server responds with the new object (200 OK) and the client updates its cache.

**How Conditional GET Works:**
1. When a client first requests an object, the server includes a **Last-Modified** header (indicating when the object was last changed) and/or an **ETag** header (a unique identifier for the specific version of the object).
2. The client stores the object along with the Last-Modified date and/or ETag.
3. When the client wants to check if the cached copy is still valid, it sends a conditional GET request with an **If-Modified-Since** header (containing the Last-Modified date) and/or an **If-None-Match** header (containing the ETag).
4. The server compares the condition with the current state of the object:
   - If the object has not been modified since the specified date or the ETag matches, the server responds with **304 Not Modified** and no body. The client serves its cached copy.
   - If the object has been modified, the server responds with **200 OK** and the new object. The client updates its cache.

**Benefits of Conditional GET:**
- **Bandwidth savings:** Only a small control message is exchanged when the cached copy is still valid, rather than the entire object.
- **Reduced latency:** The client can serve the cached copy immediately after receiving the 304 response, without waiting for the full object to download.
- **Freshness:** The client can be confident that it is serving the most up-to-date version of the object.
- **Reduced load on origin servers:** The origin server only needs to send a small 304 response instead of the full object, reducing its processing and bandwidth load.

**Conclusion:**
Web caching is a powerful technique for improving network performance, reducing bandwidth consumption, and lowering costs, especially in environments like universities where many users access similar content. Conditional GET is a key HTTP mechanism that makes caching efficient by allowing clients to validate cached objects without re-downloading them unnecessarily. Together, they form the foundation of modern web content delivery.

---

### Q1.6 — Email Communication: Protocols and Layered Journey (5%)

**Question:** Suppose you have a Web-based email account, such as Gmail, and you have just sent a message to a friend, Alice, who accesses her mail from her mail server using IMAP. Assume that both you and Alice are using a smartphone to access emails via Wi-Fi at home. List all the network protocols that may be involved in sending and receiving the email. Discuss in detail how the message went from your smartphone to Alice’s smartphone—that is, how the message went through all the network protocol layers on each of the network devices involved in the communication. Ignore everything between your ISP and Alice’s ISP.

**Answer:**

**Network Protocols Involved:**

When you send an email from your smartphone using a web-based email account (like Gmail) to Alice, who accesses her email via IMAP on her smartphone, the following protocols are involved:

1. **Application Layer:**
   - **HTTP/HTTPS:** Used by your smartphone to communicate with the web-based email server (Gmail) when you compose and send the email. HTTPS (HTTP over TLS/SSL) provides encryption.
   - **SMTP (Simple Mail Transfer Protocol):** Used by the email server to send the email to Alice's mail server.
   - **IMAP (Internet Message Access Protocol):** Used by Alice's smartphone to retrieve the email from her mail server.
   - **DNS (Domain Name System):** Used to resolve domain names (e.g., gmail.com, alice's mail server) to IP addresses.
   - **DHCP (Dynamic Host Configuration Protocol):** Used by your smartphone and Alice's smartphone to obtain IP addresses when connecting to Wi-Fi.
   - **TLS/SSL:** Used for encryption in HTTPS, IMAPS, and SMTPS.

2. **Transport Layer:**
   - **TCP (Transmission Control Protocol):** Used for reliable, connection-oriented communication for HTTP/HTTPS, SMTP, and IMAP.
   - **UDP (User Datagram Protocol):** Used for DNS queries (typically) and DHCP.

3. **Network Layer:**
   - **IP (Internet Protocol):** Used for addressing and routing packets across the Internet.
   - **ICMP (Internet Control Message Protocol):** May be used for error reporting and diagnostics.

4. **Link Layer:**
   - **Wi-Fi (IEEE 802.11):** Used for wireless communication between your smartphone and your home Wi-Fi router, and between Alice's smartphone and her home Wi-Fi router.
   - **Ethernet:** Used for wired connections between your home router and your ISP's router (and similarly for Alice).
   - **PPP (Point-to-Point Protocol) or similar:** May be used on the ISP link (e.g., DSL, cable).

5. **Physical Layer:**
   - **Radio waves (Wi-Fi):** For wireless transmission.
   - **Copper wire, fiber optics, or coaxial cable:** For wired transmission between routers and ISPs.

**Detailed Journey of the Email:**

**Step 1: Composing and Sending the Email from Your Smartphone**

- You open the Gmail app (or web browser) on your smartphone. The app uses **HTTPS** to communicate with Gmail's servers.
- You compose an email to Alice and press "Send."
- Your smartphone's **Application Layer** creates an HTTP POST request containing the email data (recipient, subject, body, attachments).
- The **Transport Layer** on your smartphone uses **TCP** to establish a connection to Gmail's server. TCP breaks the HTTP request into segments, adds sequence numbers, and ensures reliable delivery.
- The **Network Layer** uses **IP** to add source and destination IP addresses to each TCP segment, creating IP packets. Your smartphone's IP address is typically obtained via **DHCP** when you connected to your home Wi-Fi.
- The **Link Layer** encapsulates the IP packets into **Wi-Fi (802.11)** frames. Your smartphone's Wi-Fi adapter adds the MAC address of your home router as the destination.
- The **Physical Layer** converts the frames into radio signals and transmits them over the air to your home Wi-Fi router.

**Step 2: Your Home Wi-Fi Router**

- Your home router receives the radio signals, converts them back to frames, and processes them at the **Link Layer**. It removes the Wi-Fi frame header and extracts the IP packet.
- The router examines the destination IP address (Gmail's server) at the **Network Layer**. It consults its routing table and determines the next hop, which is typically your ISP's router.
- The router encapsulates the IP packet into an **Ethernet** frame (or another link-layer protocol, depending on the connection type) and sends it over the physical link (e.g., cable, DSL, or fiber) to your ISP.

**Step 3: Your ISP and the Internet**

- Your ISP's router receives the packet, processes it at the Link and Network layers, and forwards it toward Gmail's server based on its routing tables.
- The packet traverses multiple routers in the Internet backbone, each performing processing, queuing, transmission, and propagation delays. At each router, the packet is processed at the Link, Network, and Physical layers.
- **DNS** may be used at various points to resolve domain names to IP addresses (e.g., when your smartphone first contacts Gmail, it may query DNS to find Gmail's IP address).

**Step 4: Gmail's Server**

- The packet arrives at Gmail's server. The server processes the packet at the Link, Network, and Transport layers, reassembling the TCP segments into the original HTTP request.
- The **Application Layer** on Gmail's server processes the HTTP request, extracts the email data, and stores it.
- Gmail's server then uses **SMTP** to send the email to Alice's mail server. SMTP operates over **TCP**. The server creates an SMTP session with Alice's mail server, exchanges SMTP commands (HELO, MAIL FROM, RCPT TO, DATA), and transfers the email message.
- The SMTP message is encapsulated in TCP segments, then IP packets, then link-layer frames, and transmitted over the Internet to Alice's mail server.

**Step 5: Alice's Mail Server**

- Alice's mail server receives the SMTP message, processes it at the Application Layer, and stores the email in Alice's mailbox.
- The mail server may use **DNS** to resolve domain names and **TCP** for reliable delivery.

**Step 6: Alice Retrieving the Email**

- Alice's smartphone is connected to her home Wi-Fi. She opens her email app, which is configured to use **IMAP**.
- The IMAP client on Alice's smartphone establishes a **TCP** connection to her mail server (typically on port 143 for IMAP or port 993 for IMAPS/IMAP over SSL).
- Alice's smartphone sends IMAP commands to retrieve her mailbox contents. The mail server responds with the list of emails, including the new email from you.
- When Alice opens the email, her smartphone requests the full message body. The mail server sends the email data over the IMAP connection.
- The data is encapsulated in TCP segments, IP packets, and Wi-Fi frames, and transmitted over the air to Alice's smartphone.
- Alice's smartphone processes the incoming data at the Link, Network, Transport, and Application layers, and displays the email in her email app.

**Step 7: Layered Processing on Each Device**

At each device (your smartphone, your home router, your ISP's routers, Gmail's server, Alice's mail server, Alice's home router, Alice's smartphone), the data goes through the protocol stack:

- **Application Layer:** Handles HTTP, SMTP, IMAP, DNS, DHCP.
- **Transport Layer:** Handles TCP (and UDP for DNS/DHCP).
- **Network Layer:** Handles IP addressing and routing.
- **Link Layer:** Handles Wi-Fi, Ethernet, PPP framing and MAC addressing.
- **Physical Layer:** Handles radio signals, electrical signals, or light pulses.

**Summary of Protocols:**

| **Stage** | **Protocols Used** |
|-----------|-------------------|
| Your smartphone to Gmail server | HTTPS (HTTP over TLS), TCP, IP, Wi-Fi (802.11), DNS, DHCP |
| Gmail server to Alice's mail server | SMTP, TCP, IP, Ethernet, DNS |
| Alice's smartphone to Alice's mail server | IMAP (or IMAPS), TCP, IP, Wi-Fi (802.11), DNS, DHCP |
| Throughout | TCP, IP, Ethernet, Wi-Fi, DNS, DHCP, ICMP (possibly) |

**Conclusion:**
Sending and receiving an email involves a complex interaction of multiple protocols across all five layers of the Internet protocol stack. The email travels from your smartphone through your home network, your ISP, the Internet backbone, Gmail's servers, Alice's mail server, and finally to Alice's smartphone. Each device along the path processes the data at the appropriate layers, ensuring that the message is delivered reliably and correctly. Understanding this process is essential for diagnosing network issues and designing efficient communication systems.

---

## PART 2: LONG ANSWER QUESTIONS

---

### Q2.1 — Packet Segmentation and Transmission Timing (20%)

**Question:** Consider that you are submitting your assignment in a compressed file from your computer at home to the university server that is hosting your online course. Your large file is segmented into smaller packets before it is sent into the first link. Each packet is 10,000 bits long, including 100 bits of header. Assume the size of the assignment file is 10 MB.

1. How many packets will the assignment file be segmented into?
2. How many links can be identified using TRACERT or Traceroute between your computer and the university server? What are they?
3. What is the speed for each identified link based on your best calculation? Show your work.
4. Assume you start uploading the assignment at t0. At what time will the last packet be pushed into the first link?
5. At what time will the last packet arrive at the university server?

**Answer:**

**Given:**
- File size = 10 MB
- Packet size = 10,000 bits (including 100 bits of header)
- Therefore, payload per packet = 10,000 − 100 = 9,900 bits

**Important Note:** The problem states "10 MB." In networking, MB usually means megabytes (10⁶ bytes) or mebibytes (2²⁰ bytes). For this solution, we will assume 1 MB = 10⁶ bytes = 8 × 10⁶ bits = 8,000,000 bits, which is common in networking contexts. If we assume 1 MB = 2²⁰ bytes = 1,048,576 bytes, the numbers would differ slightly. We will use 10 MB = 10 × 10⁶ bytes = 80,000,000 bits.

**Part 1: How Many Packets?**

Total file size in bits = 10 MB × 8 × 10⁶ bits/MB = 80,000,000 bits.

Each packet carries 9,900 bits of payload (since 100 bits are header overhead).

Number of packets = Total payload bits / Payload per packet = 80,000,000 / 9,900 ≈ 8080.808...

Since we cannot have a fraction of a packet, we round up to the next whole number: **8081 packets**.

The last packet will carry the remaining bits: 80,000,000 − (8080 × 9,900) = 80,000,000 − 79,992,000 = 8,000 bits of payload. The last packet will still be 10,000 bits total (8,000 payload + 100 header + padding if needed, but we assume the packet is exactly 10,000 bits with padding or the payload is 8,000 bits and header is 100 bits, total 8,100 bits; however, the problem states each packet is 10,000 bits long, so we assume all packets are exactly 10,000 bits, and the last packet may be partially filled but still transmitted as 10,000 bits). For simplicity, we assume all packets are 10,000 bits.

**Answer: 8081 packets.**

**Part 2: How Many Links Can Be Identified Using TRACERT or Traceroute?**

This part requires actually running Traceroute from your computer to the university server. Since this is a theoretical answer, I will describe the general approach and provide a representative example.

When you run Traceroute from your home computer to the university server, each line of output represents one hop (one router) along the path. The number of hops is the number of links (or more precisely, the number of routers traversed). Typically, a domestic connection might have 10–20 hops, while an international connection could have 20–30 hops.

**Example (representative):**
Suppose Traceroute shows the following hops:
1. Home router (192.168.1.1)
2. ISP local router
3. ISP regional router
4. ISP backbone router
5. Internet exchange point
6. University ISP router
7. University border router
8. University core router
9. University server

In this example, there are 9 hops, meaning 9 links (from your computer to the first router, then between routers, and finally to the server). Actually, the number of links is equal to the number of hops (each hop represents a link between two devices). So if there are N hops, there are N links.

**Answer:** The number of links depends on the actual Traceroute output. In a typical scenario, it might be **10–15 links**. For this solution, let us assume **12 links** were identified.

**Part 3: What Is the Speed for Each Identified Link?**

To calculate the speed of each link, we need to know the transmission delay for each hop. Traceroute provides the round-trip time (RTT) for each hop, but this RTT includes processing, queuing, transmission, and propagation delays for the round trip. To isolate the transmission delay, we would need additional information (such as packet size and link speed), which Traceroute does not directly provide.

However, we can estimate the speed of each link if we know the packet size and the transmission delay. Alternatively, we can use the difference in RTT between consecutive hops to estimate the per-hop delay, but this includes propagation and processing delays as well.

A common approach is to use the formula: **Transmission Delay = Packet Size / Link Speed**. If we can measure the transmission delay for a known packet size, we can calculate the link speed. But Traceroute does not measure transmission delay directly.

For the purpose of this assignment, we can make reasonable assumptions based on typical link types:
- **Home Wi-Fi:** 100 Mbps to 1 Gbps
- **ISP access link (e.g., cable/DSL/fiber):** 10 Mbps to 1 Gbps
- **ISP backbone:** 1 Gbps to 100 Gbps
- **University network:** 1 Gbps to 10 Gbps

We can estimate the speed of each link by analyzing the RTT differences and assuming typical propagation delays. For example, if the RTT increases by 1 ms between two hops, and the distance is 100 km, the propagation delay is 100,000 m / 2×10⁸ m/s = 0.5 ms. The remaining 0.5 ms could be transmission and processing delay. If the packet size is 10,000 bits, the transmission delay is 10,000 / R. If the transmission delay is 0.5 ms, then R = 10,000 / 0.0005 = 20,000,000 bps = 20 Mbps.

**Answer:** The speed of each link can be estimated as follows:
- Link 1 (smartphone to home router): Wi-Fi, typically 100–300 Mbps.
- Link 2 (home router to ISP): 100 Mbps–1 Gbps (fiber/cable).
- Links 3–10 (ISP backbone and Internet): 1–100 Gbps.
- Links 11–12 (university network): 1–10 Gbps.

For a precise answer, you would need to measure the transmission delay for each link, which requires additional tools or information.

**Part 4: At What Time Will the Last Packet Be Pushed Into the First Link?**

Assume you start uploading at t₀ = 0. The first link is the link between your computer and your home router (or the first router). The transmission rate of the first link is R₁ bps.

The time to push one packet into the first link is **Transmission Delay = L / R₁**, where L = 10,000 bits.

If we assume the first link is Wi-Fi with a speed of, say, 100 Mbps (100 × 10⁶ bps), then the transmission delay per packet is:

d_trans = 10,000 / 100,000,000 = 0.0001 seconds = 0.1 ms.

For 8081 packets, the total time to push all packets into the first link is:

Total time = 8081 × 0.0001 = 0.8081 seconds.

So the last packet will be pushed into the first link at **t = 0.8081 seconds** (assuming no queuing delay and that packets are sent back-to-back).

If the first link speed is different, replace R₁ accordingly. For example, if R₁ = 1 Gbps = 10⁹ bps, then d_trans = 10,000 / 10⁹ = 0.00001 s = 0.01 ms, and total time = 8081 × 0.00001 = 0.08081 seconds.

**Answer:** The time depends on the speed of the first link. If we assume R₁ = 100 Mbps, the last packet is pushed into the first link at **t ≈ 0.8081 seconds**.

**Part 5: At What Time Will the Last Packet Arrive at the University Server?**

To determine when the last packet arrives at the university server, we need to consider the total end-to-end delay, which includes:

1. **Transmission delay at the source (first link):** Time to push all packets into the first link = 0.8081 s (as calculated above).
2. **Propagation delay across all links:** The sum of propagation delays for all links.
3. **Transmission delays at intermediate routers:** Each router must receive the entire packet before it can begin transmitting it (store-and-forward). This introduces additional transmission delays at each hop.
4. **Processing and queuing delays:** These are variable and difficult to estimate without specific measurements.

For simplicity, let us assume:
- There are 12 links (from Part 2).
- Each link has the same transmission rate R (for simplicity), say 100 Mbps.
- The total distance is, say, 1000 km (1,000,000 m).
- Propagation speed = 2×10⁸ m/s.
- Ignore processing and queuing delays.

**Transmission delay per packet per link:** L / R = 10,000 / 100,000,000 = 0.0001 s = 0.1 ms.

**Total transmission delay for all packets across all links:** This is more complex because of store-and-forward. The last packet must be transmitted by the source, then by each router along the path. The total time for the last packet to reach the destination is:

Time = (Number of packets × Transmission delay on first link) + (Transmission delay on each subsequent link for the last packet) + (Total propagation delay).

More precisely, for a store-and-forward network with N links and P packets, the total time for the last packet to arrive is:

T_total = (P × d_trans) + (N − 1) × d_trans + d_prop_total

Where:
- P × d_trans is the time to push all packets into the first link.
- (N − 1) × d_trans is the additional transmission delay for the last packet at each subsequent router (since each router must receive the entire packet before forwarding).
- d_prop_total is the total propagation delay across all links.

Wait, this is not quite correct. Let's think carefully.

In a store-and-forward network, each router must receive the entire packet before it can begin transmitting it. So the last packet experiences:
- Transmission delay at the source (first link): d_trans
- Propagation delay on the first link: d_prop1
- Transmission delay at the second router (second link): d_trans
- Propagation delay on the second link: d_prop2
- ... and so on.

But the last packet cannot be transmitted by the second router until the second router has received the entire last packet from the first router. The first router finishes transmitting the last packet at time T1 = (P × d_trans) + d_trans? No.

Let's define:
- t = 0: Start sending first packet.
- The first packet is pushed into link 1 at t = d_trans.
- The first packet arrives at router 1 at t = d_trans + d_prop1.
- Router 1 starts transmitting the first packet at t = d_trans + d_prop1.
- Router 1 finishes transmitting the first packet at t = d_trans + d_prop1 + d_trans = 2d_trans + d_prop1.
- The first packet arrives at router 2 at t = 2d_trans + d_prop1 + d_prop2.
- And so on.

For the last packet (packet P):
- The last packet is pushed into link 1 at t = P × d_trans (since packets are sent back-to-back).
- The last packet arrives at router 1 at t = P × d_trans + d_prop1.
- Router 1 starts transmitting the last packet at t = P × d_trans + d_prop1 (assuming no queuing delay; it can start immediately after receiving).
- Router 1 finishes transmitting the last packet at t = P × d_trans + d_prop1 + d_trans = (P+1) × d_trans + d_prop1.
- The last packet arrives at router 2 at t = (P+1) × d_trans + d_prop1 + d_prop2.
- Router 2 finishes transmitting the last packet at t = (P+2) × d_trans + d_prop1 + d_prop2.
- ...
- After N links, the last packet arrives at the destination at t = (P + N − 1) × d_trans + sum(d_prop_i for i=1 to N).

Wait, let's check with a simple example: N=1 (only one link, no routers).
Then T = P × d_trans + d_prop1. That makes sense: the last packet is pushed into the link at P × d_trans, and then takes d_prop1 to propagate. So it arrives at P × d_trans + d_prop1. But our formula gives (P + 1 − 1) × d_trans + d_prop1 = P × d_trans + d_prop1. Correct.

For N=2 (one router):
- Last packet pushed into link 1 at P × d_trans.
- Arrives at router at P × d_trans + d_prop1.
- Router finishes transmitting last packet at P × d_trans + d_prop1 + d_trans = (P+1) × d_trans + d_prop1.
- Arrives at destination at (P+1) × d_trans + d_prop1 + d_prop2.
Our formula gives (P + 2 − 1) × d_trans + d_prop1 + d_prop2 = (P+1) × d_trans + d_prop1 + d_prop2. Correct.

So general formula:
**T_total = (P + N − 1) × d_trans + Σ d_prop_i**

Where:
- P = number of packets = 8081
- N = number of links = 12
- d_trans = L / R (assume R = 100 Mbps for all links) = 10,000 / 100,000,000 = 0.0001 s
- Σ d_prop_i = total propagation delay = total distance / propagation speed

Assume total distance = 1000 km = 1,000,000 m. Propagation speed = 2×10⁸ m/s.
Total propagation delay = 1,000,000 / 200,000,000 = 0.005 s = 5 ms.

Then:
T_total = (8081 + 12 − 1) × 0.0001 + 0.005
= (8092) × 0.0001 + 0.005
= 0.8092 + 0.005
= 0.8142 seconds.

So the last packet arrives at the university server at **t ≈ 0.8142 seconds**.

Note: This assumes all links have the same speed (100 Mbps) and ignores processing and queuing delays. In reality, link speeds vary, and queuing delays can be significant, so the actual time would be larger.

**Answer:** The last packet arrives at the university server at approximately **t = 0.8142 seconds** (under the assumptions stated).

---

### Q2.2 — Propagation Delay and Bandwidth-Delay Product (20%)

**Question:** Consider that you are submitting another assignment from your home computer to the university server, and you have worked out a list of network links between your computer and the university server.

1. Based on your best estimate and calculation, what is the total distance your assignment data will travel to reach the university server?
2. Suppose the propagation speed over all the links is the same 2×10⁸ meters/sec. What is propagation delay T_prop from your computer to the university server?
3. Further assume all the links have the same speed R bps. What is the bandwidth-delay product R × T_prop?
4. Now suppose the assignment file is sent continuously as one big file. What is the maximum number of bits that will be in the links at any given time?
5. Based on the results from c and d, what does the bandwidth-delay product imply?

**Answer:**

**Part 1: Total Distance**

To estimate the total distance, we need to know the geographic distance between your home and the university server, plus any additional distance due to routing (since the path may not be a straight line). Typically, the network path is longer than the straight-line distance.

Assume your home is in a city, and the university server is in another city, say 500 km away in a straight line. The actual network path might be 1.5 to 2 times the straight-line distance due to routing through ISP backbones and internet exchange points. So the total distance could be approximately **750–1000 km**.

For this solution, let us assume the total distance **d = 1000 km = 1,000,000 meters**.

**Part 2: Propagation Delay T_prop**

Propagation delay is given by:
**T_prop = d / s**

Where:
- d = total distance = 1,000,000 m
- s = propagation speed = 2×10⁸ m/s

T_prop = 1,000,000 / 200,000,000 = 0.005 seconds = **5 ms**.

**Answer: T_prop = 5 ms.**

**Part 3: Bandwidth-Delay Product R × T_prop**

The bandwidth-delay product is the product of the link speed (R) and the propagation delay (T_prop). It represents the maximum amount of data that can be "in flight" in the link at any given time.

Assume R = 100 Mbps = 100,000,000 bps.

R × T_prop = 100,000,000 × 0.005 = **500,000 bits = 500 kilobits**.

**Answer: R × T_prop = 500,000 bits (500 Kbits).**

**Part 4: Maximum Number of Bits in the Links**

If the assignment file is sent continuously as one big file, the maximum number of bits that will be in the links at any given time is exactly the bandwidth-delay product, assuming the link is fully utilized and there is a continuous stream of data.

So the maximum number of bits in the links = **500,000 bits**.

This means that at any instant, up to 500,000 bits can be propagating through the link (e.g., in the wire, in router buffers, etc.).

**Part 5: What Does the Bandwidth-Delay Product Imply?**

The bandwidth-delay product has important implications for network performance and protocol design:

1. **It represents the "capacity" of the link in terms of bits that can be in transit:** It is the amount of data that can be "in the pipe" at any given time. If the sender wants to keep the link fully utilized, it must have at least R × T_prop bits outstanding (i.e., unacknowledged) at any time. This is particularly important for protocols like TCP, which use sliding windows for flow control. If the window size is smaller than the bandwidth-delay product, the sender will not be able to keep the link fully utilized, resulting in lower throughput.

2. **It affects throughput:** For a given round-trip time (RTT), the maximum throughput achievable by a single TCP connection is limited by the window size divided by RTT. To achieve the full link speed R, the window size must be at least R × RTT (where RTT ≈ 2 × T_prop for a simple path). If the window is smaller, throughput will be less than R.

3. **It determines buffer requirements:** Routers along the path need buffers to hold packets during congestion. The bandwidth-delay product gives an indication of how much data can be in transit, which can inform buffer sizing. However, modern research suggests that buffers do not need to be as large as the bandwidth-delay product for all links.

4. **It impacts latency and jitter:** A large bandwidth-delay product means more data can be in the network at once, which can increase queuing delays and jitter if traffic is bursty.

5. **It is a key parameter in network design:** When designing networks for high-speed, long-distance links (e.g., transoceanic fiber), the bandwidth-delay product can be very large (e.g., 10 Gbps × 100 ms = 1 Gbit = 125 MB). This means that the sender must be able to handle a large amount of outstanding data, and protocols must be tuned accordingly.

**Conclusion:**
The bandwidth-delay product is a fundamental concept in networking. It tells us how much data can be "in the pipe" at any time, and it has direct implications for protocol design, throughput, and buffer sizing. In our example, R × T_prop = 500,000 bits, meaning that up to 500,000 bits can be in transit in the links at any instant when the file is sent continuously. To achieve full link utilization, the sender must have a window size of at least 500,000 bits (or 62,500 bytes) and an RTT of at least 10 ms (2 × T_prop).

---

### Q2.3 — Web Caching and Proxy Server (20%)

**Question:** You have learned that a Web cache can be useful in some cases. In this problem, you will investigate how useful a Web cache can be at a home. First, you need to download Apache server and install and run it as a proxy server on a computer on your home network. Then, write a brief report on what you did to make it work and how you are using it on all your devices on your home network.

Assume your family has six members. Each member likes to download short videos from the Internet to watch on their personal devices. All these devices are connected to the Internet through Wi-Fi. Further assume the average object size of each short video is 100 MB and the average request rate from all devices to servers on the Internet is three requests per minute. Five seconds is the average amount of time it takes for the router on the ISP side of your Internet link to forward an HTTP request to a server on the Internet and receive a response.

1. What is the average time α for your home router to receive a video object from your ISP router?
2. What is the traffic intensity μ on the Internet link to your home router if none of the requested videos is cached on the proxy server?
3. If average access delay β is defined as α/(μ−1), what is the average access delay your family members will experience when watching the short videos?
4. If the total average response time is defined as 5+β, and the miss rate of your proxy server is 0.5, what will be the total average response time?

**Answer:**

**Part 1: Average Time α for Home Router to Receive a Video Object**

The problem states: "Five seconds is the average amount of time it takes for the router on the ISP side of your Internet link to forward an HTTP request to a server on the Internet and receive a response." This means the average time from when the ISP router sends the request until it receives the response is 5 seconds. However, we need to consider the time for the actual video object to be transmitted from the ISP router to the home router.

Actually, the 5 seconds likely refers to the round-trip time (RTT) for the request-response cycle, including the time to receive the first byte or the entire object? The wording is ambiguous. Let's interpret it as: the average time it takes for the ISP router to forward an HTTP request to a server and receive a response (which includes the video object) is 5 seconds. But that would be the total time for the object to arrive at the ISP router. Then the home router needs to receive it from the ISP router.

Wait, the problem says: "Five seconds is the average amount of time it takes for the router on the ISP side of your Internet link to forward an HTTP request to a server on the Internet and receive a response." This suggests that the ISP router takes 5 seconds to get the response from the Internet server. Then the home router must receive the object from the ISP router. The time for the home router to receive the object from the ISP router depends on the link speed between the home router and the ISP router.

Let's denote:
- R = link speed between home router and ISP router (bits per second)
- L = object size = 100 MB = 100 × 10⁶ bytes = 800 × 10⁶ bits = 800,000,000 bits.

The time to transmit the object from the ISP router to the home router is L / R.

But we are not given R directly. We need to find α, the average time for the home router to receive a video object from the ISP router. This includes:
- The time for the request to go from home router to ISP router (negligible, small)
- The 5 seconds for the ISP router to get the response from the Internet
- The time to transmit the object from ISP router to home router (L / R)

So α = 5 + L / R.

But we don't know R. We need to use the traffic intensity information to find R.

**Part 2: Traffic Intensity μ**

Traffic intensity μ (often denoted ρ) is defined as:
μ = (L × a) / R

Where:
- L = object size = 800,000,000 bits
- a = average request rate = 3 requests per minute = 3/60 = 0.05 requests per second
- R = link speed in bps

The problem says "if none of the requested videos is cached on the proxy server," meaning all requests go to the Internet, so the traffic intensity on the Internet link is:

μ = (800,000,000 × 0.05) / R = 40,000,000 / R

We need another equation to solve for R. The problem gives us the 5 seconds for the ISP router to get the response, but that doesn't directly give R.

Wait, maybe the 5 seconds is the total time for the request to go from the home router to the Internet server and for the response to come back to the ISP router, and then the object is transmitted to the home router. But we still need R to find α.

Perhaps the problem expects us to assume that the 5 seconds includes the transmission time from the ISP router to the home router? Or maybe the 5 seconds is the time for the ISP router to receive the response, and then the home router receives it almost instantaneously? That doesn't make sense.

Let's re-read: "Five seconds is the average amount of time it takes for the router on the ISP side of your Internet link to forward an HTTP request to a server on the Internet and receive a response." This means the ISP router takes 5 seconds to get the response from the Internet. The response includes the video object. So the video object arrives at the ISP router after 5 seconds. Then the ISP router must transmit it to the home router. The time for that is L / R.

So α = 5 + L / R.

But we still need R. Maybe the problem expects us to use the traffic intensity to find R, but we have two unknowns (R and μ) and only one equation. Unless μ is given? The problem asks "What is the traffic intensity μ on the Internet link to your home router if none of the requested videos is cached on the proxy server?" So we need to calculate μ, which requires R. But R is not given.

Perhaps the problem expects us to assume that the link speed R is such that the traffic intensity is something we can calculate from the 5 seconds? No, the 5 seconds is the Internet delay, not the link speed.

Wait, maybe the 5 seconds is the total time for the home router to receive the object from the ISP router? The wording: "Five seconds is the average amount of time it takes for the router on the ISP side of your Internet link to forward an HTTP request to a server on the Internet and receive a response." This is the time for the ISP router to get the response from the Internet. It does not include the time to send it to the home router.

So α = 5 + L / R.

We need R. Is there any other information? The problem says "the average request rate from all devices to servers on the Internet is three requests per minute." This gives us the arrival rate. The traffic intensity μ = (L × a) / R. If we assume that the link is designed to handle this traffic with some utilization, maybe we can assume μ = 1? No, that would be a design choice, not given.

Perhaps the problem expects us to calculate μ in terms of R, and then use the formula β = α / (μ − 1) to find β, and then the total response time. But we still need R to get numerical values.

Let's look at the formula for β: β = α / (μ − 1). If we substitute α = 5 + L/R and μ = (L × a)/R, we get:

β = (5 + L/R) / ((L × a)/R − 1)

This is a function of R. Without R, we cannot get a numerical answer.

Maybe the problem expects us to assume a typical home internet link speed, such as 100 Mbps? The problem doesn't specify, but perhaps it is implied that we should use a reasonable value. Let's assume R = 100 Mbps = 100,000,000 bps.

Then:
L = 800,000,000 bits
a = 0.05 requests/sec
μ = (800,000,000 × 0.05) / 100,000,000 = 40,000,000 / 100,000,000 = 0.4

α = 5 + L/R = 5 + 800,000,000 / 100,000,000 = 5 + 8 = 13 seconds.

β = α / (μ − 1) = 13 / (0.4 − 1) = 13 / (−0.6) = −21.67 seconds.

Wait, β is negative? That can't be right. The formula β = α / (μ − 1) only makes sense if μ > 1. If μ < 1, the queue is stable and the average access delay should be positive. The formula given in the problem is β = α / (μ − 1). This formula is derived from queuing theory (M/M/1 queue) where the average waiting time is proportional to 1/(1−ρ) or ρ/(1−ρ). Actually, for an M/M/1 queue, the average number in the system is ρ/(1−ρ), and the average waiting time is (ρ/(1−ρ)) × (1/μ_service) ... The formula β = α / (μ − 1) seems to assume that α is the service time and μ is the utilization. If μ > 1, the queue is unstable and delay is infinite. If μ < 1, the formula gives a negative value, which is incorrect.

Perhaps the formula should be β = α / (1 − μ)? Let's check: if μ → 1, delay → ∞. If μ → 0, delay → α. That makes more sense. The problem states β = α/(μ−1), which would give negative delay for μ < 1. This is likely a typo in the problem. The correct formula for average access delay in an M/M/1 queue is β = α / (1 − μ), where α is the average service time.

Let's assume the correct formula is β = α / (1 − μ).

Then with R = 100 Mbps:
μ = 0.4
α = 13 s
β = 13 / (1 − 0.4) = 13 / 0.6 = 21.67 s.

Total average response time with miss rate 0.5:
The problem says: "If the total average response time is defined as 5+β, and the miss rate of your proxy server is 0.5, what will be the total average response time?"

If the miss rate is 0.5, then 50% of requests are served from the cache (with some cache access time, maybe negligible or included in the 5?), and 50% are served from the Internet (with delay 5 + β). The total average response time would be:

Total = (miss rate) × (5 + β) + (hit rate) × (cache access time)

Assuming cache access time is negligible (or very small), Total = 0.5 × (5 + 21.67) = 0.5 × 26.67 = 13.33 s.

But the problem says "the total average response time is defined as 5+β" — this is confusing. Maybe it means that when there is a miss, the response time is 5+β, and when there is a hit, it's just the cache time (which might be included in the 5? No). Let's re-read: "If the total average response time is defined as 5+β, and the miss rate of your proxy server is 0.5, what will be the total average response time?"

Perhaps the 5+β is the response time for a miss, and for a hit it's something else (maybe 0 or a small value). The total average response time would be:

Total = (1 − miss_rate) × (hit_time) + miss_rate × (miss_time)

If hit_time is negligible, Total = 0.5 × (5 + β).

But we need to be careful. Let's assume the problem expects us to use the formula:

Total average response time = (1 − miss_rate) × (cache access time) + miss_rate × (5 + β)

If cache access time is not given, we might assume it's included in the 5? No, the 5 is the Internet delay. The cache access time might be very small (e.g., 0.1 s). But the problem doesn't give it, so maybe we assume it's 0.

Then Total = 0.5 × (5 + β) = 0.5 × (5 + 21.67) = 13.33 s.

But wait, the problem says "the total average response time is defined as 5+β" — maybe it means that the total average response time (without cache) is 5+β, and with cache it's different? Let's re-read carefully:

"Assume your family has six members... What is the average time α... What is the traffic intensity μ... If average access delay β is defined as α/(μ−1), what is the average access delay... If the total average response time is defined as 5+β, and the miss rate of your proxy server is 0.5, what will be the total average response time?"

This is confusing. Let's try to interpret it as:
- α = average time for home router to receive a video object from ISP router (including Internet delay and transmission time).
- μ = traffic intensity on the Internet link.
- β = average access delay = α / (μ − 1) [likely a typo, should be 1−μ].
- Total average response time (without cache) = 5 + β.
- With cache miss rate 0.5, the total average response time = ?

If the total average response time without cache is 5 + β, then with cache, 50% of requests are served from cache (with some time, maybe 5? No, the 5 is the Internet delay, so cache hits don't have the 5). So:

Total = 0.5 × (cache hit time) + 0.5 × (5 + β)

If cache hit time is negligible, Total = 0.5 × (5 + β).

But we still need β. Using the corrected formula β = α / (1 − μ):

With R = 100 Mbps, μ = 0.4, α = 13 s, β = 21.67 s.
Total = 0.5 × (5 + 21.67) = 13.33 s.

If we use the given formula β = α / (μ − 1), we get β = −21.67 s, which is nonsense.

Given the ambiguity, I will assume the intended formula is β = α / (1 − μ), and R = 100 Mbps.

**Final Answers (with assumptions):**

1. α = 5 + L/R = 5 + 8 = 13 seconds.
2. μ = (L × a) / R = (800,000,000 × 0.05) / 100,000,000 = 0.4.
3. β = α / (1 − μ) = 13 / 0.6 = 21.67 seconds.
4. Total average response time = 0.5 × (5 + 21.67) = 13.33 seconds (assuming negligible cache hit time).

Note: If the problem intended a different R, the numbers would change. Also, the formula β = α/(μ−1) is likely a typo and should be β = α/(1−μ).

---

### Q2.4 — Client-Server vs. P2P Distribution Time (10%)

**Question:** Consider distributing a large file of F = 21 GB to N peers. The server has an upload rate of Us = 1 Gbps, and each peer has a download rate of Di = 20 Mbps and an upload rate of U. For N = 10, 100, and 1,000 and U = 300 Kbps, 7000 Kbps, and 2 Mbps, develop a table giving the minimum distribution time for each combination of N and U for both client-server distribution and P2P distribution. Comment on the features of client-server distribution and P2P distribution and the differences between the two.

**Answer:**

**Given:**
- File size F = 21 GB = 21 × 2³⁰ bytes = 21 × 1,073,741,824 bytes = 22,548,578,304 bytes = 22,548,578,304 × 8 bits = 180,388,626,432 bits ≈ 180.39 Gbits.
- Server upload rate Us = 1 Gbps = 1,000,000,000 bps.
- Peer download rate Di = 20 Mbps = 20,000,000 bps (assumed same for all peers).
- Peer upload rate U = 300 Kbps, 7000 Kbps, and 2 Mbps.
- N = 10, 100, 1000.

**Formulas:**

**Client-Server Distribution Time:**
In client-server mode, the server must send a copy of the file to each of the N peers. The server's upload bandwidth is shared among all peers. The minimum distribution time is:

D_cs = max( N × F / Us , F / min(Di) )

Since all peers have the same download rate Di, min(Di) = Di = 20 Mbps.

So D_cs = max( N × F / Us , F / Di )

**P2P Distribution Time:**
In P2P mode, the server sends the file to some peers, and peers help distribute the file to other peers. The minimum distribution time is:

D_p2p = max( F / Us , F / min(Di) , N × F / (Us + Σ Ui) )

Since all peers have the same upload rate U and download rate Di, Σ Ui = N × U.

So D_p2p = max( F / Us , F / Di , N × F / (Us + N × U) )

**Calculations:**

First, convert all rates to bps:
- Us = 1 Gbps = 1 × 10⁹ bps
- Di = 20 Mbps = 20 × 10⁶ bps
- U values:
  - U1 = 300 Kbps = 300 × 10³ = 3 × 10⁵ bps
  - U2 = 7000 Kbps = 7 × 10⁶ bps
  - U3 = 2 Mbps = 2 × 10⁶ bps

F = 21 GB = 21 × 2³⁰ × 8 bits = 21 × 1,073,741,824 × 8 = 180,388,626,432 bits.

Let's compute the times in seconds, then convert to hours/minutes for readability.

**Client-Server Times:**

F / Us = 180,388,626,432 / 1,000,000,000 = 180.39 seconds.
F / Di = 180,388,626,432 / 20,000,000 = 9019.43 seconds.

For N = 10:
N × F / Us = 10 × 180.39 = 1803.9 seconds.
D_cs = max(1803.9, 9019.43) = 9019.43 seconds ≈ 2.51 hours.

For N = 100:
N × F / Us = 100 × 180.39 = 18039 seconds.
D_cs = max(18039, 9019.43) = 18039 seconds ≈ 5.01 hours.

For N = 1000:
N × F / Us = 1000 × 180.39 = 180390 seconds.
D_cs = max(180390, 9019.43) = 180390 seconds ≈ 50.1 hours.

**P2P Times:**

We need to compute N × F / (Us + N × U) for each U and N.

**For U = 300 Kbps = 300,000 bps:**

N = 10:
Us + N × U = 1,000,000,000 + 10 × 300,000 = 1,000,000,000 + 3,000,000 = 1,003,000,000 bps.
N × F / (Us + N × U) = 10 × 180,388,626,432 / 1,003,000,000 = 1,803,886,264,320 / 1,003,000,000 ≈ 1798.49 seconds.
F / Us = 180.39 s
F / Di = 9019.43 s
D_p2p = max(180.39, 9019.43, 1798.49) = 9019.43 seconds ≈ 2.51 hours.

N = 100:
Us + N × U = 1,000,000,000 + 100 × 300,000 = 1,000,000,000 + 30,000,000 = 1,030,000,000 bps.
N × F / (Us + N × U) = 100 × 180,388,626,432 / 1,030,000,000 = 18,038,862,643,200 / 1,030,000,000 ≈ 17513.46 seconds.
D_p2p = max(180.39, 9019.43, 17513.46) = 17513.46 seconds ≈ 4.86 hours.

N = 1000:
Us + N × U = 1,000,000,000 + 1000 × 300,000 = 1,000,000,000 + 300,000,000 = 1,300,000,000 bps.
N × F / (Us + N × U) = 1000 × 180,388,626,432 / 1,300,000,000 = 180,388,626,432,000 / 1,300,000,000 ≈ 138760.48 seconds.
D_p2p = max(180.39, 9019.43, 138760.48) = 138760.48 seconds ≈ 38.54 hours.

**For U = 7000 Kbps = 7,000,000 bps:**

N = 10:
Us + N × U = 1,000,000,000 + 10 × 7,000,000 = 1,000,000,000 + 70,000,000 = 1,070,000,000 bps.
N × F / (Us + N × U) = 10 × 180,388,626,432 / 1,070,000,000 = 1,803,886,264,320 / 1,070,000,000 ≈ 1685.87 seconds.
D_p2p = max(180.39, 9019.43, 1685.87) = 9019.43 seconds ≈ 2.51 hours.

N = 100:
Us + N × U = 1,000,000,000 + 100 × 7,000,000 = 1,000,000,000 + 700,000,000 = 1,700,000,000 bps.
N × F / (Us + N × U) = 100 × 180,388,626,432 / 1,700,000,000 = 18,038,862,643,200 / 1,700,000,000 ≈ 10611.10 seconds.
D_p2p = max(180.39, 9019.43, 10611.10) = 10611.10 seconds ≈ 2.95 hours.

N = 1000:
Us + N × U = 1,000,000,000 + 1000 × 7,000,000 = 1,000,000,000 + 7,000,000,000 = 8,000,000,000 bps.
N × F / (Us + N × U) = 1000 × 180,388,626,432 / 8,000,000,000 = 180,388,626,432,000 / 8,000,000,000 ≈ 22548.58 seconds.
D_p2p = max(180.39, 9019.43, 22548.58) = 22548.58 seconds ≈ 6.26 hours.

**For U = 2 Mbps = 2,000,000 bps:**

N = 10:
Us + N × U = 1,000,000,000 + 10 × 2,000,000 = 1,000,000,000 + 20,000,000 = 1,020,000,000 bps.
N × F / (Us + N × U) = 10 × 180,388,626,432 / 1,020,000,000 = 1,803,886,264,320 / 1,020,000,000 ≈ 1768.52 seconds.
D_p2p = max(180.39, 9019.43, 1768.52) = 9019.43 seconds ≈ 2.51 hours.

N = 100:
Us + N × U = 1,000,000,000 + 100 × 2,000,000 = 1,000,000,000 + 200,000,000 = 1,200,000,000 bps.
N × F / (Us + N × U) = 100 × 180,388,626,432 / 1,200,000,000 = 18,038,862,643,200 / 1,200,000,000 ≈ 15032.39 seconds.
D_p2p = max(180.39, 9019.43, 15032.39) = 15032.39 seconds ≈ 4.18 hours.

N = 1000:
Us + N × U = 1,000,000,000 + 1000 × 2,000,000 = 1,000,000,000 + 2,000,000,000 = 3,000,000,000 bps.
N × F / (Us + N × U) = 1000 × 180,388,626,432 / 3,000,000,000 = 180,388,626,432,000 / 3,000,000,000 ≈ 60129.54 seconds.
D_p2p = max(180.39, 9019.43, 60129.54) = 60129.54 seconds ≈ 16.70 hours.

**Summary Table (Times in Hours):**

| N | U | D_cs (hours) | D_p2p (hours) |
|---|---|--------------|---------------|
| 10 | 300 Kbps | 2.51 | 2.51 |
| 10 | 7000 Kbps | 2.51 | 2.51 |
| 10 | 2 Mbps | 2.51 | 2.51 |
| 100 | 300 Kbps | 5.01 | 4.86 |
| 100 | 7000 Kbps | 5.01 | 2.95 |
| 100 | 2 Mbps | 5.01 | 4.18 |
| 1000 | 300 Kbps | 50.1 | 38.54 |
| 1000 | 7000 Kbps | 50.1 | 6.26 |
| 1000 | 2 Mbps | 50.1 | 16.70 |

**Comments on Client-Server vs. P2P Distribution:**

**Client-Server Distribution:**
- **Features:** The server is the sole source of the file. It must upload a copy of the file to each peer individually. The server's upload bandwidth is the bottleneck as N grows.
- **Pros:** Simple to implement and manage. Centralized control. Security and access control are easier.
- **Cons:** The server's upload bandwidth limits scalability. As N increases, distribution time increases linearly with N (if the server's upload rate is the bottleneck). The server may become overloaded. High cost for the server operator (bandwidth, infrastructure).
- **Performance:** In our example, D_cs = max(N×F/Us, F/Di). For large N, N×F/Us dominates, so D_cs ≈ N×F/Us. The download rate of peers (Di) only matters when N is small.

**P2P Distribution:**
- **Features:** Peers cooperate to distribute the file. Each peer can upload parts of the file to other peers while downloading. The server only needs to send the file to some peers, and those peers help distribute it further.
- **Pros:** Highly scalable. As N increases, the total upload capacity of the system increases (since each peer contributes upload bandwidth). Distribution time does not grow as quickly with N. More efficient use of resources. Lower cost for the server operator.
- **Cons:** More complex to implement and manage. Peers may have asymmetric bandwidth (download > upload). Free-riding (peers that download but don't upload) can degrade performance. Security and privacy concerns. Churn (peers joining and leaving) can affect performance.
- **Performance:** In our example, D_p2p = max(F/Us, F/Di, N×F/(Us + N×U)). For large N, N×F/(Us + N×U) ≈ F/U (since N×U dominates Us). So D_p2p approaches F/U, which is independent of N! This is the key advantage of P2P: distribution time does not grow linearly with N. However, if U is small (e.g., 300 Kbps), the term N×F/(Us + N×U) can still be large, but it grows much slower than in client-server.

**Differences:**
- **Scalability:** P2P scales much better than client-server. In client-server, time grows linearly with N. In P2P, time approaches a constant (F/U) as N grows, assuming U is not too small.
- **Bottleneck:** In client-server, the server's upload bandwidth is the bottleneck. In P2P, the bottleneck is often the peers' upload bandwidth (especially if U is small) or the download bandwidth of the slowest peer.
- **Resource Utilization:** P2P utilizes the upload bandwidth of all peers, which is otherwise wasted in client-server mode. This makes P2P much more efficient for large-scale distribution.
- **Complexity:** P2P protocols (e.g., BitTorrent) are more complex than client-server protocols (e.g., HTTP/FTP). They require mechanisms for peer discovery, chunk scheduling, and incentives.
- **Use Cases:** Client-server is suitable for small-scale distribution, where security and control are important. P2P is suitable for large-scale distribution of popular content, where scalability and efficiency are critical.

**Conclusion:**
The table and analysis show that P2P distribution is significantly more efficient than client-server distribution for large N, especially when peers have reasonable upload bandwidth. For N=1000 and U=7000 Kbps, client-server takes 50.1 hours, while P2P takes only 6.26 hours. Even with U=300 Kbps, P2P takes 38.54 hours vs. 50.1 hours for client-server. As U increases, P2P performance improves dramatically. This demonstrates the power of peer-to-peer networking for scalable content distribution.

---

**End of Document**