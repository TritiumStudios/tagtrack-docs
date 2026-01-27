---
sidebar_position: 3
---

# Getting Started (iNav)

# Getting Started with the Brave F7 Flight Controller (iNav)

This guide walks through the initial setup of the **Ewing Aerospace Brave F7 Flight Controller** using **iNav**, from first power-up through basic firmware configuration. It is intended for integrators, manufacturers, and advanced users deploying the Brave F7 in professional, long-range, or navigation-focused unmanned systems.

---

## What you will need

Before beginning, ensure you have the following:

- Brave F7 Flight Controller [[Order Here]](https://www.ewingaerospace.com/products/components-example-product-2?variant=43573438087277)
- USB-C cable (data-capable)
- Computer with **iNav Configurator** installed
- Power source (flight battery compatible with your system, 3–8S LiPo)
- ESC / motor assembly
- Receiver (RC link of your choice)
- Optional peripherals:
  - GPS + compass module (recommended)
  - VTX / camera
  - Barometer-dependent features (altitude hold, RTH, logging)

---

## Step 1: Physical inspection

1. Verify the flight controller is free of shipping damage.
2. Confirm mounting orientation and that the board is installed with adequate vibration isolation.
3. Ensure no conductive debris or loose fasteners are present.

> **Note:** The Brave F7 is not waterproof. If operating in high-humidity or exposed environments, apply conformal coating or use an appropriate enclosure.

---

## Step 2: USB connection and driver verification

1. Connect the Brave F7 to your computer using a USB-C cable.
2. Launch **iNav Configurator**.
3. Select the newly detected COM/USB device.
4. Click **Connect**.

If the board does not appear:
- Try a different USB cable
- Avoid USB hubs
- Confirm your OS USB drivers are up to date
- Press and hold the boot button (if present) while connecting USB

---

## Step 3: Firmware target selection

The Brave F7 uses the following iNav firmware target: $ RRIOT_F722


1. Open the **Firmware Flasher** tab.
2. Select target `RRIOT_F722`.
3. Choose the latest stable **iNav** release.
4. Flash firmware.

> **Recommendation:** Enable **Full Chip Erase** when switching from Betaflight or unknown firmware.

### Download offical release .bin files: 
**For ICM IMU flight controllers: **
[Download RRIOT_F722](./files/inav_RRIOT_F722.hex) 

---

## Step 4: Initial power-up and orientation check

After flashing:

1. Reconnect to the board.
2. Verify:
   - Gyro responds to movement
   - Board orientation matches the on-screen model
   - No critical system errors appear

If orientation is incorrect:
- Configure **Board Alignment** in the **Configuration** tab.

---

## Step 5: Power and BEC verification

The Brave F7 supports:

- **3–8S LiPo input**
- **10V BEC @ 2A**
- **5V BEC @ 3A**

1. Connect your ESC and peripherals.
2. Apply battery power.
3. Confirm:
   - Stable voltage readings
   - No overheating
   - No brownouts or resets

> **Important:** USB power alone may be insufficient for GPS or VTX systems. Use a flight battery during configuration if instability is observed.

---

## Step 6: Receiver setup

1. Connect your receiver to the appropriate UART.
2. Enable **Serial RX** on that UART.
3. Select the correct receiver protocol (SBUS, CRSF, ELRS, etc.).
4. Verify channel movement in the **Receiver** tab.

---

## Step 7: Motor and ESC setup

1. **Remove propellers before proceeding.**
2. Select motor output protocol (DShot recommended).
3. Verify motor order and direction.
4. Perform ESC calibration if required.

> **WARNING:** Never install propellers during bench configuration.

---

## Step 8: Navigation sensor configuration

iNav relies on navigation sensors for assisted flight modes.

1. Configure **GPS** (UART, protocol, baud rate).
2. Enable **Compass** if using an external magnetometer.
3. Verify:
   - GPS lock
   - Correct compass orientation
   - Reasonable heading values

Perform compass calibration outdoors and away from ferrous materials.

---

## Step 9: Flight modes and failsafe configuration

Proper failsafe configuration is mandatory.

1. Assign flight modes (ANGLE, NAV ALTHOLD, NAV RTH, etc.).
2. Configure failsafes:
   - RC signal loss
   - GPS-assisted RTH (if enabled)
3. Verify failsafe behavior on the bench.

---

## Step 10: Pre-arm and system checks

Before flight, confirm:

- Sensors calibrated
- GPS has sufficient satellites (if used)
- Compass health is acceptable
- Receiver link stable
- No active critical warnings

Resolve all warnings before flight.

---

## Pre-flight checklist

Before flight, confirm:

- Props installed correctly
- Frame orientation matches iNav configuration
- Flight modes verified
- Failsafes tested
- GPS lock achieved
- No active system errors

---

## Next steps

- Tune PID and navigation parameters
- Configure RTH and mission features
- Enable onboard logging
- Integrate telemetry and OSD
- Validate operation through controlled test flights

For advanced configuration, system integration guidance, and compliance documentation, refer to the additional Brave F7 documentation pages.

---

## Safety and compliance notice

The Brave F7 Flight Controller is intended for professional unmanned systems integration. Improper configuration, installation, or operation may result in loss of vehicle control. Always follow applicable regulations, airspace rules, and program-specific safety requirements.

---

© Ewing Aerospace. All rights reserved.
