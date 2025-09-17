# Dashboard Interface

The IRLbridge dashboard provides a clean, intuitive interface for managing your streaming setup.

## Device Information Panel

This panel shows the HDMI connection state, device IP, and status.

- **HDMI:** Displays connection status.
- **Device IP:** Shows the local IP of your device.
- **Status:** Waiting for connection or connected to a stream.

> **Note:** Screenshots will be added here showing the Device Information panel.

## Streaming Software Setup Panel

Use this section to configure your streaming software with one tap.

- Switch between **Moblin** and **IRL Pro** tabs at the top.
- Scan the QR code with your mobile app to auto-configure stream settings.
- The QR code updates automatically when settings change.

> **Note:** Screenshots will be added here showing the Streaming Software Setup panel with QR code.

## Stream Configuration Panel

Configure the ingest protocol and output options.

- **Tabs:** RTMP / SRT / IRLBOX / UVC
- **RTMP URL:** The endpoint for incoming RTMP streams.
- **Stream Key:** Unique stream key for your session.
- **Enable Audio / Enable Video:** Toggle these to include or exclude audio/video.
- **Audio Volume Slider:** Adjust HDMI output volume or mute.

> **Note:** Screenshots will be added here showing the Stream Configuration panel.

### Regenerate QR Codes

Click **Regenerate QR Codes** to issue a new configuration QR code to Moblin.

### Start HDMI Output

Click **Start HDMI** to push the incoming stream out via HDMI.

## Device Mode Panel

Choose between **Standalone** and **Integrated** operation modes.

- **Standalone Mode:** Operate independently without IRLbox or external systems.
- **Integrated Mode:** Link with IRLbox for remote control, resource sharing, and coordinated streaming.

> **Note:** Screenshots will be added here showing the Device Mode section.

## Bottom Status Bar

The bottom status bar displays real-time performance metrics:

- **CPU Usage**
- **RAM Usage**
- **Temperature**
- **Disk Usage**

Use this to make sure your SBC isn't overloaded.

> **Note:** Screenshots will be added here showing the bottom status bar with CPU/RAM/TEMP metrics.
