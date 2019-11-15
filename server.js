const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let express = require('express');
let app = express();

app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.listen(port, () => {
    console.log("Listening on port 3000!");
})

app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

app.get('/api/profesores', (req, res) => {
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
    res.send(JSON.stringify(profesores));
})