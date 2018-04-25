const fetch = require("node-fetch");

function weatherByLocation(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`)
    .then(result => result.json())
    //.then(console.log);
    .then(result => console.log(result.name + " : " + result.main.temp + "°C"));
  //console.log(result);
  //console.log(JSON.parse(result).main.temp + "°C");
}

weatherByLocation(32.661343, 51.680374);

function weatherByZipcode(code, country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${code}, ${country}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`)
    .then(result => result.json())
    .then(result => console.log(result.name + " - " + result.main.temp + "°C"));
}

weatherByZipcode("59000", "fr");
