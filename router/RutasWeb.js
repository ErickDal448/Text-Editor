const express = require('express');
const router = express.Router();
const Plantillas = require('../models/plantilla')

router.get("/", async (req, res) => {

    try{

        const arrayPlantillasDB = await Plantillas.find()
        console.log(arrayPlantillasDB)
        res.render("index", 
        {
            nombreCuenta: "Erick Daniel Alba Leon",
            arrayPlantillas: arrayPlantillasDB
        });

    }catch (error){
        console.log(error);
    }
});

router.get("/EditarPlantilla", (req, res) => {
    res.render("EditarPlantilla");
});

module.exports = router;