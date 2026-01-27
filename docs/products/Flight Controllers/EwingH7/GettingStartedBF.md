---
sidebar_position: 3
---

# Getting Started (Betaflight)

# Getting Started with the Ewing H7 Flight Controller (Betaflight)

This guide walks through the initial setup of the **Ewing Aerospace H7 Flight Controller** using **Betaflight**, from first power-up through basic firmware configuration. It is intended for integrators, manufacturers, and advanced users deploying the H7 in professional or mission-critical unmanned systems.

---

[[Order Here]](https://www.ewingaerospace.com/products/ewing-aerospace-h7-flight-controller-ndaa-compliant-and-blueuas?variant=43614880235629)

---

## What you will need

Before beginning, ensure you have the following:

- Ewing H7 Flight Controller [[Order Here]](https://www.ewingaerospace.com/products/ewing-aerospace-h7-flight-controller-ndaa-compliant-and-blueuas?variant=43614880235629)
- USB-C cable (data-capable)
- Computer with **Betaflight Configurator** installed
- Power source (flight battery compatible with your system)
- ESC / motor assembly
- Receiver (RC link of your choice)
- Optional peripherals:
  - GPS
  - VTX / camera
  - Digital HD FPV system
  - Barometer-dependent features (logging, altitude estimation)

---

## Step 1: Physical inspection

1. Verify the flight controller is free of shipping damage.
2. Confirm mounting orientation and that the board is installed with adequate vibration isolation.
3. Ensure no conductive debris or loose fasteners are present.

> **Note:** The Ewing H7 is not waterproof. If operating in high-humidity or exposed environments, apply conformal coating or use an appropriate enclosure.

---

## Step 2: USB connection and driver verification

1. Connect the Ewing H7 to your computer using a USB-C cable.
2. Launch **Betaflight Configurator**.
3. Select the newly detected COM/USB device.
4. Click **Connect**.

If the board does not appear:
- Try a different USB cable
- Avoid USB hubs
- Confirm your OS USB drivers are up to date
- Press the boot button (if present) while plugging in USB

---

## Step 3: Firmware target selection

The Ewing H7 uses the following Betaflight firmware target: $ EA_H743


1. Open the **Firmware Flasher** tab.
2. Select target `EWING_H7`.
3. Choose the latest **stable** Betaflight release approved for your program.
4. Flash firmware.

> **Recommendation:** Disable **Full Chip Erase** unless migrating from unknown or third-party firmware.

### Download offical release .bin files: 
**For ICM IMU flight controllers: **
[Download EA_H743_ICM](./files/betaflight_EA_H743_ICM.hex) 

**For BMI IMU flight controllers: **
[Download EA_H743_BMI](./files/betaflight_EA_H743_BMI.hex) 


---

## Step 4: Initial power-up check

After flashing:

1. Reconnect to the flight controller.
2. Verify:
   - Gyro responds to movement
   - Board orientation matches the 3D model
   - No unexpected warning flags appear

If orientation is incorrect:
- Set **Board and Sensor Alignment** in Betaflight.

---

## Step 5: Power and BEC verification

1. Connect your ESC and peripherals.
2. Apply battery power.
3. Confirm:
   - Stable voltage readings
   - No overheating
   - No brownouts or resets

> **Important:** USB power alone may be insufficient for high-power peripherals (HD VTX, GPS). Use a flight battery during configuration if instability is observed.

---

## Step 6: Receiver setup

1. Connect your receiver to the appropriate UART.
2. Enable **Serial RX** on that UART.
3. Select the correct receiver protocol (CRSF, SBUS, ELRS, etc.).
4. Verify channel movement in the **Receiver** tab.

---

## Step 7: Motor and ESC setup

1. **Remove propellers before proceeding.**
2. Select motor protocol (DShot300 / DShot600 / DShot1200).
3. Verify motor order and direction.
4. Perform ESC calibration if required.

> **WARNING:** Never install propellers during bench configuration.

---

## Step 8: Failsafe configuration

Proper failsafe behavior is mandatory.

1. Configure receiver-side failsafe behavior.
2. Set Betaflight failsafe to:
   - Cut motors
   - Disarm
   - Enter GPS rescue (if configured)

Test failsafe behavior on the bench.

---

## Step 9: Sensor calibration

Calibrate the following as required:

- Accelerometer (level surface)
- Compass (if GPS is installed)
- Barometer (automatic, if present)

Ensure calibrations are performed in the final installation orientation.

---

## Step 10: Pre-flight checklist

Before flight, confirm:

- Props installed correctly
- Frame orientation matches Betaflight
- Receiver link stable
- GPS lock (if used)
- Failsafe verified
- No active warning flags

---

## Next steps

- Configure flight modes
- Tune PID parameters
- Enable blackbox logging
- Integrate GPS-assisted features
- Review wiring diagrams and pinouts
- Validate operation in controlled test flights

For advanced configuration, system integration guidance, and compliance documentation, refer to the additional Ewing H7 documentation pages.

---

## Safety and compliance notice

The Ewing H7 Flight Controller is intended for professional unmanned systems integration. Improper configuration, installation, or operation may result in loss of vehicle control. Always follow applicable regulations, airspace rules, and program-specific safety requirements.

---

© Ewing Aerospace. All rights reserved.
