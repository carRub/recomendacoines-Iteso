let express = require('express');
let app = express();

// Static Website.
app.use(express.static('public')); 

var port = process.env.port || 3000;

app.listen(port);

app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

// Profesores.
app.use('/api/profesores/', require('./api/profesores'))
app.use('/api/profesoresDetail/', require('./api/profesoresDetail'))

// Materias.
app.use('/api/materias/', require('./api/materias'))
app.use('/api/materiasDetail/', require('./api/materiasDetail'))

// Perfil.
app.use('/api/perfil/', require('./api/perfil'))
