import { read } from "fs-extra";
import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";
import { analytics } from "../utils/analytics.js";
/**
 * This class handles the latestReading
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
    reading.minTemp = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.temperature),
      "min"
    );
    reading.maxTemp = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.temperature),
      "max"
    );
    reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
    reading.latestWindSpeedBFT = conversions.convertToBeaufort(reading.latestWindSpeed);
    reading.windSpeedLabel = conversions.windSpeedLabel(reading.latestWindSpeedBFT);
    reading.minWindSpeed = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.windSpeed),
      "min"
    );
    reading.maxWindSpeed = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.windSpeed),
      "max"
    );
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
    reading.minPressure = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.pressure),
      "min"
    );
    reading.maxPressure = analytics.minMaxReadings(
      stationReadings.map((stationReadings) => stationReadings.pressure),
      "max"
    );
    reading.trendTemperature = analytics.readingTrends(
      stationReadings.map((stationReadings) => stationReadings.temperature)
    );
    reading.trendWindSpeed = analytics.readingTrends(
      stationReadings.map((stationReadings) => stationReadings.windSpeed)
    );
    reading.trendPressure = analytics.readingTrends(stationReadings.map((stationReadings) => stationReadings.pressure));
    reading.readingsRecorded = stationReadings.length;
  }
  return {
    latestReading: latestReading,
    reading: reading,
  };
};
