"use sctrict"
let express = require('express');
let app = express();

//url to our db on Atlas
let connectionString = 'mongodb+srv://dbUser:Recomendaciones12@recomendaciones-iteso-akupu.mongodb.net/test?retryWrites=true&w=majority'

//setting up mongoose and the schemas
let mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true});
let materiaSchema = require('./public/src/js/schemas/materiaSchema.js');
let profesorSchema = require('./public/src/js/schemas/profesorSchema.js');

//creating and validating connection
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("success");
    let Materia = mongoose.model('Materia', materiaSchema.schema); //model de materia
    let newMateria = {nombre: "POO", descripcion: "babla", calificacion: 8, creditos: 8};
    let materia = Materia(newMateria);

    //materia.save().then((doc) => console.log(doc));

});

// Static Website.
app.use(express.static('public')); 

var port = process.env.port || 3000;

app.listen(port);

app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

// Profesores.
let profesor = mongoose.model('Profesor', profesorSchema.schema); //model de materia
app.use('/api/profesores/', require('./api/profesores'))
app.use('/api/profesoresDetail/', require('./api/profesoresDetail'))

// Materias.
//let materia = mongoose.model('Materia', materiaSchema.schema); //model de materia
app.use('/api/materias/', require('./api/materias'))
app.use('/api/materiasDetail/', require('./api/materiasDetail'))

// Perfil.
app.use('/api/perfil/', require('./api/perfil'))


