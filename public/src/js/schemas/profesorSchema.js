let mongoose = require('mongoose');

let profesorSchema = mongoose.Schema({
    nombre: String, 
    materias: [String], 
    calificacion: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    rol: String,
});

module.exports = mongoose.model('Profesor', profesorSchema);