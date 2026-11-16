---
sidebar_position: 1
---

---

# Operating conditions and performance

| Parameter | Description |
|---|---|
| Power input voltage | 3–8S LiPo (battery input) |
| Power regulation (BEC outputs) | Direct VBAT Passthrough / NO BEC |
| Waterproof performance | Not waterproof. Use external waterproofing/protection as required. |
| Ideal operating temperature | -10°C ~ 55°C |
| Maximum operating temperature (emergency) | 120°C |
| Minimum storage temperature tested | -70°C |
| Minimum temperature for power-on | Approximately -40°C~-50°C |

---

---

# Specifications

| Parameter | Specification |
|---------|---------------|
| Product Name | Ewing 60A 4-in-1 ESC |
| Manufacturer | Ewing Aerospace |
| Firmware | Custom AM32 v2.21, target `EWING_60A_4IN1_G071` |
| Input Voltage | 3–8S LiPo |
| Continuous Current | 60 A per channel |
| Burst Current | 80 A (short duration) |
| ESC Protocols | DSHOT150 / DSHOT300 / DSHOT600 / DSHOT1200 |
| Telemetry | ESC telemetry supported |
| MCU | STM32G071 (32-bit ARM) |
| PWM Frequency | 16 kHz default (adjustable in AM32) |
| Motor Outputs | 4 (4-in-1 configuration) |
| Current Sensor | Integrated |
| Mounting Pattern | 30 × 30 mm |
| Board Dimensions | ~45.4 × 41 × 7.3 mm |
| Power Connector | XT60 (12 AWG lead) |
| Capacitor | External low-ESR electrolytic (included) |
| Operating Temperature | −20 °C to +85 °C (typical) |
| Application | FPV, sUAS, high-performance multirotors |
| Compliance | Fully NDAA compliant (not BlueUAS listed) |


---

# Thermal test results

Bench thermal runs at the baseline settings above, updated 10/21/2026. Tests used 900 KV motors. Battery current is the **total** for the active channels. **NR** means the run duration was unreported.

| Run | Active channels | Battery current | Speed (RPM) | PWM duty | Duration | MOSFET temperatures |
|-----|-----------------|-----------------|-------------|----------|----------|---------------------|
| S04 | 1 | 10 A | 8,800 | 48% | NR | 95°F (35°C) peak |
| S05 | 1 | 37 A | 13,000 | 82% | NR | 150°F (65.6°C) |
| A01 | 4 | 37 A | 8,500 | 48% | NR | 100°F (37.8°C) on all four channels |
| A03 | 4 | 150 A | 13,000 | 89% | 90 s | 205°F (96.1°C) CH1, 181°F (82.8°C) CH2, 187°F (86.1°C) CH3, 172°F (77.8°C) CH4 |
| A06 | 4 | 200 A | 13,800 | 100% | 90 s | 235°F (112.8°C) CH1 peak; settled 190–200°F (87.8–93.3°C) across CH2–CH4 |

The 150 A run (A03) reached a reported thermal plateau. Channels 1 and 3 were closest to the battery terminals.

The first four runs followed selection of the 40-tick deadtime and preceded timing trials; fixed 15° timing was reported for that setup. The 200 A run (A06) returned to 15° and started with fresh batteries. Loaded voltage was unreported for that run.
