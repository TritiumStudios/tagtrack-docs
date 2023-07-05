---
sidebar_position: 1
---

# Getting Started

Get to know the TTL-230 Inflator Translator

## Overview

This device provides a **translation service** between BLE and UART or Cellular and UART to a Haltec Inflator with the capability to **disable** both communication channels over Cellular.

## Functionality

### BLE

**Connect** a client BLE device to this device (named `TTL-230`). There are **two main characteristics** in service `00FF`.

- `FF01` (Write) Use this characteristic to **send messages** to the inflator. Messages are expected to be UTF8 strings in JSON format.
- `FF02` (Read and Notify) Use this characteristic to **read messages** from the inflator. Messages arrive in JSON format so use a UTF8 parser to read content. **Subscribe** to this characteristic to be notified when a new message arrives.

When the device first initializes, the Read Channel will be set to the value 'READY'. After this, you may begin communicating with the inflator.

#### Sending a command

When a command is successfully parsed and sent to the inflator, the **TTL-230** will respond with a message on the Read Channel `{"cmd":"get_status"}` that includes the `commandType` of the command. If there is an error when parsing the command or the command is not supported, the device will respond with `{"err":1}`. If the message is not JSON or doesn't include a `commandType`, the device will not respond at all. If BLE communication is disabled, the device will respond with `{"ble":0}`.

#### Receiving a message

When a supported message is received from the **inflator**, it will be translated to JSON and sent to the Read Channel. **If BLE communication is disabled**, the device will not transmit messages.

### Cellular

Cellular communication to the inflator works in the same way as BLE but using different communication channels.

## Configuration

The device configuration can be managed over Cellular. Send commands to `devices/ttl-230/<imei>/cmd` and listen for responses at `devices/ttl-230/<imei>/status`.

- `{ "cfg": "?" }`

  will respond with current device configurations

- `{ "cell": 1 or 0 }`

  Enable/disable inflator communication over cellular and will respond with current device configurations

- `{ "ble": 1 or 0 }`

  Enable/disable inflator communication over BLE and will respond with current device configurations

## LED status

- Pulsing Blue: BLE enabled
- Pulsing Green: BLE enabled and device connected
- Pulsing Red: BLE disabled
- Flash Blue: Cellular enabled
- Flash Red: Cellular disabled
- Flash Purple: Connected to the network

## UART Pins - `J3`

`| *V_ref | Gnd | RX | TX |`

Baud rate is 9600.

## Supported Commands

See **External Control Communication Protocol Documentation** supplied by [Haltec Corp](https://www.haltec.com).

- `link`
- `unlink`
- `feed autocorrect`
- `feed pressure`
- `feed temperature`
- `feed_error`
- `clear_error`
- `begin_inflation`
- `purge_tire`
- `enable_fpp`
- `disable_fpp`
- `emergency_stop`
- `clear_emergency_stop`
- `set_N2P_cycles`
- `set_OPS_pressure`
- `set_target`
- `get_status`
- `get_gauged_pressure`
- `get_current_pressure`
- `get_supply_pressure`
- `get_voltage`
- `get_temperature`
- `set_bead_high_percent`
- `set_bead_low_percent`
- `get_serial_number`
- `get_total_cycles`
- `inflation_override`
- `emergency_stop_feed`

