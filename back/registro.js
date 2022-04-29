const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
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

app.post("/registro", function (req, res) {
  let username = req.body.username;
  let mail = req.body.mail;
  let password = req.body.password;
  let cifrado = bcrypt.hashSync(password, 11);

  db.collection("users").insertOne(
    { username: username, mail: mail, password: cifrado },
    function (err, result) {
      if (err !== undefined) {
        res.send({ mensaje: "Error en el registro" });
      } else {
        res.send({ mensaje: "OK usuario registrado" });
      }
    }
  );
});
