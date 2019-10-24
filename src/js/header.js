document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="../src/css/header.css">';
document.querySelector('header').innerHTML = `

<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: rgba(0, 0, 0, .5)">
      <a class="navbar-brand py-0" href="#"><img src="./src/img/logoIteso.png" alt="" style="height: 30px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profesores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Materias</a>
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
                        <form oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
                            <!-- Nombre y apellidos -->
                            <div class="form-group row">                    
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="nombre" id="name" placeholder="Nombre o nombres" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="apellidos" id="lastName" placeholder="Apellidos" required>
                                </div>
                            </div>
                            <!-- Correo -->
                            <div class="form-group row">                                
                                <div class="col">
                                    <input type="text" class="form-control" id="emailRegistry" placeholder="Tu correo" required>
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
                                    <button type="submit" class="btn btn-primary" id="register">Registrarse</button>
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

`;