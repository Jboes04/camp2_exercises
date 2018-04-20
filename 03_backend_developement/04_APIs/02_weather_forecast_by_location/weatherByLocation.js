const request = require("request");

function weatherByLatitudeAndLongitude(lat, lon) {
  request(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`,
      method: "GET",
    },
    function(error, response, result) {
      //console.log(result);
      console.log(JSON.parse(result).main.temp + "°C");
    }
  );
}

weatherByLatitudeAndLongitude(32.661343, 51.680374);

function weatherByZipcode(code, country) {
  request(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?zip=${code}, ${country}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`,
      method: "GET",
    },
    function(error, response, result) {
      //console.log(result);
      console.log(JSON.parse(result).main.temp + "°C");
    }
  );
}

weatherByZipcode("59650", "fr");

module.exports = {
  weatherByLatitudeAndLongitude,
  weatherByZipcode
};
