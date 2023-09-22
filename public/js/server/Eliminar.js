const btnEliminar = document.querySelector('#btnDltPlantilla');

btnEliminar.addEventListener('click', async() => {
    console.log(btnEliminar.dataset.id)
    const id = btnEliminar.dataset.id;

    try{
        const data = await fetch(`/plantillas/${id}`, {
            method: 'delete'
        })
        const res = await data.json()

    }
    catch{

    }
})