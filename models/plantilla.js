const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const plantillaSchema = new Schema ({
    titulo: String,
    descripcion: String, 
    userId: String,
    texto: String,
    rol: String
})

//crear modelo
const Plantillas = mongoose.model('plantillas', plantillaSchema);

module.exports = Plantillas;