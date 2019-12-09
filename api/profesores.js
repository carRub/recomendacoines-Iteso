var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let profesorSchema = require("../public/src/js/schemas/profesorSchema.js");
let Profesor = mongoose.model("Profesore", profesorSchema.schema); //model de materia
var jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");
    Profesor.find({})
      .lean()
      .exec((err, profesores) => {
        return res.end(JSON.stringify(profesores));
      });
  } catch (e) {
    res.send({ error: "wrong login" });
  }
});


router.delete("/", (req, res) => {
  console.log("caca",req.body)
  try {
    let decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");

    Profesor.remove({ _id: req.body.id }, function(err) {
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
