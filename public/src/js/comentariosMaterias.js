let subjectSideBar = document.getElementById("subjectCommentsProfile");
let subjectComments = document.getElementById("subjectCommentsDetail");

let init = () => {
    getComentariosMateria();
}

function getComentariosMateria() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', './api/perfil', false); 
    xhr.send(null);
    if (xhr.status == 200){
        renderProfile(JSON.parse(xhr.responseText));
    }else{
        alert("Something went wrong :(");
    }

    xhr.open('GET', './api/perfil/comentarios/materias', false); 
    xhr.send(null);
    if (xhr.status == 200){
        renderComments(JSON.parse(xhr.responseText));
    }else{
        alert("Something went wrong :(");
    }
}

function renderProfile(detail) {
    
    let profile = `
    <!-- END SIDEBAR USERPIC -->
    <!-- SIDEBAR USER TITLE -->
    <div class="profile-usertitle">
        <div class="profile-usertitle-name">${detail.nombre} ${detail.apellido}</div>
        <div class="profile-usertitle-job" style="color:darkgrey">Alumno</div>
        <div class="profile-usertitle-job" style="color:darkgrey">${detail.carrera}</div>
        <br>
        <div class="profile-usertitle-job" style="color:darkgrey">Comentarios</div>
        <div class="profile-userbuttons">
            <a href="#" class="btn btn-success">Materias</a>
            <a href="./comentariosUsuarioProfes.html" class="btn btn-success">Profes</a> 
        </div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR MENU -->
    <br>
    <!-- END MENU -->
    `
    subjectSideBar.insertAdjacentHTML("beforeend", profile);
}

function renderComments(detail) {

    let comments = `
    <div class="profile-content" style="padding: 40px;">
        <h3>Comentarios a materias</h3>
        <div class="container">
            <div class="row">
    `    
    detail.forEach((element) => {
        comments += `
        <div class="media comment-box">
            <div class="media-left">
                <a href="#">
                    <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                </a>
            </div>
            <div class="media-body">
                <h5 class="media-heading">${element.nombre}</h5>
                <p style="background-color: rgb(223, 223, 223);">${element.comentario}
            </div>
        </div>
        `
    });

    comments += `
    </div>
    </div>
    </div>
    `

    subjectComments.insertAdjacentHTML("beforeend", comments);
    console.log("success");
}

init();