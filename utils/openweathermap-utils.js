import axios from "axios";
import { v4 } from "uuid";

/**
 * This class handles openweathermap API
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const openWeatherMap = {
  /**
   * generateReading() - Returns a reading from the openweathermap API
   *
   * @param latitude latitude to get reading from openweathermap
   * @param longitude longitude to get reading from openweathermap
   * @param apiKey openweathermap API key
   * @return reading to return
   */
  async generateReading(latitude, longitude, apiKey) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
    const response = await axios.get(requestUrl);

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

    if (response.status == 200) {
      const currentWeather = response.data.current;
      const newReading = {
        timeStamp: String(dateTime),
        //code: Number(codeConverter(currentWeather.weather[0].id)),
        code: Number(currentWeather.weather[0].id),
        temperature: Number(currentWeather.temp),
        windSpeed: Number(currentWeather.wind_speed),
        windDirection: Number(currentWeather.wind_deg),
        pressure: Number(currentWeather.pressure),
      };
      return newReading;
    }

    return null;
  },

  /**
   * getDailyReadingsData() - Returns a report for trends from the openweathermap API
   *
   * @param latitude latitude to get reading from openweathermap
   * @param longitude longitude to get reading from openweathermap
   * @param apiKey openweathermap API key
   * @return return report for trends
   */
  async getDailyReadingsData(latitude, longitude, apiKey) {
    let report = { labels: [], temperature: [], windSpeed: [], pressure: [] };
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`;

    const response = await axios.get(requestUrl);
    //console.dir(response);  // Debug Remove Later

    if (response.status == 200) {
      const trendsData = response.data.daily;
      for (let i = 0; i < trendsData.length; i++) {
        const date = new Date(trendsData[i].dt * 1000);
        report.labels.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
        report.temperature.push(trendsData[i].temp.day);
        report.windSpeed.push(trendsData[i].wind_speed);
        report.pressure.push(trendsData[i].pressure);
      }
    }
    return report;
  },
};
