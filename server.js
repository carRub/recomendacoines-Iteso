let express = require('express');
let app = express();

// Static Website.
app.use(express.static('public')); 

var port = process.env.port || 3000;

app.listen(port);

app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

app.use('/api/profesores/', require('./api/profesores'))
app.use('/api/profesoresDetail/', require('./api/profesoresDetail'))
app.use('/api/materias/', require('./api/materias'))