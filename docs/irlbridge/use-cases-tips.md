# Use Cases & Tips

## Typical Use Cases

- **Phone → HDMI Monitor:** Send an SRT or RTMP stream from Moblin to IRLbridge, output HDMI to a portable monitor.
- **LiveU Integration:** Feed IRLbridge HDMI output directly into LiveU encoders.
- **Event Streaming:** Connect UVC cameras via USB and output directly to large displays.

## Tips for Best Performance

- Use wired network connections for lowest latency.
- Adjust **Audio Volume** to prevent clipping on HDMI output.
- Monitor CPU and temperature under load.
- Test HDMI output before going live.

## Troubleshooting

| Symptom | Possible Cause | Fix |
|---------|---------------|-----|
| "Waiting for Connection" on HDMI | No stream received | Check input URL and stream key. |
| No Audio Output | "Enable Audio" toggled off | Toggle back on and test volume. |
| Device Overheating | High CPU usage or poor airflow | Lower bitrate or add heatsink/fan. |

## Credits

IRLbridge is developed by the IRLtools / IRLhosting team as part of the IRLbox ecosystem.

## Legal Notice

Links to Amazon or other stores may be affiliate links, which help support the development and maintenance of IRLbridge.
