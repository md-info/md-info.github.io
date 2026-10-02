---
title: "Section 5 Peer-to-Peer File Distribution"
description: "Computer Networks study notes · Unit 2"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 2"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text to Speech Q&A Document: Peer-to-Peer File Distribution

## Overview

This document covers the learning objectives for Section 5 of the course: understanding application protocols for file sharing and describing how P2P file sharing systems work. The content is drawn from the required textbook section (2.5, Peer-to-Peer File Distribution) and supporting materials.

---

## Question 1: What is a peer-to-peer network application?

**Answer:** A peer-to-peer (P2P) network application is a distributed system where all participating computers share equivalent responsibility for processing data and providing services . Unlike traditional client-server models where specific devices are designated as servers that provide data and others act as clients that consume it, in a P2P network, every computer runs the same networking protocols and software, and each device can function simultaneously as both a client and a server .

In a P2P network, peers communicate directly with each other without relying on a central coordinating server for the actual data transfer. This architecture allows for data to be shared easily in both directions, whether for downloads or uploads . P2P networks are common on small local area networks, particularly home networks, but can also be geographically dispersed across the Internet .

---

## Question 2: What are the differences between client-server applications and peer-to-peer applications?

**Answer:** The fundamental difference lies in how responsibilities and resources are distributed across the network.

In a **client-server architecture**, there is an always-on host called the server that services requests from many other hosts called clients . The server typically features higher-powered central processors, more memory, and larger disk drives than clients . The server acts as the central point for providing or "serving" data, while clients consume those services . Examples include Web browsers and Web servers, FTP clients and servers, and DNS .

In a **peer-to-peer architecture**, there is no dedicated server that must always be running. All computers share equivalent responsibility for processing data . Peers directly exchange resources and services with each other. This eliminates the dependency on a central server, making P2P networks more resilient to failures because they do not rely exclusively on central servers . Additionally, P2P systems minimize the amount of central elements and thus are more resilient against attacks targeted at a few elements .

From a scalability perspective, P2P networks handle high volumes of file sharing traffic by distributing the load across many computers, allowing them to scale better than client-server networks in case of failures or traffic bottlenecks . P2P technology has the self-scaling property where supply capacity grows linearly with demand .

---

## Question 3: How is P2P used for file distribution?

**Answer:** P2P file distribution leverages the combined upload capacity of all participating peers to distribute files more efficiently than traditional client-server approaches.

The essential mechanism works as follows: When a peer downloads a file, it receives chunks or pieces of that file from other peers who already have those pieces. As the peer accumulates pieces, it can begin uploading those pieces to other peers who need them . This creates a cooperative distribution model where the file is spread across the network organically.

BitTorrent is the canonical example of P2P file distribution . The process begins with a small `.torrent` file containing metadata about the file to be shared, including the file name, length, and information about the pieces that comprise the file. A tracker server maintains a list of peers participating in the file transfer. When a peer wants to download, it contacts the tracker, which responds with a list of other peers involved in the transfer. The peer then connects to these other peers and begins exchanging blocks of data .

In this system, some peers are seeders who already have the entire file, while others are leechers who are still downloading . Peers request blocks in a roughly random order, and the system incentivizes uploading through a tit-for-tat mechanism .

This approach dramatically reduces the bandwidth costs that would otherwise be associated with a centralized download server . The combined upload capacity of all peers means that as more peers join to download, the total available upload capacity for distribution actually increases.

---

## Question 4: Why is it said that P2P architecture is self-scalable?

**Answer:** P2P architecture is described as self-scalable because the system's supply capacity grows linearly with demand . This is fundamentally different from client-server systems, where adding more clients creates additional load on a fixed server capacity.

In a P2P file distribution system, each new peer that joins the swarm to download a file also brings its own upload capacity to the system . While adding a new peer does increase the system's load (because that peer needs to download the file), it simultaneously increases the system's processing and storage capacity . The peer contributes its bandwidth and potentially its storage resources to the collective pool.

This means that increases in system load are tackled by having peers use more of their processing or storage capacity . There is typically no need to update any central servers to deal with more users or more load . As more peers join, the total upload capacity of the system grows, and files can potentially be distributed faster or at least at a sustainable rate.

Adaptive P2P systems tune themselves to operate in the best possible mode when conditions such as number of peers or churn rate change . This self-scaling property is what allows BitTorrent and similar systems to handle millions of simultaneous peers efficiently.

---

## Question 5: What is the file distribution problem?

**Answer:** The file distribution problem refers to the fundamental challenge of distributing a digital file from a source (or sources) to a set of peers who need that file, in the most efficient manner possible.

In the context of P2P systems, the file distribution problem involves determining how to minimize the time required to deliver a complete copy of the file to every peer in the system . This requires considering several factors: the size of the file, the upload capacity of the original server (if any), the upload capacities of individual peers, the number of peers, and the patterns of peer arrival and departure.

The problem becomes particularly interesting in P2P systems because peers can assist in distribution. Unlike client-server distribution, where the server must send a complete copy to each client sequentially or in parallel (limited by server bandwidth), P2P distribution allows peers to share the burden . A peer that has downloaded a portion of the file can immediately begin uploading that portion to other peers.

The minimum file distribution time is a key metric. For P2P systems, this is bounded by the inherent constraints of the system: the server's upload capacity (if present), the minimum download capacity among peers, and the total upload capacity of the system relative to the total data that must be delivered . The actual distribution time will depend on the specific protocol and scheduling decisions made.

---

## Question 6: How is distribution time calculated for a P2P file distribution system?

**Answer:** The distribution time for a P2P file distribution system is calculated by considering the fundamental bottlenecks and constraints of the system.

The minimum distribution time for P2P is bounded by the maximum of three quantities :

**First**, the time required for the server to upload at least one complete copy of the file. This is F divided by the server's upload capacity (u_s), where F is the file size. Even in the best case, the server must send at least one copy into the network.

**Second**, the time required for any single peer to receive the complete file, limited by that peer's download capacity. This is F divided by the minimum download capacity among all peers (d_min). Even if all data were somehow instantly available, the slowest peer still needs time to download.

**Third**, the time required for the total upload capacity of the system to deliver all F bytes of the file to all N peers. The total amount of data that must be delivered is N times F (each peer needs the whole file), and the total upload capacity available is the sum of the server's upload capacity plus the upload capacities of all N peers. This gives NF divided by (u_s + sum of all peer upload capacities).

The minimum distribution time is the maximum of these three quantities . This formula captures the essential constraints: server upload bottleneck, individual peer download bottleneck, and aggregate system upload capacity bottleneck.

For cooperative P2P without tit-for-tat constraints, this represents the theoretical optimal distribution time. With tit-for-tat incentive mechanisms like those used in BitTorrent, the actual distribution time may be longer under certain conditions .

---

## Question 7: What does the BitTorrent system do?

**Answer:** BitTorrent is a P2P file distribution protocol that enables efficient sharing of large files among many peers .

The system operates through several key components. A **tracker** is a server that knows the identity of all peers involved in a file transfer. When a peer wants to download a file, it contacts the tracker, which responds with a list of other peers participating in that transfer. The peer then connects to these other peers and begins exchanging data .

A **`.torrent` file** contains meta-information about the file being shared: the file name, length, and information about the pieces that comprise the file, along with the URL of the tracker .

In the actual download process, peers request **blocks** — small chunks of approximately 16KB that are pieces of larger file pieces . Peers request blocks in a roughly random order rather than sequentially .

BitTorrent employs an incentive mechanism called **tit-for-tat** to encourage uploading . Users aren't allowed to download from a peer unless they are also uploading to that peer, creating mutual interest. The protocol operates in rounds: in each round, some peers upload blocks to a given peer, and in the next round, that peer will send blocks to the peers that uploaded the most to it in the previous round (typically the top four peers) . Each peer also reserves a small amount of bandwidth to give away freely, which allows new peers to get started with a few blocks they can then use to trade .

BitTorrent also uses a piece selection strategy called **rarest first**, where peers prioritize downloading pieces that are rarest among their neighbors. This increases the availability of rare pieces and prevents them from becoming bottlenecks .

The tit-for-tat incentive scheme is what allowed P2P file-sharing to take off, as it discourages freeriding . Without such an incentive mechanism, most users would simply download without uploading, and the system would collapse.

---

## Question 8: Where are distributed hash tables (DHTs) used?

**Answer:** Distributed hash tables (DHTs) are used in P2P systems as a decentralized method for storing and retrieving information across a network of peers.

A DHT is essentially a simple database where the database records are distributed over the peers in a P2P system . Rather than maintaining a central index or directory, the responsibility for storing and looking up records is shared among all participating peers according to a structured scheme.

DHTs have been widely implemented in BitTorrent and have been the subject of extensive research . In the context of BitTorrent, DHTs solve the problem of the tracker being a central point of failure. Most BitTorrent clients today are "trackerless" and use DHTs instead to find peers sharing a particular torrent . This makes the system more resilient because there is no single server whose failure would disrupt file sharing.

The use of DHTs in BitTorrent is a form of overlay network — a logical network built on top of the physical Internet. Peers in the DHT form a structured overlay where each peer is responsible for a portion of the key space, and queries are routed efficiently through the overlay to the peer holding the desired data.

---

## Question 9: How does circular DHT work?

**Answer:** A circular DHT is a specific structured organization for a distributed hash table where peers are arranged in a logical ring topology.

In a circular DHT, each peer is assigned a unique identifier, and the peers are ordered in a circle based on these identifiers. Each peer in the circle is responsible for storing key-value pairs whose keys fall within a range associated with that peer. When a peer wants to look up a key, it routes the query around the circle until it reaches the peer responsible for that key's range.

This design provides several advantages. The circular structure creates a deterministic routing scheme where any peer can reach any other peer in a bounded number of hops (typically O(log N) in well-designed systems). The structure also makes it relatively straightforward to handle peers joining and leaving the network — when a peer joins, it takes responsibility for a portion of its predecessor's key range, and when it leaves, its key range is absorbed by its successor.

The circular DHT is one specific implementation choice for organizing a DHT overlay. Other structured DHT designs exist, but the circular or ring-based approach is conceptually elegant and provides a clear mental model for understanding how distributed hash tables function.

---

## Question 10: What is an overlay network? How does it work?

**Answer:** An overlay network is a logical network that is built on top of another network (typically the Internet) . It consists of the nodes and logical links between those nodes that are created by the P2P application, as distinct from the underlying physical network infrastructure.

An overlay network works by abstracting away the details of the underlying physical network. When peers join a P2P system, they form connections with other peers, creating a graph of logical links. These logical links may traverse many physical routers and network segments, but from the perspective of the P2P application, they represent direct connections between peers.

The overlay network determines how peers find each other and how data flows through the system. For example, in BitTorrent, the overlay consists of the connections between peers in a swarm. In a DHT, the overlay is the structured ring or other topology that enables efficient key-based routing.

Overlay networks can be **unstructured** (where peers connect in an ad-hoc manner without a specific topology) or **structured** (where peers organize themselves according to a specific scheme like a circular DHT). The choice of overlay structure affects properties like routing efficiency, fault tolerance, and the ability to locate content. P2P systems are designed to cope with peers leaving the system ungracefully, using techniques such as data replication and redundant routing table entries to improve reliability .

---

## Question 11: What does peer churn mean in P2P systems?

**Answer:** Peer churn refers to the continuous process of peers joining and leaving a P2P system, often in unpredictable ways .

In any P2P network, peers are not stable, always-on servers. They are individual computers that may connect and disconnect at any time. A peer might join a swarm to download a file and then leave once the download is complete. Another peer might unexpectedly lose its network connection or crash. This constant flux of peers is called churn.

P2P systems are specifically designed to cope with peers leaving the system ungracefully, such as by crashing . To handle churn, P2P systems use techniques such as data replication (storing copies of data on multiple peers) and redundant routing table entries (maintaining alternative routes to reach data). This way, if a peer crashes, the data it stored is not lost and can still be found elsewhere in the system .

Adaptive P2P systems tune themselves to operate in the best possible mode when conditions such as number of peers or churn rate change . The system must constantly update its knowledge of which peers are available, redistributing responsibilities when peers leave and integrating new peers when they join. High churn rates can impact performance, as resources must be devoted to maintaining the overlay structure and replicating data to ensure availability.

---

## Question 12: What is "rarest first" in the context of BitTorrent?

**Answer:** "Rarest first" is a piece selection strategy used in BitTorrent where peers prioritize downloading pieces of the file that are rarest among their connected peers .

The logic behind this strategy is to ensure that rare pieces do not become bottlenecks or disappear from the swarm. If all peers only downloaded the most common pieces, rare pieces might only exist on a few peers. If those peers left the swarm, the file could become incomplete and impossible to reconstruct.

By prioritizing rare pieces, rarest first increases the probability that these pieces get replicated to more peers quickly . This improves the overall availability of the complete file within the swarm. The strategy also helps ensure that all pieces of the file remain available for downloading, preventing the swarm from getting stuck on a small number of rare pieces.

However, rarest first can have some tradeoffs. Research has shown that when peer upload and download capacities are approximately equal, there can be significant availability loss because peers prioritize completing partially downloaded pieces over downloading new pieces that are needed for availability . This occurs because peers give highest priority to finishing pieces they have already started, even if those pieces are already available elsewhere, rather than acquiring new rare pieces .

---

## Question 13: What are unlocked peers and optimistically unlocked peers in BitTorrent?

**Answer:** In BitTorrent's tit-for-tat incentive system, "unlocked" (or unchoked) peers are those that are permitted to download from a given peer.

By default, a peer "chokes" all other peers, meaning it does not allow them to download any pieces. Periodically, the peer unchokes a small number of peers — typically four — that have been uploading to it at the highest rates. These "top" peers are allowed to download from the unchoking peer in the next round .

**Optimistically unlocked peers** are an additional mechanism to allow new peers to get started. Each peer reserves a small amount of bandwidth to give away freely to a randomly selected peer . This is called optimistic unchoking. The purpose is to allow a new peer that has nothing to trade to receive a few pieces, giving it something it can then use to trade with other peers .

The optimistic unchoke is also a probe mechanism. By optimistically unchoking a random peer, a peer can discover whether that peer might be a good trading partner in the future. If the optimistically unchoked peer uploads well, it may become one of the regular unchoked peers in subsequent rounds.

This system creates a dynamic where peers capable of uploading at compatible rates tend to find each other over time, while new peers get a chance to bootstrap into the trading system . The combination of regular unchoking and optimistic unchoking is what makes BitTorrent's incentive mechanism work in practice.