let tbody = document.getElementById("tbody");

let init = () => {
  getMaterias();
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

let getMaterias = () => {
  var req = new XMLHttpRequest();
  req.open("GET", "/api/materias", false);
  if (getCookie("token")) {
    req.send();

    if (req.status == 200) {
      if (JSON.parse(req.responseText).error == "wrong login") {
        alert("Favor de inicar Sesión");
        window.location.href = "../";
      }
      renderMaterias(JSON.parse(req.responseText));
    } else {
      alert("Something went wrong :(");
    }
  } else {
    alert("Favor de inicar Sesión");
    window.location.href = "../";
  }
};

let renderMaterias = materias => {
  materias.forEach((e, i) => {
    let materia = `                        
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${e.nombre}</td>
            <td>${e.descripcion.substring(0, 55) + "..."}</td>

            `;

    let badgeColor = "danger";
    if (e.calificacion > 5 && e.calificacion < 7) {
      badgeColor = "warning";
    } else if (e.calificacion >= 7) {
      badgeColor = "success";
    }
    materia += `
            <td>
                <span class="badge badge-${badgeColor}">${e.calificacion}/10</span>

            </td>
            <td>${e.creditos}</td>

            <td><a href="./materiaDetalle.html">Detalle</a></td>
        </tr>
        `; //warning, success
    tbody.insertAdjacentHTML("beforeend", materia);
    console.log(e);
  });
};

init();
