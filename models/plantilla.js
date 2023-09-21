const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const plantillaSchema = new Schema ({
    titulo: String,
    descripcion: String
})

//crear modelo
const Plantillas = mongoose.model('Plantillas', plantillaSchema);

module.exports = Plantillas;