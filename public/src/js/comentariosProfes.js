let teacherSideBar = document.getElementById("teacherCommentsProfile");
let teacherComments = document.getElementById("teacherCommentsDetail");

let init = () => {
    getComentariosProfesor();
}

function getComentariosProfesor() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', './api/perfil', false); 
    xhr.send(null);
    if (xhr.status == 200){

        renderProfile(JSON.parse(xhr.responseText));
    }else{
        alert("Something went wrong :(");
    }

    xhr.open('GET', './api/perfil/comentarios/profesores', false); 
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
            <a href="./comentariosUsuarioMaterias.html" class="btn btn-success">Materias</a>
            <a href="#" class="btn btn-success">Profes</a> 
        </div>
    </div>
    <!-- END SIDEBAR USER TITLE -->
    <!-- SIDEBAR MENU -->
    <br>
    <!-- END MENU -->
    `

    teacherSideBar.insertAdjacentHTML("beforeend", profile);
}

function renderComments(detail) {
    let comments = `
    <div class="profile-content" style="padding: 40px;">
        <h3>Comentarios a profes</h3>
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
    })

    comments += `
    </div>
    </div>
    </div>
    `

    teacherComments.insertAdjacentHTML("beforeend", comments);
}

/*
                    <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name">John Doe</div>
                        <div class="profile-usertitle-job" style="color:darkgrey">Alumno</div>
                        <div class="profile-usertitle-job" style="color:darkgrey">Ing. en Sistemas</div>
                        <br>
                        <div class="profile-usertitle-job" style="color:darkgrey">Comentarios</div>
                        <div class="profile-userbuttons">
                            <a href="./comentariosUsuarioMaterias.html" class="btn btn-success">Materias</a>
                            <a href="#" class="btn btn-success">Profes</a> 
                        </div>
                    </div>
                    <!-- END SIDEBAR USER TITLE -->
                    <!-- SIDEBAR MENU -->
                    <br>
                <!-- END MENU -->

*/


/*
<div class="profile-content" style="padding: 40px;">
                    <h3>Comentarios a profes</h3>
                    <div class="container">
                        <div class="row">
                            <div class="media comment-box">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h5 class="media-heading">Carlos Rubio</h5>
                                    <p style="background-color: rgb(223, 223, 223);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                        to

                                </div>
                            </div>
                            <div class="media comment-box">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h5 class="media-heading">ALexis Muñoz</h5>
                                    <p style="background-color: rgb(223, 223, 223);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets

                                </div>
                            </div>
                            <div class="media comment-box">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h5 class="media-heading">ALexis Muñoz</h5>
                                    <p style="background-color: rgb(223, 223, 223);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/

init();