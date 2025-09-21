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

## 3. Important Notice (Beta)

> 💡 **Beta Program Notice**  
> By downloading and using IRLbox images you agree to our beta program:  
> - IRLbox is in **beta** – features may break or behave unexpectedly.  
> - Some functions may be unstable or missing.  
> - We rely on your feedback to improve IRLbox quickly.

---

## 4. Download the IRLbox Image File

Choose the image matching your board:

| Board Model | Version | Distro / Kernel | Download Link | SHA1 Checksum |
|-------------|---------|-----------------|---------------|---------------|
| Orange Pi 5 Plus | 0.0.26 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1RzAvWlXxNxj-CQKfiFNaGUU5N-OeYefL/view?usp=drive_link) | `4c41c31c2db58684156cd0127eb19a373de1ff50` |
| Orange Pi 5 | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1BTtLtDGaI6vMGAEiNVnJ19FD9b3Ez1Di/view?usp=drive_link) | `6117bcdb0fa025226b924ef60ba45a9a9c7e497d` |
| Orange Pi 3B | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1LLESuM5RAYfuFLyNMr9vB0bcPXz64eXh/view?usp=drive_link) | `015eaadba284a15d49a6b0c5a1a315747dbd3a03` |
| Orange Pi 5 Ultra | 0.0.7 | Ubuntu 22.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1RMqwGksgZ8PIvVP6HSRZ7FU88wBBYM4K/view?usp=drive_link) | `20d2d4cbf49d9e51154442ddcff6bdb3d38118aa` |
| Radxa Zero 3W/E | 0.0.28 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1hrvzMTAqMbGDvzIsUZZgHJhzliWbSL10/view?usp=drive_link) | `586151f8f5f837db793c86ee778c4a8b4d9c73fa` |
| Radxa Rock 5A | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1esX1aRQvkJV0p120J2aqgHtla-R82zYB/view?usp=drive_link) | `d29e663fa5449ca958cfdd79a22470fce897f63e` |
| Radxa Rock 5B+ | 0.0.9 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1laiPoLnJZ7Bs9dwgeU837NxFo2bHSLKp/view?usp=drive_link) | `9320b6429c0f2d2f08e65b27c8a745d4e2e14ec5` |

> 📸 **Screenshot Placeholder:** Show download page with highlighted board selection.

---

## 5. Flash the Image (Windows)

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

## 6. Flash the Image (macOS)

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

## 7. Boot Your Device

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

## 8. Connect to Your Local Network

1. **Use Ethernet connection:**
   - Connect an Ethernet cable from your SBC to your router
   - This ensures the most stable connection for initial setup

2. **Wait for network connection:**
   - Allow 1-2 minutes for the device to obtain an IP address

---

## 9. Access the IRLbox Dashboard

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

## 10. Initial Setup

Once you access the dashboard:

1. **Complete the setup wizard** (if prompted)
2. **Configure your streaming settings**
3. **Adjust encoder quality and bitrate**
4. **Set up storage preferences**
5. **Test your streaming setup**

---

## 11. Troubleshooting

| Problem | Solution |
|---------|----------|
| Dashboard not accessible | Check Ethernet connection and wait for boot completion |
| Device not powering on | Verify power supply compatibility and connections |
| Slow performance | Ensure adequate power supply (5V/3A recommended) |
| Network issues | Try different Ethernet cable or router port |

---

## 12. Next Steps

- **Configure streaming:** Set up your streaming platforms and keys
- **Test connectivity:** Verify your internet upload speeds
- **Explore features:** Check out advanced settings and monitoring tools
- **Join community:** Connect with other IRLbox users for tips and support

---

## 13. Feedback & Support

We welcome your feedback to improve IRLbox:

- **Bug reports:** Help us identify and fix issues
- **Feature suggestions:** Share ideas for new functionality  
- **User experiences:** Tell us how IRLbox works in your setup

Your input helps make IRLbox better for everyone!
