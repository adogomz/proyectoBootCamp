const express = require("express");
const mongodb = require("mongodb");
const app = express();
const cors = require("cors");
/* const urlDb = process.env.MONGO_URI; */
/* import menus from "./menus"; */
/* funciona base datos local */
app.listen(3002);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* process.env.MONGO_URI */

let MongoClient = mongodb.MongoClient;
let db;

MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    db = client.db("menu");
    console.log("conectado a la base datos local");
  }
});

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
