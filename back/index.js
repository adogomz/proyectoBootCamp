const express = require("express");
const mongodb = require("mongodb");
const app = express();
const cors = require("cors");
const urlDb = process.env.MONGO_URI;
require("dotenv").config();
const todosMenus = require("./routes/todosMenus");
const register = require("./routes/register");

app.listen(3003);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let MongoClient = mongodb.MongoClient;

MongoClient.connect(urlDb, function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    app.locals.db = client.db("api_nutri");
    console.log("Conectado a la base datos");
  }
});

app.use("/menus", todosMenus);
//app.use("/registro", register);
