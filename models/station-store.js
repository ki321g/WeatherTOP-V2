import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { readingStore } from "./reading-store.js";

const db = initStore("stations");

export const stationStore = {
  /*
   * Get All Stations from the store
   */
  async getAllStations() {
    await db.read();
    let sortStations = db.data.stations;
    sortStations.sort((a, b) => (a.name > b.name ? 1 : -1));
    return sortStations;
  },

  /*
   * Get Station by ID from the store
   */
  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    list.readings = await readingStore.getReadingsByStationId(list._id);
    return list;
  },

  /*
   * Get Station by ID from the store
   */
  async getStationByUserId(userid) {
    await db.read();
    let sortStations = db.data.stations.filter((stations) => stations.userid === userid);
    sortStations.sort((a, b) => (a.name > b.name ? 1 : -1));
    return sortStations;
  },

  /*
   * Add Station to the store
   */
  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  /*
   * Delete Station by ID from the store
   */
  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
    if (index !== -1) {      
      await readingStore.deleteStationsReadings(id);
      db.data.stations.splice(index, 1);
      await db.write();
    }
  },

  /*
   * Delete All Stations from the store
   */
  async deleteAllStations() {
    db.data.stations = [];
    await db.write();
  },
};
