let tbody = document.getElementById("tbody");

let init = ()=> {
    getMaterias();
}

let getMaterias = () => {
    var req = new XMLHttpRequest();
    req.open('GET', './api/materias', false); 
    req.send(null);
    if (req.status == 200){
        console.log(req.responseText)
        renderMaterias(JSON.parse(req.responseText));
    }else{
        alert("Something went wrong :(");
    }
}

let renderMaterias = (materias) => {
    materias.forEach((e, i) => {
        let materia = `                        
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${e.nombre}</td>
            <td>${e.descripcion}</td>

            `

        let badgeColor = "danger";
        if(e.calificacion > 5 && e.calificacion < 7){
            badgeColor = "warning";
        }else if(e.calificacion >= 7) {
            badgeColor = "success";
        }
        materia += `
            <td>
                <span class="badge badge-${badgeColor}">${e.calificacion}/10</span>

            </td>
            <td>${e.creditos}</td>
            
            <td><a href="./adminMateriaDetalle.html">Detalle</a></td>
            <td>
                <button class="btn" id=${e._id} onclick="deleteMateria('${e._id}')"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `;//warning, success
        tbody.insertAdjacentHTML("beforeend", materia);
        console.log(e);
    })
}

function deleteMateria(detalle) {
    fetch("api/materias", {
        method: "DELETE",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body:
          "id="+detalle
      })
        .then(function(response) {
          if (response.status !== 200) {
            alert(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }
    
          // Examine the text in the response
          response.text().then(function(data) {
            
            alert('correcto!')
            location.reload();

          });
        })
        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
}

init();