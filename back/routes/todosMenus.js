const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get("/", function (req, res) {
  //let db = req.app.locals.db;
  req.app.locals.db
    .collection("menus")
    .find()
    .toArray(function (err, datos) {
      if (err !== undefined) {
        console.log(err);
      } else {
        if (datos.length > 0) {
          res.send({ datos: datos });
        } else {
          res.send({ message: "No tienes menus" });
        }
      }
    });
});

module.exports = router;
