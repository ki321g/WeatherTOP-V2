import axios from "axios";
import { v4 } from "uuid";


export const openWeatherMap = {

  async generateReading(latitude, longitude, apiKey) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
    const response = await axios.get(requestUrl);
    
    const date = new Date(); // Add Current Date
    let dateTime = date.toLocaleString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});// Convert to Format

    if (response.status == 200) {
      const currentWeather = response.data.current;
      const newReading = {
        timeStamp: String(dateTime),
        code: Number(codeConverter(currentWeather.weather[0].id)),
        temperature: Number(currentWeather.temp),
        windSpeed: Number(currentWeather.wind_speed),
        windDirection: Number(currentWeather.wind_deg),
        pressure: Number(currentWeather.pressure),
        
      }
      return newReading;
    }
    
    return null;
  },

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

/**
 * codeConverter() - Returns the current Temperature trend if any
 *
 * @param Code from openweathermap
 * @return Code Used from Assignment SPEC
 */
function codeConverter(code) {
  let returnCode = 0;
  if (code >= 200 && code <= 232) {
    returnCode = 800;
  } else if (code >= 600 && code <= 622) {
    returnCode = 700;
  } else if (code >= 500 && code <= 531) {
    returnCode = 600;
  } else if (code == 312 || code == 321) {
    returnCode = 500;
  } else if (code >= 300 && code <= 311) {
    returnCode = 400;
  } else if (code == 803 || code == 804) {
    returnCode = 300;
  } else if (code == 801 || code == 802) {
    returnCode = 200;
  } else if (code == 800) {
    returnCode = 100;
  } else {
    returnCode = 100;
  }

  return returnCode;
};