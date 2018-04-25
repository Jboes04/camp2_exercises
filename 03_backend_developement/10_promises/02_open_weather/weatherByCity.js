const fetch = require("node-fetch");

function weatherByCityName(nameCity) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`)
    .then(result => result.json())
    .then(result => console.log(nameCity + ":" + result.main.temp + "°C"));
  //console.log(result);
  //console.log(JSON.parse(result).main.temp + "°C");
}

weatherByCityName("Milan");
