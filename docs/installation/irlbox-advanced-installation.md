# IRLbox Installation Guide (Advanced CLI)

This guide is for **advanced users** who want to flash IRLbox images from the Linux or macOS command line using `bmaptool` and `gdisk`.  
*(For standard GUI-based installation, see the [Standard Installation Guide](/docs/installation/irlbox-standard-installation.md).)*

---

## 1. Prerequisites

- **Technical expertise:** Familiarity with terminal commands and disk operations
- **Root access:** Administrative privileges on Linux or macOS
- **Compatible device:** One of the supported SBC models
- **Tools:** Command-line utilities (installed in steps below)

> ⚠️ **Warning**  
> This method involves direct disk operations that can erase data if used incorrectly.  
> **Double-check device paths** before running any commands.

---

## 2. Compatible Devices

- Orange Pi 3B  
- Orange Pi 5  
- Orange Pi 5 Plus  
- Orange Pi 5 Ultra  
- Radxa Rock 5A  
- Radxa Rock 5B+  
- Radxa Zero 3W/E  

---

## 3. Download IRLbox Image

Use the same download table from the [Standard Installation Guide](/docs/installation/irlbox-standard-installation.md#4-download-the-irlbox-image-file) to get the appropriate image for your device.

---

## 4. Advanced Flash on Linux

### 4.1 Install Required Tools

```bash
sudo apt-get update
sudo apt-get install bmap-tools gdisk
```

### 4.2 Identify Your Device

```bash
sudo fdisk -l
```

> ⚠️ **Critical Step**  
> Carefully identify your microSD card device (e.g., `/dev/sdb`, `/dev/sdc`).  
> **Using the wrong device will destroy your data.**

### 4.3 Flash the Image

```bash
# Replace [IMAGENAME].img with your actual image file
# Replace /dev/sdX with your actual device path
sudo bmaptool copy --nobmap [IMAGENAME].img /dev/sdX
```

**Example:**
```bash
sudo bmaptool copy --nobmap irlbox-orangepi5-0.0.25.img /dev/sdb
```

### 4.4 Write the GPT

After flashing, you need to write the GPT because the partition size changed:

```bash
sudo gdisk /dev/sdX
```

In the gdisk prompt:
1. Type `w` to write the GPT
2. Type `Y` to confirm
3. The tool will exit automatically

> 📸 **Screenshot Placeholder:** Show terminal output of successful gdisk operation.

---

## 5. Advanced Flash on macOS

### 5.1 Install Required Tools

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required tools
brew install python gdisk

# Download bmaptool
curl -Lo bmaptool https://github.com/01org/bmap-tools/releases/download/v3.4/bmaptool
chmod +x bmaptool
```

### 5.2 Identify Your Device

```bash
diskutil list
```

Look for your microSD card in the output (e.g., `/dev/disk2`).

### 5.3 Unmount the Disk

```bash
# Replace diskX with your actual disk identifier
diskutil unmountDisk /dev/diskX
```

### 5.4 Flash the Image

```bash
# Use /dev/rdiskX (raw device) for faster writes
# Replace [IMAGENAME].img with your actual image file
# Replace /dev/rdiskX with your actual raw device path
sudo ./bmaptool copy --nobmap [IMAGENAME].img /dev/rdiskX
```

**Example:**
```bash
sudo ./bmaptool copy --nobmap irlbox-orangepi5-0.0.25.img /dev/rdisk2
```

### 5.5 Write the GPT

```bash
sudo gdisk /dev/rdiskX
```

In the gdisk prompt:
1. Type `w` to write the GPT
2. Type `Y` to confirm
3. The tool will exit automatically

> ⚠️ **macOS Note**  
> Always use `/dev/rdiskX` (raw device) instead of `/dev/diskX` for faster write speeds.  
> Do not rely on Finder to unmount - use `diskutil unmountDisk`.

---

## 6. Verify the Flash

### 6.1 Linux Verification

```bash
# Check partition table
sudo fdisk -l /dev/sdX

# Verify filesystem
sudo fsck /dev/sdX1
```

### 6.2 macOS Verification

```bash
# Check partition table
diskutil list /dev/diskX

# Verify the disk
diskutil verifyDisk /dev/diskX
```

---

## 7. Boot & Initial Setup

Follow the same steps as in the Standard Guide:

1. **Insert the microSD card** into your SBC
2. **Connect power supply** and wait for first boot (3-10 minutes)
3. **Connect Ethernet cable** to your router
4. **Access dashboard** via `http://irlbox.local/`

---

## 8. Command Reference

### Common bmaptool Options

| Option | Description |
|--------|-------------|
| `--nobmap` | Skip block map file (use when .bmap file unavailable) |
| `--bmap-file` | Specify custom block map file |
| `--no-verify` | Skip verification after writing |

### gdisk Quick Commands

| Command | Action |
|---------|--------|
| `p` | Print partition table |
| `w` | Write changes and exit |
| `q` | Quit without saving |
| `?` | Show help |

---

## 9. Troubleshooting

| Problem | Solution |
|---------|----------|
| `bmaptool: command not found` | Install bmap-tools package |
| Permission denied | Use `sudo` for all disk operations |
| Device busy | Unmount all partitions first |
| GPT write failed | Check device path and try again |
| Dashboard not accessible | Verify flash completed successfully |

### Advanced Debugging

Check if the image was written correctly:

```bash
# Linux
sudo dd if=/dev/sdX bs=512 count=1 | hexdump -C

# macOS  
sudo dd if=/dev/rdiskX bs=512 count=1 | hexdump -C
```

---

## 10. Performance Tips

- **Use raw devices** (`/dev/rdiskX`) on macOS for faster writes
- **Verify checksums** before flashing to ensure image integrity
- **Use SSD card readers** for faster transfer speeds
- **Close other applications** during flashing to avoid interruptions

---

## 11. Safety Reminders

> ⚠️ **Final Warning**  
> - Always double-check device paths with `fdisk -l` or `diskutil list`
> - Never flash to your main system drive
> - Keep backups of important data
> - Test on non-critical systems first

---

## 12. Next Steps

Once your device boots successfully:

- Complete the [standard setup process](/docs/installation/irlbox-standard-installation.md#10-initial-setup)
- Configure your streaming settings
- Join the community for advanced tips and troubleshooting
