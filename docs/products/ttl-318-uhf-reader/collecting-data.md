---
sidebar_position: 2
---

# Collecting Data

Use a **webhook** to collect data from the TTL-318.

TagTrack will forward device messages to a specified webhook. Use these messages to collect data from the device.

## Messages

### Tags Added

Automatically sent when tag(s) are added to the inventory.

`{ "device_id": <serial_number>, "tags_added": [ <tag_1>, <tag_2>, ... ] }`

### Tags Removed

Automatically sent when a tag(s) are removed from the inventory.

`{ "device_id": <serial_number>, "tags_removed": [ <tag_1>, <tag_2>, ... ] }`

### Current Inventory Count

Sent in response to a query of the inventory (See [Query Inventory API](configuration.md#query-inventory)).

`{ "device_id": <serial_number>, "tag_count": <tag_count> }`

### Current Inventory Tags

Sent in response to a query of the inventory (See [Query Inventory API](configuration.md#query-inventory)).

`{ "device_id": <serial_number>, "tags": [ <tag_1>, <tag_2>, ... ] }`

### Tag Timeout Result

Sent in response to setting the tag timeout (See [Set Tag Timeout API](configuration.md#set-tag-timeout)).

`{ "device_id": <serial_number>, "tag_timeout": <tag_timeout> }`

### Tag Interval Result

Sent in response to setting the tag interval (See [Set Tag Interval API](configuration.md#set-tag-interval)).

`{ "device_id": <serial_number>, "tag_interval": <tag_interval> }`

### Scan Interval Result

Sent in response to setting the scan interval (See [Set Scan Interval API](configuration.md#set-scan-interval)).

`{ "device_id": <serial_number>, "scan_interval": <scan_interval> }`

### Device Connected

Sent when the device connects to the network.

`{ "device_id": <serial_number>, "status": "Online" }`

### Device Disconnected

Sent when the device disconnects from the network.

`{ "device_id": <serial_number>, "status": "Offline" }`

### Device Location Report

Sent when the device has an initial GPS fix as well as in response to requesting the current location (See [Request Device Location API](configuration.md#request-device-location)).

`{ "device_id": <serial_number>, "latitude": <latitude>, "longitude": <longitude> }`

## Notes

- The endpoint should be configured to accept POST requests in JSON format.
- The endpoint should respond with a HTTP status code of 200 within 5 seconds.
- If a 200 status code is not returned within 5 seconds, the message service will attempt up to 3 requests with a delay of 5 seconds between requests. After this, the message will be discarded.

