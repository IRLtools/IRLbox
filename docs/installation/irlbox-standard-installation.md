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
| Orange Pi 5 Plus | 1.0.9 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1cPcMOj7qVqqrTZzrPPtaWvM4XLGSFi2l/view?usp=drive_link) | `b1c636157f5827b04fd526d98ae0c46cf78af9d4670f4e3bfa348e74353e42e8` |
| Orange Pi 5 | 1.0.9 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1wshYXD79ia1gH_6G9vF-l831FlwqPwx1/view?usp=drive_link) | `b36adc9b1555b5fe829634bf7df9fcdc148907aa7fe7930cefaf1c33b3f5e2a1` |
| Orange Pi 5 | 1.0.9 | Ubuntu 26.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1TWDHyfitdMmIRKMApjYgQ51KtcPw5P-H/view?usp=drive_link) | `6ed80be11e09e2c82fff966ad4741349e89b51dbd0fcdbcc6b432f372fc1d859` |
| Orange Pi 3B | 1.0.9 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1Pjj9tadzySDy04ujqJRAGyfKmPEM-tZo/view?usp=drive_link) | `32ff364e8dcc8fa534c7472325345f658fc2b5820411878e095ff39e0c30e68a` |
| Orange Pi 3B | 1.0.9 | Ubuntu 26.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1GFh7P71oRLEFST-wXxRlc76cM-9ziLEH/view?usp=drive_link) | `7a22f4434fefaf39a66e286680929e0fc0710cfbef40670b4b150ed67e6eb401` |
| Orange Pi 5 Ultra | 1.0.9 | Ubuntu 24.04 (NEW) / Kernel 6.1 | [Download](https://drive.google.com/file/d/1RDhvdHA-bvViG-gLKjzf9tlIaWhaPJqD/view?usp=drive_link) | `cb106dcd5273b9e883d676eba7b58a77dcdc2f3efccf6215e30f322a9acbdc6f` |
| Radxa Zero 3W/E | 1.0.9 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/11nlEqlGVoUXwuF6ooYixLJ4TK5ahquEi/view?usp=drive_link) | `0a65509a88382c1534ebc0a4e88470acaa8464f923d361b9766db827783036a7` |
| Radxa Rock 5A | 1.0.9 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/19kISUL-HPR0sVmL7BO9AyrHpLg8SndkX/view?usp=drive_link) | `b31ba0bd4b7cf64e02e602fd23373866259dcbe0cf1fe0f2af82c54f7f349ff3` |
| Radxa Rock 5B+ | 1.0.11 | Ubuntu 24.04 / Custom Kernel 6.1 | [Download](https://drive.google.com/file/d/1Fej5rt9Z9JN6Y7f96jGeLl_zdpyocHwU/view?usp=drive_link) | `028603236c56d865ce6ffed4194aa432e1899a371bd561e17f3198b4c691a2ef` |

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
