const moongose = require("mongoose");
const Schema = moongose.Schema;

const UserSchema =  Schema ({

    name: String,
    lastname: String, 
    email:{
        type:String,
        unique: true
    },
    password:String,
    rol: String,
    active: Boolean

});

module.exports = moongose.model ( "User" , UserSchema);