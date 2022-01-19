const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 3000;
const route = express.Router();
const db = require("./db");
const path = require('path');


//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(jsonParser);
app.use('/', require('./httproutes'))

app.get('/create/products',function(req,res){
  res.sendFile(path.join(__dirname, '/client', '/html', 'create.html'));
});

app.get('/view/products',function(req,res){
  res.sendFile(path.join(__dirname, '/client', '/html', 'view.html'));
});

app.get('/view/products/types',function(req,res){
  res.sendFile(path.join(__dirname, '/client', '/html', 'filter.html'));
});

app.get('/edit/:id',function(req,res){
  res.sendFile(path.join(__dirname, '/client', '/html', 'edit.html'))
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/client', '/html', 'frontpage.html'))
});

// app.use('/', route);

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
  });

  module.exports = app;

