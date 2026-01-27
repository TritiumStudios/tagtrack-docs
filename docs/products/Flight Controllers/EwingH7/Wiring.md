---
sidebar_position: 3
---


## Wiring and Connector Pinout Guide

This document provides wiring guidance and connector pinouts for the **Brave F7 Flight Controller**.  
Pin assignments are based on the official connector pinout diagram.

> **Important**
> - Wire colors shown in diagrams are for reference only.
> - Always verify pin orientation before applying power.
> - The Brave F7 is not waterproof; environmental protection is required for exposed installations.

---


---

## ESC Connector (Top)

Used for 4-in-1 ESC signal and telemetry connections.

| Pin | Signal | Description |
|---|---|---|
| 1 | ESC1 | Motor 1 signal |
| 2 | ESC2 | Motor 2 signal |
| 3 | ESC3 | Motor 3 signal |
| 4 | ESC4 | Motor 4 signal |
| 5 | UART5 RX | ESC telemetry input |
| 6 | ADC CURR | Current sense input |
| 7 | GND | Ground |
| 8 | VIN | Battery voltage input (VBAT) |

---

## Camera Connector (CAM)

Analog camera input and power.

| Pin | Signal | Description |
|---|---|---|
| 1 | 5V | Camera power output |
| 2 | GND | Ground |
| 3 | VI | Video input (analog) |
| 4 | CC | Camera control (UART / menu control) |
| 5 | GND | Ground |

---

## AVTX Connector (Analog VTX)

For analog video transmitters.

| Pin | Signal | Description |
|---|---|---|
| 1 | 10V | Regulated 10V power output |
| 2 | GND | Ground |
| 3 | VO | Video output |
| 4 | UART3 RX | VTX control RX |
| 5 | UART3 TX | VTX control TX |

---

## HDVTX Connector (Digital / HD VTX)

For digital FPV systems.

| Pin | Signal | Description |
|---|---|---|
| 1 | 10V | Regulated 10V power output |
| 2 | GND | Ground |
| 3 | UART2 TX | HD system TX |
| 4 | UART2 RX | HD system RX |
| 5 | GND | Ground |
| 6 | UART6 RX | Additional RX (system dependent) |

> **Note:** UART usage depends on the HD system firmware and configuration.

---

## Receiver Connector (RX)

Dedicated receiver input connector.

| Pin | Signal | Description |
|---|---|---|
| 1 | UART4 TX | Receiver TX |
| 2 | UART4 RX | Receiver RX |
| 3 | GND | Ground |
| 4 | 5V | Receiver power output |

---

## GPS Connector

Used for GPS modules with I²C and UART support.

| Pin | Signal | Description |
|---|---|---|
| 1 | I2C SCL | I²C clock |
| 2 | I2C SDA | I²C data |
| 3 | UART1 TX | GPS TX |
| 4 | UART1 RX | GPS RX |
| 5 | GND | Ground |
| 6 | 5V | GPS power output |

---

## Power Notes

- **Input voltage:** 3–8S LiPo (via ESC / VIN)
- **5V BEC:** up to 3A
- **10V BEC:** up to 2A
- USB power may be insufficient for high-power peripherals (HD VTX, GPS + VTX combined)

> **Best Practice:** When configuring with high-power peripherals attached, power the system with a flight battery in addition to USB.

---

## Wiring Best Practices

- Remove propellers before applying power
- Keep signal wires short and twisted where possible
- Route high-current motor wires away from signal wiring
- Secure all connectors to prevent vibration-related disconnects
- Verify correct UART mapping in Betaflight after wiring

---

## Disclaimer

Improper wiring or incorrect power application may cause permanent damage to the flight controller or connected equipment. Always verify pinouts and voltage requirements before powering the system.

---

© Ewing Aerospace. All rights reserved.


