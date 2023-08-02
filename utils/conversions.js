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
weatherCodeMap.set(200, {
  description: "Thunder Light Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-200.svg?v=1690975901349",
});
weatherCodeMap.set(201, {
  description: "Thunder Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-201.svg?v=1690975901846",
});
weatherCodeMap.set(202, {
  description: "Thunder Heavy Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-202.svg?v=1690975902270",
});
weatherCodeMap.set(210, {
  description: "Light Thunder",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-210.svg?v=1690975902706",
});
weatherCodeMap.set(211, {
  description: "Thunder",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-211.svg?v=1690975903178",
});
weatherCodeMap.set(212, {
  description: "Heavy Thunder",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-212.svg?v=1690975903692",
});
weatherCodeMap.set(221, {
  description: "Ragged Thunder",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-221.svg?v=1690975899463",
});
weatherCodeMap.set(230, {
  description: "Thunder Light Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-230.svg?v=1690975899948",
});
weatherCodeMap.set(231, {
  description: "Thunder Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-231.svg?v=1690975900417",
});
weatherCodeMap.set(232, {
  description: "Thunder Heavy Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-232.svg?v=1690975900886",
});
weatherCodeMap.set(300, {
  description: "Light Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-300.svg?v=1690975919455",
});
weatherCodeMap.set(301, {
  description: "Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-301.svg?v=1690975919922",
});
weatherCodeMap.set(302, {
  description: "Heavy Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-302.svg?v=1690975920502",
});
weatherCodeMap.set(310, {
  description: "Light Drizzle Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-302.svg?v=1690975920502",
});
weatherCodeMap.set(311, {
  description: "Drizzle Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-313.svg?v=1690975920938",
});
weatherCodeMap.set(312, {
  description: "Heavy Drizzle Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-313.svg?v=1690975920938",
});
weatherCodeMap.set(313, {
  description: "Showers Rain/Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-313.svg?v=1690975920938",
});
weatherCodeMap.set(314, {
  description: "Heavy Rain/Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-314.svg?v=1690975921351",
});
weatherCodeMap.set(321, {
  description: "Shower Drizzle",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-321.svg?v=1690975921795",
});
weatherCodeMap.set(500, {
  description: "Light Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-500.svg?v=1690975922246",
});
weatherCodeMap.set(501, {
  description: "Moderate Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-501.svg?v=1690975922765",
});
weatherCodeMap.set(502, {
  description: "Heavy Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-502.svg?v=1690975923228",
});
weatherCodeMap.set(503, {
  description: "Very Heavy Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-503.svg?v=1690975923844",
});
weatherCodeMap.set(504, {
  description: "Extreme Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-504.svg?v=1690975924286",
});
weatherCodeMap.set(511, {
  description: "Freezing Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-511.svg?v=1690975916719",
});
weatherCodeMap.set(520, {
  description: "Light Shower Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-520.svg?v=1690975917468",
});
weatherCodeMap.set(521, {
  description: "Shower Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-521.svg?v=1690975917882",
});
weatherCodeMap.set(522, {
  description: "Heavy Shower Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-522.svg?v=1690975918393",
});
weatherCodeMap.set(531, {
  description: "Ragged Shower Rain",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-531.svg?v=1690975918998",
});
weatherCodeMap.set(600, {
  description: "Light Snow",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-600.svg?v=1690975938579",
});
weatherCodeMap.set(601, {
  description: "Snow",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-600.svg?v=1690975938579",
});
weatherCodeMap.set(602, {
  description: "Heavy Snow",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-602.svg?v=1690975939189",
});
weatherCodeMap.set(611, {
  description: "Sleet",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-611.svg?v=1690975939640",
});
weatherCodeMap.set(612, {
  description: "Light Sleet Showers",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-612.svg?v=1690975940069",
});
weatherCodeMap.set(613, {
  description: "Sleet Showers",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-613.svg?v=1690975940543",
});
weatherCodeMap.set(615, {
  description: "Light Rain and Snow",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-615.svg?v=1690975941019",
});
weatherCodeMap.set(616, {
  description: "Rain and Snow",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-616.svg?v=1690975941480",
});
weatherCodeMap.set(620, {
  description: "Light Snow Shower",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-620.svg?v=1690975941948",
});
weatherCodeMap.set(621, {
  description: "Snow Shower",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-621.svg?v=1690975942447",
});
weatherCodeMap.set(622, {
  description: "Heavy Snow Shower",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-622.svg?v=1690975942903",
});
weatherCodeMap.set(623, {
  description: "Flurries",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-623.svg?v=1690975943390",
});
weatherCodeMap.set(701, {
  description: "Mist",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-700.svg?v=1690975943921",
});
weatherCodeMap.set(711, {
  description: "Smoke",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-711.svg?v=1690975944527",
});
weatherCodeMap.set(721, {
  description: "Haze",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-721.svg?v=1690975944978",
});
weatherCodeMap.set(731, {
  description: "Sand/Dust Whirls",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-731.svg?v=1690975945419",
});
weatherCodeMap.set(741, {
  description: "Fog",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-741.svg?v=1690975945898",
});
weatherCodeMap.set(751, {
  description: "Sand",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-751.svg?v=1690975937618",
});
weatherCodeMap.set(762, {
  description: "Volcanic Ash",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-999.svg?v=1690975955100",
});
weatherCodeMap.set(771, {
  description: "Squalls",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-999.svg?v=1690975955100",
});
weatherCodeMap.set(781, {
  description: "Tornado",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-781.svg?v=1690975938076",
});
weatherCodeMap.set(800, {
  description: "Clear",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-800.svg?v=1690975955616",
});
weatherCodeMap.set(801, {
  description: "Partial Clouds",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-801.svg?v=1690975953124",
});
weatherCodeMap.set(802, {
  description: "Scattered Clouds",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-802.svg?v=1690975953571",
});
weatherCodeMap.set(803, {
  description: "Broken Clouds",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-803.svg?v=1690975954075",
});
weatherCodeMap.set(804, {
  description: "Overcast Clouds",
  icon: "https://cdn.glitch.global/0fa94a6d-c73c-4106-b4c8-60a78df7dea0/weather-804.svg?v=1690975954603",
});

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
