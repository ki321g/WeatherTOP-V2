import { stationStore } from "../models/station-store.js";
import { latestReadings } from "../utils/analytics.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  /*
   * Render Dashboard
   */
  async index(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationByUserId(loggedInUser._id),
    };
    for (const station of viewData.stations) {
      const readingObject = await latestReadings(station._id);
      Object.assign(station, readingObject.reading);
    }
    console.log("\nRendering: Dashboard-View");
  //  let viewDataString = JSON.stringify(viewData); // Debug Remove Later
  //  let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
  //  console.dir(viewDateObject, { depth: null, colors: true }); // Debug Remove Later
    
    response.render("dashboard-view", viewData);
  },

  /*
   * Add Station to Dashboard
   */
  async addStation(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      name: request.body.name.toUpperCase(),
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.name}`);
    await stationStore.addStation(newStation);
    ///station/{{_id}}
    response.redirect("/station/" + newStation._id);
  },

  /*
   * Delete Station
   */
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station: ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};
