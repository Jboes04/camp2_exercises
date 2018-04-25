const PG = require("pg");
const client = new PG.Client();

client.connect();

function SendCategories(request, answer){
  client.query(
    "SELECT * FROM categories;",
    //[],
    function(error, result2) {
      if (error) {
        console.warn(error);
      } else {
        // console.log(result2.rows);
        answer.json(result2.rows);
      }
      //client.end();
    }
  );
}

function findById(categoriId, answer) {
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid;",
    [categoriId],
    function(error, result2) {
      if (error) {
        console.warn(error);
      } else {
        // console.log(result2.rows);
        answer.json(result2.rows[0]);
      }
      //client.end();
    }
  );
}

function findProductByCat_id(categoriId, answer){
  client.query(
    "SELECT * FROM products INNER JOIN join_categories_products on (products.id = join_categories_products.products_id) Where join_categories_products;",
    [categoriId],
    function(error, result2) {
      if (error) {
        console.warn(error);
      } else {
        // console.log(result2.rows);
        answer.json(result2.rows[0]);
      }
      //client.end();
    }
  );


}


module.exports = {
  SendCategories: SendCategories,
  findById: findById,
  findProductByCat_id: findProductByCat_id
};
