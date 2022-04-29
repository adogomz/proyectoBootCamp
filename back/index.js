require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const bycrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const urlDb = process.env.MONGO_URI;
const login = require("./routes/login.routes");

app.listen(3000);
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
    db = client.db("menu");
    console.log("conectado a la base datos local");
  }
});

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

app.get("/menus", function (req, res) {
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

module.export = app;
