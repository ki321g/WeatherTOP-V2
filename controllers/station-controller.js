import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/analytics.js";
import { openWeatherMap } from "../utils/openweathermap-utils.js";

export const stationController = {
  /*
   * Render Station Page
   */
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await latestReadings(request.params.id);
    let displayReadings = false;
    if (stationReadings.lastReading !== null) {
      displayReadings = true;
    }
    const viewData = {
      station: station,
      displayReading: displayReadings,
    };

    Object.assign(viewData, stationReadings.reading);

    console.log("\nRendering: Station-View");
    let viewDataString = JSON.stringify(viewData); // Debug Remove Later
    let viewDateObject = JSON.parse(viewDataString); // Debug Remove Later
    console.dir(viewDateObject, { depth: null, colors: true });

    response.render("station-view", viewData);
  },

  /*
   * Add Reading
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

  async deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    console.log(`\nDeleting Reading: ${readingId}`);
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
  },

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
};
