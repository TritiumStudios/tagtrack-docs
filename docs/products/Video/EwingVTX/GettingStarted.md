---
sidebar_position: 3
---

# Getting Started – EwingVTX

The **Ewing Aerospace EwingVTX** is a high-power analog video transmitter designed for professional unmanned systems integration. This guide walks through basic setup, LED indicators, button operation, and common configuration tasks.

---

## Overview

- **Channels:** 80
- **Frequency Range:** 4.9 GHz – 6.0 GHz
- **Power Levels:** PIT / 25 mW / 200 mW / 500 mW / 1.5 W / 2.5 W
- **Control Methods:**  
  - On-board button  
  - Tramp protocol (via flight controller)

---

## LED Indicators

The EwingVTX uses three LEDs to indicate its current configuration state.

| LED Color | Function |
|----------|----------|
| **Red** | Power level |
| **Green** | Channel |
| **Blue** | Band |

When entering a configuration mode, the corresponding LED will illuminate and flash.

---

## Button Operation

The EwingVTX includes a single multi-function button labeled **KEY**.  
Short presses and long presses are used to enter different configuration modes.

### Channel Selection Mode

1. **Short press** the KEY button once.
2. The **Green LED** will turn on and flash.
3. Each short press increments the channel.
4. After several seconds of no input, the selection is saved automatically.

---

### Band Selection Mode

1. From normal operation, **press and hold** the KEY button for approximately **3 seconds**.
2. The **Blue LED** will turn on and flash.
3. Use **short presses** to cycle through available bands.
4. Release the button and wait for the setting to save.

---

### Power Level Selection Mode

1. From Band Selection mode, **continue holding** the KEY button for another **~3 seconds**.
2. The **Red LED** will turn on and flash.
3. Use **short presses** to cycle through power levels.
4. Release the button and wait for the setting to save.

---

## Power Levels

| Mode | Description |
|-----|-------------|
| PIT | Ultra-low output for bench testing |
| 25 mW | Low-power operation |
| 200 mW | Medium-power operation |
| 500 mW | High-power operation |
| 1.5 W | Very high-power operation |
| 2.5 W | Maximum output power |

⚠️ **High-power modes require adequate airflow.**

---

## Unlocking Frequencies and Power Levels

The EwingVTX may ship in a **locked state** depending on configuration.

### Unlock Procedure

1. **Press and hold** the KEY button.
2. Observe the **Red LED (Power)** behavior:
   - Red LED turns **on → off → on**
3. **Release** the button.

### LED Status Meaning

| Red LED State | Meaning |
|-------------|---------|
| Solid ON | Locked |
| Flashing | Unlocked |

When unlocked, all supported frequencies and power levels are available.

---

## PIT Mode (On / Off)

PIT mode allows the VTX to transmit at extremely low power for setup and bench testing.

### Toggle PIT Mode

- **Double-click** the KEY button.

### PIT Mode Indication

| Red LED State | Meaning |
|-------------|---------|
| Red LED OFF | PIT mode ON |
| Red LED ON | PIT mode OFF |

---

## Tramp Control Behavior

When a **Tramp control cable** is connected to a flight controller:

- The on-board **KEY button is disabled**
- Frequency, band, and power are controlled entirely by the flight controller
- OSD or ground-station software takes precedence

This prevents configuration conflicts during flight.

---

## Integration Notes

- Ensure a **proper antenna is connected** before powering the VTX.
- Do **not operate at high power without airflow**.
- Some flight-controller firmware may support fewer than 80 channels; verify channel mapping.
- Operation must comply with applicable RF regulations and authorization requirements.

---

## Safety Notice

The EwingVTX is intended for **professional unmanned systems integration**. Improper configuration or unauthorized operation may result in RF interference, system damage, or regulatory violations.

Always follow applicable regulations, spectrum authorization rules, and program-specific requirements.

---

© Ewing Aerospace. All rights reserved.
