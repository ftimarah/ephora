const express = require("express");
var route = express.Router();
const db = require("./db");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// creates a new product - post http request 

route.post("/products", async function (req, res) {
  const { body } = req;
  try {
    const results = await db.query(
      "INSERT INTO products (productname, price, quantity, producttype) VALUES ($1, $2, $3, $4) RETURNING * ",
      [
        body.productname,
        body.price,
        body.quantity,
        body.producttype
      ]
    );
    console.log(results);
    res.status(200).send("Product profile created succesfully. Click <a href=\"https://ephora.herokuapp.com/\">here</a>  to get back to the home page :) ");


  } catch (err) {
    console.log(err);
    //console.log("something went wrong");
    res.status(500).send("Issue with product data, was not posted successfully");
  }
});

  // view all products  via get http request
  route.get("/view/product", async function (req, res) {
      try {
        const results = await db.query("SELECT * FROM products;",);
        console.log(req.query.producttype)
        console.log(results);
        res.status(200).json({
          status: "success",
          results: results.rows.length,
          data: {
            orders: results.rows,
          },
        });
      } catch (err) {
          console.log(err);
      }
    });   
    
    //edit routes 

    // edit post http - deposits info into db given specific id 
    route.post("/edit/product/:id", async function (req, res) {
  
      const { body } = req;
    
      try {
        const results = await db.query(
          "UPDATE products SET productname = $1, price = $2, quantity = $3  WHERE productid = $4 RETURNING *",
          [
            body.productname,
            body.price,
            body.quantity,
            req.params.id
          ]
        );
        console.log(results);
        res.status(201).send("product has been updated");
      } catch (err) {
        console.log(err);
        //console.log("something went wrong");
      }
    });

  // edit get http - displays information from db of specific id
  route.get("/edit/product/:id", async function (req, res) {
    
      try {
        const results = await db.query("SELECT * FROM products WHERE productid = $1", [req.params.id]);
        res.status(200).json({
          status: "success",
          results: results.rows.length,
          data: {
            orders: results.rows,
          },
        });
      } catch (err) {
        console.log(err);
        //console.log("something went wrong");
      }
  });  
  
  // delete - post http request, deletes product based off id
  
  route.post("/delete/product/:id", async function (req, res) {
    try {
      const results = await db.query(
        "DELETE FROM products WHERE productid = $1 RETURNING *",
        [req.params.id]
      );
  
      res.status(200).send("delete req Was Successful :)");
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send(
          "Did not process the delete request"
        );
      //console.log("delete member not working");
    }
  });


  module.exports = route;

