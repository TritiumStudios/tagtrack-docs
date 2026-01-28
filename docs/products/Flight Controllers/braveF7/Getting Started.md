---
sidebar_position: 2
---

# Getting Started (BetaFlight)

# Getting Started with the Brave F7 Flight Controller

This guide walks through the initial setup of the **Ewing Aerospace Brave F7 Flight Controller**, from first power-up through basic firmware configuration. It is intended for integrators, manufacturers, and advanced users deploying the Brave F7 in professional or mission-critical unmanned systems.

---

## What you will need

Before beginning, ensure you have the following:

- Brave F7 Flight Controller [[Order Here]](https://www.ewingaerospace.com/products/components-example-product-2?variant=43573438087277)
- USB-C cable (data-capable)
- Computer with Betaflight Configurator installed
- Power source (flight battery compatible with your system, 3–8S LiPo)
- ESC / motor assembly
- Receiver (RC link of your choice)
- Optional peripherals:
  - GPS
  - VTX / camera
  - Barometer-dependent features (altitude hold, logging)

---

## Step 1: Physical inspection

1. Verify the flight controller is free of shipping damage.
2. Confirm mounting orientation and that the board is installed with adequate vibration isolation.
3. Ensure no conductive debris or loose fasteners are present.

> **Note:** The Brave F7 is not waterproof. If operating in high-humidity or exposed environments, apply conformal coating or use an appropriate enclosure.

---

## Step 2: USB connection and driver verification

1. Connect the Brave F7 to your computer using a USB-C cable.
2. Launch **Betaflight Configurator**.
3. Select the newly detected COM/USB device.
4. Click **Connect**.

If the board does not appear:
- Try a different USB cable
- Avoid USB hubs
- Confirm your OS USB drivers are up to date

---

## Step 3: Firmware target selection

The Brave F7 uses the following Betaflight firmware target: RRIOT_F722


1. Open the **Firmware Flasher** tab.
2. Select target `RRIOT_F722`.
3. Choose the latest stable Betaflight release approved for your program.
4. Flash firmware.

> **Recommendation:** Disable “Full Chip Erase” unless migrating from unknown firmware.

### Download offical release .bin files: 
**For ICM IMU flight controllers: **
[Download RRIOT_F722](./files/betaflight_RRIOT_F722.hex) 


---

## Step 4: Initial power-up check

After flashing:

1. Reconnect to the board.
2. Verify:
   - Gyro responds to movement
   - Board orientation matches the 3D model
   - No unexpected warning flags appear

If orientation is incorrect:
- Set **Board and Sensor Alignment** in Betaflight.

---

## Step 5: Power and BEC verification

The Brave F7 supports:

- **3–8S LiPo input**
- **10V BEC @ 2A**
- **5V BEC @ 3A**

1. Connect your ESC and peripherals.
2. Apply battery power.
3. Confirm:
   - No overheating
   - Stable voltage readings
   - No brownouts or resets

> **Important:** When using high-power VTX systems, USB power alone may be insufficient. Use a flight battery during configuration if instability is observed.

---

## Step 6: Receiver setup

1. Connect your receiver to the appropriate UART.
2. Enable **Serial RX** on that UART.
3. Select the correct receiver protocol.
4. Verify channel movement in the **Receiver** tab.

---

## Step 7: Motor and ESC setup

1. Remove propellers before proceeding.
2. Configure motor protocol (e.g., DShot).
3. Verify motor order and direction.
4. Perform ESC calibration if required.

> **WARNING:** Never install propellers during bench configuration.

---

## Step 8: Failsafe configuration

Proper failsafe behavior is mandatory for safe operation.

1. Configure receiver failsafe behavior.
2. Set Betaflight failsafe to:
   - Cut motors
   - Disarm
   - Enter recovery mode if applicable

Test failsafe on the bench before flight.

---

## Step 9: Sensor calibration

Calibrate the following as required:

- Accelerometer (level surface)
- Compass (if GPS is installed)
- Barometer (automatic)

Ensure calibrations are performed in the final installation orientation.

---

## Step 10: Pre-flight checklist

Before flight, confirm:

- Props installed in correct orientation
- Frame orientation matches Betaflight
- Receiver link stable
- GPS lock (if used)
- Failsafe verified
- No active warning flags

---

## Next steps

- Configure flight modes and tuning
- Enable blackbox logging
- Integrate GPS-assisted features
- Review wiring diagrams and pinouts
- Validate operation in controlled test flights

For advanced configuration, system integration guidance, and compliance documentation, refer to the additional Brave F7 documentation pages.

---

## Safety and compliance notice

The Brave F7 Flight Controller is intended for professional unmanned systems integration. Improper configuration, installation, or operation may result in loss of vehicle control. Always follow applicable regulations, airspace rules, and program-specific safety requirements..

---

© Ewing Aerospace. All rights reserved.




