---
title: "Section 6 Video Streaming and Content Distribution Networks"
description: "Computer Networks study notes · Unit 2"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 2"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text to Speech Q&A Document: Video Streaming and Content Distribution Networks

## Overview

This document covers the learning objectives for Section 6 of the course: describing different video streaming applications, explaining the essential technologies and protocols that support each type of video streaming application, explaining how content distribution networks work, and gaining an understanding of the technologies used in Netflix, Spotify, and YouTube. The content is drawn from the required textbook section (2.6, Video Streaming and Content Distribution Networks) and supporting materials.

---

## Question 1: What are UDP streaming, HTTP streaming, and Adaptive HTTP streaming?

**Answer:** These are three distinct approaches to delivering stored video content over a network, each with different characteristics and tradeoffs.

**UDP Streaming** works by having the server transmit video at a rate that matches the client's video consumption rate. The server clocks out video chunks over UDP at a steady rate — for example, transmitting 8000 bits of video every 4 milliseconds to achieve a 3 Mbps stream. UDP does not employ a congestion-control mechanism, so the server sends at a constant rate regardless of network conditions. Before transmission, the server encapsulates video chunks within the Real-Time Transport Protocol (RTP) .

**HTTP Streaming** takes a fundamentally different approach. The video is simply stored in an HTTP server as an ordinary file with a specific URL. When a user wants to view the video, the client establishes a TCP connection with the server and issues an HTTP GET request for that URL. The server then sends the video file within an HTTP response message as quickly as TCP congestion control and flow control will allow. On the client side, bytes are collected in a client application buffer. Once the buffer exceeds a predetermined threshold, playback begins .

**Adaptive HTTP Streaming**, also known as Dynamic Adaptive Streaming over HTTP (DASH), builds upon HTTP streaming by encoding the video into several different versions, each with a different bit rate and corresponding quality level. The client dynamically requests chunks of video segments of a few seconds in length from different versions. When available bandwidth is high, the client selects chunks from a high-rate version; when bandwidth is low, it selects from a low-rate version .

---

## Question 2: Can streaming be done over TCP?

**Answer:** Yes, streaming can be done over TCP, and in fact, HTTP streaming over TCP has become the dominant approach for video streaming applications today .

The use of HTTP over TCP for streaming offers several significant advantages over UDP-based approaches. First, HTTP streaming allows video to traverse firewalls more easily, since many firewalls are configured to block UDP traffic but permit HTTP traffic . Second, it obviates the need for a media control server such as an RTSP server, simplifying the server infrastructure .

TCP provides reliable, in-order delivery of data, which simplifies the client's task of reconstructing the video stream. However, TCP's congestion control mechanisms introduce variability in the transmission rate, as the sending rate fluctuates in response to network conditions and retransmissions for lost packets . This variability is managed through client-side buffering, which absorbs the fluctuations and allows for smooth playback.

The evolution from UDP to HTTP/TCP represents a significant shift in streaming architecture. While UDP streaming was designed for real-time applications with predictable rates, HTTP/TCP streaming has proven more practical for stored video and video-on-demand services because of its firewall-friendly nature and its ability to leverage existing web infrastructure .

---

## Question 3: What is client buffering? Why is it needed?

**Answer:** Client buffering is the process of accumulating video data in a client application buffer before beginning playback, and maintaining a reserve of data during playback to absorb variations in the rate at which video data arrives from the network.

The buffering process works as follows: When a client begins receiving video data, it collects the incoming bytes in a client application buffer. Once the number of bytes in this buffer exceeds a predetermined threshold, the client application begins playback. It periodically grabs video frames from the buffer, decompresses them, and displays them on the user's screen .

Client buffering is needed for several critical reasons. First, it compensates for network-added delay and delay jitter — the variation in packet arrival times that is inherent in packet-switched networks . Without buffering, playback would stutter or freeze whenever packets arrived late or out of order.

Second, buffering addresses the mismatch between the variable rate at which data arrives over TCP and the constant rate at which video must be consumed for smooth playback. TCP's congestion control causes the fill rate to fluctuate, while the playout rate remains constant. The buffer absorbs these fluctuations, filling when network conditions are good and draining when they are not .

Third, buffering allows for smooth playout despite the fact that video frames must be decoded and displayed at precise intervals. If playback depended directly on network arrival times, any network hiccup would be immediately visible to the user.

---

## Question 4: How does UDP streaming work? What properties does UDP streaming have?

**Answer:** UDP streaming operates by having the server transmit video chunks over UDP at a steady rate that matches the client's video consumption rate.

In a typical implementation, if the video is encoded at 3 Mbps, the server might transmit 8000 bits of video every 4 milliseconds. The server encapsulates the video chunks within RTP before sending them over UDP .

The key property of UDP streaming is that it does not employ a congestion-control mechanism. The server sends at a constant rate regardless of network conditions, taking a "best effort" approach with no guarantees for delay or loss . This is sometimes described as a laissez-faire approach — the application sends data at the appropriate rate for the video, and the network does its best to deliver it.

UDP streaming provides a short playout delay, typically 2 to 5 seconds, to remove jitter . The client buffers incoming packets briefly to smooth out variations in arrival times before beginning playback.

However, UDP streaming has significant drawbacks. Constant-rate UDP streaming can fail to provide continuous playout due to unpredictable and varying available bandwidth between server and client. It requires a media control server, such as an RTSP server, to process client-to-server interactivity requests and to track client state for each ongoing session. Additionally, many firewalls are configured to block UDP traffic, preventing users behind these firewalls from receiving UDP video .

---

## Question 5: Why does UDP streaming need a parallel control connection?

**Answer:** UDP streaming requires a parallel control connection because UDP itself is a connectionless protocol that provides no mechanism for the client to send control commands to the server or for the server to track the state of each client session.

The control connection serves several essential functions. It allows the client to send interactivity requests to the server, such as commands to pause, rewind, fast-forward, or jump to a different position in the video. It also enables the server to track client state — knowing which video the client is watching, where they are in the playback, and what actions they have requested .

The Real-Time Streaming Protocol (RTSP) is typically used for this control connection. RTSP operates as an out-of-band protocol, meaning it runs over a separate connection from the actual media data. The media itself flows over UDP (typically with RTP), while RTSP handles the control messages .

This separation of data and control is necessary because UDP provides no built-in signaling for session management. Without RTSP or a similar protocol, the server would have no way of knowing when a client has stopped watching, changed position, or requested other operations. The server would also have no way to maintain per-client state, which is essential for delivering personalized streaming experiences.

---

## Question 6: What protocols are used for UDP streaming?

**Answer:** UDP streaming relies on a combination of protocols working together: UDP provides the transport layer, RTP handles the media encapsulation, and RTSP manages the control connection.

**UDP** (User Datagram Protocol) serves as the underlying transport protocol. It provides a connectionless, best-effort delivery service with no guarantees for reliability, ordering, or delay. The server sends video chunks over UDP at a steady rate .

**RTP** (Real-Time Transport Protocol) encapsulates the video chunks before they are sent over UDP. RTP provides mechanisms for identifying the payload type, sequencing packets, and timestamping them, which helps the receiver reconstruct the media stream correctly. The server encapsulates video chunks within RTP before UDP transmission .

**RTSP** (Real-Time Streaming Protocol) is used for the parallel control connection. It processes client-to-server interactivity requests and tracks client state for each ongoing session. RTSP operates as an application-layer protocol over a separate connection from the media data .

This protocol stack — RTP over UDP for data, RTSP for control — was the traditional approach to streaming media over IP networks. However, the limitations of this approach, particularly the firewall issues with UDP and the complexity of maintaining separate control and data connections, contributed to the rise of HTTP-based streaming approaches .

---

## Question 7: What is HTTP streaming? How does it work?

**Answer:** HTTP streaming is an approach to video delivery where the video is stored as an ordinary file on an HTTP server and delivered to clients using standard HTTP GET requests over TCP.

The process works as follows: The video file is stored on the HTTP server with a specific URL. When a user wants to view the video, the client establishes a TCP connection with the server and issues an HTTP GET request for that URL. The server then sends the video file within an HTTP response message, transmitting it as quickly as TCP congestion control and flow control will allow .

On the client side, the incoming bytes are collected in a client application buffer. Once the number of bytes in this buffer exceeds a predetermined threshold, the client application begins playback. It periodically grabs video frames from the buffer, decompresses them, and displays them on the user's screen .

HTTP streaming has several important characteristics. It allows the video to traverse firewalls, since HTTP traffic is typically permitted through firewalls that block UDP. It obviates the need for a media control server such as an RTSP server, simplifying the infrastructure. It leverages the existing HTTP and TCP protocols and web server infrastructure .

Most video streaming applications today use HTTP streaming. The approach is particularly well-suited for video-on-demand services where users are not synchronized in their viewing — they can start, stop, and reposition the video at any time independently of other users .

---

## Question 8: What are multimedia network applications using HTTP streaming?

**Answer:** The most prominent multimedia network applications using HTTP streaming include YouTube, Netflix, and other major video-on-demand services.

**YouTube** employs HTTP streaming to deliver its vast library of user-uploaded videos. YouTube often makes a small number of different versions available for each video, each with a different bit rate and corresponding quality level. In its earlier implementations, YouTube did not employ adaptive streaming but instead required the user to manually select a version. To save bandwidth and server resources, YouTube uses the HTTP byte-range header to limit the flow of transmitted data after a target amount of video is prefetched .

**Netflix** employs both CDN technology and adaptive streaming over HTTP. Netflix uses third-party CDNs to host and stream its content, and has adopted adaptive streaming to adjust video quality based on available bandwidth .

Other video-on-demand services such as Hulu, Amazon Prime Video, and various regional services also rely on HTTP streaming. The approach has become essentially universal for video-on-demand because of its compatibility with existing web infrastructure, its ability to traverse firewalls, and its support for adaptive streaming techniques .

The shift toward HTTP streaming represents a fundamental change in how multimedia is delivered over the Internet. While UDP-based streaming was designed for real-time interactivity with tight latency constraints, HTTP streaming has proven more practical and scalable for stored video content .

---

## Question 9: What is prefetching video? Why is it needed?

**Answer:** Prefetching video is the process of downloading video data ahead of the current playback position, filling the client application buffer with future content so that playback can continue smoothly even if network conditions deteriorate temporarily.

Prefetching is needed for several reasons. First, it provides resilience against network variability. TCP's congestion control causes the rate at which data arrives to fluctuate. By prefetching, the client builds a reserve of video data that can be consumed during periods when the network is delivering data more slowly .

Second, prefetching enables smooth playback despite jitter — the variation in packet arrival times. Without prefetching, any delay in data arrival would immediately cause playback to stutter or freeze. With a sufficient buffer of prefetched content, brief network disruptions are invisible to the user.

Third, prefetching supports the requirements of video decoding and display. Video frames must be decoded and displayed at precise intervals. If playback depended on real-time data arrival, any network hiccup would be immediately visible. Prefetched data ensures that the decoder always has frames available when it needs them .

However, prefetching also has costs. It consumes bandwidth and server resources for data that may never be consumed if the user stops watching early or repositions the video. YouTube addresses this by using HTTP byte-range headers to limit the flow of transmitted data after a target amount of video is prefetched, saving bandwidth and server resources that would otherwise be wasted .

---

## Question 10: HTTP streaming runs over TCP and utilizes both the client application buffer and TCP buffers. How do the two collaborate?

**Answer:** The client application buffer and TCP buffers work together in a two-stage buffering system to smooth out the variability inherent in TCP transmission and ensure smooth video playback.

The TCP buffers operate at the transport layer. When the server sends video data, TCP delivers it reliably and in order, but the rate of delivery varies based on congestion control, flow control, and network conditions. TCP's receive buffer at the client holds incoming data temporarily as it arrives, providing a first stage of buffering that absorbs packet-level jitter and reordering .

The client application buffer operates at the application layer. The HTTP streaming client reads data from the TCP receive buffer and stores it in the application buffer. This buffer serves a different purpose: it holds video frames that have been received but not yet played back. The application buffer must contain enough data to sustain playback through periods when TCP is delivering data more slowly than the playback rate .

The collaboration between these two buffers works as follows: Data flows from the network into the TCP receive buffer, then into the client application buffer, and finally to the video decoder and display. The TCP buffer handles short-term variations in packet arrival, while the application buffer handles longer-term variations in the sustainable TCP throughput .

The fill rate of the application buffer varies over time as TCP throughput fluctuates, while the playout rate remains constant. When the buffer is filling faster than the playout rate, the buffer level rises, providing a cushion for future slowdowns. When TCP throughput drops below the playout rate, the buffer level falls, consuming the reserve that was built up during faster periods .

---

## Question 11: How is early termination handled in HTTP streaming?

**Answer:** Early termination in HTTP streaming occurs when a user stops watching a video before it has been completely downloaded, and the system must avoid wasting bandwidth and server resources on data that will never be consumed.

The primary mechanism for handling early termination is the HTTP byte-range header. This allows the client to request only a specific range of bytes from a file rather than the entire file. When a user stops watching, the client simply stops requesting additional byte ranges, and the server stops sending data .

YouTube provides a concrete example of this approach. To save bandwidth and server resources that would be wasted by repositioning or early termination, YouTube uses HTTP byte range requests to limit the flow of transmitted data after a target amount of video is prefetched. If the user stops watching, the client ceases to issue further requests, and no additional data is transferred .

This approach is fundamentally different from UDP streaming, where the server sends data at a constant rate regardless of whether the client is still watching. In UDP streaming, early termination requires explicit signaling through the RTSP control connection to tell the server to stop sending. In HTTP streaming, early termination is implicit — the client simply stops making requests, and the server naturally stops sending.

The byte-range mechanism also supports repositioning. If a user jumps to a different part of the video, the client can request the byte range corresponding to the new playback position rather than downloading all the intervening data.

---

## Question 12: How is repositioning video handled in HTTP streaming?

**Answer:** Repositioning video — jumping to a different point in the playback timeline — is handled in HTTP streaming through the use of the HTTP byte-range header, which allows the client to request specific portions of the video file.

When a user repositions the video, the client determines the byte offset corresponding to the desired playback position and issues an HTTP GET request with a byte-range header specifying that offset. The server responds with the requested bytes, and the client begins decoding and displaying from that point .

This approach is elegant because it requires no special server-side state or control protocol. The video file is treated as a static resource, and the client simply requests the portions it needs. The same mechanism that handles normal sequential playback also handles repositioning — the only difference is the byte range specified in the request.

YouTube's implementation provides a concrete example. YouTube uses HTTP byte range requests to limit data transfer after prefetching, and this same mechanism supports repositioning. If a user jumps to a different part of the video, the client requests the appropriate byte range rather than downloading the entire file from the beginning to the new position .

This approach contrasts with UDP streaming, where repositioning requires the client to send an RTSP command to the server, and the server must adjust its transmission rate and position accordingly. In HTTP streaming, repositioning is entirely client-driven — the client simply requests different byte ranges.

---

## Question 13: What is adaptive HTTP streaming? What is dynamic adaptive streaming over HTTP (DASH)?

**Answer:** Adaptive HTTP streaming, commonly implemented as Dynamic Adaptive Streaming over HTTP (DASH), is a technique that allows video quality to be adjusted dynamically based on current network conditions, providing the best possible viewing experience without manual intervention.

The fundamental concept is that the video is encoded into several different versions, each with a different bit rate and corresponding quality level. The client dynamically requests chunks of video segments of a few seconds in length from different versions. When the amount of available bandwidth is high, the client naturally selects chunks from a high-rate version. When available bandwidth is low, it selects from a low-rate version .

DASH is the specific standard that formalizes this approach. In a DASH implementation, each version of the video is stored on the HTTP server with a different URL. The server maintains a manifest file — also called a Media Presentation Description or MPD — that provides a URL for each version along with its bit rate. While downloading chunks, the client measures the received bandwidth and runs a rate determination algorithm to select which chunk to request next. This allows the client to freely switch among different quality levels as network conditions change .

The "intelligence" in DASH is implemented at the client. The client decides when to request a chunk (to avoid buffer starvation or overflow), what encoding rate to request (higher quality when more bandwidth is available), and where to request the chunk from (potentially from a server close to the client or one with high available bandwidth) .

---

## Question 14: How does DASH work? What advantages does DASH have?

**Answer:** DASH works by encoding video into multiple versions at different bit rates, dividing each version into chunks, and having the client dynamically select which chunks to download based on measured network conditions.

The workflow proceeds as follows: The video is encoded into several different versions, each with a different bit rate and quality level. Each version is stored on the HTTP server with a different URL. The server also provides a manifest file that lists the URLs and bit rates for all versions .

During playback, the client periodically measures the available bandwidth and consults the manifest file. It then requests one chunk of video at a time, choosing the maximum coding rate that is sustainable given the current bandwidth. The client can choose different coding rates at different points in time depending on available bandwidth .

DASH offers several significant advantages. First, it provides the best possible quality under varying network conditions — the client automatically adapts to bandwidth fluctuations without user intervention. Second, it allows clients with different Internet access rates to stream video at different encoding rates, making the same content accessible to users with diverse connection speeds . Third, it provides resilience against network variability by allowing quality to drop temporarily rather than causing playback to stall .

DASH also eliminates the need for the user to manually select a quality level, as was required in earlier implementations of HTTP streaming such as early YouTube . The adaptive approach provides a seamless experience where quality transitions are handled automatically and smoothly.

---

## Question 15: What are content distribution networks (CDNs)?

**Answer:** Content Distribution Networks (CDNs) are geographically distributed networks of servers designed to deliver content — including video, web pages, and other digital media — to users more efficiently and reliably than a single centralized server could.

A CDN consists of multiple server clusters distributed geographically around the world. When a user requests content, the CDN serves that request from the "closest" CDN location that has the requested content. This reduces latency, improves throughput, and reduces the load on any single server .

The fundamental challenge that CDNs address is scalability. A single mega-server cannot effectively stream content to hundreds of thousands of simultaneous users for several reasons: it represents a single point of failure, it becomes a network congestion point, it requires sending multiple copies of video through the same outgoing link, and it results in large distances for remote clients .

CDNs solve these problems by distributing content to servers that are closer to users. The CDN infrastructure includes a set of servers spread out in many areas close to users, a redirection service (typically using DNS or other proxy servers) to assign the right server for each user request, a network (public or private) that connects the edge servers, and a content management service that places and replicates content to edge servers according to need .

There are two main types of CDNs. A **private CDN** is owned by the content provider itself — for example, Google operates its own CDN to distribute YouTube videos. A **third-party CDN** distributes content on behalf of multiple content providers — for example, Akamai's CDN distributes Netflix and Hulu content, among others .

---

## Question 16: A CDN often consists of many servers. How would these servers be placed?

**Answer:** CDN servers are placed according to specific philosophies that balance proximity to users against infrastructure costs and management complexity.

The two primary server placement philosophies are **enter deep** and **bring home** .

**Enter deep** involves pushing CDN servers deep into many access networks, placing server clusters close to users. This approach improves user-perceived delay and throughput by decreasing the number of links and routers between the server and the user. Akamai is the primary example of this approach, with approximately 1700 locations worldwide. The enter deep philosophy maximizes performance by minimizing the distance data must travel, but it requires extensive peering arrangements and infrastructure to maintain servers in many locations .

**Bring home** takes a different approach by building large clusters at a smaller number of key locations — typically on the order of tens — and connecting these clusters using a private high-speed network. Limelight is the primary example of this approach. The bring home philosophy places larger clusters at Internet Exchange Points (IXPs) and Points of Presence (PoPs) near, but not inside, access networks. This approach is easier to manage and expand than the enter deep approach, but may result in slightly higher latency for some users .

The choice between these philosophies involves a tradeoff: enter deep provides better performance for users but requires more work in peering arrangements and infrastructure management, while bring home is easier to expand and manage but may sacrifice some performance for distant users .

---

## Question 17: What is the so-called enter deep philosophy for server placement within content distribution networks? How are servers placed according to enter deep?

**Answer:** The enter deep philosophy is a CDN server placement strategy that involves pushing servers deep into many access networks, placing them as close to end users as possible.

According to this philosophy, CDN servers are placed inside access ISPs — the networks that directly serve end users. This means that a user's request for content can be served from a server that is only a few network hops away, rather than traversing the broader Internet to reach a centralized data center .

The enter deep approach is used by Akamai, which has deployed servers in approximately 1700 locations worldwide. These locations are typically clusters of servers placed within or very near access networks. By being close to users, these servers can deliver content with minimal latency and maximal throughput .

The primary advantage of enter deep is improved user-perceived performance. By decreasing the number of links and routers between the server and the user, the approach reduces delay and increases the effective bandwidth available for content delivery. This is particularly important for video streaming, where high bandwidth and low latency are essential for a good viewing experience .

However, enter deep also has costs. Maintaining servers in many locations requires extensive peering arrangements with access ISPs and significant operational overhead. The approach is more complex and expensive to manage than alternative strategies, but the performance benefits often justify the investment for large-scale content providers .

---

## Question 18: What is the so-called bring home philosophy for server placement within content distribution networks? How are servers placed according to bring home?

**Answer:** The bring home philosophy is a CDN server placement strategy that involves building larger server clusters at a smaller number of key locations and connecting them with a private high-speed network.

According to this philosophy, CDN servers are not placed deep inside access networks. Instead, they are placed at strategic locations — typically Internet Exchange Points (IXPs) and Points of Presence (PoPs) — that are near, but not inside, access networks. The number of locations is typically on the order of tens rather than hundreds or thousands .

The bring home approach is used by Limelight. The clusters at each location are larger than those used in the enter deep approach, and they are connected by a private high-speed network that allows content to be distributed efficiently among them. When a user requests content, the request is routed to the nearest cluster, which serves the content from its local cache or retrieves it from another cluster over the private network .

The primary advantage of bring home is ease of management and expansion. With fewer locations to maintain, the CDN operator can more easily manage the infrastructure, negotiate peering arrangements, and expand capacity. The private network connecting the clusters provides a controlled environment for content distribution .

However, bring home may result in slightly higher latency for some users compared to enter deep, since the servers are not as close to end users. The tradeoff between the two approaches involves balancing performance against operational complexity and cost .

---

## Question 19: How do CDNs work?

**Answer:** CDNs work by intercepting user requests for content, redirecting those requests to an appropriate server in the CDN's network, and serving the content from that server.

The general operation of a CDN involves several key components working together. The CDN maintains multiple servers distributed geographically, each with copies of the content it is responsible for serving. When a user requests content, the CDN must determine which server is best suited to serve that request .

The redirection process typically uses DNS. When a user requests content that is hosted on a CDN, the DNS resolution process is manipulated so that the user's request is directed to a CDN server rather than to the content provider's origin server. The CDN's DNS infrastructure responds to the user's DNS query with the IP address of an appropriate CDN server .

The CDN's decision about which server to direct a user to is based on several factors. The CDN may consider the geographic proximity of the user to the server, the network distance (measured by round-trip time or hop count), the current load on each server, and the availability of the requested content at each server .

Once the user's request reaches the selected CDN server, that server serves the content. If the server has the content cached locally, it delivers it directly. If not, it may retrieve the content from another CDN server or from the content provider's origin server .

The CDN also handles content replication — placing copies of content on servers where it is likely to be requested. Popular content may be replicated to many servers, while less popular content may be stored in fewer locations. The content management service within the CDN handles the placement and replication of content according to need .

---

## Question 20: How do CDNs take advantage of DNS to intercept and redirect requests?

**Answer:** CDNs leverage the Domain Name System (DNS) to intercept user requests and redirect them to appropriate CDN servers by manipulating the DNS resolution process.

The fundamental mechanism is that the CDN controls the authoritative DNS servers for the domains associated with the content it serves. When a user requests content — for example, by clicking a link or entering a URL — the user's browser must resolve the domain name to an IP address. The browser sends a DNS query, and through a series of DNS lookups, the query eventually reaches the CDN's DNS infrastructure .

The CDN's DNS servers are configured to respond not with a single fixed IP address, but with an IP address selected based on the CDN's routing logic. The CDN can return different IP addresses to different users based on factors such as the user's geographic location, network topology, and current server load. This allows the CDN to direct each user to the most appropriate server .

The process involves the content provider configuring their DNS records to point to the CDN. Typically, the content provider creates a CNAME record that aliases their domain to a domain controlled by the CDN. When a user's DNS query reaches the CDN's DNS servers, those servers return the IP address of the selected CDN server .

This DNS-based redirection is transparent to the user. The user simply requests content by name, and the DNS system handles the task of directing the request to an appropriate server. The content provider does not need to modify the content or the user's experience — the redirection happens entirely at the DNS level .

---

## Question 21: What six steps do CDNs use to take advantage of DNS to intercept and redirect requests?

**Answer:** The DNS-based request interception and redirection process in CDNs typically involves six key steps.

**First**, the content provider configures their DNS to delegate authority for a specific domain to the CDN. This is often done by creating a CNAME record that points the content provider's domain to a domain controlled by the CDN .

**Second**, when a user requests content, their browser sends a DNS query for the content provider's domain name. This query is eventually forwarded to the CDN's authoritative DNS servers .

**Third**, the CDN's DNS servers receive the query and must determine which CDN server should serve this particular user. The CDN considers factors such as the user's IP address (which indicates approximate geographic location), network topology, current server load, and content availability .

**Fourth**, the CDN's DNS servers select an appropriate server and return its IP address in the DNS response. This IP address is the address of a specific CDN server, not the content provider's origin server .

**Fifth**, the user's browser receives the DNS response containing the CDN server's IP address and establishes a connection to that server. The browser then sends its content request (typically an HTTP GET) to the CDN server .

**Sixth**, the CDN server serves the requested content. If the content is available locally, it is delivered directly. If not, the server may retrieve it from another CDN server or from the content provider's origin server, cache it locally for future requests, and then deliver it to the user .

---

## Question 22: What are the cluster selection strategies for CDNs to assign a client?

**Answer:** CDN cluster selection strategies determine which server cluster should serve a particular client's request. The primary strategies are based on geographic proximity and network performance measurements.

The most common strategy is to select the cluster that is **geographically closest** to the client. The CDN determines the client's approximate location from the client's IP address and returns the IP address of a server in the nearest cluster. This approach is simple and generally effective, as geographic proximity usually correlates with network proximity .

However, geographic proximity is not always the best indicator of network performance. A cluster that is geographically close might be separated from the client by a congested network path, while a more distant cluster might have a better network connection. To address this, some CDNs use **real-time measurements of delay and loss** to make more informed decisions .

CDNs that use performance-based selection periodically measure network conditions between clients and various CDN servers. These measurements might include round-trip time, packet loss rates, and available bandwidth. The CDN then selects the server that provides the best performance for each client, even if that server is not geographically closest .

Another approach is **IP anycast**, where multiple CDN servers share the same IP address. When a client sends a request to that IP address, the Internet's routing infrastructure directs the request to the "nearest" server in terms of BGP routing. This provides a natural form of load distribution and proximity-based routing .

CDNs may also consider server load when selecting a cluster. If a particular cluster is heavily loaded, the CDN may direct some clients to other clusters to balance the load, even if those clients are not closest to those alternative clusters .

---

## Question 23: How do CDNs measure delay and loss performance for a client?

**Answer:** CDNs measure delay and loss performance for clients through active probing and passive monitoring techniques, using this information to make informed server selection decisions.

Active probing involves sending test packets or making test requests to measure network conditions. The CDN may use techniques similar to traceroute to discover the network path to a client and measure round-trip times at various points along that path. Periodic measurements of delay and loss are collected for different paths and different server locations .

Passive monitoring involves observing actual traffic flows between clients and CDN servers. The CDN can measure the performance experienced by real users — the delay in delivering content, the throughput achieved, and any packet loss that occurs. This information is aggregated to build a picture of network conditions between different regions and server clusters .

CDNs may also use DNS-based measurements. When a client's DNS query reaches the CDN's DNS servers, the CDN can measure the time it takes for the query to arrive and use this as a rough indicator of network distance. Some CDNs use more sophisticated techniques, such as having the client's DNS resolver query multiple CDN servers and comparing response times .

The measurements collected through these techniques are used to build routing tables or decision models that the CDN's DNS servers consult when selecting a server for each client. The goal is to direct each client to the server that will provide the best performance given current network conditions and server load .

---

## Question 24: How do some CDNs use IP anycast to match clients with CDN servers?

**Answer:** Some CDNs use IP anycast to match clients with CDN servers by assigning the same IP address to multiple servers distributed across different locations.

With IP anycast, multiple servers are configured with the same IP address. When a client sends a request to that IP address, the Internet's routing infrastructure — specifically BGP (Border Gateway Protocol) — directs the request to the "nearest" server in terms of network routing. The definition of "nearest" is based on BGP routing metrics, which typically reflect the number of autonomous system hops and other routing policy considerations .

The anycast approach provides automatic and transparent load distribution. Clients in different geographic regions will naturally be directed to different servers based on the routing topology. A client in Europe will typically reach a European server, while a client in Asia will reach an Asian server, all without any explicit redirection mechanism .

IP anycast also provides resilience. If a particular server fails or a network path becomes unavailable, BGP routing will automatically redirect traffic to another server with the same anycast address. The client does not need to retry or reconfigure — the routing infrastructure handles the failover transparently .

However, IP anycast has limitations. BGP routing does not always reflect actual network performance — the "nearest" server in routing terms may not provide the best latency or throughput. Additionally, the granularity of BGP routing can be coarse, with large geographic areas being routed to the same server even if a closer server exists. Some CDNs combine anycast with DNS-based redirection to achieve better precision .

---

## Question 25: What strategies are used by Netflix, YouTube, and Kankan, respectively, to assign clients to CDN servers?

**Answer:** Netflix, YouTube, and Kankan employ fundamentally different strategies for assigning clients to content sources, reflecting their different business models and technical requirements.

**Netflix** uses a hybrid approach with third-party CDNs and its own infrastructure. Netflix owns very little infrastructure itself; it rents servers, bandwidth, storage, and database services from third parties. Netflix uploads studio masters to Amazon Cloud, creates multiple versions of each movie at different encoding rates, and then uploads these versions to multiple CDN providers. Netflix uses three third-party CDNs: Akamai, Limelight, and Level 3. When a client requests a video, Netflix's cloud-based system selects which CDN to use based on the client's location and current conditions, then directs the client to that CDN .

**YouTube** uses a private CDN operated by Google. Google has installed server clusters in different locations and uses DNS to redirect client requests to a specific cluster. The selection strategy is primarily based on the cluster that results in the lowest round-trip time to the client. Sometimes, for load balancing, a client may be directed to a more distant cluster. If a cluster does not have the requested video, the client is redirected to another cluster rather than having the content fetched. YouTube processes each uploaded video within Google data centers, converting it to multiple versions at different bit rates .

**Kankan** (a leading P2P-based video-on-demand provider in China) takes an entirely different approach that avoids CDNs altogether. Kankan uses P2P delivery to reduce infrastructure and bandwidth costs. When a peer wants to see a video, it contacts a tracker (centralized or peer-based using a DHT) to discover other peers in the system that have a copy of that video. The peer then requests chunks of the video file in parallel from these other peers. Requests are preferentially made for chunks that will be viewed in the near future to ensure continuous playback. Kankan employs a tracker and its own DHT for tracking content, with swarm sizes for popular content involving tens of thousands of peers. For distributing video chunks among peers, Kankan uses UDP whenever possible .