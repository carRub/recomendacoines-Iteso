var express = require('express')
var router = express.Router()

let mongoose = require('mongoose');

let Usuario = require('../public/src/js/schemas/userSchema')
var jwt = require('jsonwebtoken');


router.post('/', (req, res) => {

  
  Usuario.find({correo: req.body.email, contraseña: req.body.password}, function (err, docs) {
    if(docs.length > 0){
      var token = jwt.sign({ correo: req.body.email, contraseña: req.body.password }, 'shhhhh');

      res.send({token})
    }else {
      res.send({error:'error'})
    }
    
  });
  
})


module.exports = router
