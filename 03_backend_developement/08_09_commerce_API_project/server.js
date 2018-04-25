const express = require("express");
const brands = require("./handlers/getBrands");
const categorie = require("./handlers/getCategories");
const products = require("./handlers/getProducts");
const app = express();
const port = process.env.PORT || 3000;

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

app.get("/brands", function(request, result) {
  brands.SendBrands(request, result);
});

app.get("/brands/:id", function(request, result) {
  const brandId = request.params.id;
  brands.findById(brandId, result);
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

app.get("/categories", function(request, result) {
  categorie.SendCategories(request, result);
});

app.get("/categories/:id", function(request, result) {
  const categoriId = request.params.id;
  categorie.findById(categoriId, result);
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

app.get("/products", function(request, result){
  products.sendProducts(request, result);
});
app.get("/products/:productID", function(request, result){
  const productId = request.params.productID;
  products.findById(productId, result);
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

app.get("/categories/:id/products", function(request, result) {
  const categoriId = request.params.id;
  categorie.findProductByCat_id(categoriId, result);
});




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
