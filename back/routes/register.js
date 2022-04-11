const express = require("express");
const router = require("./todosMenus");

router.post("/", function (req, res) {
  req.app.locals.db
    .collection("users")
    .find({
      username: req.body.username,
      mail: req.body.password,
    })
    .toArray(function (err, result) {
      if (err !== undefined) {
        console.log(err);
      } else {
        req.app.locals.db
          .collection("user")
          .insertOne({
            username: req.body.username,
            mail: req.body.mail,
            password: req.body.password,
          }),
          function (error, result) {
            if (error !== undefined) {
              res.send(result);
            } else {
              console.log(error);
            }
          };
      }
    });
});

module.export = router;

/* const express = require('express')
const router = express.Router();

router.post('/', function(req, res){
    let db = req.app.locals.db
    db.collection("users").find("username": req.body.username, 'password': req.body.password)
}) */
