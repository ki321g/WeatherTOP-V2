import { read } from "fs-extra";
import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";

export const latestReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsByStationId(id);
  let latestReading = null;
  const reading = {
    latestCode: null,
    latestCodeLabel: null,
    latestTemp: null,
    latestTempFahrenheit: null,
    latestWindSpeed: null,
    latestWindSpeedBFT: null,
    windSpeedLabel: null,
    latestPressure: null,
    readingsRecorded: 0,
  };
  if (stationReadings.length > 0) {
    latestReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[latestReading].code;
    reading.latestCodeLabel = conversions.codeLablel(reading.latestCode);
    reading.latestTemp = stationReadings[latestReading].temperature;
    reading.latestTempFahrenheit = conversions.convertToFahrenheit(reading.latestTemp);
    reading.minTemp = minMaxReadings(stationReadings, "temperature", "min");
    reading.maxTemp = minMaxReadings(stationReadings, "temperature", "max");
    reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
    reading.latestWindSpeedBFT = conversions.convertToBeaufort(reading.latestWindSpeed);
    reading.windSpeedLabel = conversions.windSpeedLabel(reading.latestWindSpeedBFT);
    reading.minWindSpeed = minMaxReadings(stationReadings, "windSpeed", "min");
    reading.maxWindSpeed = minMaxReadings(stationReadings, "windSpeed", "max");
    reading.latestPressure = stationReadings[latestReading].pressure;
    reading.minPressure = minMaxReadings(stationReadings, "pressure", "min");
    reading.maxPressure = minMaxReadings(stationReadings, "pressure", "max");
    reading.readingsRecorded = stationReadings.length;
  }
  return {
    latestReading: latestReading,
    reading: reading,
  };
};

function minMaxReadings(stationReadings, readingType, minMax) {
  if (readingType === "temperature") {
    let minTemp = Math.min(...stationReadings.map((stationReadings) => stationReadings.temperature));
    let maxTemp = Math.max(...stationReadings.map((stationReadings) => stationReadings.temperature));

    if (minMax === "min") {
      return minTemp;
    } else if (minMax === "max") {
      return maxTemp;
    }
  } else if (readingType === "windSpeed") {
    let minWindSpeed = Math.min(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
    let maxWindSpeed = Math.max(...stationReadings.map((stationReadings) => stationReadings.windSpeed));
    if (minMax === "min") {
      return minWindSpeed;
    } else if (minMax === "max") {
      return maxWindSpeed;
    }
  } else if (readingType === "pressure") {
    let minPressure = Math.min(...stationReadings.map((stationReadings) => stationReadings.pressure));
    let maxPressure = Math.max(...stationReadings.map((stationReadings) => stationReadings.pressure));
    if (minMax === "min") {
      return minPressure;
    } else if (minMax === "max") {
      return maxPressure;
    }
  }
}
