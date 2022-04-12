const express = require("express");
const mongodb = require("mongodb");
const app = express();
const cors = require("cors");
const urlDb = process.env.MONGO_URI;
const todosMenus = require("./routes/todosMenus");
//const register = require("./routes/register");
require("dotenv").config();

app.listen(3002);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let MongoClient = mongodb.MongoClient;
let db;

/* Conexion a remoto no funciona revisar con Peio
MongoClient.connect(urlDb, function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    app.locals.db = client.db("api_nutri");
    console.log("Conectado a la base datos");
  }
});
*/

/* CONEXION A BASE DATOS LOCAL PLAN B DEL PLAN C*/
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    db = client.db("menu");
    console.log("conectado a la base datos local");
  }
});

//peticion conectar con todos los menus falla desde la ruta mirar con Eneko
/*app.get("/menus", function (req, res) {
  db.collection("menus")
    .find()
    .toArray(function (err, datos) {
      if (err !== undefined) {
        console.log(err);
      } else {
        if (datos.length > 0) {
          res.send({ datos: datos });
        } else {
          res.send({ message: "No tienes ningun menu" });
        }
      }
    });
});
module.export = app;*/

/* RUTAS */
// LA LLAMADA A TODOS LOS MENUS
app.use("/menus", todosMenus);

//PARA EL REGISTRO CUANDO LO SAQUE
//app.use("/registro", register);
