/*
const weatherCodeMap = new Map();
weatherCodeMap.set(100, { description: "Clear"});
weatherCodeMap.set(200, { description: "Partial Clouds"});
weatherCodeMap.set(300, { description: "Cloudy"});
weatherCodeMap.set(400, { description: "Light Showers"});
weatherCodeMap.set(500, { description: "Heavy Showers"});
weatherCodeMap.set(600, { description: "Rain"});
weatherCodeMap.set(700, { description: "Snow"});
weatherCodeMap.set(800, { description: "Thunder"});
*/
const weatherCodeMap = new Map();
weatherCodeMap.set(200, { description: "Thunderstorm Light Rain", icon: 200 });
weatherCodeMap.set(201, { description: "Thunderstorm Rain", icon: 201 });
weatherCodeMap.set(202, { description: "Thunderstorm Heavy Rain", icon: 202});
weatherCodeMap.set(210, { description: "Light Thunderstorm", icon: 210 });
weatherCodeMap.set(211, { description: "Thunderstorm", icon: 200 });
weatherCodeMap.set(212, { description: "Heavy Thunderstorm", icon: 200 });
weatherCodeMap.set(221, { description: "Ragged Thunderstorm", icon: 221 });
weatherCodeMap.set(230, { description: "Thunderstorm Light Drizzle", icon: 230 });
weatherCodeMap.set(231, { description: "Thunderstorm Drizzle", icon: 231 });
weatherCodeMap.set(232, { description: "Thunderstorm Heavy Drizzle", icon: 232});
weatherCodeMap.set(300, { description: "Light Drizzle", icon: 300 });
weatherCodeMap.set(301, { description: "Drizzle", icon: 301 });
weatherCodeMap.set(302, { description: "Heavy Drizzle", icon: 302 });
weatherCodeMap.set(310, { description: "Light Drizzle Rain", icon: 302 });
weatherCodeMap.set(311, { description: "Drizzle Rain", icon: 313 });
weatherCodeMap.set(312, { description: "Heavy Drizzle Rain", icon: 313 });
weatherCodeMap.set(313, { description: "Showers Rain/Drizzle", icon: 313 });
weatherCodeMap.set(314, { description: "Heavy Shower Rain/Drizzle", icon: 314 });
weatherCodeMap.set(321, { description: "Shower Drizzle", icon: 314 });
weatherCodeMap.set(500, { description: "Light Rain", icon: 500 });
weatherCodeMap.set(501, { description: "Moderate Rain", icon: 501 });
weatherCodeMap.set(502, { description: "Heavy Rain", icon: 502 });
weatherCodeMap.set(503, { description: "Very Heavy Rain", icon: 502 });
weatherCodeMap.set(504, { description: "Extreme Rain", icon: 502 });
weatherCodeMap.set(511, { description: "Freezing Rain", icon: 511 });
weatherCodeMap.set(520, { description: "Light Shower Rain", icon: 520 });
weatherCodeMap.set(521, { description: "Shower Rain", icon: 521 });
weatherCodeMap.set(522, { description: "Heavy Shower Rain", icon: 522 });
weatherCodeMap.set(531, { description: "Ragged Shower Rain", icon: 522 });
weatherCodeMap.set(600, { description: "Light Snow", icon: 600 });
weatherCodeMap.set(601, { description: "Snow", icon: 600 });
weatherCodeMap.set(602, { description: "Heavy Snow", icon: 602 });
weatherCodeMap.set(611, { description: "Sleet", icon: 611 });
weatherCodeMap.set(612, { description: "Light Sleet Showers", icon: 612 });
weatherCodeMap.set(613, { description: "Sleet Showers", icon: 613 });
weatherCodeMap.set(615, { description: "Light Rain and Snow", icon: 613 });
weatherCodeMap.set(616, { description: "Rain and Snow", icon: 613 });
weatherCodeMap.set(620, { description: "Light Snow Shower", icon: 620 });
weatherCodeMap.set(621, { description: "Snow Shower", icon: 621 });
weatherCodeMap.set(622, { description: "Heavy Snow Shower", icon: 622 });
weatherCodeMap.set(623, { description: "Flurries", icon: 623 });
weatherCodeMap.set(701, { description: "Mist", icon: 700 });
weatherCodeMap.set(711, { description: "Smoke", icon: 711 });
weatherCodeMap.set(721, { description: "Haze", icon: 721 });
weatherCodeMap.set(731, { description: "Sand/Dust Whirls", icon: 731 });
weatherCodeMap.set(741, { description: "Fog", icon: 741 });
weatherCodeMap.set(751, { description: "Sand", icon: 751 });
weatherCodeMap.set(762, { description: "Volcanic Ash", icon: 731 });
weatherCodeMap.set(771, { description: "Squalls", icon: 999 });
weatherCodeMap.set(781, { description: "Tornado", icon: 781 });
weatherCodeMap.set(800, { description: "Clear", icon: 800 });
weatherCodeMap.set(801, { description: "Partial Clouds", icon: 801 });
weatherCodeMap.set(802, { description: "Scattered Clouds", icon: 802 });
weatherCodeMap.set(803, { description: "Broken Clouds", icon: 803 });
weatherCodeMap.set(804, { description: "Overcast Clouds", icon: 804 });

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
    if (windSpeed < 2) {
      beaufort = 0;
    } else if (windSpeed >= 2 && windSpeed < 6) {
      beaufort = 1;
    } else if (windSpeed >= 6 && windSpeed < 12) {
      beaufort = 2;
    } else if (windSpeed >= 12 && windSpeed < 20) {
      beaufort = 3;
    } else if (windSpeed >= 20 && windSpeed < 29) {
      beaufort = 4;
    } else if (windSpeed >= 29 && windSpeed < 39) {
      beaufort = 5;
    } else if (windSpeed >= 39 && windSpeed < 50) {
      beaufort = 6;
    } else if (windSpeed >= 50 && windSpeed < 62) {
      beaufort = 7;
    } else if (windSpeed >= 62 && windSpeed < 75) {
      beaufort = 8;
    } else if (windSpeed >= 75 && windSpeed < 89) {
      beaufort = 9;
    } else if (windSpeed >= 89 && windSpeed < 103) {
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
      windDirectionIcon = "ENE";
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

    if (returnType === "icon") {
      return windDirectionIcon;
    } else if (returnType === "text") {
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

  codeIcon(code) {
    return weatherCodeMap.get(code).icon;
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
