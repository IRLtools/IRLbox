# IRLbridge Documentation

**IRLbridge** is an add-on module for **IRLbox** that takes incoming **SRT**, **RTMP**, or **UVC** input and outputs it over the **HDMI port** of supported Orange Pi and Radxa devices.

This lightweight module lets you stream from your phone to popular devices such as **LiveU** encoders or output HDMI video with sound to external monitors.

## [1] Overview

- **Input Protocols**: SRT, RTMP, UVC (USB capture)
- **Output**: HDMI (video + audio)
- **Supported Devices**: Orange Pi 5/5 Plus, Radxa Zero 3W, and similar SBCs with HDMI output
- **Use Cases**: IRL streaming, HDMI monitor output, LiveU integration

> **Note:** Screenshots will be added here showing the full dashboard view of IRLbridge.

## [2] Key Features

| Feature | Description |
|---------|-------------|
| Multiple Inputs | Accepts SRT, RTMP, and UVC sources. |
| HDMI Output | Real-time HDMI video + audio to monitors or encoders. |
| QR Code Setup | Instantly configure Moblin or IRL Pro streaming apps. |
| Standalone / Integrated Mode | Run independently or as part of IRLbox. |
| Lightweight UI | Minimal CPU/RAM overhead on SBCs. |

## [3] Device Information Panel

This panel shows the HDMI connection state, device IP, and status.

- **HDMI:** Displays connection status.
- **Device IP:** Shows the local IP of your device.
- **Status:** Waiting for connection or connected to a stream.

> **Note:** Screenshots will be added here showing the Device Information panel.

## [4] Streaming Software Setup Panel

Use this section to configure your streaming software with one tap.

- Switch between **Moblin** and **IRL Pro** tabs at the top.
- Scan the QR code with your mobile app to auto-configure stream settings.
- The QR code updates automatically when settings change.

> **Note:** Screenshots will be added here showing the Streaming Software Setup panel with QR code.

## [5] Stream Configuration Panel

Configure the ingest protocol and output options.

- **Tabs:** RTMP / SRT / IRLBOX / UVC
- **RTMP URL:** The endpoint for incoming RTMP streams.
- **Stream Key:** Unique stream key for your session.
- **Enable Audio / Enable Video:** Toggle these to include or exclude audio/video.
- **Audio Volume Slider:** Adjust HDMI output volume or mute.

> **Note:** Screenshots will be added here showing the Stream Configuration panel.

### [5.1] Regenerate QR Codes

Click **Regenerate QR Codes** to issue a new configuration QR code to Moblin.

### [5.2] Start HDMI Output

Click **Start HDMI** to push the incoming stream out via HDMI.

## [6] Device Mode Panel

Choose between **Standalone** and **Integrated** operation modes.

- **Standalone Mode:** Operate independently without IRLbox or external systems.
- **Integrated Mode:** Link with IRLbox for remote control, resource sharing, and coordinated streaming.

> **Note:** Screenshots will be added here showing the Device Mode section.

## [7] Bottom Status Bar

The bottom status bar displays real-time performance metrics:

- **CPU Usage**
- **RAM Usage**
- **Temperature**
- **Disk Usage**

Use this to make sure your SBC isn't overloaded.

> **Note:** Screenshots will be added here showing the bottom status bar with CPU/RAM/TEMP metrics.

## [8] Supported Hardware

| Device | Notes |
|--------|-------|
| Orange Pi 5 | Full support for HDMI + USB. |
| Radxa Zero 3W | Low power, portable form factor. |
| More SBCs coming soon | Continuous support updates. |

## [9] Typical Use Cases

- **Phone → HDMI Monitor:** Send an SRT or RTMP stream from Moblin to IRLbridge, output HDMI to a portable monitor.
- **LiveU Integration:** Feed IRLbridge HDMI output directly into LiveU encoders.
- **Event Streaming:** Connect UVC cameras via USB and output directly to large displays.

## [10] Installation (Quick Steps)

1. Download the IRLbridge image or module for your SBC.
2. Flash the image or update your IRLbox to include IRLbridge.
3. Connect the device to your network and HDMI display.
4. Access the IRLbridge UI in your browser at the device IP.
5. Configure stream settings using the UI or QR code.

## [11] Tips for Best Performance

- Use wired network connections for lowest latency.
- Adjust **Audio Volume** to prevent clipping on HDMI output.
- Monitor CPU and temperature under load.
- Test HDMI output before going live.

## [12] Troubleshooting

| Symptom | Possible Cause | Fix |
|---------|---------------|-----|
| "Waiting for Connection" on HDMI | No stream received | Check input URL and stream key. |
| No Audio Output | "Enable Audio" toggled off | Toggle back on and test volume. |
| Device Overheating | High CPU usage or poor airflow | Lower bitrate or add heatsink/fan. |

## [13] Credits

IRLbridge is developed by the IRLtools / IRLhosting team as part of the IRLbox ecosystem.

## [14] Legal Notice

Links to Amazon or other stores may be affiliate links, which help support the development and maintenance of IRLbridge.
