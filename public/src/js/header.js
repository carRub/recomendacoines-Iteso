document.title = "Recomendaciones ITESO";
document.querySelector("head").innerHTML +=
  '<link rel="stylesheet" type="text/css" href="../src/css/header.css">';

var req = new XMLHttpRequest();
let perfil = {};
req.open("GET", "http://localhost:3000/api/perfil", false);
req.send(null);
if (req.status == 200) {
  perfil=JSON.parse(req.responseText);
} else {
  alert("Something went wrong :(");
}

document.querySelector("header").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: rgba(0, 0, 0, .5)">
      <a class="navbar-brand py-0" href="../../"><img src="./src/img/logoIteso.png" alt="" style="height: 30px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="../../">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../../profesores.html">Profesores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../../materias.html">Materias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#profileModal" href="#">Perfil</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-graduate" style="font-size: 20px;"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333" style=" background-color: rgba(0, 0, 0, .5);">
                <a class="dropdown-item userNavBar" data-toggle="modal" data-target="#loginModal" href="#">Entrar</a>
                <a class="dropdown-item userNavBar" data-toggle="modal" data-target="#registryModal" href="#">Registrarse</a>
              </div>
            </li>
          </ul>
      </div>
    </nav>
    <!--Login Modal-->
    <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal header -->
                <div class="modal-header">
                    <h5>Entrar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <form>
                        <!-- correo -->
                        <div class="form-group">
                            <label for="email" class="col-form-label">Correo</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-graduate"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="emailLogin" placeholder="@iteso.mx">
                            </div> 
                        </div>
                        <!-- Contraseña -->
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-key"></i>
                                    </span>
                                </div>
                                <input type="password" class="form-control" id="passwordLogin" placeholder="contraseña">
                            </div>
                        </div>
                        <!-- Login & close -->
                        <div class="form-group">
                            <button type="button" value="Login"  onClick="login()" class="btn btn-primary login_btn" >Login</button>
                            <button type="button" value="Admin" data-toggle="modal" href="#loginAdminModal" data-dismiss="modal" class="btn btn-success login_btn">Admin</button>
                            <button type="button" value="Close" data-dismiss="modal" class="btn btn-secondary login_btn">Cerrar</button>
                        </div>
                    </form>
                    <hr>
                    <p mr-auto>No tienes cuenta! <a class="registerLink" data-toggle="modal" href="#registryModal" data-dismiss="modal">Regístrate aquí</a></p>
                </div>
            </div>
        </div>
    </div>
    <!-- End of Login Modal-->
    <!-- Registry modal -->
    <div id="registryModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal header -->
                <div class="modal-header">
                    <h5>Registro</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>                        
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <div class="container-fluid">
                        <form onsubmit="login2()" oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
                            <!-- Nombre y apellidos -->
                            <div class="form-group row">                    
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="nombre" id="nameRegister" placeholder="Nombre o nombres" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="apellidos" id="lastNameRegister" placeholder="Apellidos" required>
                                </div>
                            </div>
                            <!-- Correo -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="text" class="form-control" id="emailRegister" placeholder="Tu correo @iteso.mx" required>
                                </div>                                
                            </div>
                            <!-- Carrera -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="text" class="form-control" id="majorRegister" placeholder="Carrera" required>
                                </div>                                
                            </div>
                            <!-- Género -->
                                    
                            <!-- Contraseña -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="password" class="form-control" id="passwordRegister" placeholder="Contraseña" name="up">
                                </div>                                
                            </div>
                            <!-- Confirmar contraseña -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmar contraseña" name="up2">
                                </div>                                
                            </div>      
                            <!-- Registrarse & close -->
                            <div class="form-group row">                                
                                <div class="col">
                                    
                                    <button type="send" value="Login" class="btn btn-primary login_btn" >Registrarse</button>
                                    <button type="button" class="btn btn-secondary" id="close" data-dismiss="modal">Cerrar</button>
                                </div>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of Registry modal -->
    <!--Admin Modal-->
    <div id="loginAdminModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal header -->
                <div class="modal-header">
                    <h5>Entrar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <form>
                        <!-- correo -->
                        <div class="form-group">
                            <label for="email" class="col-form-label">Correo</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-shield"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="emailLogin" placeholder="correo">
                            </div> 
                        </div>
                        <!-- Contraseña -->
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-key"></i>
                                    </span>
                                </div>
                                <input type="password" class="form-control" id="password" placeholder="contraseña">
                            </div>
                        </div>
                        <!-- Login & close -->
                        <div class="form-group">
                            <button type="button" value="Login" data-dismiss="modal" class="btn btn-primary login_btn">Login</button>
                            <button type="button" value="Close" data-dismiss="modal" class="btn btn-secondary login_btn">Cerrar</button>
                        </div>
                    </form>
                    <hr>
                    <p mr-auto>Estas ingresando como administrador</p>
                </div>
            </div>
        </div>
    </div>
    <!--End of Admin modal-->
    <!--Profile modal-->
    <div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                            <h3 class="modal-title">Tu perfil</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                <h3 class="userName my-5">${perfil.nombre} ${perfil.apellido}</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mb-3">
                                <label for="email">Correo:</label>
                            </div>
                            <div class="col-sm">
                                <input type="email" name="email" id="emailUser" readonly placeholder="${perfil.correo}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mb-3">
                                <label for="major">Carrera:</label>
                            </div>
                            <div class="col-sm">
                                <input type="text" name="major" id="majorUser" readonly placeholder="${perfil.carrera}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm mb-3">
                                <label for="sex">Género:</label>
                            </div>
                            <div class="col-sm mb-3">
                                <input type="radio" class="form-check-input" name="sex" checked readonly>
                                <div class="col col-sm-2">
                                    <label for="sex"> ${perfil.sexo == 'Mujer' ? 'Mujer': 'Hombre'} </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-toggle="modal" href="#editModal" data-dismiss="modal">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <p mr-auto>Ve tus comentarios <a class="nav-link p-0" style="display: inline-block;" href="../../comentariosUsuarioMaterias.html">aquí</a></p>
                </div>
            </div>
        </div>
    </div>
    <!--Profile modal-->
    <!--Edit modal-->    
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                            <h5 class="modal-title">Editar</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <form oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
                            <!-- Nombre y apellidos -->
                            <div class="form-group row">                    
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="nombre" id="name" value="${perfil.nombre}" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="apellidos" id="lastName" value="${perfil.apellido}" required>
                                </div>
                            </div>
                            <!-- Correo -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="text" class="form-control" id="emailRegistry" value="${perfil.correo}" required disabled>
                                </div>                                
                            </div>
                            <!-- Carrera -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="text" class="form-control" id="majorRegistry" value="${perfil.carrera}" required>
                                </div>                                
                            </div>
                            <!-- Género -->
                            <div class="form-check form-group rounded" style="border: solid; border-color: lightgrey; border-width: 1px;">
                                <div class="row ml-1">
                                    <div class="col">
                                        <input type="radio" class="form-check-input" name="sex" id="female" value="option1" ${perfil.sexo == 'Mujer' ? 'checked': ''}>
                                        <label class="form-check-label" for="mujer">
                                            Mujer
                                        </label> 
                                    </div>
                                </div>
                                <div class="row ml-1">
                                    <div class="col">
                                        <input type="radio" class="form-check-input" name="sex" id="male" value="option2" ${perfil.sexo == 'Hombre' ? 'checked': ''}>
                                        <label class="form-check-label" for="hombre">
                                            Hombre
                                        </label> 
                                    </div>
                                </div>
                            </div>            
                            <!-- Contraseña -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="password" class="form-control" id="passwordRegistry" placeholder="Contraseña" name="up">
                                </div>                                
                            </div>
                            <!-- Confirmar contraseña -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmar contraseña" name="up2">
                                </div>                                
                            </div>      
                            <!-- Registrarse & close -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <button type="submit" class="btn btn-primary" id="register">Guardar</button>
                                    <button type="button" class="btn btn-secondary" id="close" data-dismiss="modal">Cerrar</button>
                                </div>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Edit modal-->
`;


function login2(){

    fetch('api/register', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 
        'nombre='+document.getElementById('nameRegister').value+
        '&apellido='+document.getElementById('lastNameRegister').value+
        '&correo='+document.getElementById('emailRegister').value+
        '&carrera='+document.getElementById('majorRegister').value
        +'&password='+document.getElementById('passwordRegister').value
      })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            alert("Usuario creado con éxito")
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });}


function login(){
    console.log(document.getElementById('emailLogin').value)
    fetch('api/login', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'email='+document.getElementById('emailLogin').value+'&password='+document.getElementById('passwordLogin').value
      })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            if(data.token){
                document.cookie = "token="+data.token;
                $('#loginModal').modal('hide');

            }else{
                alert("Usuario o contraseña incorrecta")
            }
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}
