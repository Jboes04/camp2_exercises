const PG = require("pg");
const client = new PG.Client();

client.connect();

function SendBrands(request, answer){
  client.query(
    "SELECT * FROM brands;",
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

function findById(brandId, answer) {
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid;",
    [brandId],
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
  SendBrands: SendBrands,
  findById: findById
};
