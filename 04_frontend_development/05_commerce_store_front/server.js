const express = require("express");
const getCategories = require("./handlers/getCategories");
const getProductByCategories = require("./handlers/getProductByCategories");
const getFicheProducts = require("./handlers/getFicheProducts");
const app = express();
const port = process.env.PORT || 3000;


const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  autoescape: true,
  express: app
});
app.set("views", __dirname + "/views");
app.set("view engine", "njk");

/*app.get("/", function(request, result) {
  result.render("categories");
});*/

const path = require('path');
app.use(express.static("public"));

app.get("/", getCategories);

app.get("/category/:id", getProductByCategories);

app.get("/category/products/:id", getFicheProducts);


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
