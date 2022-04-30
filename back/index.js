require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const bycrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const urlDb = process.env.MONGO_URI;
const registro = require("./routes/registro.routes");
const login = require("./routes/login.routes");
const menus = require("./routes/menus.routes");
app.listen(3002);
app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let MongoClient = mongodb.MongoClient;
let db;

// conexion base datos local
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    app.locals.db = client.db("menu");
    console.log("conectado a la base datos local");
  }
});

//rutas
app.use("/registro", registro);
app.use("/login", login);
app.use("/menus", menus);

/*
// Conexion a remoto 
MongoClient.connect(urlDb, function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    app.locals.db = client.db("api_nutri");
    console.log("Conectado a la base datos remota");
  }
});
*/
