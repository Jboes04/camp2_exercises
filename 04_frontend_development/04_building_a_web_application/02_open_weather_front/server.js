const express = require("express");
const getMenu = require("./handlers/getMenu");
const getWeatherByCity = require("./handlers/getWeatherByCity");
const getWeatherByCity2 = require("./handlers/getWeatherByCity2");
const getHtml = require("./handlers/getHtml");
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.use(express.static("public"));

app.get("/menu", getMenu);
app.get("/weatherByCity/:city", getWeatherByCity);
app.get("/weatherByCity2", getWeatherByCity2);
app.get("/index.html", getHtml)
app.get("*", function( request, result){
  result.send("Page not Found !");
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
