---
sidebar_position: 2
---

---
# Getting Started Guide  

---

## 📦 What’s in the Box

- **Ewing Aerospace BlueLRS 2.4 GHz TX Module**

**Key Specifications**

- Input Voltage: **2.5 V – 16 V DC**
- Continuous Current: **~2.8 mA @ 3.3 V**
- Firmware: **BlueLRS (TX)**
- Board Size: ~77.5 mm × 46.5 mm × 25.5 mm

---

## 🔌 Installation & Wiring

### Handset Connection

- For a standard JR Bay port, line the module up over the pins and push the module into the slot until it is seated securely.
- For a JR Bay Mini port, push the locking pins on the back of the handset through the holes on the module's guide rail. Then, push down on the module until the pins are seated securely in the module.

---

## 🧠 BlueLRS Firmware Overview

The Ewing Aerospace BlueLRS 2.4 GHz TX Module ships with **BlueLRS**, a custom fork of standard ELRS firmware designed for high performance and compatability with NDAA compliant platforms.

BlueLRS features include:

- Built off of the trusted ELRS firmware
- Support for NDAA compliant architecture (STM32)
- Adjustable power, packet rate and bind phrase
- Actively developed open firmware ecosystem

BlueLRS provides excellent responsiveness and configurability for both racing and endurance platforms.

---

## ⚙️ BlueLRS Configuration

### Initial Setup

1. With the module's power button held down, connect the TX module to your computer and open **BlueLRS Configurator**.
2. Select  **Configurator** from the left menu bar.
3. Under **Releases**, choose the most recent release.
4. Choose your **Device Category** and **Device** (RX or TX):
5. Under **Flashing Method**, select **Betaflight Passthrough**.
6. If you would like a binding phrase, under **Binding Phrase Setup**, select it and enter a binding phrase.
7. Select **Flash** and wait for the TX to flash. It will be ready for usage immediatley after.

---

### Binding Method

1. If you set a binding phrase on your RX and TX, they should automatically bind.
2. Without a bind phrase, plug and unplug the power to your RX 2 twice followed by pluggin it in for a third time in quick succesion.
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
