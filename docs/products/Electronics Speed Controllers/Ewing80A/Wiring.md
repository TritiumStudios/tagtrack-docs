---
sidebar_position: 3
---

# Wiring & Pinout Guide  
**Ewing Aerospace**

This document describes the connector pinout and wiring for the **Ewing 80A 4-in-1 ESC**. Wire colors shown in diagrams are for reference only.

---

## 🔌 ESC ↔ Flight Controller Connector Pinout

### Connector Signal Definitions

| Pin Name | Description | Notes |
|--------|-------------|-------|
| VIN | Battery voltage output | Direct VBAT |
| GND | Ground | Common ground |
| ADC_CURR | Current sensor output | FC current monitoring |
| TLM | ESC Telemetry | Enable on FC UART |
| ESC1 | Motor 1 signal | DSHOT |
| ESC2 | Motor 2 signal | DSHOT |
| ESC3 | Motor 3 signal | DSHOT |
| ESC4 | Motor 4 signal | DSHOT |

---

## ⚙️ Motor Output Pads

Each motor output consists of **three phase pads**.

| Motor | Typical Location (Top View) |
|------|-----------------------------|
| Motor 1 | Bottom Right |
| Motor 2 | Top Right |
| Motor 3 | Bottom Left |
| Motor 4 | Top Left |

Motor direction may be reversed in software.

---

## 🔋 Battery Input Pads

| Pad | Function |
|----|----------|
| + | Battery positive (VBAT) |
| − | Battery ground (GND) |

- Rated for **3–12S LiPo**
- Use appropriate wire depending on application
- Capacitor installation is mandatory for high-current setups

---

## ⚠️ Wiring Notes

- Verify connector orientation before powering
- Use a smoke stopper for first power-up
- Inspect for solder bridges or debris

---
