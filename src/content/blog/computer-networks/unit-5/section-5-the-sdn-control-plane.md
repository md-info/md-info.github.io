---
title: "Section 5 The SDN Control Plane"
description: "Computer Networks study notes · Unit 5"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 5"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document: The SDN Control Plane

**Purpose:** Exam preparation for Section 5 – The SDN Control Plane

**Format:** Question-and-Answer, designed for audio review

---

## Question 1: What is a Software-Defined Network (SDN)?

A Software-Defined Network, or SDN, is a networking architecture that fundamentally separates the network's control logic from the hardware that forwards data packets. In a traditional network device like a router, the software that decides where traffic should go is tightly integrated with the hardware that actually moves the packets. SDN breaks that coupling. Instead, the control functions are moved out of the individual devices and placed into a logically centralized software controller. The network devices themselves become simpler forwarding elements that receive instructions from that controller. This separation allows the network to be programmed and managed as a single, cohesive system rather than as a collection of individually configured boxes .

---

## Question 2: What are the three planes in networking, and which one does SDN primarily re-architect?

Networking operations are typically divided into three functional planes. The **data plane** is responsible for the actual processing and delivery of data packets—it is the forwarding muscle. The **control plane** determines how and where those packets should be handled, computing routes and making policy decisions. The **management plane** handles monitoring and configuration of the network. SDN's most significant architectural change targets the control plane. In traditional networking, the control plane runs distributed across every router, with each device running its own routing algorithms. SDN centralizes this control plane into a separate controller entity, while leaving the data plane devices to perform simple forwarding based on instructions they receive .

---

## Question 3: What does "separation of the data plane and control plane" mean in SDN?

The separation of the data plane and control plane means that the entity making decisions about traffic flow is physically and logically distinct from the entity executing those decisions. In the traditional model, a router or switch runs both the routing protocol software and the packet-forwarding hardware in the same chassis—this is called vertical integration. In SDN, the control plane is removed from the device. The device, sometimes called a "dummy" switch or a white-box switch, retains only the packet-forwarding capability. The intelligence—the routing algorithms, the policy definitions, the global network view—resides in the SDN controller. The controller communicates with the data plane devices through a standardized interface, most commonly the OpenFlow protocol, to install forwarding rules. This separation is the foundational principle of SDN .

---

## Question 4: Describe the SDN architecture and its key layers.

The SDN architecture is organized into distinct layers with open interfaces between them. The **data plane layer**, also called the forwarding layer or infrastructure layer, consists of the physical and virtual network devices—switches, routers, and access points—that forward traffic. The **control plane layer** is the SDN controller itself, which acts as the network's operating system. It maintains a global view of the network, computes forwarding paths, and programs the data plane devices. The **application layer** sits above the controller and contains network-control applications that implement business logic and network services. Two critical interfaces connect these layers. The **southbound interface** connects the controller to the data plane devices. The **northbound interface** connects the controller to the applications, typically through REST APIs or other programmatic interfaces. This layered structure with open interfaces is what enables SDN's programmability and vendor independence .

---

## Question 5: What is the SDN control plane, and how does it differ from the traditional control plane?

The SDN control plane is the logically centralized software system that computes and distributes forwarding decisions across the network. In the traditional control plane, each router independently runs routing protocols like OSPF or BGP, exchanging information with neighboring routers to build its own routing table. No single entity has a complete view of the network. The SDN control plane changes this. A distinct, typically remote controller interacts with local control agents in the network devices. The controller gathers network state information from all devices, builds a global view of the topology and available resources, computes optimal paths, and then installs forwarding rules into each device's flow table. The key difference is the shift from distributed, per-router control to logically centralized control with a global network perspective .

---

## Question 6: How is routing done in SDN?

Routing in SDN is performed by the controller, not by the individual switches. The process works as follows. First, the controller discovers the network topology—which switches exist and how they are interconnected—by communicating with the data plane devices through the southbound interface. The controller also learns about network state, such as link utilization and failures. Then, network-control applications running on top of the controller, or algorithms built into the controller itself, compute paths based on policies and requirements. These paths are translated into forwarding rules. The controller then installs these rules into the flow tables of the relevant switches using a protocol like OpenFlow. Each switch's flow table specifies how to handle packets matching certain criteria—forwarding them to specific ports, dropping them, or sending them to the controller for further instructions. When a packet arrives at a switch and matches no existing flow entry, the switch may forward it to the controller, which then decides how to handle it and installs an appropriate rule. This is called reactive path provisioning. Alternatively, the controller can proactively install rules before any traffic arrives .

---

## Question 7: What is flow-based forwarding in SDN?

Flow-based forwarding is the mechanism by which SDN data plane devices process packets. Instead of forwarding decisions being based solely on destination IP address, as in traditional routing, SDN switches use flow tables that can match on multiple packet header fields. These fields can include source and destination IP addresses, source and destination port numbers, protocol type, and other parameters. A "flow" is a set of packets that share common header values. Each flow entry in the table has a match criterion and an associated action, such as forwarding to a specific port or dropping the packet. This approach is more flexible than traditional destination-based forwarding because it allows the controller to define forwarding behavior at a much finer granularity. The controller can, for example, route traffic differently based on application type, user identity, or service requirements .

---

## Question 8: What are the key characteristics of SDN architecture?

SDN architecture is defined by several key characteristics. First, **plane separation**: the data plane is decoupled from the control plane. Second, **logically centralized control**: a single controller, or a cluster of controllers acting as one, has a global view of the network and makes all routing and policy decisions. Third, **programmability**: network behavior is determined by software applications and policies, not by vendor-specific hardware configurations. Fourth, **open interfaces**: standardized southbound and northbound interfaces allow devices and applications from different vendors to interoperate. Fifth, **flow-based forwarding**: data plane devices forward packets based on flow table entries rather than traditional routing tables. Sixth, **global network abstraction**: the controller provides applications with an abstracted, simplified view of the network, hiding the complexity of individual devices. These characteristics together enable more flexible, automated, and efficient network management compared to traditional networking .

---

## Question 9: What is an SDN controller, and what does it do?

An SDN controller is the software system that serves as the brain of an SDN. It is the logically centralized entity that maintains a global view of the network, computes forwarding paths, and programs the data plane devices. The controller communicates with switches through the southbound interface to discover topology, gather statistics, and install flow rules. It exposes a northbound interface that allows network-control applications to access network information and request changes to network behavior. The controller can be thought of as a network operating system—it provides abstractions and services to applications while managing the underlying hardware. Physically, the controller may run on a single server or be distributed across multiple servers for scalability and reliability, but it operates as a single logical entity .

---

## Question 10: What are SDN network-control applications?

SDN network-control applications are software programs that run on top of the SDN controller and use its northbound interface to implement network services and business logic. These applications do not interact directly with network devices. Instead, they request information from the controller, perform computations or analytics, and then instruct the controller to modify network behavior. Examples include traffic engineering applications that optimize link utilization, security applications that implement access control policies, and routing applications that compute paths based on specific metrics. The controller provides the applications with an abstracted view of the network and handles the details of translating application requests into device-specific configurations. This separation allows network operators to develop and deploy new services without modifying the underlying network hardware .

---

## Question 11: What is the OpenFlow protocol?

OpenFlow is a standardized protocol that defines the communication between an SDN controller and the data plane devices. It is the most commonly used southbound interface in SDN deployments. OpenFlow provides a set of messages that allow the controller to discover the network topology, query device capabilities and statistics, and install, modify, or delete flow entries in switch flow tables. Through OpenFlow, the controller can define how packets matching specific criteria should be handled—forwarded to a port, dropped, or sent to the controller. OpenFlow is an open standard maintained by the Open Networking Foundation, which means it is not tied to any single vendor. While OpenFlow is widely used, it is not a mandatory requirement of SDN architecture; organizations may choose alternative southbound protocols .

---

## Question 12: What is the OpenDaylight controller?

OpenDaylight is an open-source SDN controller platform hosted by the Linux Foundation. It is designed to be modular, pluggable, and flexible. The controller is implemented in Java and runs on a Java Virtual Machine, which means it can be deployed on any hardware and operating system that supports Java. OpenDaylight exposes open northbound APIs, supporting both the OSGi framework for applications that run in the same address space as the controller and REST APIs for applications that communicate remotely. The controller's southbound interface supports multiple protocols through dynamically pluggable modules, including different versions of OpenFlow and other protocols like BGP-LS. A key architectural component is the Service Abstraction Layer, which abstracts the details of southbound protocols from the modules above it, allowing those modules to work with device services without concern for the specific protocol in use. The business logic and algorithms for network control reside in applications built on top of the controller .

---

## Question 13: What is the ONOS controller?

ONOS, which stands for Open Network Operating System, is another open-source SDN controller, developed with a focus on scalability, high availability, and performance for service provider networks. Like OpenDaylight, ONOS provides a platform for building SDN applications and managing network devices through a southbound interface. It is designed to address the demanding requirements of large-scale carrier networks, where the controller must handle significant traffic volumes and maintain continuous operation. ONOS is part of the broader ecosystem of open-source SDN controllers and is often used in research and industry deployments to explore and implement SDN-based network services .

---

## Question 14: What benefits does SDN offer compared to traditional networking?

SDN offers several significant benefits. First, **simplified management**: the logically centralized controller provides a single point of control for the entire network, eliminating the need to configure each device individually. Second, **programmability**: network behavior can be defined through software applications, enabling rapid deployment of new services and policies. Third, **flexibility and agility**: changes to network configuration or policy can be made centrally and propagate automatically to the relevant devices. Fourth, **cost reduction**: data plane devices can be simpler and less expensive because they no longer need to run complex control software. Fifth, **vendor independence**: open interfaces like OpenFlow allow organizations to mix equipment from different vendors. Sixth, **innovation**: researchers and operators can experiment with new network protocols and services without replacing hardware. Seventh, **global optimization**: the controller's global view enables more efficient use of network resources than distributed routing protocols can achieve .

---

## Question 15: How does the SDN control plane relate to the data plane and application layer?

The SDN control plane acts as the intermediary between the application layer above it and the data plane below it. The application layer contains network-control applications that express high-level policies and requirements—for example, "give priority to video traffic" or "route traffic around congested links." These applications communicate with the controller through the northbound interface, which provides abstracted views of the network and APIs for requesting changes. The controller translates these requests into specific forwarding rules and communicates them to the data plane devices through the southbound interface. The data plane devices then execute these rules by forwarding, dropping, or otherwise processing packets according to the flow table entries they have received. The controller also gathers information from the data plane—topology, link status, traffic statistics—and makes it available to applications through the northbound interface. This three-layer interaction is what enables SDN's programmability and centralized control .

---

## Question 16: What is the role of the southbound interface in SDN?

The southbound interface is the communication channel between the SDN controller and the data plane devices. It carries the instructions that tell switches how to forward packets, as well as the information that devices report back to the controller about their state and the traffic they are handling. The most well-known southbound interface protocol is OpenFlow, which defines messages for installing flow entries, querying statistics, and reporting events like packet arrival when no matching flow exists. The southbound interface is critical because it is the mechanism through which the controller exercises control over the network. It must support the necessary operations for the controller to discover topology, monitor performance, and enforce forwarding policies. The choice of southbound protocol affects what capabilities the controller has and what features the data plane devices must support .

---

## Question 17: What is the northbound interface, and why is it important?

The northbound interface is the communication channel between the SDN controller and the network-control applications that run on top of it. It provides applications with access to network information and the ability to request changes to network behavior. The northbound interface typically takes the form of a REST API or another programmatic interface, allowing applications to be developed independently of the controller's internal implementation. Its importance lies in enabling programmability. Without a northbound interface, the controller would be a closed system, and network operators would not be able to build custom applications to meet their specific needs. The northbound interface abstracts the complexity of the network and the southbound protocols, presenting applications with a simplified view that they can use to implement services like traffic engineering, security policy enforcement, or quality-of-service management .

---

## Question 18: What challenges exist with SDN controllers?

Despite their benefits, SDN controllers face several challenges. **Scalability** is a primary concern: a single controller must handle communication with potentially thousands of switches, processing a high volume of control messages. **Latency** between the controller and data plane devices can affect responsiveness, particularly for reactive path provisioning where switches must query the controller for forwarding decisions. **Reliability and availability** are critical—if the controller fails, the network loses its ability to adapt, though existing flow entries may continue to forward traffic. **Security** of the controller itself is essential, as it represents a single point of attack. **Controller placement**—where to physically locate controllers and how many to deploy—is a complex optimization problem. **Interoperability** between different vendors' implementations of southbound and northbound interfaces remains an ongoing concern, despite standardization efforts .

---

## Question 19: How does SDN enable network virtualization?

SDN enables network virtualization by allowing the controller to create logical networks that are independent of the underlying physical infrastructure. Because the controller has a global view and can program forwarding rules at the flow level, it can partition the physical network into multiple virtual networks, each with its own topology, addressing scheme, and policies. Traffic belonging to different virtual networks can be isolated from each other even when it traverses the same physical links and switches. This capability is valuable in data centers and cloud environments, where multiple tenants need isolated network environments on shared infrastructure. The controller can dynamically create, modify, and tear down virtual networks through software, without requiring changes to the physical network .

---

## Question 20: What is the relationship between SDN and the traditional routing protocols like OSPF and BGP?

In SDN, the controller can implement the functionality of traditional routing protocols like OSPF and BGP as applications, or it can use them as sources of information. The controller might run routing algorithms internally to compute paths, effectively replacing the distributed routing protocols that would run on individual routers in a traditional network. Alternatively, the controller can peer with traditional routers using BGP to learn external routes and then use that information to program the SDN-enabled devices. In a hybrid network where some devices are SDN-controlled and others run traditional protocols, the controller may need to interoperate with existing routing infrastructure. The key difference is that in a pure SDN deployment, the routing decisions are made by the controller with a global view, rather than by individual routers exchanging information with their neighbors .

---

## Question 21: What is meant by "logically centralized" control in SDN?

"Logically centralized" control means that, from the perspective of the network and its applications, there appears to be a single controller making all decisions, even if the controller is physically implemented as a distributed system across multiple servers. The controller presents a unified view of the network and a single point of control. This logical centralization is what enables the controller to have a global network view, which is a key advantage over the distributed control plane of traditional networking. Physically, the controller may be replicated or partitioned for scalability and fault tolerance, but the network operates as if there were one brain. The alternative—physically centralized control—would create a single point of failure and a performance bottleneck. Logical centralization with physical distribution balances the benefits of global control with the practical requirements of large-scale networks .

---

## Question 22: What happens when an SDN switch receives a packet that doesn't match any flow entry?

When an SDN switch receives a packet and no flow entry matches its header fields, the behavior depends on how the switch is configured. In the most common scenario, the switch sends the packet, or a portion of it, to the SDN controller. This is called a "packet-in" event. The controller then examines the packet, determines how it should be handled based on network policies and its global view, and installs a new flow entry in the switch's flow table. The controller may also send the packet back to the switch with instructions to forward it to a specific port. The switch then forwards the packet and, for subsequent packets in the same flow, uses the newly installed flow entry rather than sending them to the controller. This is known as reactive flow installation. Alternatively, the switch may be configured to drop unmatched packets, or the controller may proactively install flow entries for expected traffic so that switches rarely need to consult the controller .

---

## Question 23: What are the main components of an SDN controller's internal architecture?

While implementations vary, a typical SDN controller includes several core components. The **southbound interface module** handles communication with data plane devices, supporting protocols like OpenFlow. The **topology manager** maintains an up-to-date view of the network graph, including switches and links. The **device manager** tracks the capabilities and status of each network device. The **flow manager** handles the installation, modification, and deletion of flow entries. The **routing module** computes paths based on policies and network state. The **northbound API module** exposes services to applications, often via REST. The **service abstraction layer** in controllers like OpenDaylight abstracts southbound protocol details from higher-level modules. A **data store** maintains network state, statistics, and configuration. These components work together to provide the controller's core services while remaining modular and extensible .

---

## Question 24: Why is OpenFlow not strictly required for SDN?

OpenFlow is commonly used as the southbound interface in SDN deployments, but it is not a mandatory component of SDN architecture. SDN is defined by the principle of separating the control plane from the data plane and centralizing control, not by any specific protocol. An organization could implement SDN using other southbound protocols, such as NETCONF, P4 runtime, or even proprietary interfaces. What matters is that the controller can program the forwarding behavior of the data plane devices. OpenFlow became prominent because it was an early, open standard that provided a common language for controller-device communication, but the fundamental concept of SDN does not depend on it. This distinction is important when evaluating SDN solutions—a network could use OpenFlow without truly separating control and data planes, or it could achieve SDN principles without OpenFlow .

---

## Question 25: How does SDN support traffic engineering and quality of service?

SDN supports traffic engineering by giving the controller a global view of network utilization and the ability to route flows along specific paths. Unlike traditional routing, which typically uses shortest-path algorithms and may cause congestion on certain links, SDN can spread traffic across multiple paths, route around congested areas, and prioritize certain traffic types. The controller can define flow entries that match on parameters like source and destination addresses, port numbers, or protocol type, and assign different forwarding actions or queue priorities to different flows. This enables quality of service guarantees—for example, ensuring that voice traffic receives low latency and sufficient bandwidth while bulk data transfers use whatever capacity remains. The controller can also dynamically adjust routing in response to changing network conditions, making traffic engineering more responsive than static configuration .

---

## Question 26: What is the significance of the flow table in SDN switches?

The flow table is the central data structure in an SDN switch. It contains entries that define how packets should be processed. Each flow entry consists of a match field and a set of actions. The match field specifies the packet header values that identify a flow, such as IP addresses, port numbers, or MAC addresses. The actions specify what the switch should do with matching packets—forward to a specific port, drop, modify headers, or send to the controller. When a packet arrives, the switch searches the flow table for a matching entry. If found, the corresponding action is executed. If no match is found, the switch's default behavior applies, which typically means sending the packet to the controller. The flow table is populated and updated by the SDN controller through the southbound interface. This table is what makes flow-based forwarding possible and gives the controller precise control over packet handling .