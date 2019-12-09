var express = require("express");
var router = express.Router();

let mongoose = require("mongoose");

let Usuario = require("../public/src/js/schemas/userSchema");
var jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  console.log(req.body)

  const post = new Usuario({ 
    
    nombre: req.body.nombre, 
    apellido: req.body.apellido, 
    correo: req.body.correo, 
    carrera: req.body.carrera, 
    contraseña: req.body.password, 
    rol: false, 

  });

  post.save(function(err) {
    if (!err) console.log("Success!");
    res.send({success: true})
  });
});

module.exports = router;
