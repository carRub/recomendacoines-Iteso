let tbody = document.getElementById("tbody");

let init = ()=> {
    getMaterias();
}

let getMaterias = () => {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/api/materias', false); 
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

            <td><a href="./materiaDetalle.html">Detalle</a></td>
        </tr>
        `;//warning, success
        tbody.insertAdjacentHTML("beforeend", materia);
        console.log(e);
    })
}

init();