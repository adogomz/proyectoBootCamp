const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const router = express.Router();
// app.use(express.json());
// app.listen(3002);

// let MongoClient = mongodb.MongoClient;
// let db;

// MongoClient.connect("mongodb://127.0.0.1:27017/menu", function (err, client) {
//   if (err !== undefined) {
//     console.log(err);
//   } else {
//     db = client.db("menu");
//     console.log("conectado a users");
//   }
// });

router.post("/", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  req.app.locals.db
    .collection("users")
    .find({ username: username })
    .toArray(function (err, arrayUsuario) {
      if (err !== undefined) {
        res.send({ mensaje: "No a funcionado" });
      } else {
        if (arrayUsuario.length > 0) {
          if (bcrypt.compareSync(password, arrayUsuario[0].password)) {
            res.send({ mensaje: "Todo Ok todo coincide" });
          } else {
            res.send({ mensaje: "contraseña incorrecta" });
          }
        } else {
          res.send({ mensaje: "No estar registrado" });
        }
      }
    });
});

module.exports = router;
