const PG = require("pg");
const client = new PG.Client();

client.connect();

function sendProducts(request, answer){
  client.query(
    "SELECT * FROM products;",
    function(error, result) {
      if (error) {
        return error;
      } else {
        answer.json(result.rows);
      }
      // client.end();
    }
  );
}
function findById(productId, answer){
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid;", [productId],
    function(error, result) {
      if (error) {
        console.warn(error);
        return error;
      } else {
        answer.json(result.rows[0]);
      }
      // client.end();
    }
  );
}
module.exports = {
  sendProducts: sendProducts,
  findById: findById
};
