const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION  } = require('./config');

//Load Routings - Carga de rutas
//Mas Adelante

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configuracion de Headers HTTP
//Mas adelante

//Router Basic - Rutas Basicas
//Mas adelante

module.exports = app;
