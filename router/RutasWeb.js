const express = require('express');
const router = express.Router();
const Plantillas = require('../models/plantilla');
const Usuarios = require('../models/usuarios');
var idUsuario = '650f2a52659d55d63566381a'

router.get("/", async (req, res) => {
    
    try{
        const UsuariosDB = await Usuarios.findOne({_id : idUsuario});
        const arrayPlantillasDB = await Plantillas.find({userId: idUsuario});
        
        res.render("index", 
        {
            nombreCuenta: UsuariosDB.name,
            arrayPlantillas: arrayPlantillasDB
        });

    }catch (error){
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    body.userId = idUsuario;
    body.texto = "Espacio editable";
    try {
        const plantillaDB = new Plantillas(body)
        await plantillaDB.save()
        console.log(plantillaDB)
        //await Plantillas.create(body)

        res.redirect(`/plantillas/${plantillaDB._id}`)
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async(req,res) => {
    const id = req.params.id;
    try {
        
        const plantillasDB = await Plantillas.findOne({_id : id});

        res.render('EditarPlantilla', {
            Plantillas: plantillasDB,
            texto: plantillasDB.texto,
            titulo: plantillasDB.titulo,
            id: id,
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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    // Asegúrate de que body.texto (o el nombre del campo que deseas actualizar) contiene el contenido HTML del div editable.
    try{
        const plantillaDB = await Plantillas.findByIdAndUpdate(
            id, body, { useFindAndModify: false}
        )
        console.log(plantillaDB)

        res.json({
            estado : true,
            mensaje : 'editado'
        })
    }catch (error){
        console.log(error);
        res.json({
            estado : false,
            mensaje : 'Fallo al actualizar'
        })
    }
});

router.get('/editar/:id', async(req,res) => {
    const id = req.params.id;
    try {
        
        const plantillasDB = await Plantillas.findOne({_id : id});
        console.log(plantillasDB)

        res.render('edit', {
            Plantillas: plantillasDB,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render('edit', {
            error: true,
            mensaje: 'No se encuentra la plantilla seleccionada'
        })
    }
})

router.delete('/editar/:id', async (req, res) => {
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

router.put('/editar/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const plantillaDB = await Plantillas.findByIdAndUpdate(
            id, body, { useFindAndModify: false}
        )
        console.log(plantillaDB)

        res.json({
            estado : true,
            mensaje : 'editado'
        })
    }catch (error){
        console.log(error);
        res.json({
            estado : false,
            mensaje : 'Fallo al actualizar'
        })
    }
})

router.get('/mostrar/:id', async(req,res) => {
    const id = req.params.id;
    try {
        
        const plantillasDB = await Plantillas.findOne({_id : id});
        console.log(plantillasDB)

        res.render('mostrarComo', {
            Plantillas: plantillasDB,
            rol: plantillasDB.rol,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render('mostrarComo', {
            error: true,
            mensaje: 'No se encuentra la plantilla seleccionada'
        })
    }
})
router.put('/mostrar/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const plantillaDB = await Plantillas.findByIdAndUpdate(
            id, body, { useFindAndModify: false}
        )
        console.log(plantillaDB)

        res.json({
            estado : true,
            mensaje : 'editado'
        })
    }catch (error){
        console.log(error);
        res.json({
            estado : false,
            mensaje : 'Fallo al actualizar'
        })
    }
})


module.exports = router;