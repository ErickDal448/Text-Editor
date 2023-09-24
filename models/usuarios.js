const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
    name: String,
    email: String
})

//crear modelo
const Usuarios = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuarios;