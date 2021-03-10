const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION  } = require('./config');

//Load Routings - Carga de rutas
const userRoutes = require("./routers/user");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configuracion de Headers HTTP
//Mas adelante

//Router Basic - Rutas Basicas
app.use(`/api/${API_VERSION}`,userRoutes);

module.exports = app;
