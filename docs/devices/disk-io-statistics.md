# Disk IO Statistics

## Test Commands
The following commands were used to measure disk performance:

```bash
# Measure cached and buffered reads
hdparm -tT /dev/[device]

# Measure direct write performance
dd if=/dev/zero of=test bs=1G count=1 oflag=direct
```

---

## Orange Pi 5 Plus

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| NVMe         | 4517.62             | 817.96                 | 552                 |
| NVMe         | 4155.21             | 394.88                 | 329                 |
| NVMe         | 4588.41             | 1813.28                | 665                 |
| eMMC         | 4450.29             | 324.44                 | 195                 |
| SD           | 4446.99             | 66.47                  | 57.7                |

---

## Orange Pi 5

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| SATA         | 3647.60             | 478.29                 | 400                 |

---

## Orange Pi 5 Ultra

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| SD           | 4327.17             | 66.19                  | 56.3                |

---

## Orange Pi 3B

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| eMMC         | 896.03              | 176.18                 | 130                 |
| NVMe         | 959.74              | 364.41                 | 265                 |

---

## Orange Pi Zero 3W

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| SD           | 654.78              | 64.80                  | 48.1                |
| eMMC         | 759.52              | 170.79                 | 52.0                |

---

## Radxa ROCK 5A

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| eMMC         | 3928.81             | 316.04                 | 219                 |

---

## Radxa ROCK 5B+

| Storage Type | Cached Reads (MB/s) | Buffered Reads (MB/s) | Direct Write (MB/s) |
|--------------|---------------------|------------------------|---------------------|
| eMMC         | 3894.73             | 326.92                 | 195                 |
| SD           | 3765.11             | 86.06                  | 56.9                |
