let profesorSideBar = document.getElementById("profesorSideBar");
let comments = document.getElementById("profesorComments");
let deleteModal = document.getElementById("deleteProfessorModal");
let teacherForm = document.getElementById("editTeacherForm");

document.getElementById("deleteButton").addEventListener("click", deleteProfesor);
document.getElementById("save").addEventListener("click", editProfesor);


let init = () => {
    getDetalleProfesor();
}

function getDetalleProfesor() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './api/profesoresDetail', false); 
    xhr.send(null);
    if (xhr.status == 200){
        //console.log(xhr.responseText)
        renderDetalle(JSON.parse(xhr.responseText));
        renderDeleteModal(JSON.parse(xhr.responseText));
        renderEditModal(JSON.parse(xhr.responseText));
        
    }else{
        alert("Something went wrong :(");
    }
}

//delete http request
function deleteProfesor() {
    console.log("delete profesor");
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', './api/profesores', false);
    xhr.send(null);
    if (xhr.status == 200){
        console.log("teacher deleted successfully");
        //getDetalleProfesor();
        //refresh page
    }

}

function editProfesor() {
    console.log("edit profesor");
}

function renderDetalle(detalle) {

    let calificacionColor = "danger";
    let puntualidadColor = "danger";
    let conocimientoColor = "danger";
    let claseDinamicaColor = "danger";

    if(detalle.calificacionTotal > 5 && detalle.calificacionTotal <  7) calificacionColor = "warning";    
    else if(detalle.calificacionTotal >= 7) calificacionColor = "success";
     
    if(detalle.puntualidad > 5 && detalle.puntualidad <  7) puntualidadColor = "warning";    
    else if(detalle.puntualidad >= 7) puntualidadColor = "success";

    if(detalle.conocimiento > 5 && detalle.conocimiento <  7) conocimientoColor = "warning";    
    else if(detalle.conocimiento >= 7) conocimientoColor = "success";

    if(detalle.claseDinamica > 5 && detalle.claseDinamica <  7) claseDinamicaColor = "warning";    
    else if(detalle.claseDinamica >= 7) claseDinamicaColor = "success";
     
    let materias = "";

    detalle.materias.forEach((element) => {
        materias += `
        <span class="badge badge-secondary">${element}</span> 
        `
    });

    //side bar
    let detail = `
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">${detalle.nombre}</div>
        <div class="profile-usertitle-job" style="color:darkgrey">Profesor</div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR BUTTONS -->
    <div class="profile-userbuttons">
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editTeacher">
                Editar

        </button>
        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDelete">
                Eliminar

        </button> </div>
    <!-- END SIDEBAR BUTTONS -->
    <!-- SIDEBAR MENU -->
    <br>
    <ul class="nav flex-column text-center" style="background-color: rgb(223, 223, 223);border-top: solid 1px gray;padding-top: 10px;">
        <li class="nav-item text-center">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Materias: <br>${materias} </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Calificación Total: <span class="badge badge-${calificacionColor}">${detalle.calificacionTotal}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Puntualidad: <span class="badge badge-${puntualidadColor}">${detalle.puntualidad}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Conocimiento: <span class="badge badge-${conocimientoColor}">${detalle.conocimiento}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Clase Dínamica: <span class="badge badge-${claseDinamicaColor}">${detalle.claseDinamica}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Comentarios: <span class="badge badge-secondary">${detalle.comentarios.length}</span> </a>
        </li>

    </ul>
    <!-- END MENU -->
    `;

    //comments section
    let comentarios = `
    <div class="profile-content" style="padding: 40px;">
        <h3>Comentarios</h3>
        <div class="container">
    `

    detalle.comentarios.forEach((element) => {
        comentarios += `
        <div class="media comment-box">
            <div class="media-left">
                <a href="#">
                    <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                </a>
            </div>
            <div class="media-body">
                <h5 class="media-heading">${element.usuario}</h5>
                <p style="background-color: rgb(223, 223, 223);"> ${element.comentario}

            </div>
        </div>        
        `
    });

    comentarios += `
    </div>
    </div>
    </div>
    `
    //rendering in the HTML
    profesorSideBar.insertAdjacentHTML("beforeend", detail);
    comments.insertAdjacentHTML("beforeend", comentarios);
}

function renderDeleteModal(detalle) {

    let teacher = `
    <div class="media-body col col-9 align-self-center ml-0">
        <div class="row">
            <h5 class="my-2">${detalle.nombre}</h5>
        </div>    
        <div class="row">
        <p>Calificación: ${detalle.calificacion}/10</p>
        </div>
    </div>
    `;

    deleteModal.insertAdjacentHTML("beforeend", teacher);
    
}

function renderEditModal(detalle) {
    console.log("renderEditmodal");
    let editTeacher = `
    <form>
        <div class="form-group row">                    
            <div class="col-md-6">
                <label for="name">Nombre:</label>
                <input type="text" class="form-control" name="nombre" id="name" value="${detalle.nombre}" required>
            </div>
        </div>
        <div class="form-group row">                                
            <div class="col">
                <label for="calificacion">Califiación:</label>
                <input type="number" name="calificacion" class="form-control" id="calificacion" value="${detalle.calificacion}" required disabled>
            </div>                                
        </div>
        <div class="form-group row">                                
            <div class="col">
                <label for="puntualidad">Puntualidad:</label>
                <input type="number" class="form-control" id="puntualidad" name="puntualidad" value="${detalle.puntualidad}" required disabled>
            </div>                                
        </div> 
        <div class="form-group row">                                
            <div class="col">
                <label for="conocimiento">Conocimiento:</label>
                <input type="number" class="form-control" id="conocimiento" name="conocimiento" value="${detalle.conocimiento}" required disabled>
            </div>                                
        </div>                
        <div class="form-group row">                                
            <div class="col">
                <label for="claseDinamica">Clase dinámica:</label>
                <input type="number" class="form-control" id="claseDinamica" name="claseDinamica" value="${detalle.claseDinamica}" required disabled>
            </div>                                
        </div>
    </form>
    `;

    teacherForm.insertAdjacentHTML("beforeend", editTeacher);
}



init();
