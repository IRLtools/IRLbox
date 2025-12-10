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
| Orange Pi 5 Plus | 1.0.3 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1uQSVdTSxCkLFJDu5C0NXhXQB93BSzOLg/view?usp=drive_link) | `50036e207ed97655845112bddfd490d28e7e8c8173f87777c16219e4e4ae8be0` |
| Orange Pi 5 | 1.0.3 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1-HzEfA4j7k2k-OrXnLMs2v0Jfqcx7CrE/view?usp=drive_link) | `d20f01a4f0e65c2e36118dc843c261deae5522999e6ec5b79fa9b441567c3394` |
| Orange Pi 3B | 1.0.3 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1zv8GvS7-qmHUXPsMoV3zNNfOqwdTRfu_/view?usp=drive_link) | `f51d9bc087663a0a23325e45aade6471a0745284d64cbeb63c51cb770c56f391` |
| Orange Pi 5 Ultra | 1.0.3 | Ubuntu 22.04 / Kernel 6.1 | [Download](https://drive.google.com/file/d/1YpE3zv225mJkNGGn53dK_FvB78EtX2D9/view?usp=drive_link) | `8da0ad188edf75feea8397070e0dd70d189c6a9911c1e0790b51e694771b4b71` |
| Radxa Zero 3W/E | 1.0.3 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1jVs8oYpoJgqRM3X7YdXM0AG4tB_xXZPJ/view?usp=drive_link) | `f74af5ce561f31f5b0909b44f6daf26eb7c64bccc467973cab538af773a03029` |
| Radxa Rock 5A | 1.0.3 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1AaF2YJfNURgMmsNh5sOpGyVXwrSyBG6c/view?usp=drive_link) | `a23f72f03890bfa5ef0a02567d8c02ec530a326f246624b3de3d847c3c24ae26` |
| Radxa Rock 5B+ | 1.0.5 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1cbfbnZD0ISNvfF81LZHYoUnMw7tpprv1/view?usp=drive_link) | `1fbed630cf4543a65da6b10469ae81fcd7663d529b51d39293dbf8432096668f` |

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
