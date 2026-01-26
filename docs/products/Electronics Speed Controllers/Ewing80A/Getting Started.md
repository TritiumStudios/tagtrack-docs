---
sidebar_position: 2
---

# Getting Started Guide

---

## 📦 What’s in the Box

- **Ewing 80A 4-in-1 ESC (AM32 firmware)**
- Rubber mounting dampers
- High-current battery leads (pre-tinned)
- Low-ESR electrolytic capacitor

**Key Specifications**

- Input Voltage: **3–12S LiPo**
- Continuous Current: **80 A**
- Burst Current: **100 A (short duration)**
- Firmware: **AM32 (32-bit)**
- ESC Protocols: **DSHOT150 / 300 / 600 / 1200**
- Telemetry: **ESC telemetry supported**
- Mounting Pattern: **30 × 30 mm**

---

## 🔌 Installation & Wiring

### Power Connection

1. Mount the ESC using vibration-isolating rubber dampers.
2. Solder battery leads directly to the **VBAT (+)** and **GND (−)** pads.
3. Install the included **low-ESR capacitor** across VBAT and GND as close to the ESC as possible.

> ⚠️ Always verify polarity before applying power.

---

### Flight Controller Connection

1. Connect the ESC signal harness to the flight controller ESC header or pads.
2. Confirm proper alignment of:
   - **VBAT**
   - **GND**
   - **Motor outputs (M1–M4)**
   - **Current sense**
   - **ESC telemetry**

---

## 🧠 AM32 Firmware Overview

The Ewing 80A ESC runs **AM32**, a modern open-source 32-bit ESC firmware offering:

- High-speed motor response
- Advanced telemetry and RPM feedback
- Configurable PWM frequency and timing
- Broad compatibility with modern flight controllers

---

## ⚙️ Betaflight Configuration (Recommended)

1. Open **Betaflight Configurator**
2. Navigate to **Configuration → ESC/Motor Features**
3. Set:
   - **ESC Protocol:** `DSHOT600`
   - Enable **Bidirectional DSHOT** (if supported)
4. Save and reboot

---

### Telemetry Setup

1. Go to the **Ports** tab
2. Enable **Telemetry** on the UART connected to ESC telemetry
3. Save and reboot

---

### Motor Verification

1. Remove propellers
2. Use the **Motors** tab to confirm:
   - Correct motor order
   - Correct motor direction
3. Reverse motors in software if needed

---

## 🔧 AM32 Configurator (Advanced Tuning)

Advanced tuning options include:

- PWM frequency (24–48 kHz typical)
- Motor timing
- Startup power / boost
- Braking strength
- Telemetry output mode

> ⚠️ Make incremental changes and test at low throttle.

---

## ⚠️ Safety Notes

- Always remove propellers during setup
- Use a smoke stopper for first power-on
- Verify solder joints and insulation

---

## 📘 Support

**Ewing Aerospace**  
Engineering & Support  
www.ewingaerospace.com

---
