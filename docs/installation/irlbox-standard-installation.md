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
| Orange Pi 5 Plus | 0.0.27 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1wo3UqMbkDFSYRkjEZ3MSUQbLqN8Uo_Gz/view?usp=drive_link) | `fb2a46596dcd25aa80901f7f5f82fc727efb9573` |
| Orange Pi 5 | 0.0.25 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1yBf_oXOCLAHnRvoC2Om4JuV9cMN6fpz9/view?usp=drive_link) | `edf980269ddf8cef15908a7a120645030d2a8043` |
| Orange Pi 3B | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1Ambt_DBVdhs-saXT3hu6Qv6TZKikgJB_/view?usp=drive_link) | `539c5fc91b6459264dab0d02d35975b026b7883c` |
| Orange Pi 5 Ultra | 0.0.8 | Ubuntu 22.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1jb3nBhcCtyXaObCIBGhQ2Ua3gfu-_u6n/view?usp=drive_link) | `2bed2a64a27a95857b1e401dea065717caaacb8f` |
| Radxa Zero 3W/E | 0.0.28 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1RrHtfprhEQDSct0ILpgoqX4poJuwHQW4/view?usp=drive_link) | `51339a9c84a2560fc74e34f375d003ae6c519dec` |
| Radxa Rock 5A | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1xQJnzPOxcSX_bGz4w1dCHdSX28PWyKJR/view?usp=drive_link) | `7386743093256b80dc395d661454bcccd76788f1` |
| Radxa Rock 5B+ | 0.0.11 | Ubuntu 24.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1_kOXvp0gEUeBlc9xeP_90JkIOcQgS4ID/view?usp=drive_link) | `614586a191455a8612d08ad0edea2a6542546287` |

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
