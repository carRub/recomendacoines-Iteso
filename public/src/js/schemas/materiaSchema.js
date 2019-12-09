let mongoose = require('mongoose');

let materiaSchema = mongoose.Schema({
    nombre: String, 
    descripcion: String, 
    calificacion: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    creditos: {
        type: Number,
        min: 4,
        max: 18,
        required: true
    },
});

module.exports = mongoose.model('Materia', materiaSchema);

