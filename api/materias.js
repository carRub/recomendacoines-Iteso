var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let materiaSchema = require("../public/src/js/schemas/materiaSchema.js");
let Materia = mongoose.model("Materia", materiaSchema.schema); //model de materia
var jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");
    Materia.find({})
      .lean()
      .exec((err, materias) => {
        return res.end(JSON.stringify(materias, null, 4));
      });
  } catch (e) {
    res.send({ error: "wrong login" });
  }
});

module.exports = router;
