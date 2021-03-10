const express = requiere("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/sign-up",UserController.signUp);

module.exports = api;