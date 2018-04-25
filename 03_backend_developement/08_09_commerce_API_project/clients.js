const request = require("request");
const {Pool} = require("pg");
const PG = require("pg");
const client = new PG.Client();
const pool = new Pool();

/*function APIBrands () {
  request(
    { url: "https://decath-product-api.herokuapp.com/brands"
    },
    function(error, result, body) {
      const JSONBody = JSON.parse(body).map( info => insertDataBrands([info.id, info.title]));
      console.log(JSONBody);
    }
  );
}

APIBrands();

function insertDataBrands(dataToInsert) {
  //client.connect();
  pool.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar)",
    dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} - ${dataToInsert}`);
      }
      //client.end();
    }
  );
}

/////////////////////////////////////////////////////////////////////////

function APICategories () {
  request(
    { url: "https://decath-product-api.herokuapp.com/categories"
    },
    function(error, result, body) {
      const JSONBody = JSON.parse(body).map( info => insertDataCategories([info.id, info.decathlon_id, info.label]));
      console.log(JSONBody);
    }
  );
}

APICategories();

function insertDataCategories(dataToInsert) {
  //client.connect();
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid, $2::integer, $3::varchar)",
    dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} - ${dataToInsert}`);
      }
      //client.end();
    }
  );
}*/

/////////////////////////////////////////////////////////////////////////

/*function APIProducts () {
  request(
    { url: "https://decath-product-api.herokuapp.com/products"
    },
    function(error, result, body) {
      const JSONBody = JSON.parse(body).map( info => insertDataProducts([info.id, info.decathlon_id, info.title, info.description, info.brand_id, info.min_price, info.max_price, info.crossed_price, info.percent_reduction, info.image_path, info.rating ]));
      console.log(JSONBody);
    }
  );
}

APIProducts();

function insertDataProducts(dataToInsert) {
  //client.connect();
  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::integer, $3::varchar, $4::varchar, $5::uuid, $6::float, $7::float, $8::float, $9::float, $10::varchar, $11::float)",
    dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(`${result.command} - ${dataToInsert}`);
      }
      //client.end();
    }
  );
}*/

/////////////////////////////////////////////////////////////////////////

//FUNCTION Join join_categories_products


function categorieId (){
  request(
    { url: "https://decath-product-api.herokuapp.com/categories"
    },
    function(error, result, body) {
      const categories = JSON.parse(body);
      categories.forEach( categoryId => APIJoinProductsCategories (categoryId.id));
    }
  );
}

function APIJoinProductsCategories (cat_id) {
  request(
    { url: `https://decath-product-api.herokuapp.com/categories/${cat_id}/products`
    },
    function(error, result, body) {
      console.log(body);
      const products = JSON.parse(body);
      client.connect();
      products.forEach( product => insertDataJoin([cat_id, product.id]));
      console.log(products);
    }
  );
}

function insertDataJoin(dataToInsert) {
  client.query(
    "INSERT INTO join_categories_products (category_id, products_id) VALUES ($1::uuid, $2::uuid)",
    dataToInsert,
    function(error, result) {
      if (error) {
        console.warn(error);
        return;
      }
      console.log(`${result.command} - ${dataToInsert}`);
    }
  );
}

categorieId();

////////////////////////////////////////////////////////////////////////////




//insertDataBrands(["c999eed9-1808-4aa2-ad0e-9995bd538736", "COMPEED"]);


/////////////////////////////////////////////////////////////////////////
/*function queryOneParam(nameDataQuery, idToFilter) {
  client.query(
    `SELECT * FROM ${nameDataQuery} WHERE id = $1::uuid`,
    [`${idToFilter}`],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log(result.rows);
      }
      client.end();
    }
  );
}

queryOneParam("brands", "cbe1c32e-faa9-4911-ad8e-4422f2b627c9" );*/


//////////////////////////////////////////////////////////////////////

/* Correction vincent

const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;

function getBrands() {
  request({
    url: "https://decath-product-api.herokuapp.com/brands"
  }, function(error, response, body) {
    if (error) {
      console.warn(error);
      return;
    }
    const brands = JSON.parse(body);

    brands.forEach(function(brand) {
      insertBrand(brand, brands.length);
    });
  });
}


function insertBrand(brand, total) {
  client.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar);",
    [brand.id, brand.title],
    function(error, result) {
      if (error) {
        console.warn(error);
        return;
      }
      counter++;
      if (counter >= total) {
        client.end();
      }
    }
  );
}

getBrands(); */

//Correction vincent 

const request = require("request");
const PG = require("pg");

const client = new PG.Client();
client.connect();

let counter = 0;
const productCategoryList = [];

request(
  { url: "https://decath-product-api.herokuapp.com/categories" },
  function(error, response, body) {
    const categories = JSON.parse(body);
    categories.forEach(function(category) {
      request(
        { url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products` },
        function( error, response, body) {
          const products = JSON.parse(body);
          products.forEach(function(product) {
            productCategoryList.push({
              categoryId: category.id,
              productId: product.id
            });
          });
          counter++;
          if (counter >= categories.length) {
            counter = 0;
            productCategoryList.forEach(function(productCategory) {
              client.query(
                "INSERT INTO products_categories (category_id, product_id) VALUES ($1::uuid, $2::uuid)",
                [productCategory.categoryId, productCategory.productId],
                function(error, result) {
                  if (error) {
                    console.warn(error);
                  } else {
                    counter++;
                    if (counter >= productCategoryList.length) {
                      client.end();
                    }
                  }
                }
              );
            });
          }
        }
      );
    });
  }
);
