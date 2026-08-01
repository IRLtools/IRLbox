# libRIST & RIST Protocol Comprehensive Guide

The **[libRIST library](https://github.com)** is an open-source implementation of the Reliable Internet Stream Transport (RIST) protocol, designed by the Video Services Forum (VSF). It achieves highly resilient, low-latency live video transmission over unpredictable connections like public internet and wireless networks. For **IRL (In Real Life) streaming**, where mobile connectivity fluctuates constantly, RIST offers enterprise-grade link aggregation and stream management.

---

## 1. libRIST Wiki Summary & Architectural Overview

The core components of libRIST span configuration profiles, command-line utilities, network optimization, and strict authentication mechanisms.

### Operational Profiles
* **Simple Profile (TR-06-1):** Focuses solely on low-latency transport and ARQ packet recovery. It requires separate even/odd port pairings for data and control data.
* **Main Profile (TR-06-2):** Introduces GRE tunneling, built-in AES encryption, and single-port multiplexing.
* **Advanced Profile (TR-06-3):** Incorporates real-time LZO payload compression, advanced IP-in-IP tunneling, and native IPv6 protocol integration.

### Core Command Line Tools
* **`ristsender`:** Captures an incoming local UDP/RTP stream and wraps it into a protected RIST transport container.
* **`ristreceiver`:** Listens for incoming RIST packets, reassembles missing segments via ARQ, and outputs a clean UDP/RTP stream.

### URL Syntax & Engine Mechanics
* **Sender / Outbound:** Formatted as a standard RIST protocol string to point data toward a remote receiver.
* **Receiver / Inbound:** Denoted by a designated character modifier to flag an active listening network socket.
* **Multi-Link Bonding:** Senders accept multiple targets or apply individual routing priorities to split or mirror data.
* **Stream Multiplexing:** Utilizes stream identification tags to allow up to 10 independent virtual streams to traverse a single UDP port simultaneously.

---

## 2. Protocol Feature Matrix: RIST vs. SRTLA

The feature matrix highlights the dynamic RTT circuit-breaking features and how they contrast with SRTLA's rigid handling.

| Feature Category | RIST Protocol ([libRIST](https://github.com)) | SRTLA Protocol ([BELABOX SRTLA](https://github.com)) |
| :--- | :--- | :--- |
| **Core Architecture** | Built on top of interoperable, standardized RTP / UDP | An unofficial, experimental proxy layer wrapped around SRT |
| **Congestion Circuit Breaking** | **Advanced Dynamic RTT Guardrails:**<br>• Instantly drops an unstable link when latency spikes.<br>• Suspends path usage during a designated stabilization window.<br>• Gradually trickles data allocations away from a degrading route.<br>• Cleanly and smoothly re-introduces the path upon recovery. | **Reactive Loss Aggregation:**<br>Forces traffic down poor paths until absolute packet timeout or disconnect occurs. This often drags down the aggregate speed of the entire bond. |
| **IP Version Support** | **Full Native IPv6 & IPv4 Dual-Stack** support across bonded paths. | **Strictly IPv4 only** for bonding (forces single-link fallback on IPv6 mobile networks). |
| **Security Architecture** | **Enterprise Grade:** EAP-SRP, TLS, AES-256, and hardware/peer certificate validation. | **Basic:** Simple pre-shared passphrase AES encryption via the underlying SRT layer. |
| **Multi-Link Support** | **Native** SMPTE ST 2022-7 hitless bonding & dynamic load sharing. | **Proxy-driven** link aggregation splitting custom UDP packets. |
| **Bandwidth Guardrails** | Strict hard-cap parameters to prevent over-allocation. | Vulnerable to buffer bloat and runaway link congestion. |
| **Port Management** | Single-port multiplexing with GRE tunneling. | Requires a specialized target proxy port configuration. |
| **Payload Compression** | **Built-in LZO Compression:** Advanced profile supports real-time, ultra-low-overhead payload compression to minimize data consumption over metered cellular networks. | **None:** Relying entirely on external video encoders to handle bitrates, offering no protocol-level data reduction mechanisms. |
| **Handshake & Link Overhead** | **Low & Integrated:** Bonding negotiations happen natively within standard connection control packets, saving precious cellular network packet headers. | **High Proxy Overhead:** Employs an external proxy layer that introduces extra custom UDP headers to coordinate link states across paths. |
| **Bonding Architecture** | **Kernel/Native Multiplexing:** Operates as a streamlined, single-process engine capable of utilizing direct hardware packet filtering. | **User-space Proxy Layer:** Requires an internal loopback architecture to pass data between the SRTLA proxy handler and the SRT core engine. |
| **Packet Reordering Windows** | Uses an elastic jitter framework that handles heavily mis-ordered multi-network packets without forcing stream resynchronizations. | Hard bounds within the underlying SRT engine can occasionally trigger packet-drop sequences if one cellular network falls too far out of sync. |
| **Cellular Tower Handovers** | Handles seamless IP switches dynamically at the protocol layer, treating newly acquired tower IPs as valid routing paths instantly. | Relies on the external proxy socket re-binding layer, which can cause momentary stream stuttering during rapid cross-carrier handovers. |
| **Resource Footprint** | Extremely low CPU and memory overhead due to a lean, standard C library architecture optimized for embedded hardware devices. | Moderately higher overhead because it runs dual user-space processes (the SRTLA proxy plus the SRT translation daemon) concurrently. |
| **System Routing & Plumbing** | **Zero OS-Level Configuration:** Handles link multiplexing and multi-network load-balancing purely inside the application layer. No changes to host routing tables or internal gateways are required. | **Mandatory Linux Source Routing:** The sender host OS must be manually configured with advanced source routing (policy routing). It relies on OS-level tables to force bound UDP sockets down specific network interfaces. |
| **Firewall & Kernel Rules (`iptables`)** | **Application Standard:** Traverses networks via standard UDP ports without requiring packet alterations, state manipulation, or kernel loopback rules. | **Heavy `iptables` Dependency:** Frequently requires explicit `iptables` NAT loopback, port-redirection, or forwarding rules on the server/VPS to safely pass traffic between the proxy daemon and the primary ingest application. |

---

## 3. Centered Summary & Comparison for IRL Streaming


### 🌐 RIST Technical Profile for IRL Broadcasters
* **Multi-Carrier Bonding:** Aggregates cellular, Wi-Fi, and satellite connections seamlessly.
* **Proactive Path Mitigation:** Employs RTT monitoring to drop decaying cellular paths before they corrupt the stream buffer.
* **Native IPv6 Stack:** Leverages modern carrier cellular routing directly without performance-reducing NAT64 translation layers.
* **Cryptographic Perimeter:** Uses Zero-Knowledge proofs to secure ingest links against malicious stream hijacking.

### ⚖️ The IRL Verdict: RIST vs. SRTLA

| Deployment Scenario | Recommended Protocol | Operational Justification |
| :--- | :--- | :--- |
| **Unstable Multi-Sim Cellular (IRL Backpacks)** | **RIST** | Active monitoring instantly removes lagging modems, while SRTLA chokes trying to recover lost packets on the dead line. |
| **Modern Cellular Carriers (IPv6 Providers)** | **RIST** | End-to-end native IPv6 bonding prevents unexpected path disconnects common to IPv4-only SRTLA proxies. |
| **Securing Cloud Ingest Endpoints** | **RIST** | Broadcast-grade TLS and EAP-SRP validation completely outclass basic SRT passphrases. |
| **Turnkey Open-Source DIY Ecosystems** | **SRTLA** | Maintains a temporary edge in low-cost Raspberry Pi field builds due to legacy firmware implementations. |