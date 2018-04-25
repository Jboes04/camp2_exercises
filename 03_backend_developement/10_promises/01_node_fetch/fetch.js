const fetch = require("node-fetch");

fetch(`https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b`)
  .then(result => result.json())
  .then(result => result.title)
  .then(console.log);
