var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let materiaSchema = require("../public/src/js/schemas/materiaSchema.js");
let Materia = mongoose.model("Materia", materiaSchema.schema); //model de materia
var jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  console.log(req.cookies);
  try {
    var decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");
    Materia.find({})
      .lean()
      .exec((err, materias) => {
        return res.end(JSON.stringify(materias, null, 4));
      });
  } catch (e) {
    console.log(e);
    res.send({ error: "wrong login" });
  }
});

router.delete("/", (req, res) => {
  console.log("caca",req.body)
  try {
    let decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");

    Materia.remove({ _id: req.body.id }, function(err) {
      if (!err) {
        res.send("Materia eliminada correctamente");
      }
      else {
        res.send("Error");

      }
  });

  } catch (error) {
    console.log(error);
    res.send({ error: "wrong update" });
  }
});


module.exports = router;

