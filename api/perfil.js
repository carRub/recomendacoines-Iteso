var express = require('express');
var router = express.Router();

//materias, GET get('/comentarios/materias')
let subjectComments = [
  {
    nombre: "POO",
    comentario: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
  },

  {
    nombre: "COE",
    comentario: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
  },

  {
    nombre: "Conocimiento y cultura",
    comentario: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
  }
];

router.get('/', (req, res) => {
  let perfil = {
      nombre: "Esteban",
      apellido: "Cervantes",
      correo: 'is713782@iteso.mx',
      carrera: 'Ing. en Sistemas',
      sexo: 'Hombre',
      contraseña: 'Password123',
      rol: "usuario"
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(perfil, null, 4));
})

router.get('/comentarios/materias', (req, res) => {
  /*let materias = [
    {
      nombre: "POO",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
    },

    {
      nombre: "COE",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
    },

    {
      nombre: "Conocimiento y cultura",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
    }
  ];*/

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(subjectComments, null, 4));
  //res.end(JSON.parse(subjectComments));

})

// router.post('/comentarios/materias', (req, res) => {
//   /*let materias = [
//     {
//       nombre: "POO",
//       comentario: 
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
//     },

//     {
//       nombre: "COE",
//       comentario: 
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
//     },

//     {
//       nombre: "Conocimiento y cultura",
//       comentario: 
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
//     }
//   ];*/

//   subjectComments.push(req);
  
//   console.log(typeof req + " hol");
//   //res.setHeader('Content-Type', 'application/json');
//   //res.send(JSON.stringify(subjectComments, null, 4));
//   //res.send(JSON.parse(subjectComments));
//   res.send("hello");
// })

router.get('/comentarios/profesores', (req, res) => {
  let profesores = [
    {
      nombre: "Carlos Rubio",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
    },

    {
      nombre: "Alexis Muñoz",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
    },

    {
      nombre: "Esteban Cervantes",
      comentario: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(profesores, null, 4));

})

module.exports = router
