let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  nombre: String, 
  apellido: String, 
  correo: String, 
  carrera: String, 
  contraseña: String, 
  admin: Boolean, 

});

module.exports = mongoose.model('Usuario', userSchema);