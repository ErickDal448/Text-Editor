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

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const plantillaDB = new Plantillas(body)
        await plantillaDB.save()

        //await Plantillas.create(body)

        res.redirect('/plantillas/EditarPlantilla')
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async(req,res) => {
    const id = req.params.id;
    try {
        
        const plantillasDB = await Plantillas.findOne({_id : id});
        console.log(plantillasDB)

        res.render('EditarPlantilla', {
            Plantillas: plantillasDB,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render('EditarPlantilla', {
            error: true,
            mensaje: 'No se encuentra la plantilla seleccionada'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const plantillaDB = await Plantillas.findByIdAndDelete({_id : id});
        if(plantillaDB){
            res.json({
                estado: true,
                mensaje: 'eliminado'
            })
        }else{
            res.json({
                estado: false,
                mensaje: 'Fallo al eliminar'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('EditarPlantilla', {
            error: true,
            mensaje: 'No se encuentra la plantilla seleccionada'
        })
    }

})

router.get("/EditarPlantilla", (req, res) => {
    res.render("EditarPlantilla");
});



module.exports = router;