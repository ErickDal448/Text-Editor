//hacer la barra lateral desplegable quitandole los textos
    // Seleccionar zona de trabajo
    const SpaceWork = document.querySelector(".editar__plantilla__section");

    // Selecciona el elemento editar__menuicons
    const menuIcon = document.querySelector('.editar__menuicons');

    // Seleccionar el menu izquierdo 
    const menuizq = document.querySelector('.editar__menuizq');

    // Seleccionar el div de espaciado para el contenido de la plantilla
    const espaciado = document.querySelector('.editar__Espaciado');

    // Seleccionar los select de los botones o sus contenedores 
    const Contenedores = document.querySelectorAll(".SectionsBtns");

    // Crea una variable para llevar un registro de si los textos están visibles o no
    let textsVisible = true;

    // Agrega un evento de clic al elemento editar__menuicons
    menuIcon.addEventListener('click', () => {
    // Selecciona todos los elementos de texto que deseas ocultar/mostrar
    const textElements = document.querySelectorAll('.editar__menunombre__bloque, .editar__menusecciones, .editar__tituloizq, .menu__agglateraltxt');
    
    // Si los textos están visibles, ocúltalos
    if (textsVisible) {
        textElements.forEach(element => {
        element.style.display = 'none';
        });
        Contenedores.forEach(element => {
            element.style.flexDirection = 'column';
        });
        
        espaciado.style.width = menuizq.offsetWidth + 'px';
        textsVisible = false;
    } 
    else { // Si los textos están ocultos, muéstralos
        textElements.forEach(element => {
        element.style.display = 'block';
        });
        Contenedores.forEach(element => {
            element.style.flexDirection = 'row';
        });
        
        espaciado.style.width = menuizq.offsetWidth + 'px';
        textsVisible = true;
    }
    });



    const updateSpaceWorkWidth = () => {
        espaciado.style.width = menuizq.offsetWidth + 'px';
        const espaciadoWidth = espaciado.offsetWidth;
        SpaceWork.style.width = `calc(98vw - ${espaciadoWidth}px)`;
    }
    
    window.addEventListener('resize', updateSpaceWorkWidth);
    menuIcon.addEventListener('click', () => {
        // ...
        updateSpaceWorkWidth();
        // ...
    });

    window.addEventListener("DOMContentLoaded", function () {
        updateSpaceWorkWidth();
    });