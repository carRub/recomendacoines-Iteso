var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let profesorSchema = require('../public/src/js/schemas/profesorSchema.js');
let Profesor = mongoose.model('Profesore', profesorSchema.schema); //model de materia

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Profesor.find({}).lean().exec((err, profesores) => {
        return res.end(JSON.stringify(profesores));
    });
})


module.exports = router
