var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  let materias = [{
      nombre: "Programación estructurada",
      descripcion: "Esta materia se interesa en explicar...",
      calificacion: 1,
      creditos: 8
  },
  {
    nombre: "Ética en la Empresa",
    descripcion: "Se explicaran los temas de...",
    calificacion: 6,
    creditos: 12
  },
  {
    nombre: "Conocimiento y cultura",
    descripcion: "En esta materia trataremos de...",
    calificacion: 8,
    creditos: 8
  }];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(materias, null, 4));
})


module.exports = router
