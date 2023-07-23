import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/analytics.js";

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
    const newReading = {
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
};
