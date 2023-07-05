---
sidebar_position: 3
---

# Configuration

Call our **API** to change your device settings remotely.

## Authentication

To use the APIs, you must include a valid API key in the request header `x-api-key`.

Example:

```
GET /API/TT_Inventory.ashx?cmd=query&sn=xxxxxxxxxxxx HTTP/1.1
x-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
...
```

## API Reference

All APIs require the following URL parameters.

- `cmd`
  - Specifies which API is being requested.
- `sn`
  - Specifies which device is being requested.

### Query Inventory

Request that a device report its current inventory.

#### Parameters

- `cmd=query`
- `sn=<serial_number>`

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=query&sn=<serial_number>`

#### Success Response

`"Success: The device will report current inventory to the assigned webhook."`

See [Current Inventory Count](Webhook.md#current-inventory-count) and [Current Inventory Tags](Webhook.md#current-inventory-tags) for results

---

### Clear Inventory

Request that a device clear its current inventory.

#### Parameters

- `cmd=clear`
- `sn=<serial_number>`

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=clear&sn=<serial_number>`

#### Success Response

`"Success: The device will report tag_count = 0 to the assigned webhook on completion."`

See [Current Inventory Count](Webhook.md#current-inventory-count) for result

---

### Set Tag Timeout

Request that a device sets its tag timeout to a value.

#### Parameters

- `cmd=tto`
- `sn=<serial_number>`
- `tto=<tag_timeout>`
  - Duration in seconds a tag must not be seen before being removed from the inventory
  - Must be a positive integer greater than 60.

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=tto&sn=<serial_number>&tto=<tag_timeout>`

#### Success Response

`"Success: The device will report value to the assigned webhook on completion."`

See [Tag Timeout Result](Webhook.md#tag-timeout-result) for result

---

### Set Tag Interval

Request that a device sets its tag interval to a value.

#### Parameters

- `cmd=tin`
- `sn=<serial_number>`
- `tin=<tag_interval>`
  - Duration in seconds of reporting time interval
  - Must be a positive integer greater than 5.

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=tin&sn=<serial_number>&tin=<tag_interval>`

#### Success Response

`"Success: The device will report value to the assigned webhook on completion."`

See [Tag Interval Result](Webhook.md#tag-interval-result) for result

---

### Set Scan Interval

Request that a device sets its scan interval to a value.

#### Parameters

- `cmd=scn`
- `sn=<serial_number>`
- `scn=<scan_interval>`
  - Duration in seconds of UHF Reader scan interval
  - Must be a positive integer greater than 5.

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=scn&sn=<serial_number>&scn=<scan_interval>`

#### Success Response

`"Success: The device will report value to the assigned webhook on completion."`

See [Scan Interval Result](Webhook.md#scan-interval-result) for result

---

### Request Device Reboot

Request that a device reboots.

#### Parameters

- `cmd=rbt`
- `sn=<serial_number>`

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=rbt&sn=<serial_number>`

#### Success Response

`"Success: The device will report Online to the assigned webhook on completion."`

See [Device Connected](Webhook.md#device-connected) for result

---

### Request Device Location

Request that a device reports its current location.

#### Parameters

- `cmd=loc`
- `sn=<serial_number>`

#### Endpoint

`http://tagtrackv3.us-east-2.elasticbeanstalk.com/API/TT_Inventory.ashx?cmd=loc&sn=<serial_number>`

#### Success Response

`"Success: The device will report location to the assigned webhook on completion."`

See [Device Location Report](Webhook.md#device-location-report) for result

