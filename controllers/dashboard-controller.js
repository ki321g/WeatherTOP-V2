import { stationStore } from "../models/station-store.js";
import { latestReadings } from "../utils/analytics.js";

export const dashboardController = {
  /*
   * Render Dashboard
   */
  async index(request, response) {
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getAllStations(),
    };
    for (const station of viewData.stations) {
      const readingObject = await latestReadings(station._id);
      Object.assign(station, readingObject.reading);
    }
    console.log("\nRendering: Dashboard-View");
    let viewDataString = JSON.stringify(viewData); // Debug Remove Later
    let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
    console.dir(viewDateObject, { depth: null, colors: true });

    response.render("dashboard-view", viewData);
  },

  /*
   * Add Station to Dashboard
   */
  async addStation(request, response) {
    const newStation = {
      name: request.body.name,
    };
    console.log(`adding station ${newStation.name}`);
    await stationStore.addStation(newStation);
    ///station/{{_id}}
    response.redirect("/station/" + newStation._id);
  },
};
