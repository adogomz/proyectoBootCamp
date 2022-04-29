const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
const router = express.Router();
app.use(express.json());
app.listen(3000);

let MongoClient = mongodb.MongoClient;
let db;

MongoClient.connect("mongodb://127.0.0.1:27017/menu", function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    db = client.db("users");
    console.log("conectado a users");
  }
});

router.post("/", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  db.collection("users")
    .find({ username: username })
    .toArray(function (err, arrayUsuario) {
      if (err !== undefined) {
        res.send({ mensaje: "Error usuario no encontrado" });
      } else {
        if (arrayUsuario.length > 0) {
          if (bcrypt.compareSync(password, arrayUsuario[0].password)) {
            res.send({ mensaje: "todo Ok usuario encontrado" });
          } else {
            res.send({ mensaje: "Contraseña o usuario incorrectos" });
          }
        } else {
          res.send({ mensaje: "No estas registrado, primero haz el registro" });
        }
      }
    });
});

module.exports = router;
