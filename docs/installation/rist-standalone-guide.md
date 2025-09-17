# RIST Relay – Standalone Guide

This guide explains how to install and run the **RIST Relay** as a standalone application on Windows, Linux, or macOS.

---

## 1. Overview

The **RIST Relay** lets you relay RIST streams through your own server using native binaries.  
Instead of sending a stream *directly* to OBS, OBS can "pull" the stream from the relay.  
This standalone approach gives you direct control over the relay process.

---

## 2. Requirements

- **Hardware/OS:** Works on ARM64 (Raspberry Pi, Orange Pi, Radxa) and AMD64 Linux (Ubuntu 24.04 LTS recommended), Windows, macOS
- **Ports:** Must allow inbound/outbound UDP/TCP as described in [Essential Ports](#4-essential-ports)
- **OBS:** Latest version recommended

> 💡 **Tip:** Standalone deployment gives you more control but requires manual configuration.

---

## 3. Downloads

- **Windows:** [Download v.0.0.9](https://drive.google.com/file/d/1kK3Nwov4Veutn9dRdLqwxHAMNVpVwTfy/view?usp=drive_link)
- **Linux x86_64 (Ubuntu 24.04):** [Download v.0.0.9](https://drive.google.com/file/d/1NLRBeEDaAddBNUwc75p1dJIEtL27fkZB/view?usp=drive_link)
- **Linux arm64 (Raspberry Pi / Orange Pi / Radxa):** [Download v.0.0.9](https://drive.google.com/file/d/1d5vMpwIaW9WK1ma8ufjR-GGNeMsxDrrU/view?usp=drive_link)
- **macOS 10.15 or higher:** On request via IRLtools Discord

> 📸 **Screenshot Placeholder:** Show download page.

---

## 4. Essential Ports

| Service | Port | Protocol | Purpose |
|---------|------|----------|---------|
| RIST Relay | 2030 | UDP | RIST stream access (IRLbox/Moblin) |
| OBS Forwarder | 5556 | UDP | OBS ingest access |
| Stats API | 5000 | TCP | REST API for stats |

> 💡 **Tip:** Make sure your firewall allows these ports for external access.

---

## 5. Windows Installation

1. **Download & Extract:** Unzip to `C:\rist_relay\`.

2. **Folder Structure:**

   ```
   C:\rist_relay\
     └─ out\
         ├─ moo-rist-selfhosting.exe
         ├─ *.dll
         └─ start.bat
   ```

3. **Configuration:** Edit `config.json` in the `/out/` folder:

   ```json
   {
     "Settings": {
       "SecretHashKey": "YOUR_SECRET",
       "StatsUrl": "http://localhost:5000",
       "Encryption": 128
     }
   }
   ```

4. **Firewall Prompt:** Click **Allow Access** when prompted.

5. **Run the Relay:**

   ```cmd
   cd C:\rist_relay\out
   moo-rist-selfhosting.exe
   ```

   or double-click `start.bat`.

6. **Verify:** Check logs to ensure port 2030 is listening.

7. **Stop:** Press **Q** or close the console.

---

## 6. Linux Installation

### 6.1 Required Packages (Ubuntu 24.04 LTS)

```bash
sudo apt install libcjson-dev libmicrohttpd12t64 libmbedtls-dev libmbedcrypto7t64 -y
```

### 6.2 Download & Extract

Extract `out_linux.zip` to `/home/username/rist_relay/`.

### 6.3 Configuration

Edit `config.json`:

```json
{
  "Settings": {
    "SecretHashKey": "YOUR_SECRET",
    "StatsUrl": "http://localhost:5000",
    "Encryption": 128
  }
}
```

### 6.4 Run Script (Preferred)

```bash
sudo bash -i start_arm64.sh
```

### 6.5 Manual Start

```bash
chmod +x moo-rist-selfhosting
./moo-rist-selfhosting
```

### 6.6 Firewall Ports

```bash
sudo ufw allow 2030/udp
sudo ufw allow 5556/udp
sudo ufw allow 5000/tcp
```

### 6.7 Optional: Systemd Service

Create `/etc/systemd/system/rist-relay.service`:

```ini
[Unit]
Description=moo-rist-selfhosting service
After=syslog.target network-online.target

[Service]
ExecStart=/opt/rist-relay/out_linux/./moo-rist-selfhosting
WorkingDirectory=/opt/rist-relay/out_linux
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Enable the service:

```bash
sudo systemctl enable rist-relay
sudo systemctl start rist-relay
```

---

## 7. macOS Installation

1. **Install Homebrew dependencies:**

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install libmicrohttpd
   ```

2. **Follow Linux steps** for running the binary.

> For macOS permission issues see [Trend Micro guide](https://helpcenter.trendmicro.com/en-us/article/tmka-20627).

---

## 8. OBS Setup

1. **Open OBS** → Create a **Media Source**.

2. **URL format:**

   ```
   rist://YOUR_SERVER_IP:5556?cname=moo-rist-relay&aes-type=128&secret=YOUR_SECRET_HASH_KEY
   ```

   - Replace `YOUR_SERVER_IP` with the public or LAN IP of your relay.
   - Replace `YOUR_SECRET_HASH_KEY` with your encryption key.

3. **Input format:** `mpegts`

> 📸 **Screenshot Placeholder:** Show OBS Media Source settings.

---

## 9. REST API & Stats

- **Basic Stats:**  
  `http://localhost:5000/api/Rist/stats`

- **Auto-generated UI:**  
  `http://localhost:5000/rest/index.html`

- **Logs** appear in the console (Windows) or terminal (Linux).

> 📸 **Screenshot Placeholder:** Show REST API JSON output.

---

## 10. Configuration Reference

### Config File Options

- **SecretHashKey:** Must match your OBS/IRLbox setting
- **StatsUrl:** JSON endpoint for stats or scene switchers
- **Encryption:** 0 = off, 128 = default, 256 = stronger
- **OutputUrl:** Use `udp://` or `rtp://` with non-loopback IP if OBS runs elsewhere

---

## 11. Common Issues & Troubleshooting

| Problem | Solution |
|---------|----------|
| Firewall blocking traffic | Manually open ports in Windows or `ufw` |
| Too many DLLs on Windows | Required for .NET Core |
| Logs or stats missing | Use API endpoint `:5000/api/Rist/stats` |
| Relay stops on any keypress | Update to newer version (use **Q** only) |

---

## 12. Client Settings

- **Protocol:** RIST
- **Receiver Address:** IP of the RIST relay
- **Receiver Port:** 2030

---

## 13. Disclaimer

- Provided "as is." Minimal support.
- Follow local networking laws.
- Not for commercial resale.
