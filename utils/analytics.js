import { read } from "fs-extra";
import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";
/**
 * This class handles the latestReading analytics
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const latestReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsByStationId(id);
  let latestReading = null;
  const reading = {
    latestCode: null,
    latestCodeLabel: null,
    latestCodeIcon: null,
    latestTemp: null,
    latestTempFahrenheit: null,
    minTemp: null,
    maxTemp: null,
    latestWindSpeed: null,
    latestWindSpeedBFT: null,
    windSpeedLabel: null,
    minWindSpeed: null,
    maxWindSpeed: null,
    windDirection: null,
    windDirectionLabel: null,
    windDirectionIcon: null,
    WindChill: null,
    latestPressure: null,
    minPressure: null,
    maxPressure: null,
    trendTemperature: null,
    trendWindSpeed: null,
    trendPressure: null,    
    readingsRecorded: 0,
  };
  if (stationReadings.length > 0) {
    latestReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[latestReading].code;
    reading.latestCodeLabel = conversions.codeLabel(reading.latestCode);
    reading.latestCodeIcon = conversions.codeIcon(reading.latestCode);
    reading.latestTemp = stationReadings[latestReading].temperature;
    reading.latestTempFahrenheit = conversions.convertToFahrenheit(reading.latestTemp);
    reading.minTemp = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.temperature), "min");
    reading.maxTemp = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.temperature), "max");
    reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
    reading.latestWindSpeedBFT = conversions.convertToBeaufort(reading.latestWindSpeed);
    reading.windSpeedLabel = conversions.windSpeedLabel(reading.latestWindSpeedBFT);
    reading.minWindSpeed = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.windSpeed), "min");
    reading.maxWindSpeed = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.windSpeed), "max");
    reading.windDirection = stationReadings[latestReading].windDirection;
    reading.windDirectionLabel = conversions.convertDegreeToDirection(stationReadings[latestReading].windDirection,"text");
    reading.windDirectionIcon = conversions.convertDegreeToDirection(stationReadings[latestReading].windDirection,
      "icon");
    reading.WindChill = conversions.calculateWindChill(reading.latestTemp, reading.latestWindSpeed);
    reading.latestPressure = stationReadings[latestReading].pressure;
    reading.minPressure = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.pressure), "min");
    reading.maxPressure = minMaxReadings(stationReadings.map((stationReadings) => stationReadings.pressure), "max");
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

  /**
   * minMaxReadings() - This method finds the min or max of a reading type
   *
   * The following parameters are passed into the method in the request body:
   * @param stationReadings array of all readings for specific reading type for the station 
   * @param minMax min or max to return
   *
   */
  function minMaxReadings(stationReadings, minMax) {
    let readingMin = Math.min(...stationReadings);
    let readingMax = Math.max(...stationReadings);
    if (minMax === "min") {
      return readingMin;
    } else if (minMax === "max") {
      return readingMax;
    }
  };

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
