const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//Co nexión a la base de datos
mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/webCursoProgV1`, 
    {useNewUrlParser: true }, 
    (err,res) => {
        if(err){
            throw err;
        }else{
            console.log("Conectado a la base de datos correctamente."); 

            app.listen(port, () =>{
                console.log("##################");
                console.log("#### API REST ####");
                console.log("##################");
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            });
    }
})
 