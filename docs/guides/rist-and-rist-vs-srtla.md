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
* **`ristsrppasswd`:** A security utility used to generate SRP (Secure Remote Password) verification files for zero-knowledge password authentication.
* **`risttunnel`:** Establishes a bidirectional, point-to-point virtual network interface protected by RIST's recovery architecture.

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

---

## 3. Centered Summary & Comparison for IRL Streaming

<div align="center">

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
</div>