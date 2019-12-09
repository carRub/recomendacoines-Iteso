let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let userSchema = require("../public/src/js/schemas/userSchema.js");
let User = mongoose.model("Usuario", userSchema.schema); //model de materia
let jwt = require("jsonwebtoken");


router.get("/", (req, res) => {
  try {
    let decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");
    User.findOne({correo: decoded.correo})
      .lean()
      .exec((err, usuario) => {
        return res.end(JSON.stringify(usuario));
      });
  } catch (e) {
    res.send({ error: "wrong login" });
  }
});

router.put("/", (req, res) => {
  try {
    let decoded = jwt.verify(req.cookies.token, "shhhhh");
    res.setHeader("Content-Type", "application/json");
    User.updateOne({correo: decoded.correo}, 
      {
        contraseña: req.body.password, 
        nombre: req.body.nombre, 
        apellido: req.body.apellido, 
        carrera: req.body.carrera
      }).lean()
      .exec((err, usuario) => {
        return res.send("Usuario modificado correctamente")
      });
  }
  catch (error) {
    res.send({ error: "wrong update" });
  }
});


module.exports = router;
