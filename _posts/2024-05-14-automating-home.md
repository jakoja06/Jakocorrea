---
title: "IoT Plant Monitoring System"
excerpt: "An automated system using ESP32 and Python to monitor soil moisture and sunlight levels in real-time."
header:
  teaser: /assets/images/iot-teaser.jpg # This image shows up in the grid
categories:
  - IoT
  - Engineering
tags:
  - Python
  - C++
  - ESP32
toc: true
toc_label: "Project Overview"
toc_sticky: true
---

## The Problem
Plants often die due to inconsistent watering schedules. As an engineer, I wanted to solve this with data.

## The Solution
I built a centralized dashboard that receives telemetry from distributed ESP32 microcontrollers.

### Hardware Used
* ESP32 Dev Kit V1
* Capacitive Soil Moisture Sensor v1.2
* DHT22 Temperature Sensor

### Code Snippet (C++ Firmware)
Here is the core logic for reading the sensor data before sending it to the MQTT broker:

```cpp
void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  int moisture = analogRead(34);

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
  sendToCloud(temperature, moisture);
  delay(2000);
}
