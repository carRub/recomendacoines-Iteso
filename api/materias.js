var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let materiaSchema = require('../public/src/js/schemas/materiasSchema.js');
let Materia = mongoose.model('Materia', materiaSchema.schema); //model de materia

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  Materia.find({}).lean().exec((err, materias) => {
    return res.end(JSON.stringify(materias, null, 4));
  });
});

module.exports = router;
