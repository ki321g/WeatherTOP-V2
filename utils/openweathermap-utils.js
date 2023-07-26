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
        code: Number(currentWeather.weather[0].id),
        temperature: Number(currentWeather.temp),
        windSpeed: Number(currentWeather.wind_speed),
        windDirection: Number(currentWeather.wind_deg),
        pressure: Number(currentWeather.pressure),
        
      }
      return newReading;
    }
    return null;
  }
};