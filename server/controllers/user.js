const bcrypt = require("bcrypt-nodejs");
const User = requiere("../models/user.js");

function signUp (req, res){
    console.log("Endpoint de signUp funcionando correctamente");

}

module.exports = {
    signUp
}

