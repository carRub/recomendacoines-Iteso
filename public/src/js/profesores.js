let tbody = document.getElementById("tbody");

let init = () => {
  getProfesores();
};

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

let getProfesores = () => {
    var req = new XMLHttpRequest();
    req.open("GET", "/api/profesores", false);
    if (getCookie("token")) {
      req.send();
  
      if (req.status == 200) {
        if (JSON.parse(req.responseText).error == "wrong login") {
          alert("Favor de inicar Sesión");
          window.location.href = "../";
        }
        renderProfesores(JSON.parse(req.responseText));
      } else {
        alert("Something went wrong :(");
      }
    } else {
      alert("Favor de inicar Sesión");
      window.location.href = "../";
    }
};

let renderProfesores = profesores => {
  profesores.forEach((e, i) => {
    let profesor = `                        
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${e.nombre}</td>
            <td>
            `;
    e.materias.forEach((e, i) => {
      if (i < 3) {
        profesor += `<span class="badge badge-secondary">${e}</span>`;
      }
    });

    let badgeColor = "danger";
    if (e.calificacion > 5 && e.calificacion < 7) {
      badgeColor = "warning";
    } else if (e.calificacion >= 7) {
      badgeColor = "success";
    }
    profesor += `
            </td>
            <td>
                <span class="badge badge-${badgeColor}">${e.calificacion}/10</span>

            </td>
            <td><a href="./profesorDetalle.html">Detalle</a></td>
        </tr>
        `; //warning, success
    tbody.insertAdjacentHTML("beforeend", profesor);
    console.log(e);
  });
};

init();
