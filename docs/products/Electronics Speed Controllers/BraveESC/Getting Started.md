---
sidebar_position: 2
---

---
# Getting Started Guide  

---

## 📦 What’s in the Box

- **Brave 55A 4-in-1 ESC (AM32 firmware)**
- Rubber mounting dampers
- 12 AWG power lead with XT60
- Low-ESR electrolytic capacitor

**Key Specifications**

- Input Voltage: **3–8S LiPo**
- Continuous Current: **55 A**
- Burst Current: **75 A**
- Firmware: **AM32 (32-bit)**
- ESC Protocols: **DSHOT150 / 300 / 600 / 1200**
- Telemetry: **ESC telemetry supported**
- Mounting Pattern: **30 × 30 mm**
- Board Size: ~45.4 × 41 × 7.3 mm

---

## 🔌 Installation & Wiring

### Power Connection

1. Mount the ESC to your frame using the provided rubber dampers.
2. Solder the **XT60 power lead** to the ESC battery pads, observing correct polarity.
3. Install the included **capacitor** directly across VBAT and GND as close to the ESC as possible to reduce voltage spikes.

> ⚠️ Always verify polarity before connecting a battery.

---

### Flight Controller Connection

1. Select either the **short or long ESC-to-FC harness** based on your stack height.
2. Connect the harness between the ESC and the flight controller ESC header or pads.
3. Confirm the following signals are correctly aligned:
   - **VBAT**
   - **GND**
   - **Motor Outputs (M1–M4)**
   - **Current Sense**
   - **ESC Telemetry**

---

## 🧠 AM32 Firmware Overview

The Brave 55A ESC ships with **AM32**, a modern open ESC firmware designed for high performance and flexibility.

AM32 features include:

- 32-bit MCU for fast, precise motor control
- Support for modern digital ESC protocols
- ESC telemetry for RPM filtering and diagnostics
- Adjustable PWM frequency, timing, and startup behavior
- Actively developed open firmware ecosystem

AM32 provides excellent responsiveness and configurability for both racing and endurance platforms.

---

## ⚙️ Betaflight Configuration (Recommended)

### Initial Setup

1. Connect your flight controller to your computer and open **Betaflight Configurator**.
2. Navigate to **Configuration → ESC/Motor Features**.
3. Set **ESC Protocol** to:
   - `DSHOT600` (recommended starting point)
4. Enable:
   - **Bidirectional DSHOT** (for RPM filtering, if supported)
5. Save and reboot.

---

### Telemetry Setup

1. Go to the **Ports** tab.
2. Enable **Telemetry** on the UART connected to the ESC telemetry wire.
3. Save and reboot.

---

### Motor Verification

1. Remove all propellers.
2. Open the **Motors** tab.
3. Slowly spin each motor to confirm:
   - Correct motor order
   - Correct rotation direction
4. Reverse motor direction in software if required.

---

## 🔧 AM32 Configurator (Advanced Tuning)

For deeper ESC tuning, the **AM32 Configurator** can be used via flight-controller passthrough.

Typical adjustable parameters include:

- **PWM Frequency**  
  - 24–48 kHz recommended depending on motor and application
- **Motor Timing**
- **Startup Power / Boost**
- **Brake Strength**
- **Telemetry Output Mode**

### Recommended Workflow

1. Connect to the ESC using AM32 Configurator.
2. **Read settings** from the ESC.
3. Make incremental changes.
4. **Write settings** and power-cycle.
5. Test at low throttle before full-power operation.

> ⚠️ Incorrect tuning values may cause overheating or desync. Adjust conservatively.

---

## 🔍 Common Troubleshooting

### Motors Do Not Spin
- Verify battery voltage at ESC
- Confirm ESC protocol matches Betaflight setting
- Check FC-to-ESC harness orientation

### No ESC Telemetry
- Confirm telemetry UART is enabled
- Verify telemetry wire connection
- Ensure Bidirectional DSHOT is enabled (if applicable)

### Excessive Heat or Noise
- Reduce motor timing
- Adjust PWM frequency
- Verify proper capacitor installation

---

## ⚠️ Safety Notes

- **Always remove propellers during setup**
- Never connect a battery without verifying polarity
- Perform first tests at low throttle
- Inspect solder joints regularly

---

## 📘 Support

For additional documentation, wiring diagrams, or configuration examples, contact:

**Ewing Aerospace**  
Engineering & Support Team  
www.ewingaerospace.com

---
