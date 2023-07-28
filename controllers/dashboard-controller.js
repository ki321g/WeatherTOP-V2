import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/analytics.js";
import { accountsController } from "./accounts-controller.js";
//import { stationController } from "./station-controller.js";
import { openWeatherMap } from "../utils/openweathermap-utils.js";

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
    let generateReading = request.body.generateReading;

    const newStation = {
      name: request.body.name.toUpperCase(),
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.name}`);

    const station = await stationStore.addStation(newStation);
    console.log(`Testing past addStation ${station._id}`);
    console.log(`GenerateReading: ${request.body.generateReading}`);
    
    if (generateReading.includes("on")) {
      const newStation = await stationStore.getStationById(station._id);

      const newReading = await openWeatherMap.generateReading(
        newStation.latitude,
        newStation.longitude,
        process.env.OPENWEATHERMAP_API_KEY
      );       
  
      const reading = await readingStore.addReading(newStation._id, newReading);
    };

    response.redirect("/station/" + station._id); 
   
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
