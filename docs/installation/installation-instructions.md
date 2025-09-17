IRLbox Installation Instructions
====================================

Welcome to the IRLbox installation guide. These instructions will help you set up IRLbox on your compatible device.

[1] Compatible Devices
-------------------------

- Orange Pi 3B
- Orange Pi 5
- Orange Pi 5 Plus
- Orange Pi 5 Ultra
- Radxa Rock 5A
- Radxa Rock 5B+
- Radxa Zero 3W/E

[2] Prerequisites
--------------------

Before you begin, ensure you have the following:

- A compatible Small Board Computer (SBC) from the list above.
- A stable internet connection.
- A personal computer (Laptop, desktop, etc.).
- A microSD card (8GB or larger recommended).
- A microSD card reader (or a full-size SD card reader with a microSD card adapter).
- Software for flashing images to a microSD card:
  - **Windows:** [Rufus] or [Balena Etcher]
  - **macOS:** [Raspberry Pi Imager] or [Balena Etcher]
- An Ethernet cable to connect your SBC to the same home network your computer or phone is connected to (for initial configuration).

[3] Important Notice
-----------------------

By downloading and using the IRLbox images, you are agreeing to participate in our beta testing program. Please be aware:

- IRLbox is currently in beta.
- Things may break, and there could be bugs and unexpected behaviors.
- Specific functions or features you want may not be stable or available yet.
- Be patient! We窶决e a small team working to improve IRLbox quickly and effectively.
- Share your experience 窶・we need detailed feedback to fix issues and improve features.

[4] 1. Download the IRLbox Image File
----------------------------------------

| Board Model | Beta Release | Dev Release | Version | Distro / Kernel | sha1 checksum |
|----|----|----|----|----|----|
| Orange Pi 5 Plus | "Switchable" From Dev 竊・| [Download] | 0.0.26 | Ubuntu 24.04 / Kernel 6.1 | 4c41c31c2db58684156cd0127eb19a373de1ff50 |
| Orange Pi 5 | "Switchable" From Dev 竊・| [Download][5] | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | 6117bcdb0fa025226b924ef60ba45a9a9c7e497d |
| Orange Pi 3B | "Switchable" From Dev 竊・| [Download][6] | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | 015eaadba284a15d49a6b0c5a1a315747dbd3a03 |
| Orange Pi 5 Ultra | no eMMC (yet) 竊・| [Download][7] | 0.0.7 | Ubuntu 22.04 / Kernel 6.1 | 4a91a0f207ea1009aaa0b39d3ce1a98847a4cebe |
| Radxa Zero 3W/E | "Switchable" From Dev 竊・| [Download][8] | 0.0.28 | Ubuntu 24.04 / Kernel 6.1 | 586151f8f5f837db793c86ee778c4a8b4d9c73fa |
| Radxa Rock 5A | "Switchable" From Dev 竊・| [Download][9] | 0.0.25 | Ubuntu 24.04 / Kernel 6.1 | d29e663fa5449ca958cfdd79a22470fce897f63e |
| Radxa Rock 5B+ | "Switchable" From Dev 竊・| [Download][10] | 0.0.9 | Ubuntu 24.04 / Kernel 6.1 | 93205cd2505940fd4c3b23abfa524f2106c4ac36 |

[11] 2. Flash the Image
--------------------------

**Windows (Rufus / Balena Etcher):**

1.  Download, install, and open Rufus or Balena Etcher.
2.  Insert your microSD card into your card reader.
3.  In Rufus, click "SELECT" or in Balena Etcher, click "Flash from file" and select your IRLbox image file (extract first if needed).
4.  Select the microSD card as the target.
5.  Click "Start" or "Flash" to begin.
6.  When finished, safely eject the card.

**macOS (Raspberry Pi Imager / Balena Etcher):**

1.  Download, install, and open [Raspberry Pi Imager] or [Balena Etcher].
2.  Insert your microSD card into your card reader.
3.  In Raspberry Pi Imager, click "Choose OS" and select "Use custom" and then select your IRLbox image file.
4.  Click "Choose Storage" and select your microSD card.
5.  Click "Write" to start.
6.  When finished, safely eject the card.

[12] ⚠️ 2.5 Alternative Flash on Linux ⚠️・
--------------------------------------------

ADVANCED TECH SKILLY ONLY!

``` none
apt-get install bmap-tools gdisk
fdisk -l
bmaptool copy --nobmap [IMAGENAME].img /dev/sdX
```

Copy

⚠️ double check if you are really flashing the correct disk drive!! ⚠️ you have been warned! ⚠️ 
after you wrote it to your sdcard you will have to "write the GPT" because the size changed.

``` none
gdisk /dev/sdX
```

Copy

simply type `w` to write the GPT and then you can use it

[13] ⚠️ 2.6 Alternative Flash on MacOS ⚠️・
--------------------------------------------

ADVANCED TECH SKILLY ONLY!

``` none
brew install python gdisk
curl -Lo bmaptool https://github.com/01org/bmap-tools/releases/download/v3.4/bmaptool
chmod +x bmaptool
diskutil list
diskutil unmountDisk /dev/diskX
./bmaptool copy --nobmap [IMAGENAME].img /dev/rdiskX
```

Copy

se the size changed.

``` none
gdisk /dev/rdiskX
```

Copy

simply type `w` to write the GPT and then you can use it

笞・・double check if you are really flashing the correct disk drive!! 笞・什ou have been warned! 笞・・ 
So this really requires you NOT to unmount via UI rdisk is the "real" disk drive

[14] 3. Boot Your Device
---------------------------

1.  Insert the flashed microSD card into your SBC.
2.  Connect the power supply.
3.  Wait 3窶・0 minutes for first boot disk expansion to complete.

[15] Connect to Your Local Network
-------------------------------------

Connect your device to your router with an Ethernet cable.

[16] Access IRLbox
---------------------

Open a browser on a device in the same network and go to:

- `http://irlbox.local/`
- If that doesn窶冲 work, try `http://irlbox/`

[17] Advanced Configuration
------------------------------

Once inside the IRLbox dashboard, you can adjust stream quality, encoder settings, storage, and more.

[18] Troubleshooting
-----------------------

If you cannot access the dashboard:

- Check your Ethernet connection.
- Confirm your device has powered on fully.
- Consult the IRLbox FAQ or support channels.

[19] Feedback
----------------

We welcome your bug reports, suggestions, and experiences. Your input helps improve IRLbox for everyone.

  [1]: https://irlbox.com/#compatible-devices
  [2]: https://irlbox.com/#prerequisites
  [Rufus]: https://rufus.ie/
  [Balena Etcher]: https://etcher.balena.io/
  [Raspberry Pi Imager]: https://www.raspberrypi.com/software/
  [3]: https://irlbox.com/#important-notice
  [4]: https://irlbox.com/#h-1-download-the-irlbox-image-file
  [Download]: https://drive.google.com/file/d/1RzAvWlXxNxj-CQKfiFNaGUU5N-OeYefL/view?usp=drive_link
  [5]: https://drive.google.com/file/d/1BTtLtDGaI6vMGAEiNVnJ19FD9b3Ez1Di/view?usp=drive_link
  [6]: https://drive.google.com/file/d/1LLESuM5RAYfuFLyNMr9vB0bcPXz64eXh/view?usp=drive_link
  [7]: https://drive.google.com/file/d/1RMqwGksgZ8PIvVP6HSRZ7FU88wBBYM4K/view?usp=drive_link
  [8]: https://drive.google.com/file/d/1hrvzMTAqMbGDvzIsUZZgHJhzliWbSL10/view?usp=drive_link
  [9]: https://drive.google.com/file/d/1esX1aRQvkJV0p120J2aqgHtla-R82zYB/view?usp=drive_link
  [10]: https://drive.google.com/file/d/1laiPoLnJZ7Bs9dwgeU837NxFo2bHSLKp/view?usp=drive_link
  [11]: https://irlbox.com/#h-2-flash-the-image
  [12]: #・・25-alternative-flash-on-linux-・・
  [13]: #・・26-alternative-flash-on-macos-・・
  [14]: https://irlbox.com/#h-3-boot-your-device
  [15]: https://irlbox.com/#connect-to-your-local-network
  [16]: https://irlbox.com/#access-irlbox
  [17]: https://irlbox.com/#advanced-configuration
  [18]: https://irlbox.com/#troubleshooting
  [19]: https://irlbox.com/#feedback

