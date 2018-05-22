const fetch = require("node-fetch");

function getProductByCategories(request, result) {
return fetch(`https://decath-product-api.herokuapp.com/categories/${request.params.id}/products`,
{method: "GET"}
)
  .catch(error => reject(error))
  .then(response => response.json())
  .then(resp => result.render("productsFile", {products: resp}))
}

module.exports = getProductByCategories;
