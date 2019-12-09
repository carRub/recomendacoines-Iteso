let tbody = document.getElementById("tbody");

let init = ()=> {
    getProfesores();
}

let getProfesores = () => {
    var req = new XMLHttpRequest();
    req.open('GET', './api/profesores', false); 
    req.send(null);
    if (req.status == 200){
        renderProfesores(JSON.parse(req.responseText));
    }else{
        alert("Something went wrong :(");
    }
}

let renderProfesores = (profesores) => {
    profesores.forEach((e, i) => {
        let profesor = `                        
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${e.nombre}</td>
            <td>
            `
        e.materias.forEach((e,i) => {
            if(i < 3){
                profesor += `<span class="badge badge-secondary">${e}</span>`;
            }
        })

        let badgeColor = "danger";
        if(e.calificacion > 5 && e.calificacion < 7){
            badgeColor = "warning";
        }else if(e.calificacion >= 7) {
            badgeColor = "success";
        }
        profesor += `
            </td>
            <td>
                <span class="badge badge-${badgeColor}">${e.calificacion}/10</span>

            </td>
            <td><a href="./adminProfesorDetalle.html">Detalle</a></td>
            <td>
                <button class="btn" id=${e._id} onclick="deleteProfesor('${e._id}')"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `;//warning, success
        tbody.insertAdjacentHTML("beforeend", profesor);
        console.log(e);
    });
}


//delete http request
function deleteProfesor(detalle) {
    console.log(detalle);
    let jsonObj = {};
    jsonObj._id = detalle;
    console.log("delete profesor");
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', './api/profesores', false);
    xhr.send(jsonObj);
    if (xhr.status == 200){
        console.log("teacher deleted successfully");
        console.log(xhr.response);
        //getDetalleProfesor();
        //refresh page
    }

}


init();