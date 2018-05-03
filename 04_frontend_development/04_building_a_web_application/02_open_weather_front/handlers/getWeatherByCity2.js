const fetch = require("node-fetch");
//const fs = require("fs")

function getWeatherByCity2(request, response) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${request.query.city}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`)
    .then(result => result.json())
    .then(temps => response.send(request.query.city + " : " + temps.main.temp + "°C " + `<img src = http://openweathermap.org/img/w/${temps.weather[0].icon}.png </img>`));
  //console.log(result);
  //console.log(JSON.parse(result).main.temp + "°C");
}

module.exports = getWeatherByCity2;
