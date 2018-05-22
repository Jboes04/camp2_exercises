const fetch = require("node-fetch");

function getCategories(request, result) {
return fetch(`https://decath-product-api.herokuapp.com/categories`,
{method: "GET"}
)
  .catch(error => reject(error))
  .then(response => response.json())
  .then(resp => result.render("categories", {categories: resp}))
}

module.exports = getCategories;
