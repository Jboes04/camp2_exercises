const request = require("request");

function weatherByCityName(nameCity) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`,
      method: "GET",
    },
    function(error, response, result) {
      //console.log(result);
      console.log(JSON.parse(result).main.temp + "°C");
    }
  );
}

weatherByCityName("Bogota");

module.exports = weatherByCityName;
