// Obtener el elemento div que contiene el elemento tablaPadre
let divContenedor = document.querySelector(".page");

// Obtener el menú personalizado
let menu = document.querySelector(".context-menu");

// Crear una variable para almacenar una referencia al elemento td en el que se hizo clic derecho
let tdSeleccionado;

divContenedor.addEventListener("mousedown", function(e) {
  // Buscar el elemento tablaPadre en el árbol DOM ascendente desde el elemento en el que se hizo clic
  let tablaPadre = e.target.closest(".tabla__tabla");
  
  // Verificar si se encontró el elemento tablaPadre
  if (tablaPadre) {
    // Obtener todos los elementos td dentro del elemento tablaPadre
    let tds = tablaPadre.querySelectorAll("td");

    // Agregar un controlador de eventos contextmenu a cada elemento td
    tds.forEach(function(td) {
      td.addEventListener("contextmenu", function(e) {
        // Prevenir la acción predeterminada del navegador al hacer clic derecho
        e.preventDefault();

        // Almacenar una referencia al elemento td en el que se hizo clic derecho
        tdSeleccionado = td;

        // Mostrar el menú personalizado en la posición del cursor
        menu.style.display = "flex";
        menu.style.left = `${e.clientX}px`;
        menu.style.top = `${e.clientY}px`;
      });
    });

    // Agregar un controlador de eventos click al botón del menú personalizado
    menu.querySelector(".BtnNull").addEventListener("click", function() {
      // Cambiar el estilo del td correspondiente
      if (tdSeleccionado.style.background == "black") {
        tdSeleccionado.style.background = "white";
        tdSeleccionado.textContent = "-";
      } else {
        tdSeleccionado.style.background = "black";
        tdSeleccionado.textContent = "-";
      }
      

      // Ocultar el menú personalizado después de hacer clic en el botón
      menu.style.display = "none";
    });
  }
});

// Agregar un controlador de eventos click al documento para ocultar el menú personalizado cuando se hace clic fuera de él
document.addEventListener("click", function(e) {
  if (!menu.contains(e.target)) {
    menu.style.display = "none";
  }
});
