const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 3000;
const route = express.Router();
const db = require("./db");

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(jsonParser);
app.use('/', require('./httproutes'))

app.get('/create/products',function(req,res){
  res.sendFile('create.html', { root: __dirname });
});

app.get('/view/products',function(req,res){
  res.sendFile('view.html', { root: __dirname });
});

app.get('/view/products/types',function(req,res){
  res.sendFile('filter.html', { root: __dirname });
});

app.get('/edit/:id',function(req,res){
  res.sendFile('edit.html', { root: __dirname });
});

app.get('/delete/products/:id',function(req,res){
  res.sendFile('delete.html', { root: __dirname });
});

app.get('/',function(req,res){
  res.sendFile('frontpage.html', { root: __dirname });
});

// app.use('/', route);

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
  });

  module.exports = app;

