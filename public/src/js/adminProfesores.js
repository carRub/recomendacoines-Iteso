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
        </tr>
        `;//warning, success
        tbody.insertAdjacentHTML("beforeend", profesor);
        console.log(e);
    })
}

init();