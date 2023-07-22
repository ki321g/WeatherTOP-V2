const weatherCodeMap = new Map();
weatherCodeMap.set(100, { description: "Clear", icon: "clear-day" });
weatherCodeMap.set(200, { description: "Partial Clouds", icon: "cloud-up" });
weatherCodeMap.set(300, { description: "Cloudy", icon: "cloudy" });
weatherCodeMap.set(400, { description: "Light Showers", icon: "drizzle" });
weatherCodeMap.set(500, { description: "Heavy Showers", icon: "extreme-rain" });
weatherCodeMap.set(600, { description: "Rain", icon: "rain" });
weatherCodeMap.set(700, { description: "Snow", icon: "snow" });
weatherCodeMap.set(800, { description: "Thunder", icon: "thunderstorms" });

const beaufortLabel = new Map();
beaufortLabel.set(0, { description: "Calm" });
beaufortLabel.set(1, { description: "Light Air" });
beaufortLabel.set(2, { description: "Light Breeze" });
beaufortLabel.set(3, { description: "Gentle Breeze" });
beaufortLabel.set(4, { description: "Moderate Breeze" });
beaufortLabel.set(5, { description: "Fresh Breeze" });
beaufortLabel.set(6, { description: "Strong Breeze" });
beaufortLabel.set(7, { description: "Near Gale" });
beaufortLabel.set(8, { description: "Gale" });
beaufortLabel.set(9, { description: "Severe Gale" });
beaufortLabel.set(10, { description: "Strong storm" });
beaufortLabel.set(11, { description: "Violent Storm" });

export const conversions = {
  /**
   * convertToBeaufort() - Returns Minimum Temperature
   *
   * @param windSpeed list of readings
   * @return beaufort as value
   */
  convertToBeaufort(windSpeed) {
    let beaufort = 0;
    if (windSpeed == 1) {
      beaufort = 0;
    } else if (windSpeed >= 2 && windSpeed <= 5) {
      beaufort = 1;
    } else if (windSpeed >= 6 && windSpeed <= 11) {
      beaufort = 2;
    } else if (windSpeed >= 12 && windSpeed <= 19) {
      beaufort = 3;
    } else if (windSpeed >= 20 && windSpeed <= 28) {
      beaufort = 4;
    } else if (windSpeed >= 29 && windSpeed <= 38) {
      beaufort = 5;
    } else if (windSpeed >= 39 && windSpeed <= 49) {
      beaufort = 6;
    } else if (windSpeed >= 50 && windSpeed <= 61) {
      beaufort = 7;
    } else if (windSpeed >= 62 && windSpeed <= 74) {
      beaufort = 8;
    } else if (windSpeed >= 75 && windSpeed <= 88) {
      beaufort = 9;
    } else if (windSpeed >= 89 && windSpeed <= 102) {
      beaufort = 10;
    } else if (windSpeed >= 103 && windSpeed <= 117) {
      beaufort = 11;
    }
    return beaufort;
  },

  /**
   * convertDegreeToDirection() -  converts code to text value
   *
   * @param windDirection passed in wind direction
   * @return windDirectionText windDirection converted to text
   */
  convertDegreeToDirection(windDirection, returnType) {
    let windDirectionText = "";
    let windDirectionIcon = "";

    if ((windDirection >= 0 && windDirection <= 11.25) || (windDirection >= 348.75 && windDirection <= 360.0)) {
      windDirectionText = "North";
      windDirectionIcon = "N";
    } else if (windDirection >= 11.25 && windDirection < 33.75) {
      windDirectionText = "North North East";
      windDirectionIcon = "NNE";
    } else if (windDirection >= 33.75 && windDirection < 56.25) {
      windDirectionText = "North East";
      windDirectionIcon = "NE";
    } else if (windDirection >= 56.25 && windDirection < 78.75) {
      windDirectionText = "East North East";
    } else if (windDirection >= 78.75 && windDirection < 101.75) {
      windDirectionText = "East";
      windDirectionIcon = "E";
    } else if (windDirection >= 101.25 && windDirection < 123.75) {
      windDirectionText = "East South East";
      windDirectionIcon = "ESE";
    } else if (windDirection >= 123.75 && windDirection < 146.25) {
      windDirectionText = "South East";
      windDirectionIcon = "SE";
    } else if (windDirection >= 146.25 && windDirection < 168.75) {
      windDirectionText = "South South West";
      windDirectionIcon = "SSW";
    } else if (windDirection >= 168.75 && windDirection < 191.25) {
      windDirectionText = "South";
      windDirectionIcon = "S";
    } else if (windDirection >= 191.25 && windDirection < 213.75) {
      windDirectionText = "South South West";
      windDirectionIcon = "SSW";
    } else if (windDirection >= 213.75 && windDirection < 236.25) {
      windDirectionText = "South West";
      windDirectionIcon = "SW";
    } else if (windDirection >= 236.25 && windDirection < 258.75) {
      windDirectionText = "West South West";
      windDirectionIcon = "WSW";
    } else if (windDirection >= 258.75 && windDirection < 281.25) {
      windDirectionText = "West";
      windDirectionIcon = "W";  
    } else if (windDirection >= 281.25 && windDirection < 303.75) {
      windDirectionText = "West North West";
      windDirectionIcon = "WNW";
    } else if (windDirection >= 303.75 && windDirection < 326.75) {
      windDirectionText = "North West";
      windDirectionIcon = "NW";
    } else if (windDirection >= 326.25 && windDirection < 348.75) {
      windDirectionText = "North North West";
      windDirectionIcon = "NNW";
    } else {
      windDirectionText = "Out of Range";
      windDirectionIcon = "N";
    }

    if(returnType === "icon") {
      return windDirectionIcon;
    } else if(returnType === "text") {
      return windDirectionText;
    }
  },

  /**
   * convertToFahrenheit() -  converts Temperature from celsius to fahrenheit
   *
   * @param temperature passed in temperature
   * @return roundCalculation to two decimal places
   */
  convertToFahrenheit(temperature) {
    let fahrenheit = (temperature * 9) / 5 + 32;
    return Math.round(fahrenheit * 100.0) / 100.0;
    //return roundCalculation(fahrenheit, 2);
  },

  /**
   * calculateWindChill() -  converts code to text value
   *
   * @param temperature passed in temperature
   * @param windSpeed passed in windSpeed
   * @return calculated wind chill
   */
  calculateWindChill(temperature, windSpeed) {
    /*  return roundCalculation(
      13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16),
      2
    );
    */
    return (
      Math.round(
        (13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)) *
          100.0
      ) / 100.0
    );
  },

  windSpeedLabel(windSpeed) {
    return beaufortLabel.get(windSpeed).description;
  },

  codeLabel(code) {
    return weatherCodeMap.get(code).description;
  },

  /**
   * roundCalculation() -  converts code to text value
   *
   * @param value passed in value to round
   * @param places how many places to round to
   * @return rounded value
   */
  roundCalculation(value, places) {
    let scale = Math.pow(10, places);
    return Math.round(value * scale) / scale;
  },
};
