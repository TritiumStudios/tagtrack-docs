---
sidebar_position: 2
---

# Getting Started (Ardupilot)

# Getting Started with the Ewing H7 Flight Controller

This guide walks through the initial setup of the **Ewing Aerospace H7 Flight Controller**, from first power-up through basic firmware configuration using **ArduPilot**. It is intended for integrators, manufacturers, and advanced users deploying the H7 in professional or mission-critical unmanned systems.

---

[[Order Here]](https://www.ewingaerospace.com/products/ewing-aerospace-h7-flight-controller-ndaa-compliant-and-blueuas?variant=43614880235629)

---

## What you will need

Before beginning, ensure you have the following:

- Ewing H7 Flight Controller [[Order Here]](https://www.ewingaerospace.com/products/ewing-aerospace-h7-flight-controller-ndaa-compliant-and-blueuas?variant=43614880235629)
- USB-C cable (data-capable)
- Computer with **Mission Planner** or **QGroundControl** installed
- Power source (flight battery compatible with your system)
- ESC(s) / motor assembly
- Receiver (RC link of your choice)
- Optional peripherals:
  - GPS + compass module
  - Airspeed sensor
  - VTX / camera
  - Additional telemetry radios
  - Barometer-dependent features (altitude hold, logging)

---

## Step 1: Physical inspection

1. Verify the flight controller is free of shipping damage.
2. Confirm mounting orientation and that the board is installed with adequate vibration isolation.
3. Ensure no conductive debris or loose fasteners are present.

> **Note:** The Ewing H7 is not waterproof. If operating in high-humidity or exposed environments, apply conformal coating or use an appropriate enclosure.

---

## Step 2: USB connection and driver verification

1. Connect the Ewing H7 to your computer using a USB-C cable.
2. Launch **Mission Planner** (Windows) or **QGroundControl** (Windows, macOS, Linux).
3. Allow the application to detect the connected flight controller.
4. Select the detected COM/USB device and click Connect.

If the board does not appear:
- Try a different USB cable
- Avoid USB hubs
- Confirm USB drivers are installed and up to date
- Verify the board enters bootloader mode if required

---

## Step 3: Firmware installation (ArduPilot)

The Ewing H7 supports **ArduPilot** firmware.

1. In Mission Planner, open **Install Firmware**.
2. Select the appropriate vehicle type:
   - **Copter**
   - **Plane**
   - **Rover**
   - **Sub**
3. Choose the recommended stable ArduPilot release for your program.
4. Install firmware and wait for completion.

> **Recommendation:** Use official stable ArduPilot releases unless your program explicitly requires a development or custom build.

### Download offical release .bin files: 
**For ICM IMU flight controllers: **
[Download EA_H743_ICM](./files/ardupilot_EA_H743_ICM.hex) 

**For BMI IMU flight controllers: **
[Download EA_H743_BMI](./files/ardupilot_EA_H743_BMI.hex) 

---

## Step 4: Initial power-up and orientation check

After firmware installation:

1. Reconnect to the flight controller.
2. Verify:
   - Gyroscopes respond to movement
   - Accelerometers register orientation correctly
   - No critical errors are reported

If orientation is incorrect:
- Set **Board Orientation** in the ArduPilot configuration parameters.

---

## Step 5: Power and BEC verification

Verify the power system before connecting motors or propellers.

1. Connect ESC(s) and peripherals.
2. Apply battery power.
3. Confirm:
   - Stable voltage readings
   - No overheating
   - No brownouts or resets

> **Important:** USB power alone is insufficient for most peripherals. Use a flight battery when validating full system power.

---

## Step 6: Sensor calibration

ArduPilot requires sensor calibration before operation.

Calibrate the following:

- Accelerometer (level surface, multiple orientations)
- Compass (if installed)
- Barometer (automatic)
- Airspeed sensor (if installed)

Ensure calibrations are performed with the aircraft fully assembled.

---

## Step 7: RC input setup

1. Connect your receiver to the appropriate UART or RC input.
2. Configure the RC protocol (SBUS, CRSF, PWM, etc.).
3. Perform **Radio Calibration** in Mission Planner or QGroundControl.
4. Verify correct channel movement and range.

---

## Step 8: Motor and ESC setup

1. **Remove propellers before proceeding.**
2. Configure motor layout for your vehicle type.
3. Assign motor outputs correctly.
4. Calibrate ESCs if required by your ESC firmware.

> **WARNING:** Never install propellers during bench configuration.

---

## Step 9: Flight modes and failsafe configuration

Proper failsafe configuration is mandatory.

1. Assign flight modes to RC switches.
2. Configure failsafes:
   - RC failsafe
   - Battery failsafe
   - GPS failsafe (if applicable)
3. Verify failsafe behavior on the bench.

---

## Step 10: Pre-arm and system checks

Before flight, confirm:

- No pre-arm error messages
- Sensors calibrated and healthy
- RC link stable
- GPS lock (if used)
- Compass consistency within limits
- Battery voltage within safe range

Resolve all pre-arm warnings before attempting flight.

---

## Pre-flight checklist

Before flight, confirm:

- Props installed correctly and secured
- Frame orientation matches ArduPilot configuration
- Flight modes verified
- Failsafes tested
- Telemetry link (if used) operational
- No active critical warnings

---

## Next steps

- Configure advanced navigation parameters
- Tune PID and control loops
- Enable onboard logging
- Integrate companion computers or payloads
- Validate operation through controlled test flights

For advanced configuration, system integration guidance, and compliance documentation, refer to the additional Ewing H7 documentation pages.

---

## Safety and compliance notice

The Ewing H7 Flight Controller is intended for professional unmanned systems integration. Improper configuration, installation, or operation may result in loss of vehicle control. Always follow applicable regulations, airspace rules, and program-specific safety requirements.

---

© Ewing Aerospace. All rights reserved.
