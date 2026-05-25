# NPU/AI Statistics

## Test Commands
The following commands were used to measure npu performance:

```bash
# RK3588
./rknn_benchmark_rk3588_aarch64 mobilenet_v1.rknn cat_224x224.jpg 10 7
```
```bash
# RK3566
./rknn_benchmark_rk3566_rk3568_aarch64 mobilenet_v1.rknn cat_224x224.jpg 10 7
```

## 📊 Hardware Benchmark: Rockchip NPU Performance
### 🛠️ Runtime & Driver Environment
* **RKNN API Version:** `2.3.2` (Build: 2025-04-09T09:09:27)
* **Kernel Driver Version:** `0.9.7`
* **Total DMA Memory Allocated:** `11.02 MB` (11558912 bytes)
### 🎛️ Model Memory & Tensor Architecture
The network topology compiles structural data allocations dynamically across the NPU SRAM register cache layers.

| Specification | Details / Metrics | Notes |
| :--- | :--- | :--- |
| **Model Weights size** | 4.17 MB (4371392 bytes) | Flash footprint of the network layers. |
| **Internal Buffer size** | 2.06 MB (2157568 bytes) | High-speed SRAM footprint inside NPU. |
| **Input Tensor Layout** | `` | 1 Batch, 224x224 Resolution, RGB (NHWC). |
| **Input Precision** | `INT8` (Quantized) | Optimized for low-power matrix multipliers. |
| **Output Tensor Layout** | `` | 1,001 Confidence prediction scores. |
| **Output Precision** | `FP16` (Floating Point) | Cast back for seamless CPU ingestion. |

#### 🎯 Accuracy and Parity Verification (same for all boards - its based on the model)
The terminal logged explicit numerical classification arrays alongside confidence vectors:

| Class ID | Confidence Score |
| :--- | :--- |
| **283** | 0.410400 |
| **282** | 0.173828 |
| **286** | 0.156982 |
| **278** | 0.053467 |
| **279** | 0.038818 |


## Orange Pi 5 Plus

### ⚡ NPU Performance & Throughput Loops
Performance tracking isolated inside the computational execution loop (excluding initial filesystem/model loading latencies).

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **0.91 ms** |
| **Hardware Throughput** | **1101.443 FPS** |

---

## Orange Pi 5

#### ⚡ NPU Performance & Throughput Loops
Performance tracking isolated inside the computational execution loop (excluding initial filesystem/model loading latencies).

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **2.71 ms** |
| **Hardware Throughput** | **369.290 FPS** |

---

## Orange Pi 5 Ultra

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **0.86 ms** |
| **Hardware Throughput** | **1161.575 FPS** |

---

## Orange Pi 3B

#### ⚡ NPU Performance & Throughput Loops
Performance tracking isolated inside the computational execution loop (excluding initial filesystem/model loading latencies).

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **5.16 ms** |
| **Hardware Throughput** | **193.686 FPS** |

---

## Orange Pi Zero 3W

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **6.90 ms** |
| **Hardware Throughput** | **144.879 FPS** |

---

## Radxa ROCK 5A

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **2.17 ms** |
| **Hardware Throughput** | **460.999 FPS** |

---

## Radxa ROCK 5B+

| Metric | Performance Value |
| :--- | :--- |
| **Warmup Iterations** | 5 Loops |
| **Evaluation Iterations** | 10 Loops |
| **Average Processing Latency** | **1.51 ms** |
| **Hardware Throughput** | **663.482 FPS** |
