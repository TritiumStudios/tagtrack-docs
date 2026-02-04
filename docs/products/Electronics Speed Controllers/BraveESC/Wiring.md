---
sidebar_position: 3
---

# Wiring & Pinout Guide  
**Ewing Aerospace**

This document describes the **connector pinout and wiring** for the **Brave 55A 4-in-1 ESC** based on the top and bottom views shown in the reference diagram. Wire colors shown in diagrams are **for reference only** and may not match your harness.

---

## 🔌 ESC ↔ Flight Controller Connector Pinout

### Connector Signal Definitions

| Pin Name | Description | Notes |
|--------|-------------|-------|
| VBAT | Battery voltage output | Direct VBAT from ESC |
| GND | Ground | Common ground |
| ADC_CURR | Current sensor output | Used by FC for current draw |
| TLM | ESC Telemetry | Enable telemetry on FC UART |
| ESC1 | Motor 1 signal | DSHOT / digital |
| ESC2 | Motor 2 signal | DSHOT / digital |
| ESC3 | Motor 3 signal | DSHOT / digital |
| ESC4 | Motor 4 signal | DSHOT / digital |

---

### 📌 Connector Pin Order — **Top View**

When viewing the ESC from the **top side**, with the ESC connector at the top:

| Connector Order (Left → Right) | Signal |
|------------------------------|--------|
| 1 | VBAT |
| 2 | GND |
| 3 | ADC_CURR |
| 4 | TLM |
| 5 | ESC1 |
| 6 | ESC2 |
| 7 | ESC3 |
| 8 | ESC4 |

---

## ⚙️ Motor Output Pads

The Brave 55A is a **4-in-1 ESC**, providing three motor phase pads per motor.

### Motor Pad Mapping (Top View Reference)

| Motor | Location |
|------|----------|
| Motor 1 | Bottom Right |
| Motor 2 | Top Right |
| Motor 3 | Bottom Left |
| Motor 4 | Top Left |

Each motor consists of **three phase pads**. Phase order does not matter; motor direction can be reversed in software.

---

## 🔋 Battery Input Pads

| Pad | Function |
|----|----------|
| + | Battery positive (VBAT) |
| − | Battery ground (GND) |

- Rated for **3–8S LiPo**
- Use **12 AWG wire** or larger
- Install the included **low-ESR capacitor** across these pads as close as possible to the ESC

---

