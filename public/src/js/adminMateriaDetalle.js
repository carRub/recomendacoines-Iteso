let subjectSideBar = document.getElementById("subjectSideBar");
let comments = document.getElementById("subjectComments");
let deleteModal = document.getElementById("deleteSubjectModal");
let subjectForm = document.getElementById("editSubjectForm");

document.getElementById("deleteButton").addEventListener("click", deleteMateria);
document.getElementById("save").addEventListener("click", editSubject);


let init = () => {
    getDetalleMateria();
}

function getDetalleMateria() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './materiasDetail', false); 
    xhr.send(null);
    if (xhr.status == 200){
        console.log(xhr.responseText)
        renderDetalle(JSON.parse(xhr.responseText));
        renderDeleteModal(JSON.parse(xhr.responseText));
        renderEditModal(JSON.parse(xhr.responseText));
    }else{
        alert("Something went wrong :(");
    }
}

//delete http request
function deleteMateria() {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', './api/materias', false);
    xhr.send(null);
    if (xhr.status == 200){
        console.log("subject deleted successfully");
        //getDetalleMateria();
        //refresh page
    }

}

function editSubject() {
    console.log("edit profesor");
}

function renderDetalle(detalle) {

    let cargaColor = "success";
    let programaColor = "danger";

    if(detalle.carga > 5 && detalle.carga <  7) cargaColor = "warning";    
    else if(detalle.carga >= 7) cargaColor = "danger";
     
    if(detalle.programa > 5 && detalle.programa <  7) programaColor = "warning";    
    else if(detalle.programa >= 7) programaColor = "success";
     
    let profesores = "";

    detalle.profesores.forEach((element) => {
        profesores += `
        <span class="badge badge-secondary">${element}</span> 
        `
    });

    //side bar
    let detail = `
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">${detalle.nombre}</div>
        <div class="profile-usertitle-job" style="color:darkgrey">Materia</div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR BUTTONS -->
    <div class="profile-userbuttons">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editSubject">
                Editar

        </button>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDelete">
                Eliminar

        </button> 
    </div>
    <!-- END SIDEBAR BUTTONS -->
    <!-- SIDEBAR MENU -->
    <br>
    <ul class="nav flex-column text-center" style="background-color: rgb(223, 223, 223);border-top: solid 1px gray;padding-top: 10px;">
        <li class="nav-item text-center">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Profesores: <br>${profesores} </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Carga: <span class="badge badge-${cargaColor}">${detalle.carga}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Programa: <span class="badge badge-${programaColor}">${detalle.programa}/10</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Creditos: <span class="badge badge-success">${detalle.creditos}</span> </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" style="color:rgb(44, 44, 44)" href="#">Comentarios: <span class="badge badge-secondary">${detalle.comentarios.length} Comentarios</span> </a>
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
    subjectSideBar.insertAdjacentHTML("beforeend", detail);
    comments.insertAdjacentHTML("beforeend", comentarios);
}

function renderDeleteModal(detalle) {

    let subject = `
    <div class="media-body col col-9 align-self-center ml-0">
        <div class="row">
            <h5 class="my-2">${detalle.nombre}</h5>
        </div>    
        <div class="row">
        <p>Créditos: ${detalle.creditos}</p>
        </div>
    </div>
    `;

    deleteModal.insertAdjacentHTML("beforeend", subject);
    
}

function renderEditModal(detalle) {
    console.log("renderEditmodal");
    let editTeacher = `
    <form>
        <!-- Nombre-->
        <div class="form-group row">                    
            <div class="col-md-6">
                <label for="name">Nombre:</label>
                <input type="text" class="form-control" name="nombre" id="name" value="${detalle.nombre}" required>
            </div>
        </div>
        <!-- Descripción -->
        <div class="form-group row">                                
            <div class="col">
                <label for="descripcion">Descripción:</label>
                <input type="text" name="descripcion" class="form-control" id="descripcion" value="${detalle.descripcion}" required>
            </div>                                
        </div>
        <!-- calificación -->
        <div class="form-group row">                                
            <div class="col">
                <label for="calificacion">Calificación:</label>
                <input type="number" class="form-control" id="calificacion" name="calificacion" value="${detalle.calificacion}" required disabled>
            </div>                                
        </div> 
        <div class="form-group row">                                
            <div class="col">
                <label for="creditos">Créditos:</label>
                <input type="number" class="form-control" id="creditos" name="creditos" value="${detalle.creditos}" required>
            </div>                                
        </div>                
    </form>
    `;

    subjectForm.insertAdjacentHTML("beforeend", editTeacher);
}

init();
