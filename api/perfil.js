var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  let perfil = {
      nombre: "Esteban",
      apellido: "Cervantes",
      correo: 'is713782@iteso.mx',
      carrera: 'Ing. en Sistemas',
      sexo: 'Hombre',
      contraseña: 'Password123'

  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(perfil, null, 4));
})


module.exports = router
