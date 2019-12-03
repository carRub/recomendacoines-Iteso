var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
  let materiaDetail = {
    nombre: "Conocimiento y Cultura",
    profesores: ["Esteban Cervantes", "Carlos Rubio", "Alexis Muñoz"],
    carga: 5,
    programa: 6,
    creditos: 8,
    comentarios: [
      {
        usuario: "Carlos Rubio",
        comentario:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
      },
      {
        usuario: "Alexis Muñoz",
        comentario:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      },
      {
        usuario: "Esteban Cervantes",
        comentario:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      }
    ]
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(materiaDetail, null, 4));
});

module.exports = router;
