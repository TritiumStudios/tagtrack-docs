---
sidebar_position: 2
---

---
# Getting Started Guide  

---

## 📦 What’s in the Box

- **Ewing Aerospace BlueLRS-MAV 915 MHz RX Module**
- 5-Pin Pre-terminated integration cable

**Key Specifications**

- Input Voltage: **2.5 V – 16 V DC**
- Continuous Current: **~2.8 mA @ 3.3 V**
- Firmware: **BlueLRS-MAV (RX)**
- Board Size: ~21 mm × 35 mm × 4.5 mm

---

## 🔌 Installation & Wiring

### Flight Controller Connection

1. Connect the harness between the RX and an unused 5-Pin header/pads on the flight controller.
2. Confirm the following signals are correctly aligned:
   - **10V**
   - **GND**
   - **Serial TX1**
   - **Serial RX1**
   - **GND**
   - **Serial TX2**

---

## 🧠 BlueLRS Firmware Overview

The Ewing Aerospace BlueLRS 915 MHz RX Module ships with **BlueLRS-MAV**, a custom fork of standard ELRS firmware designed for high performance and compatability with NDAA compliant platforms.

BlueLRS-MAV features include:

- Built off of the trusted ELRS firmware
- Support for NDAA compliant architecture (STM32)
- Adjustable power, packet rate and bind phrase
- Designed for use with Mavlink systems
- Actively developed open firmware ecosystem

BlueLRS-MAV provides excellent responsiveness and configurability for both racing and endurance platforms.

---

## ⚙️ BlueLRS-MAV Configuration

### Initial Setup

1. Connect your flight controller to your computer and open **BlueLRS Configurator**.
2. Select  **Configurator** from the left menu bar.
3. Under **Releases**, choose the most recent release.
4. Choose your **Device Category** and **Device** (RX or TX):
5. Under **Flashing Method**, select **USB**.
6. If you would like a binding phrase, under **Binding Phrase Setup**, select it and enter a binding phrase.
7. Select **Flash** and wait for the RX to flash. It will be ready for usage immediatley after.

---

### Binding Method

1. If you set a binding phrase on your RX and TX, they should automatically bind.
2. Without a bind phrase there are two methods:
   -Plug and unplug the power to your RX three times followed by plugging it in for a fourth time in quick succesion.
   -Hold the boot button until the RX enters bind mode.
3. A rapidly flashing led indicates that the RX is in bind mode.
4. Select "Bind" from the lua script of your TX module. The TX should enter bind mode as well and bind to the RX after a few moments.
5. Once the binding screen goes away and you are receving telemetry from the RX, you are bound and the system is ready for use.

---

## 🔍 Common Troubleshooting

### MRX and TX are not binding
- Ensure that the bind phrase, if used, is the same for both the RX and TX
- If operating without a bind phrase, ensure the the rx is actually entering bind mode

---

## 📘 Support

For additional documentation, wiring diagrams, or configuration examples, contact:

**Ewing Aerospace**  
Engineering & Support Team  
www.ewingaerospace.com

---
