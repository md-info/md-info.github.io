---
title: "Section 4 Routing Among the ISPs BGP"
description: "Computer Networks study notes · Unit 5"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 5"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document: Routing Among the ISPs (BGP)

**Purpose:** Exam preparation for Section 4 – Routing Among the ISPs: BGP. This document covers the learning objectives, required terms, and leading questions through detailed question-and-answer format designed for auditory learning.

---

## Part One: Learning Objectives

### Q1: Why is inter-autonomous system routing needed?

Inter-autonomous system routing is needed because the internet is not a single, monolithic network. It is a network of networks, composed of thousands of independently administered domains called Autonomous Systems (ASes). Each AS is under a single administrative entity and may have its own internal routing policies and preferences. Without inter-AS routing, packets could not travel from a host in one AS to a host in another AS. The need for inter-AS routing arises from three fundamental factors: policy, scale, and performance.

Policy is the dominant concern. The administrator of an AS wants control over how traffic is routed through their network and who is permitted to use their network for transit. An AS may be a commercial entity that sells transit services, or it may peer with other ASes on a settlement-free basis. These business relationships must be reflected in routing decisions.

Scale is the second factor. The global routing table contains hundreds of thousands of prefixes. If every router in every AS had to know the full topology of the entire internet, the routing tables would be impossibly large and routing updates would consume enormous bandwidth. Hierarchical routing, with inter-AS routing at the top level and intra-AS routing within each domain, saves table size and reduces update traffic.

Performance is the third factor. Intra-AS routing protocols can focus on finding the shortest or lowest-cost path because all routers within an AS share the same administrative goals. Inter-AS routing, by contrast, must prioritize policy over pure performance. A route that is physically shorter may not be used if it would violate a business agreement or if it would direct traffic through a competing provider's network.

### Q2: How is routing done between autonomous systems?

Routing between autonomous systems is accomplished through the Border Gateway Protocol, or BGP. BGP is the de facto standard inter-AS routing protocol used on the global internet. It operates by exchanging reachability information between border routers of different ASes. Each AS designates certain routers as border routers or gateway routers. These border routers have direct links to border routers in neighboring ASes and speak BGP with them.

The fundamental operation of BGP involves advertising IP prefixes. An AS announces to its neighbors that it can reach certain destination prefixes. These announcements propagate across the internet, with each AS adding its own Autonomous System Number to the path information. When a border router receives multiple routes to the same destination prefix, it applies a selection algorithm to choose the best route. This best route is then installed in the router's forwarding table.

Critically, BGP does not operate hop-by-hop in the way intra-AS protocols do. BGP is an edge-to-edge protocol. The BGP speakers are positioned at the boundaries of the AS. Once a packet enters an AS, the internal transit path to reach the BGP-selected egress point is determined by the AS's interior gateway protocol, not by BGP. BGP's job is to get the packet to the right border router; the IGP's job is to get it there efficiently within the AS.

### Q3: What is BGP, what does it do, and how?

BGP stands for Border Gateway Protocol. It is the interdomain routing protocol that glues the internet together. BGP is defined in IETF RFC 4271 and is implemented by border routers in Autonomous Systems.

**What BGP does:** BGP allows an AS to learn which destinations are reachable through which neighboring ASes. It propagates reachability information across the internet. It also allows each AS to apply routing policies that reflect its business relationships and traffic engineering goals. BGP determines the best route to each destination based on a set of path attributes and a well-defined selection algorithm. Finally, it distributes externally learned routes to routers within the AS so that all routers can forward traffic correctly.

**How BGP works:** BGP is a path-vector protocol. This means that when a route is advertised, it includes the entire sequence of Autonomous Systems that the route has traversed. This AS_PATH attribute serves two purposes: loop detection and route selection. A router that sees its own AS number in the AS_PATH knows that accepting this route would create a routing loop and discards it. The length of the AS_PATH is also used as one criterion in route selection.

BGP runs over TCP on port 179. This provides reliable transmission of BGP messages. BGP speakers establish sessions with each other, exchange messages, and maintain state about the routes they have learned. When a route becomes unreachable, a withdrawal message is sent to remove it from the routing tables of BGP speakers.

---

## Part Two: Core Terms and Topics

### Q4: What is a border router?

A border router, also called a gateway router, is a router at the edge of an Autonomous System that connects to one or more routers in other Autonomous Systems. Border routers are the routers that speak BGP with the outside world. They learn routes to external destinations via external BGP sessions and distribute those routes internally via internal BGP sessions. A border router must run both BGP and the AS's interior gateway protocol. It uses the IGP to reach other routers within its own AS, including other border routers, and it uses BGP to exchange reachability information with peer routers in neighboring ASes.

### Q5: What is the Border Gateway Protocol (BGP)?

The Border Gateway Protocol is the routing protocol used for inter-AS routing on the internet. It is a path-vector protocol, meaning that route advertisements carry the full path of ASes that the route has traversed. BGP is used to exchange network reachability information between Autonomous Systems. It allows each AS to apply routing policies based on business relationships, traffic engineering considerations, and other non-technical factors. BGP is implemented by border routers and runs over TCP port 179. The current version is BGP-4, specified in RFC 4271.

### Q6: What does BGP do for inter-AS routing?

BGP performs several essential functions for inter-AS routing. It allows an AS to learn which destination prefixes are reachable through which neighboring ASes. It propagates this reachability information across the internet. It provides loop detection through the AS_PATH attribute. It allows each AS to apply routing policies by influencing which routes are selected and which routes are advertised to neighbors. It distributes externally learned routes to all routers within the AS so that internal routers know how to forward packets destined for external networks. Finally, it provides mechanisms for gracefully withdrawing routes when they become unreachable.

### Q7: What are the four types of messages defined by BGP?

BGP defines four message types:

**OPEN:** This message is used to establish a BGP session between two peers. It contains information such as the BGP version number, the sender's Autonomous System number, and hold time. The OPEN message initiates the BGP adjacency.

**UPDATE:** This is the core BGP message. It is used to advertise new routes or changes to existing routes, and to withdraw routes that are no longer reachable. An UPDATE message contains path attributes and a list of destination prefixes. Announcements advertise new routes; withdrawals remove old ones.

**KEEPALIVE:** This message is sent periodically to inform neighbors that the connection is still viable. If a BGP speaker stops receiving KEEPALIVE messages, it assumes the connection has failed and tears down the session.

**NOTIFICATION:** This message is sent when an error condition is detected. It indicates the nature of the error and causes the BGP session to be closed.

### Q8: What is an external BGP (eBGP) session?

An external BGP session, or eBGP session, is a BGP session established between border routers that belong to different Autonomous Systems. eBGP sessions are used to learn routes to external destinations. When a border router in AS 1 establishes an eBGP session with a border router in AS 2, it can learn about prefixes reachable through AS 2. The AS_PATH attribute is updated when routes are exchanged over eBGP sessions to include the sending AS's number. eBGP neighbors are typically directly connected, meaning there is a direct physical or logical link between them.

### Q9: What is an internal BGP (iBGP) session?

An internal BGP session, or iBGP session, is a BGP session established between BGP speakers within the same Autonomous System. iBGP sessions are used to distribute externally learned routes to all BGP speakers within the AS. When a border router learns an external route via eBGP, it needs to tell the other border routers in its AS about that route so they can also use it. This is done via iBGP. iBGP speakers do not have to be directly connected; they can be connected through the AS's interior gateway protocol. A key rule of iBGP is that routes learned from one iBGP speaker are not passed on to another iBGP speaker. This means that iBGP speakers must be fully meshed, or route reflectors must be used, to ensure that all BGP speakers receive all external routes.

### Q10: What are BGP peers?

BGP peers are two routers that have established a BGP session with each other for the purpose of exchanging routing information. The relationship is often called peering. BGP peers exchange OPEN messages to establish the session, UPDATE messages to exchange routes, KEEPALIVE messages to maintain the session, and NOTIFICATION messages to signal errors. Peers can be either eBGP peers, belonging to different ASes, or iBGP peers, belonging to the same AS. The term peer in BGP context does not necessarily imply a settlement-free peering relationship; it simply means a BGP neighbor.

### Q11: What are path attributes in BGP?

Path attributes are parameters that are attached to BGP route advertisements. They describe the characteristics of a route and are used in the route selection process. Some attributes are well-known and mandatory, meaning every BGP implementation must support them and they must be included with every route. Others are optional. Key attributes include:

**AS_PATH:** The sequence of Autonomous Systems that the route advertisement has traversed. Used for loop detection and as a route selection criterion.

**NEXT_HOP:** The IP address of the next-hop router to use for this route.

**ORIGIN:** Indicates how the route was originated, whether it was learned via IGP, EGP, or some other means.

**LOCAL_PREF:** A local preference value used within an AS to indicate the preferred exit point for a route. Higher values are preferred. This attribute is not propagated outside the AS.

**MULTI_EXIT_DISC (MED):** A metric used to discriminate among multiple exit points into the same neighboring AS. Lower values are preferred. This attribute may be propagated to neighboring ASes but is typically used only within a single AS's decision process.

### Q12: What are BGP routes?

BGP routes are entries in a BGP speaker's routing information base that describe how to reach a particular destination prefix. Each BGP route consists of a destination prefix and a set of path attributes. BGP speakers maintain multiple routes to the same prefix, learned from different peers. The BGP route selection algorithm evaluates these candidate routes and selects one as the best route. This best route is then installed in the main IP forwarding table and is the route that will actually be used for forwarding packets. Only the best route is advertised to external BGP peers, though a BGP speaker may advertise different routes to different peers based on policy.

### Q13: What is autonomous system numbering (ASN) in BGP?

An Autonomous System Number is a globally unique identifier assigned to an Autonomous System for use in BGP routing. ASNs are allocated by regional internet registries. They are used in the AS_PATH attribute to identify the sequence of ASes that a route has traversed. ASNs are essential for loop detection: if a BGP speaker sees its own ASN in the AS_PATH of a received route, it discards that route because accepting it would create a loop. ASNs come in two formats: the original 2-byte format with a range of 0 to 65535, and the extended 4-byte format with a much larger range. The 4-byte ASNs can be represented in either plain notation or dot notation.

### Q14: What is BGP route selection?

BGP route selection is the process by which a BGP speaker chooses the best route among multiple candidate routes to the same destination prefix. BGP does not simply choose the shortest path. Instead, it applies a sequence of tie-breaking criteria in a specific order. The exact order is specified in the BGP standard, but the general principles are as follows:

The highest LOCAL_PREF is preferred. This allows an AS to define which routes are preferred for outbound traffic.

If LOCAL_PREF is equal, the route with the shortest AS_PATH is preferred. This is a rough measure of distance in terms of AS hops.

If AS_PATH length is equal, the route with the lowest ORIGIN type is preferred, where IGP is preferred over EGP, which is preferred over INCOMPLETE.

If ORIGIN is equal, the route with the lowest MED value is preferred. MED comparison is only meaningful between routes from the same neighboring AS.

If MED is equal, eBGP routes are preferred over iBGP routes. This is because eBGP routes have been learned from outside the AS and are considered more direct.

If the route source is still equal, the route with the lowest IGP metric to the NEXT_HOP is preferred. This is the hot potato routing criterion.

Finally, if all else is equal, other tie-breaking criteria such as router ID are used.

### Q15: What is BGP routing policy?

BGP routing policy refers to the rules that an Autonomous System applies to control how traffic enters and leaves its network. Unlike intra-AS routing, where the goal is typically to find the shortest or lowest-cost path, inter-AS routing is heavily influenced by business relationships and policy considerations. An AS may choose not to advertise certain routes to certain neighbors, or it may prefer routes learned from customers over routes learned from peers or providers.

Policy is implemented through two mechanisms: route selection and route export. Route selection determines which path is used for outbound traffic. Route export determines which paths are advertised to which neighbors. By controlling these two mechanisms, an AS can implement complex traffic engineering and business policies.

A common policy framework, often called the Gao-Rexford rules, captures typical ISP behavior. Under these rules, an AS exports routes learned from a customer to everyone, because the customer is paying for transit. Routes learned from a peer or provider are exported only to customers, because the AS does not want to provide free transit between its peers or providers. This policy structure creates a valley-free routing pattern where traffic flows from customers up to providers and back down to other customers.

### Q16: What is hot potato routing?

Hot potato routing is a route selection strategy used in inter-AS routing where an AS chooses the closest exit point for traffic destined to another AS. The idea is to get rid of the packet as quickly as possible, like a hot potato, by handing it off to the neighboring AS at the nearest border router.

In practice, hot potato routing means that when a router has multiple routes to the same destination prefix, and all other selection criteria are equal, it chooses the route with the lowest interior cost to the NEXT_HOP. The interior cost is the IGP metric to reach the border router that serves as the next hop. This minimizes the use of the AS's own network resources for carrying transit traffic. However, it may not minimize the end-to-end path length across the internet. The AS is optimizing for its own resource usage, not for global path optimality.

---

## Part Three: Leading Questions

### Q17: How are packets routed from one AS to another?

Packets are routed from one AS to another through a combination of inter-AS routing via BGP and intra-AS routing via an interior gateway protocol. When a packet arrives at a border router of an AS and is destined for a network in a different AS, the border router consults its BGP routing table to determine the best next-hop AS and the best border router within that AS to send the packet to. This decision is based on BGP path attributes and policy.

Once the packet is inside the destination AS, the internal routers use the AS's interior gateway protocol to forward the packet along the shortest path to the specific destination host. BGP does not control routing within an AS; it only determines which border router should receive the packet. The packet travels through the source AS from the ingress point to the egress border router using the IGP. It then crosses the boundary to the next AS via an eBGP session. This process repeats, AS by AS, until the packet reaches the AS that contains the destination network. Within that final AS, the IGP delivers the packet to the destination host.

### Q18: What is the Border Gateway Protocol (BGP) used for?

BGP is used for interdomain routing on the internet. Its primary purpose is to exchange network reachability information between Autonomous Systems. BGP allows each AS to learn which destination prefixes are reachable and through which neighboring ASes they can be reached. It enables the application of routing policies that reflect business relationships between ASes. BGP is also used to distribute externally learned routes to all BGP speakers within an AS so that internal routers can forward traffic correctly. In essence, BGP is the protocol that makes the global internet work as an interconnected network of networks.

### Q19: In inter-AS routing, what information does a border gateway routing protocol need to provide to a router?

A border gateway routing protocol such as BGP must provide several types of information to a router. First, it must provide reachability information: which destination prefixes can be reached through which neighboring ASes. Second, it must provide path information: the sequence of ASes that a route traverses, which is used for loop detection and as a selection criterion. Third, it must provide attributes that enable policy decisions, such as LOCAL_PREF, MED, and the AS_PATH. Fourth, it must provide next-hop information so that the router knows which neighboring router to send packets to for a given destination. Finally, it must provide mechanisms for advertising and withdrawing routes so that the routing information remains current as network conditions change.

### Q20: What is the best route between autonomous systems?

The best route between autonomous systems is not determined by a single metric such as shortest path. Instead, BGP selects the best route by applying a sequence of criteria in order of priority. The first criterion is typically LOCAL_PREF, which allows an AS to express its preference for certain routes. If LOCAL_PREF is equal, the route with the shortest AS_PATH is preferred. Further tie-breakers include ORIGIN type, MED value, preference for eBGP over iBGP, and the IGP metric to the next hop.

This means that the "best" route from an AS's perspective may be the one that is most consistent with its business policies and traffic engineering goals, not necessarily the one that is shortest in terms of AS hops or geographic distance. A route learned from a customer is typically preferred over a route learned from a peer, which is preferred over a route learned from a provider. This reflects the economic reality of interdomain routing.

### Q21: What are the four types of messages defined by BGP?

BGP defines four message types: OPEN, UPDATE, KEEPALIVE, and NOTIFICATION. The OPEN message is used to establish a BGP session and negotiate parameters. The UPDATE message is used to advertise new routes or withdraw old ones. The KEEPALIVE message is used to maintain the session and detect failures. The NOTIFICATION message is used to signal error conditions and close the session.

### Q22: What are the differences between IBGP and EBGP?

The primary difference between iBGP and eBGP is the scope of the session. iBGP sessions are established between BGP speakers within the same Autonomous System. eBGP sessions are established between BGP speakers in different Autonomous Systems.

Functionally, eBGP is used to learn routes to external destinations from neighboring ASes. When a route is learned via eBGP, the AS_PATH is updated to include the sending AS's number. iBGP is used to distribute these externally learned routes to other BGP speakers within the AS. A critical rule of iBGP is that routes learned from one iBGP peer are not advertised to another iBGP peer. This prevents routing loops within the AS but requires that all iBGP speakers be fully meshed or that route reflectors be used.

In terms of connectivity, eBGP peers are typically directly connected, while iBGP peers do not need to be directly connected and rely on the IGP for reachability. The next-hop attribute is also handled differently: in eBGP, the next hop is typically the IP address of the peer router, while in iBGP, the next hop is often preserved as the external next hop, requiring the IGP to provide a route to that address.

### Q23: Why are there different inter-AS and intra-AS routing protocols?

Different protocols are used for inter-AS and intra-AS routing because the goals and constraints are fundamentally different.

**Policy:** In intra-AS routing, a single administration controls all routers, so there is no need for policy decisions about which routes to use. The goal is simply to find the best path according to some metric. In inter-AS routing, each AS is an independent administrative domain with its own business interests. Policy considerations dominate. An AS may prefer a longer path that goes through a customer over a shorter path that goes through a competitor. Intra-AS protocols have no mechanism for expressing such policies.

**Scale:** The global internet has hundreds of thousands of prefixes and tens of thousands of ASes. If a single routing protocol had to handle all of this, the routing tables would be enormous and routing updates would consume prohibitive amounts of bandwidth. Hierarchical routing with inter-AS routing at the top level and intra-AS routing within domains keeps the problem manageable.

**Performance:** Intra-AS protocols can focus on optimizing performance because all routers share the same goals. Inter-AS protocols must balance performance against policy and economic considerations. The "best" route from a policy perspective may not be the shortest route.

### Q24: What is a global routing algorithm for a network?

A global routing algorithm is one in which every router has complete knowledge of the entire network topology and all link costs. This is in contrast to a decentralized routing algorithm, where each router only knows the costs to its directly connected neighbors and learns about the rest of the network through iterative exchange of information with neighbors.

Link-state routing algorithms are the classic example of global routing algorithms. In a link-state algorithm, every router broadcasts information about its directly connected links to all other routers in the network. As a result, every router builds an identical, complete map of the network topology and link costs. Each router then independently runs a shortest-path algorithm, such as Dijkstra's algorithm, on this map to compute the least-cost path to every destination.

The advantage of a global routing algorithm is that it can compute truly optimal paths because it has complete information. The disadvantage is that it requires flooding of link-state information, which can consume bandwidth and take time to converge. During convergence, routers may have inconsistent views of the topology, leading to transient loops or packet loss.

### Q25: Why is a global routing algorithm referred to as a link-state algorithm?

A global routing algorithm is referred to as a link-state algorithm because each router's view of the network is based on the states of the links. In a link-state algorithm, each router periodically broadcasts link-state advertisements that describe the state of its directly connected links, including the identity of the neighbor at the other end of each link and the cost of the link. These advertisements are flooded throughout the network, so that every router receives the link-state information from every other router. Each router then constructs a complete graph of the network, where nodes represent routers and edges represent links with their associated costs. Because the routing decisions are based on this global view of link states, the algorithm is called a link-state algorithm.

### Q26: What are the differences between distance-vector algorithms and link-state algorithms?

Distance-vector and link-state algorithms differ in several fundamental ways.

**Information known:** In a distance-vector algorithm, each router knows only the costs to its directly connected neighbors and the distances (costs) to all destinations as reported by its neighbors. It does not know the actual topology of the network. In a link-state algorithm, each router knows the complete topology of the network and the cost of every link.

**Information exchanged:** In a distance-vector algorithm, routers exchange their entire routing tables with their directly connected neighbors. The routing table contains the distance to each destination. In a link-state algorithm, routers flood link-state advertisements describing the state of their directly connected links to all routers in the network.

**Computation:** In a distance-vector algorithm, each router performs a distributed computation, iteratively updating its distance estimates based on information received from neighbors. In a link-state algorithm, each router independently runs a centralized shortest-path algorithm (such as Dijkstra's) on the complete network graph.

**Convergence:** Distance-vector algorithms can suffer from slow convergence and problems such as count-to-infinity when links fail. Link-state algorithms typically converge faster because each router has complete information, but they require more memory and processing power.

**Loop prevention:** Distance-vector algorithms use techniques like split horizon and poisoned reverse to prevent loops. Link-state algorithms do not have looping problems during normal operation because each router has a consistent view of the topology, but transient loops can occur during convergence.

### Q27: How are link cost changes and link failures handled in the distance-vector algorithm?

In a distance-vector algorithm, when a link cost changes, the affected router updates its distance vector and, if the cost to any destination has changed, sends the updated vector to its neighbors. Neighbors then update their own distance vectors based on the new information and propagate changes further if necessary.

Link failures are more problematic. When a link fails, the router that detects the failure sets the cost to that neighbor to infinity and sends this information to its neighbors. However, if a neighbor still believes it has a valid path through the failed router, it may continue to advertise that path back to the failed router, leading to a routing loop. This is known as the count-to-infinity problem.

The count-to-infinity problem occurs because good news (a decrease in link cost) travels quickly, but bad news (an increase in link cost or a failure) travels slowly. When a router advertises an infinite cost to a destination, its neighbor may have an alternative path through another neighbor that still goes through the failed router. The neighbor advertises its distance, and the failed router updates its distance based on this information, creating a loop that slowly increments the distance until it reaches infinity.

Techniques such as split horizon (never advertise a route back to the neighbor from which it was learned), poisoned reverse (advertise an infinite distance back to the neighbor from which the route was learned), and triggered updates (send updates immediately when a change occurs rather than waiting for the periodic update timer) are used to mitigate the count-to-infinity problem, but they do not eliminate it entirely.

### Q28: What is hot potato routing?

Hot potato routing is a route selection strategy in inter-AS routing where an AS minimizes the cost of carrying traffic through its own network by choosing the closest exit point. When multiple routes to the same destination are equally good according to higher-priority BGP criteria, the router selects the route with the lowest IGP metric to the NEXT_HOP. This means the packet is sent to the border router that is closest within the AS, getting the packet out of the AS as quickly as possible. The analogy is passing a hot potato to someone else as fast as you can. Hot potato routing minimizes the use of the AS's own bandwidth but may result in a longer end-to-end path across the internet.

### Q29: How does BGP select a route?

BGP selects a route through a multi-step tie-breaking process. The exact order is specified in the BGP standard, but the general sequence is as follows. First, the route with the highest LOCAL_PREF is selected. LOCAL_PREF is a local attribute that expresses the AS's preference for certain routes. Second, if LOCAL_PREF is equal, the route with the shortest AS_PATH is selected. The AS_PATH length is a rough measure of the number of AS hops. Third, if AS_PATH length is equal, the route with the lowest ORIGIN type is selected, where IGP is preferred over EGP, which is preferred over INCOMPLETE. Fourth, if ORIGIN is equal, the route with the lowest MED is selected, but MED comparison is only valid between routes from the same neighboring AS. Fifth, if MED is equal, eBGP routes are preferred over iBGP routes. Sixth, if the route source is still equal, the route with the lowest IGP metric to the NEXT_HOP is selected, which is the hot potato criterion. If all these criteria are equal, additional tie-breakers such as router ID are used.

### Q30: What is head of line (HOL) blocking?

Head-of-line blocking is a performance limitation that occurs in packet-switched networks when a packet at the head of a queue prevents other packets behind it from being forwarded, even if those other packets could be sent on different output links. In the context of input-queued switches, HOL blocking occurs when a packet destined for a busy output port is at the head of an input queue, blocking packets behind it that are destined for idle output ports. This reduces throughput and increases delay. HOL blocking is a general networking concept and is not specific to BGP, but it is relevant to understanding router architecture and performance limitations.

### Q31: What was the main initiative for the IETF to develop Internet Protocol version 6 (IPv6)?

The main initiative for the IETF to develop IPv6 was the impending exhaustion of IPv4 addresses. IPv4 uses 32-bit addresses, which provides approximately 4.3 billion unique addresses. With the explosive growth of the internet and the proliferation of connected devices, the pool of available IPv4 addresses was being depleted. The IETF recognized that a new version of IP with a much larger address space was needed. IPv6 uses 128-bit addresses, which provides an astronomically larger address space. In addition to addressing the address exhaustion problem, IPv6 was designed to improve upon IPv4 in other areas, including simplified header format for faster processing, better support for quality of service, built-in security features, and improved support for mobility.

### Q32: What packet format is used by IPv6? What are the main changes compared to IPv4?

IPv6 uses a simplified packet header format compared to IPv4. The main changes include a fixed-length header of 40 bytes, compared to IPv4's variable-length header of 20 to 60 bytes. IPv6 removes several fields that were present in IPv4, including the header length, identification, flags, fragment offset, header checksum, and options fields. These removals simplify processing and reduce the burden on routers. New fields are added, including a Flow Label field for identifying packets that belong to the same flow and a Traffic Class field for quality-of-service purposes. IPv6 uses 128-bit addresses compared to IPv4's 32-bit addresses. Extension headers are used to provide optional functionality that was previously handled by the options field in IPv4.

### Q33: What is IP-anycast?

IP anycast is a network addressing and routing technique where a single IP address is assigned to multiple servers or nodes, and packets sent to that address are routed to the nearest or best node according to the routing protocol's metrics. Anycast is commonly used for services such as DNS root servers and content delivery networks, where the same service is replicated in multiple locations. When a client sends a request to an anycast address, the network routes the packet to the nearest instance of the service, reducing latency and improving reliability. Anycast is supported by BGP because multiple ASes can advertise the same prefix, and the routing system will direct traffic to the topologically nearest instance.

### Q34: What is an anycast address?

An anycast address is an IP address that is assigned to multiple interfaces, typically on different hosts or in different locations. Packets sent to an anycast address are delivered to the nearest interface that has been assigned that address, according to the routing system's notion of distance. This is in contrast to unicast, where an address identifies a single interface, and multicast, where an address identifies a group of interfaces. Anycast is used to provide redundancy and load distribution for services that need to be highly available and responsive. BGP is the protocol that enables anycast on the internet by allowing multiple ASes to advertise reachability to the same prefix. The routing system then directs traffic to the topologically nearest instance based on BGP path attributes.