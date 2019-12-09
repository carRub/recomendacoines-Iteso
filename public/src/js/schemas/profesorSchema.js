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
    puntualidad: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    conocimiento: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    claseDinamica : {
        type: Number,
        min: 0,
        max: 10,
        required: true
    }
});

module.exports = mongoose.model('Profesor', profesorSchema);