import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/latestreadings.js";
import { openWeatherMap } from "../utils/openweathermap-utils.js";
import { accountsController } from "./accounts-controller.js";

/**
 * This class handles things related to the Stations
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const stationController = {
  /**
   * index() - This method renders station view
   * Method finds the relevant Station by ID
   * then Calculates that stations Conditions and
   * passes the station back to the station view file
   *
   * @param id Station ID
   */
  async index(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);

    if (loggedInUser === undefined) {
      response.redirect("/login");
      return;
    }
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await latestReadings(request.params.id);
    const dailyReadings = await openWeatherMap.getDailyReadingsData(
      station.latitude,
      station.longitude,
      process.env.OPENWEATHERMAP_API_KEY
    );

    const viewData = {
      station: station,
      dailyReadings: dailyReadings,
    };

    Object.assign(viewData, stationReadings.reading);

    console.log("\nRendering: Station-View");
    //let viewDataString = JSON.stringify(viewData); // Debug Remove Later
    //let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
    //console.dir(viewDateObject, { depth: null, colors: true }); // Debug Remove Later

    response.render("station-view", viewData);
  },

  /**
   * addReading() - This method redirects to the relevant station
   * Method uses passed in Reading params to create a new reading
   * for the passed in Station ID
   *
   * The following parameters are passed into the method in the request body:
   * @param id            Station ID
   * @param code          Reading code
   * @param temperature   Reading temperature
   * @param windSpeed     Reading windSpeed
   * @param windDirection Reading windDirection
   * @param pressure      Reading pressure
   */
  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const date = new Date(); // Add Current Date
    let dateTime = date.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }); // Convert to Format
    const newReading = {
      timeStamp: String(dateTime),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    console.log(
      `addReading to Station: ${station.name}`,
      `\n`,
      `code:${newReading.code}`,
      `\n`,
      `temperature:${newReading.temperature}`,
      `\n`,
      `windSpeed:${newReading.windSpeed}`,
      `\n`,
      `windDirection:${newReading.windDirection}`,
      `\n`,
      `pressure:${newReading.pressure}`
    );
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  /**
   * deletereading() - This method redirects to the relevant station
   * Method uses passed in Station ID and Reading ID to find the relevant
   * Station and Reading. It then deletes the reading.
   *
   * The following parameters are passed into the method in the request body:
   * @param id        Station ID
   * @param readingid Reading readingid
   */
  async deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    console.log(`\nDeleting Reading: ${readingId}`);
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
  },

  /**
   * editReading() - This method redirects to the relevant station
   * Method uses the passed in the Reading params to edit the reading
   *
   * The following parameters are passed into the method in the request body:
   * @param id            Station ID
   * @param readingid     Station readingid
   * @param code          Reading code
   * @param temperature   Reading temperature
   * @param windSpeed     Reading windSpeed
   * @param windDirection Reading windDirection
   * @param pressure      Reading pressure
   */
  async editReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    console.log(`\nEdit Reading: ${readingId} on Station ${stationId}`);

    const updateReading = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };

    await readingStore.updateReading(readingId, updateReading);
    response.redirect("/station/" + stationId);
  },

  /**
   * generateReading() - This method redirects to the relevant station
   * Method uses the passed in the Reading params to edit the reading
   *
   * The following parameters are passed into the method in the request body:
   * @param id            Station ID
   */
  async generateReading(request, response) {
    const stationId = request.params.id;
    const station = await stationStore.getStationById(stationId);

    const newReading = await openWeatherMap.generateReading(
      station.latitude,
      station.longitude,
      process.env.OPENWEATHERMAP_API_KEY
    );

    await readingStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  },

  /**
   * generateReading() - This method redirects to the relevant station
   * Method uses the passed in the Reading params to edit the reading
   *
   * The following parameters are passed into the method in the request body:
   * @param stationId       Station ID
   */
  async generateInitalReading(stationId) {
    const station = await stationStore.getStationById(stationId);

    const newReading = await openWeatherMap.generateReading(
      station.latitude,
      station.longitude,
      process.env.OPENWEATHERMAP_API_KEY
    );

    const returnNewReading = await readingStore.addReading(stationId, newReading);
    return returnNewReading;
  },
};
