import { read } from "fs-extra";
import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";
/**
 * This class handles the analytics
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const analytics = {
  /**
   * minMaxReadings() - This method finds the min or max of a reading type
   *
   * The following parameters are passed into the method in the request body:
   * @param stationReadings array of all readings for specific reading type for the station
   * @param minMax min or max to return
   *
   */
  minMaxReadings(stationReadings, minMax) {
    let readingMin = Math.min(...stationReadings);
    let readingMax = Math.max(...stationReadings);
    if (minMax === "min") {
      return readingMin;
    } else if (minMax === "max") {
      return readingMax;
    }
  },

  /**
   * readingTrends() - Returns the current trend if any
   *
   * @param readings list of readings
   * @return String of higher, lower or no-change
   */
  readingTrends(readings) {
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
  },
};