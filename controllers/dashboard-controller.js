import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/latestreadings.js";
import { accountsController } from "./accounts-controller.js";
import { stationController } from "./station-controller.js";
import { openWeatherMap } from "../utils/openweathermap-utils.js";

/**
 * This class handles things related to the Dashboard
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const dashboardController = {
  /**
   * index() - This method renders dasboard. passing in the relevant Stations,
   * It gets the the logged in member then uses this member
   * to get the relevant Staions and then Sorts the Stations
   *
   */
  async index(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    //If no logged in user, redirect to login page
    if (loggedInUser === undefined) {
      response.redirect("/login");
      return;
    } else {
      //If logged in user, render dashboard view
      const stations = await stationStore.getStationByUserId(loggedInUser._id);

      //Add latest readings to each station
      for (const station of stations) {
        const readingObject = await latestReadings(station._id);
        Object.assign(station, readingObject.reading);
      };
      
      const viewData = {
        title: "Station Dashboard",
        stations: stations,
      };
      
      console.log("Rendering: Dashboard-View");
      //  let viewDataString = JSON.stringify(viewData); // Debug Remove Later
      //  let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
      //  console.dir(viewDateObject, { depth: null, colors: true }); // Debug Remove Later
  
      response.render("dashboard-view", viewData);
    };  
  },

  /**
   * addStation() - This method redirects to station url
   * Method uses passed in params to create a new Station
   * for teh logged in member then redirects the member to
   * the new station.
   *
   * Depending on the generateReading parameter, a new reading is generated
   * if the generateReading parameter is includes to "on"
   *
   * The following parameters are passed into the method in the request body:
   * @param name      Station name
   * @param latitude  Station latitude
   * @param longitude Station longitude
   * @param generateReading  Generate a reading for the new station
   */
  async addStation(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    let generateReading = request.body.generateReading;
    //Declare new station object
    const newStation = {
      name: request.body.name.toUpperCase(),
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.name}`);
    //Add new station to store
    const station = await stationStore.addStation(newStation);
    //If generateReading parameter contains "on", generate a new reading
    if (generateReading.includes("on")) {
      const newReading = await stationController.generateInitalReading(station._id);
    }
    //Redirect to new station
    response.redirect("/station/" + station._id);
  },

  /**
   * deletestation() - This method redirects to dashboard url
   * Method uses passed in Station ID delete the station.
   *
   * The following parameters are passed into the method in the request body:
   * @param id Station ID
   */
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station: ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};
