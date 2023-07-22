import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("readings");

export const readingStore = {
  /*
   * Get All Readings from the store
   */
  async getAllReadings() {
    await db.read();
    return db.data.readings;
  },

  /*
   * Get Readings By StationID from the store
   */
  async getReadingsByStationId(id) {
    await db.read();
    return db.data.readings.filter((reading) => reading.stationid === id);
  },

  /*
   * Get Readings By ID from the store
   */
  async getReadingById(id) {
    await db.read();
    return db.data.readings.find((reading) => reading._id === id);
  },

  /*
   * Add Reading to the store
   */
  async addReading(stationId, reading) {
    await db.read();
    reading._id = v4();
    reading.stationid = stationId;
    db.data.readings.push(reading);
    await db.write();
    return reading;
  },

  /*
   * Delete Reading by ID from the store
   */
  async deleteReading(id) {
    await db.read();
    const index = db.data.readings.findIndex((reading) => reading._id === id);
    db.data.readings.splice(index, 1);
    await db.write();
  },

  /*
   * Delete All Readings from the store
   */
  async deleteAllReadings() {
    db.data.readings = [];
    await db.write();
  },

  /*
   * Update Reading in the store
   */
  async updateReading(reading, updatedReading) {
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    await db.write();
  },
};
