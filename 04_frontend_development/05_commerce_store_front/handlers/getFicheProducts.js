const fetch = require("node-fetch");

function getFicheProducts(request, result) {
return fetch(`https://decath-product-api.herokuapp.com/products/${request.params.id}`,
{method: "GET"}
)
  .catch(error => reject(error))
  .then(response => response.json())
  .then(resp => result.render("products", {card: resp}))
}

module.exports = getFicheProducts;
