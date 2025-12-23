# IRLbox Installation Guide (Standard)

This guide explains how to set up IRLbox on your compatible device using standard flashing tools such as Rufus, Balena Etcher, or Raspberry Pi Imager.  
*(If you're an advanced user and prefer command-line flashing, see the [Advanced Installation Guide](/docs/installation/irlbox-advanced-installation.md).)*

---

## 1. Compatible Devices

- Orange Pi 3B  
- Orange Pi 5  
- Orange Pi 5 Plus  
- Orange Pi 5 Ultra  
- Radxa Rock 5A  
- Radxa Rock 5B+  
- Radxa Zero 3W/E  

---

## 2. Prerequisites

- Compatible SBC from the list above.  
- Stable internet connection.  
- PC (Windows/macOS/Linux).  
- microSD card (8 GB or larger recommended).  
- microSD card reader.  
- Flashing software:  
  - **Windows:** [Rufus](https://rufus.ie/) or [Balena Etcher](https://etcher.balena.io/)  
  - **macOS:** [Raspberry Pi Imager](https://www.raspberrypi.com/software/) or [Balena Etcher](https://etcher.balena.io/)  
- Ethernet cable to connect your SBC to your router.

---

## 3. Download the IRLbox Image File

Choose the image matching your board:

| Board Model | Version | Distro / Kernel | Download Link | SHA1 Checksum |
|-------------|---------|-----------------|---------------|---------------|
| Orange Pi 5 Plus | 1.0.4 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1EqSqyxKnFSoqd-cSBkbpBR4Ua2Cg72Kb/view?usp=drive_link) | `180bd4f6baeb169270f4791e365fcb7ecd7a0a22e851850e8f19b923d88f27f5` |
| Orange Pi 5 | 1.0.4 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1UGnK1J7aGDFmmcUV-ODWMLUVXj3Po56k/view?usp=drive_link) | `764c99192b6ff2d2c11614a86746726f9fb6c9f77fbc5d4f9e9904a331af73e0` |
| Orange Pi 3B | 1.0.4 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1Qctu_m7WThxmvMT8fxazZRPiCBVEdPJ8/view?usp=drive_link) | `021e59aa1bddb502b109a95b71467d7015429759cd9092d84271b21b057b5205` |
| Orange Pi 5 Ultra | 1.0.4 | Ubuntu 22.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1DAS6z5jwjIexbgbwMiOqWXUN-2b6bxhd/view?usp=drive_link) | `cf6cd2f5d53c768479d12c70ac077b5b021bd0690234e0e582ee0e402b52a6fe` |
| Radxa Zero 3W/E | 1.0.4 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1XYstE2mht1MUP8GVWmBOI-Swv-KeXCMK/view?usp=drive_link) | `ffeb7d5e45bfde96f710da68342912faee53e8641da7dc055c108e7773cfafcb` |
| Radxa Rock 5A | 1.0.4 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1cIGR0MT4iBvTpkXGA2dQ4KX8TC_sFA9Q/view?usp=drive_link) | `84a27af468b347d852e49e8fc42d7cc8ef00d9021569fb1e11a20ad9a05c05aa` |
| Radxa Rock 5B+ | 1.0.6 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1vuCNurP1fhzx3DoJgl06fq-yPbzdKIhF/view?usp=drive_link) | `3fb4e6232bccd4494ac8857fa9e195a8f060140fd1856076ccec2067f7da74bd` |

> 📸 **Screenshot Placeholder:** Show download page with highlighted board selection.

---

## 4. Flash the Image (Windows)

1. **Install flashing software:**
   - Download and install [Rufus](https://rufus.ie/) or [Balena Etcher](https://etcher.balena.io/)

2. **Prepare your microSD card:**
   - Insert your microSD card into the card reader
   - Connect the card reader to your PC

3. **Flash the image:**
   - Open Rufus or Balena Etcher
   - Click **SELECT** (Rufus) or **Flash from file** (Etcher)
   - Choose the IRLbox image file you downloaded
   - Select your microSD card as the target device
   - Click **START** (Rufus) or **Flash** (Etcher)

4. **Complete the process:**
   - Wait for flashing to complete
   - Safely eject the microSD card

> 📸 **Screenshot Placeholder:** Show Rufus/Etcher interface with IRLbox image selected.

---

## 5. Flash the Image (macOS)

1. **Install flashing software:**
   - Download and install [Raspberry Pi Imager](https://www.raspberrypi.com/software/) or [Balena Etcher](https://etcher.balena.io/)

2. **Prepare your microSD card:**
   - Insert your microSD card into the card reader
   - Connect the card reader to your Mac

3. **Flash the image:**
   - Open Raspberry Pi Imager or Balena Etcher
   - Click **Choose OS** and select **Use custom**
   - Select the IRLbox image file you downloaded
   - Click **Choose Storage** and select your microSD card
   - Click **Write** to start flashing

4. **Complete the process:**
   - Wait for flashing to complete
   - Safely eject the microSD card

> 📸 **Screenshot Placeholder:** Show Raspberry Pi Imager with custom image selection.

---

## 6. Boot Your Device

1. **Insert the microSD card:**
   - Insert the flashed microSD card into your SBC

2. **Connect power:**
   - Connect the power supply to your device
   - The device will start booting automatically

3. **Wait for first boot:**
   - **Important:** First boot takes 3–10 minutes due to disk expansion
   - Be patient and do not power off during this process

> 💡 **Tip:** The device may reboot once or twice during first boot - this is normal.

---

## 7. Connect to Your Local Network

1. **Use Ethernet connection:**
   - Connect an Ethernet cable from your SBC to your router
   - This ensures the most stable connection for initial setup

2. **Wait for network connection:**
   - Allow 1-2 minutes for the device to obtain an IP address

---

## 8. Access the IRLbox Dashboard

1. **Open your web browser:**
   - Use any device connected to the same network
   - Try accessing the dashboard using these URLs:

2. **Primary URL:**
   ```
   http://irlbox.local/
   ```

3. **Alternative URL (if above doesn't work):**
   ```
   http://irlbox/
   ```

> 📸 **Screenshot Placeholder:** Show IRLbox dashboard login/welcome screen.

---

## 9. Initial Setup

Once you access the dashboard:

1. **Complete the setup wizard** (if prompted)
2. **Configure your streaming settings**
3. **Adjust encoder quality and bitrate**
4. **Set up storage preferences**
5. **Test your streaming setup**

---

## 10. Troubleshooting

| Problem | Solution |
|---------|----------|
| Dashboard not accessible | Check Ethernet connection and wait for boot completion |
| Device not powering on | Verify power supply compatibility and connections |
| Slow performance | Ensure adequate power supply (5V/3A recommended) |
| Network issues | Try different Ethernet cable or router port |

---

## 11. Next Steps

- **Configure streaming:** Set up your streaming platforms and keys
- **Test connectivity:** Verify your internet upload speeds
- **Explore features:** Check out advanced settings and monitoring tools
- **Join community:** Connect with other IRLbox users for tips and support

---

## 12. Feedback & Support

We welcome your feedback to improve IRLbox:

- **Bug reports:** Help us identify and fix issues
- **Feature suggestions:** Share ideas for new functionality  
- **User experiences:** Tell us how IRLbox works in your setup

Your input helps make IRLbox better for everyone!
