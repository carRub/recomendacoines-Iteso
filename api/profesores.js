var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  let profesores = [{
      nombre: "Esteban Cervantes",
      materias: ["POO", "Programación estructurada"],
      calificacion: 1
  },
  {
      nombre: "Carlos Rubio",
      materias: ["Ética en la empresa", "COE"],
      calificacion: 6
  },
  {
      nombre: "Alexis Muñoz",
      materias: ["POO", "Contexto Histórico y Social"],
      calificacion: 9
  }];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(profesores, null, 4));
})


module.exports = router
