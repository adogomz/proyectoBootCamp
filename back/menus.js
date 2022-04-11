const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

/* app.get("/menus", function (req, res) {
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

module.export = app; */
