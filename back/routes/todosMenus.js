const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  req.app.locals.db
    .collection("menus")
    .find()
    .toArray(function (err, datos) {
      if (err !== undefined) {
        console.log(err);
      } else {
        console.log(datos);
        if (datos.length > 0) {
          res.send({ datos: datos });
        } else {
          res.send({ message: "No tienes ningun menu" });
        }
      }
    });
});

module.exports = router;
