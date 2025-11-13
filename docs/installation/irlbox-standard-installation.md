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
| Orange Pi 5 Plus | 1.0.0 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1R7w8meV073Jf6bGvWJIamoMVAd0NCV0e/view?usp=drive_link) | `5a5225885c2ed6c5cbe73ca74b7835d10f2283e7cf6a37cda07679a7777cbea5` |
| Orange Pi 5 | 1.0.0 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1cDl7SGykUk1WfzkWsQDNWxJG6tuvfk8w/view?usp=drive_link) | `a3fd9bd84ba66e87621ef6eb860c5203c4ba98b328dabb71ca6ed5901d03c4b8` |
| Orange Pi 3B | 1.0.0 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1I9bjmUlktuH1oMEsdi0w2tcP3c1S22Z5/view?usp=drive_link) | `b3c25f7030e52499b31509b7a41807f3ff2ffd542b45b584a9761f351ce7ea95` |
| Orange Pi 5 Ultra | 1.0.0 | Ubuntu 22.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1q3bXUFItke-DQ8VyUhDRWsM_AQVr1xzN/view?usp=drive_link) | `81cdde71c45eb409ea1ad67397df15544a63c3a34c8fe39e1e29be0cfdbb2409` |
| Radxa Zero 3W/E | 1.0.0 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1SX2n7uOZ2-UWMKBdt5CPhYTjr87mUD-4/view?usp=drive_link) | `20e39f084d0f97842422f2bb1827db48d6f738cd68e6e40a11e10fa6f6a3c99e` |
| Radxa Rock 5A | 1.0.0 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1bExTRmSk0OFnZP6zIMxXDjzwsrSH2Ory/view?usp=drive_link) | `208bbf6389fe042cec16af28eca2d64873ee4a300a0131ec4a6f6ed95bb53dbc` |
| Radxa Rock 5B+ | 1.0.1 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1OZYA5wEatherYxChmiJY_eeVEk9hXlMF/view?usp=drive_link) | `cc984958ee3ace4f9759f315dea902220b6a54e5` |

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
