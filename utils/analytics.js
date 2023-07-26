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
    windDirection: null,
    windDirectionLabel: null,
    windDirectionIcon: null,
    latestPressure: null,
    readingsRecorded: 0,
  };
  if (stationReadings.length > 0) {
    latestReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[latestReading].code;
    reading.latestCodeLabel = conversions.codeLabel(reading.latestCode);
    reading.latestTemp = stationReadings[latestReading].temperature;
    reading.latestTempFahrenheit = conversions.convertToFahrenheit(reading.latestTemp);
    reading.minTemp = minMaxReadings(stationReadings, "temperature", "min");
    reading.maxTemp = minMaxReadings(stationReadings, "temperature", "max");
    reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
    reading.latestWindSpeedBFT = conversions.convertToBeaufort(reading.latestWindSpeed);
    reading.windSpeedLabel = conversions.windSpeedLabel(reading.latestWindSpeedBFT);
    reading.minWindSpeed = minMaxReadings(stationReadings, "windSpeed", "min");
    reading.maxWindSpeed = minMaxReadings(stationReadings, "windSpeed", "max");
    reading.windDirection = stationReadings[latestReading].windDirection;
    reading.windDirectionLabel = conversions.convertDegreeToDirection(
      stationReadings[latestReading].windDirection,
      "text"
    );
    reading.windDirectionIcon = conversions.convertDegreeToDirection(
      stationReadings[latestReading].windDirection,
      "icon"
    );
    reading.WindChill = conversions.calculateWindChill(reading.latestTemp, reading.latestWindSpeed);
    reading.latestPressure = stationReadings[latestReading].pressure;
    reading.minPressure = minMaxReadings(stationReadings, "pressure", "min");
    reading.maxPressure = minMaxReadings(stationReadings, "pressure", "max");
    reading.trendTemperature = readingTrends(stationReadings.map((stationReadings) => stationReadings.temperature));
    reading.trendWindSpeed = readingTrends(stationReadings.map((stationReadings) => stationReadings.windSpeed));
    reading.trendPressure = readingTrends(stationReadings.map((stationReadings) => stationReadings.pressure));
    
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

/**
 * temperatureTrend() - Returns the current Temperature trend if any
 *
 * @param readings list of readings
 * @return String of higher, lower or no-change
 */
function readingTrends(readings) {
  if (readings.length >= 3) {
    if (
      readings[readings.length - 1] > readings[readings.length - 2] &&
      readings[readings.length - 2] > readings[readings.length - 3]
    ) {
      return "higher";
    } else if (
      readings[readings.length - 1] < readings[readings.length - 2] &&
      readings[readings.length - 2] < readings[readings.length - 3]
    ) {
      return "lower";
    } else {
      return "no-change";
    }
  } else {
    return "no-change";
  }
};
