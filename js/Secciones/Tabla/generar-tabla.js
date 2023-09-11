// Determinar el boton generador de tabla 
const BtnTable = document.querySelector(".bi-table")

// Determinar la variable booleana de titulo en columna y fila
var boolTitleCols = false;
var boolTitleRows = false;

//seleccionar las variables de los botones para aumentar o disminuir las filas o columnas
var btnAggFila = document.querySelector(".btn__aggFila");
var btnDelFila = document.querySelector(".btn__delFila");
var btnAggColumna = document.querySelector(".btn__aggColumna");
var btnDelColumna = document.querySelector(".btn__delColumna");
var tblBody = document.createElement("tbody");
// --------------------- //
// CREAR TABLA PRINCIPAL //
// --------------------- //
// Obtener la referencia del elemento div
var div = document.querySelector("#editor");

// Almacenar la posición del cursor cuando el div pierde el foco
var indice;
div.addEventListener("input", () => {
  // Obtener la selección actual
  var sel = window.getSelection();

  // Verificar si hay una selección
  if (sel.rangeCount > 0) {
    // Obtener el primer rango de la selección
    var range = sel.getRangeAt(0);

    // Crear un nuevo rango para medir la posición del cursor
    var cursorRange = document.createRange();
    cursorRange.selectNodeContents(div);
    cursorRange.setEnd(range.startContainer, range.startOffset);

    // Calcular la posición del cursor dentro del div
    indice = cursorRange.toString().length;
  }
});
BtnTable.addEventListener("click", () => {
  let filas = +prompt('¿Cuántas filas?');
  let columnas= +prompt('¿Cuántas columnas?');

  if(filas && columnas)
  {
      let t    = document.createElement("table");
      t.border = "1";
      t.style.borderCollapse = "collapse";
      t.style.border = "1px solid #ccc";
      t.style.margin = "auto";
      t.classList.add("table");
      t.classList.add("tabla__tabla");

      for( let l=0; l<filas; l++)
      { 
        let tr   = document.createElement("tr")
        tr.style.border = "1px solid #ccc ";
        tr.style.width = "2rem";
        tr.classList.add("celdaClickNull");
          for( let c=0; c<columnas; c++)
          {
              let td   = document.createElement("td")
              td.style.border = "1px solid #ccc";
              td.style.maxWidth = "2rem";
              td.innerHTML = " - ";
              tr.appendChild(td);
              td.classList.add("celdaClickNull");
              if(c === 0){
                td.classList.add("SubFila0");
              }
              if(c === 1){
                td.classList.add("SubFila1");
              }
              if(l === 0){
                td.classList.add("SubColumna0");
              }
              if(l === 1){
                td.classList.add("SubColumna1");
              }
          }
          t.appendChild(tr)
      }

        editor.appendChild(t);
      
  
      let small  = document.createElement("small")
      small.innerHTML = "Fuente:"
      editor.appendChild(small)
  }
});





// Obtener el elemento div que contiene el elemento tablaPadre
let divContenedor = document.querySelector(".page");

// Obtener el menú personalizado
let menu = document.querySelector(".context-menu");
let subMenuElementsCol = document.querySelectorAll(".TableSubDivitionsCol");
let subMenuElementsRow = document.querySelectorAll(".TableSubDivitionsRow");
let subMenuElementsDelCol = document.querySelectorAll(".TableSubDivitionsDelCol");
let subMenuElementsDelRow = document.querySelectorAll(".TableSubDivitionsDelRow");

let subMenuElementsCol2 = document.querySelectorAll(".TableSubDivitions2Col");
let subMenuElementsRow2 = document.querySelectorAll(".TableSubDivitions2Row");

// Crear una variable para almacenar una ref erencia a la tabla seleccionada
var tablaSeleccionada;
var tdSeleccionado;

// Seleccionar la tabla
var Stabla;
let tds;
divContenedor.addEventListener("mousedown", function(e) {
  // Buscar el elemento tabla en el árbol DOM ascendente desde el elemento en el que se hizo clic
  Stabla = e.target.closest("table");
  
  // Verificar si se encontró el elemento tabla
  if (Stabla) {
    // Almacenar una referencia a la tabla seleccionada
    tablaSeleccionada = Stabla;

    tablaSeleccionada.addEventListener("contextmenu", function(e) {
      // Prevenir la acción predeterminada del navegador al hacer clic derecho
      e.preventDefault();
  
      // Mostrar el menú personalizado en la posición del cursor
      menu.style.display = "flex";
      menu.style.left = `${e.clientX}px`;
      menu.style.top = `${e.clientY}px`;
  
      if (e.target.classList.contains("SubFila0") || e.target.classList.contains("SubFila1")) {
        // Mostrar el submenú personalizado
        subMenuElementsRow.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsRow.forEach(function(element) {
          element.style.display = "none";
        });
      }
      if (e.target.classList.contains("SubColumna0") || e.target.classList.contains("SubColumna1")) {
        // Mostrar el submenú personalizado
        subMenuElementsCol.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsCol.forEach(function(element) {
          element.style.display = "none";
        });
      }

      if (e.target.classList.contains("CelRow")) {
        // Mostrar el submenú personalizado
        subMenuElementsDelRow.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsDelRow.forEach(function(element) {
          element.style.display = "none";
        });
      }
      if (e.target.classList.contains("CelCol")) {
        // Mostrar el submenú personalizado
        subMenuElementsDelCol.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsDelCol.forEach(function(element) {
          element.style.display = "none";
        });
      }

      if (e.target.classList.contains("CelRow")) {
        // Mostrar el submenú personalizado
        subMenuElementsRow2.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsRow2.forEach(function(element) {
          element.style.display = "none";
        });
      }
      if (e.target.classList.contains("CelCol")) {
        // Mostrar el submenú personalizado
        subMenuElementsCol2.forEach(function(element) {
          element.style.display = "block";
        });
      }
      else{
        subMenuElementsCol2.forEach(function(element) {
          element.style.display = "none";
        });
      }
    });
    tds = tablaSeleccionada.querySelectorAll("td");
    if (tds) {
      console.log("si")
      tds.forEach(td => {
          ajustarAlturaFila(td.parentNode);
      });
    }
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

      // Agregar un controlador de eventos contextmenu a cada td anidado
      var tdsAnidados = td.querySelectorAll("td");
      tdsAnidados.forEach(function(tdAnidado) {
        tdAnidado.addEventListener("contextmenu", function(e) {
          // Prevenir la acción predeterminada del navegador al hacer clic derecho
          e.preventDefault();

          // Almacenar una referencia al elemento td anidado en el que se hizo clic derecho
          tdSeleccionado = tdAnidado;
          console.log(tdSeleccionado);

          // Mostrar el menú personalizado en la posición del cursor
          menu.style.display = "flex";
          menu.style.left = `${e.clientX}px`;
          menu.style.top = `${e.clientY}px`;

           // Detener la propagación del evento
            e.stopPropagation();
        });
      });
      });
      }
    });

// Definir una función con nombre para manejar el evento click
function handleClick() {

    if (tdSeleccionado.style.background == "black") {
      tdSeleccionado.style.background = "white";
      tdSeleccionado.setAttribute("contenteditable", "true");
    } else {
      tdSeleccionado.style.background = "black";
      tdSeleccionado.setAttribute("contenteditable", "false");
    }
    
    console.log(tdSeleccionado);

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
}
function ajustarAlturaFila(fila) {
  let celdas = fila.querySelectorAll('td.celda-ajustada');

  let alturaMax = Array.from(celdas).reduce((max, celda) => {
    return Math.max(max, celda.offsetHeight);
  }, 0);

  celdas.forEach(celda => {
    celda.style.height = `${alturaMax}px`;
  });
}

if (tds) {
  console.log("si")
  tds.forEach(td => {
    td.addEventListener('input', () => {
      //ajustarAlturaFila(td.parentNode);
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Tu código para agregar el controlador del evento aquí
  menu.querySelector(".BtnNull").addEventListener("click", handleClick);
  // Hacer subfilas
  menu.querySelector(".makeSubRow").addEventListener("click", SubRowMake);
  // Eliminar subfila
  menu.querySelector(".delSubRow").addEventListener("click", SubRowDell);
  // Agregar subfila
  menu.querySelector(".addSubRow").addEventListener("click", SubRowMake);
}); 

      // ---------------- //
      // Agregar SUBFILAS //
      // ---------------- //

  function SubRowMake(){
    console.log(tdSeleccionado);
    Stabla = tdSeleccionado.closest("div > table");
      //funcion de hacer subfilas en columna A
        function agregarSubfila() {
          let contBool = 0;
          if(boolTitleCols == true){
            contBool = 1;
          }
          else{
            contBool = 0;
          }
          // Buscar el elemento td en el árbol DOM ascendente desde el elemento en el que se hizo clic
          let tdPadre = tdSeleccionado.closest("tr > td");
          let indiceFila = tdPadre.closest("tr");
          console.log(indiceFila)
          let numfila = indiceFila.rowIndex + contBool;
           // Obtener la cantidad de celdas en la primera fila
          let columnas = indiceFila.cells.length;

          // Mostrar el índice de la fila
          console.log("Número de fila:", numfila);
        
          let hilera = Stabla.rows[numfila];
    
          // Verificar si ya existe una tabla anidada en la segunda celda de la fila
          var tablaAnidada = hilera.cells[0].querySelector("table");
          if (tablaAnidada) {
            // Si ya existe una tabla anidada, agregar una nueva fila a esta tabla
            var hileraNueva = tablaAnidada.insertRow();
            var celdaNueva = hileraNueva.insertCell();
            celdaNueva.classList.add("celda-ajustada", "CelRow");
            celdaNueva.textContent = "-";
          } else {
            // Si no existe una tabla anidada, ocultar el input dentro de la segunda celda y crear una nueva tabla anidada en esta celda
            var celda = hilera.cells[0];
            if(indiceFila.textContent !== ''){
              celda.innerHTML = '';
            }
            var celda = hilera.cells[0];
            celda.style.padding = "0px";
            var tablaAnidada = document.createElement("table");
            tablaAnidada.classList.add("tabla-filasTema");
            tablaAnidada.style.width = "100%";
            var hilera1 = tablaAnidada.insertRow();
            var hilera2 = tablaAnidada.insertRow();
            var celda1 = hilera1.insertCell();
            celda1.rowSpan = 50;
            celda1.classList.add("celda-ajustada", "col-6", "CelRow");
            celda1.textContent = "-";
            var celda2 = hilera1.insertCell();
            celda2.classList.add("celda-ajustada", "CelRow");
            celda2.textContent = "-";
            var celda3 = hilera2.insertCell();
            celda3.classList.add("celda-ajustada", "CelRow");
            celda3.textContent = "-";
            celda.appendChild(tablaAnidada);
          }
          
          for(k = 0; k < columnas; k++){
            hilera.cells[k].style.padding = "0px";
          }
        }
    
        //hacer subfilas completas
        let contBool = 0;
        if(boolTitleCols == true){
          contBool = 1;
        }
        else{
          contBool = 0;
        }
        // Buscar el elemento td en el árbol DOM ascendente desde el elemento en el que se hizo clic
        let tdPadre = tdSeleccionado.closest("tr > td");

        // Obtener el índice de la columna
        let indiceColumna = tdPadre.cellIndex;

            
        // Mostrar el índice de la columna
        console.log("Índice de columna:", indiceColumna);
        let numcolumna = indiceColumna;
        // Buscar el elemento tr más cercano en el árbol DOM ascendente desde el elemento en el que se hizo clic
        let indiceFila = tdSeleccionado.closest("tr");

        // Obtener el índice de la fila
        let numfila = indiceFila.rowIndex + contBool;

        // Acceder a la fila seleccionada
        let filaSeleccionada = Stabla.rows[numfila];

        // Obtener la cantidad de celdas en la fila seleccionada
        let Tcolumnas = filaSeleccionada.cells.length;

        // Mostrar la cantidad de columnas
        console.log("Cantidad de columnas:", Tcolumnas);
    
        // Verificar si la columna es "0" o "1"
        if (numcolumna == 0 || numcolumna == 1) {
    
          // Obtener la fila existente
            //Si la columna es A crear el formato de titulo
            if(numcolumna == 0){
              agregarSubfila();
            }
          // Recorrer cada celda de la fila existente
          for (var i = 1; i < Tcolumnas; i++) {
            var celdaExistente = filaSeleccionada.cells[i];
            console.log(celdaExistente);
            celdaExistente.classList.add("celda-ajustada", "CelRow"); // Agregar una clase a la celda que contiene una tabla anidada
    
            // Crear una tabla anidada dentro de la celda existente
            var tablaAnidada = document.createElement("table");
            tablaAnidada.classList.add("tabla-anidada"); // Agregar una clase a la tabla anidada para aplicar estilos
            var tblBodyAnidado = document.createElement("tbody");
    
            // Agregar una hilera anidada horizontal
            var hileraAnidada = document.createElement("tr");
            var celdaAnidada = document.createElement("td");
            celdaAnidada.textContent = "-";
            celdaAnidada.classList.add("celda-ajustada", "CelRow");
            
            hileraAnidada.appendChild(celdaAnidada);
            tblBodyAnidado.appendChild(hileraAnidada);
    
            tablaAnidada.appendChild(tblBodyAnidado);
            celdaExistente.appendChild(tablaAnidada);
          }
        }
    
      };

      // ---------------- //
      // ELIMINA SUBFILAS //
      // ---------------- //
      function SubRowDell(){
          
        //funcion de eliminar subfilas en columna A
        function eliminarSubfila() {
          let contBool = 0;
          if(boolTitleCols == true){
            contBool = 1;
          }
          else{
            contBool = 0;
          }

          // Obtener el número de la fila donde se quiere eliminar la subfila
          var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;

          // Verificar que el valor del input sea un número válido
          if (isNaN(fila) || fila < 1 || fila > filas) {
            alert("Por favor ingresa un número de fila válido");
            return;
          }

          // Obtener la tabla y la fila donde se quiere eliminar la subfila
          var tabla = document.querySelector(".tabla__tabla");
          var hilera = tabla.rows[fila];

          // Verificar si existe una tabla anidada en la segunda celda de la fila
          var tablaAnidadaEsp = hilera.cells[1].querySelector("table");
          if (tablaAnidadaEsp) {
            // Si existe una tabla anidada, eliminar la última fila de esta tabla
            if (tablaAnidadaEsp.rows.length > 1) {
              tablaAnidadaEsp.deleteRow(tablaAnidadaEsp.rows.length - 1);

              // Ajustar el rowSpan de la primera celda de la tabla anidada
              if (tablaAnidadaEsp.rows.length > 0) {
                tablaAnidadaEsp.rows[0].cells[0].rowSpan -= 1;
              }
            }
            if (tablaAnidadaEsp.rows.length == 1) {
              var tablaTitle = hilera.cells[1].querySelector(".tabla-filasTema");
              tablaTitle.parentNode.removeChild(tablaTitle);
              var inputOriginal = hilera.cells[1].querySelector(".tabla-inputfilaTema");
              inputOriginal.style.display = 'block';
              for(k = 1; k <= columnas; k++){
                hilera.cells[k].style.padding = "0.5rem 0.5rem";
              }
            }
          }
          else {
            alert("No hay ninguna subfila para eliminar en esta fila");
          }
        }

        //eliminar subfilas completas
        // Agregar un controlador de eventos al botón para que llame a la función eliminarSubfilaCompleta cuando se presione el botón
        document.querySelector(".del-subfila").addEventListener("click", eliminarSubfilaCompleta);
        function eliminarSubfilaCompleta() {
          let contBool = 0;
          if(boolTitleCols == true){
            contBool = 1;
          }
          else{
            contBool = 0;
          }
          // Obtener el número de la fila donde se quiere eliminar la subfila
          var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;
          var columna =  document.querySelector(".form-subfila2").value;

          // Verificar que el valor del input sea un número válido
          if (isNaN(fila) || fila < 1 + contBool || fila > filas) {
            alert("Por favor ingresa un número de fila válido");
            return;
          }
          //Si la columna es A crear el formato de titulo
          if(columna === "A"){
            eliminarSubfila();
          }
          // Obtener la tabla y la fila donde se quiere eliminar la subfila
          var tabla = document.querySelector(".tabla__tabla");
          var hilera = tabla.rows[fila];
          
          // Recorrer cada celda de la fila
          for (var i = 2; i < hilera.cells.length; i++) {
            var celda = hilera.cells[i];
            

            // Verificar si existe una tabla anidada en la celda
            var tablaAnidada = celda.querySelector("table");
            if (tablaAnidada) {
              // Si existe una tabla anidada, eliminarla
              celda.removeChild(tablaAnidada);
            }
          }
          for(k = 2; k <= columnas; k++){
            hilera.cells[k].style.padding = "0.5rem 0.5rem";
          }
        }
      }


// Agregar un controlador de eventos click al botón "Agregar Fila" del menú personalizado
menu.querySelector("button:nth-of-type(2)").addEventListener("click", function() {
  // Verificar si hay una tabla seleccionada
  if (tablaSeleccionada) {
    // Agregar una nueva fila a la tabla seleccionada
    let nuevaFila = tablaSeleccionada.insertRow(-1);

    // Obtener el número de columnas en la primera fila de la tabla
    let Tcolumnas = tablaSeleccionada.rows[0].cells.length;

    // Agregar celdas a la nueva fila
    for (let i = 0; i < Tcolumnas; i++) {
      let nuevaCelda = nuevaFila.insertCell(i);
      nuevaCelda.style.border = "1px solid #ccc";
      nuevaCelda.style.maxWidth = "2rem";
      nuevaCelda.textContent = "-";
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al botón "Agregar Columna" del menú personalizado
menu.querySelector("button:nth-of-type(3)").addEventListener("click", function() {
  // Verificar si hay una tabla seleccionada
  if (tablaSeleccionada) {
    // Obtener todas las filas de la tabla seleccionada
    let Tfilas = tablaSeleccionada.rows;

    // Agregar una nueva celda a cada fila de la tabla seleccionada
    for (let i = 0; i < Tfilas.length; i++) {
      let nuevaCelda = Tfilas[i].insertCell(-1);
      nuevaCelda.style.border = "1px solid #ccc";
      nuevaCelda.style.maxWidth = "2rem";
      nuevaCelda.textContent = "-";
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al botón "Eliminar Fila" del menú personalizado
menu.querySelector("button:nth-of-type(4)").addEventListener("click", function() {
  // Verificar si hay una tabla seleccionada
  if (tablaSeleccionada) {
    // Eliminar la última fila de la tabla seleccionada
    if (tablaSeleccionada.rows.length > 0) {
      tablaSeleccionada.deleteRow(-1);
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al botón "Eliminar Columna" del menú personalizado
menu.querySelector("button:nth-of-type(5)").addEventListener("click", function() {
  // Verificar si hay una tabla seleccionada
  if (tablaSeleccionada) {
    // Obtener todas las filas de la tabla seleccionada
    let Tfilas = tablaSeleccionada.rows;

    // Eliminar la última celda de cada fila de la tabla seleccionada
    for (let i = 0; i < Tfilas.length; i++) {
      if (Tfilas[i].cells.length > 0) {
        Tfilas[i].deleteCell(-1);
      }
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al documento para ocultar el menú personalizado cuando se hace clic fuera de él
document.addEventListener("click", function(e) {
  if (!menu.contains(e.target)) {
    menu.style.display = "none";
    subMenuElementsCol.forEach(function(element) {
      element.style.display = "none";
    });
    subMenuElementsRow.forEach(function(element) {
      element.style.display = "none";
    });
  }
});

// // ---------------- //
// // AGREGAR SUBFILAS //
// // ---------------- //
//     //funcion de hacer subfilas en columna A
//     function agregarSubfila() {
//       let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }

//       // Obtener el número de la fila donde se quiere agregar la subfila
//       var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;

//       // Verificar que el valor del input sea un número válido
//       if (isNaN(fila) || fila < 1 || fila > filas) {
//         alert("Por favor ingresa un número de fila válido");
//         return;
//       }

//       // Obtener la tabla y la fila donde se quiere agregar la subfila
//       var tabla = document.querySelector(".tabla__tabla");
//       var hilera = tabla.rows[fila];

//       // Verificar si ya existe una tabla anidada en la segunda celda de la fila
//       var tablaAnidada = hilera.cells[1].querySelector("table");
//       if (tablaAnidada) {
//         // Si ya existe una tabla anidada, agregar una nueva fila a esta tabla
//         var hileraNueva = tablaAnidada.insertRow();
//         var celdaNueva = hileraNueva.insertCell();
//         celdaNueva.classList.add("celda-ajustada");
//       } else {
//         // Si no existe una tabla anidada, ocultar el input dentro de la segunda celda y crear una nueva tabla anidada en esta celda
//         var celda = hilera.cells[1];
//         if (textarea) {
//           textarea.style.display = "none";
//          }
//         celda.style.padding = "0px";
//         var tablaAnidada = document.createElement("table");
//         tablaAnidada.classList.add("tabla-filasTema");
//         tablaAnidada.style.width = "100%";
//         var hilera1 = tablaAnidada.insertRow();
//         var hilera2 = tablaAnidada.insertRow();
//         var celda1 = hilera1.insertCell();
//         celda1.rowSpan = 50;
//         celda1.classList.add("celda-ajustada", "col-6");
//         var celda2 = hilera1.insertCell();
//         celda2.classList.add("celda-ajustada");
//         var celda3 = hilera2.insertCell();
//         celda3.classList.add("celda-ajustada");
//         celda.appendChild(tablaAnidada);
//       }
      
//       for(k = 1; k <= columnas; k++){
//         hilera.cells[k].style.padding = "0px";
//       }
//     }

//     //hacer subfilas completas
//     document.querySelector(".add-subfila").addEventListener("click", function() {
//       let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }
//       // Obtener los valores de los campos de entrada
//       var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;
//       var columna = document.querySelector(".form-subfila2").value;

//       // Verificar que el valor del input sea un número válido
//       if (isNaN(fila) || fila < 1 + contBool || fila > filas) {
//         alert("Por favor ingresa un número de fila válido, elegiste la fila: " + fila);
//         return;
//       }

//       // Verificar si la columna es "A" o "B"
//       if (columna === "A" || columna === "B") {
//         // Convertir la letra de la columna en un índice numérico
//         var columnaIndice = columna.charCodeAt(0) - 64;

//         // Obtener la fila existente
//         var filaExistente = tblBody.rows[fila];
//           //Si la columna es A crear el formato de titulo
//           if(columna === "A"){
//             agregarSubfila();
//           }
//         // Recorrer cada celda de la fila existente
//         for (var i = 2; i <= columnas; i++) {
//           var celdaExistente = filaExistente.cells[i];
//           celdaExistente.classList.add("celda-anidada"); // Agregar una clase a la celda que contiene una tabla anidada

//           // Crear una tabla anidada dentro de la celda existente
//           var tablaAnidada = document.createElement("table");
//           tablaAnidada.classList.add("tabla-anidada"); // Agregar una clase a la tabla anidada para aplicar estilos
//           var tblBodyAnidado = document.createElement("tbody");

//           // Agregar una hilera anidada horizontal
//           var hileraAnidada = document.createElement("tr");
//           var celdaAnidada = document.createElement("td");
//           hileraAnidada.appendChild(celdaAnidada);
//           tblBodyAnidado.appendChild(hileraAnidada);

//           tablaAnidada.appendChild(tblBodyAnidado);
//           celdaExistente.appendChild(tablaAnidada);
//         }
//       }
//     });

// // ---------------- //
// // ELIMINA SUBFILAS //
// // ---------------- //
//     //funcion de eliminar subfilas en columna A
//     function eliminarSubfila() {
//       let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }

//       // Obtener el número de la fila donde se quiere eliminar la subfila
//       var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;

//       // Verificar que el valor del input sea un número válido
//       if (isNaN(fila) || fila < 1 || fila > filas) {
//         alert("Por favor ingresa un número de fila válido");
//         return;
//       }

//       // Obtener la tabla y la fila donde se quiere eliminar la subfila
//       var tabla = document.querySelector(".tabla__tabla");
//       var hilera = tabla.rows[fila];

//       // Verificar si existe una tabla anidada en la segunda celda de la fila
//       var tablaAnidadaEsp = hilera.cells[1].querySelector("table");
//       if (tablaAnidadaEsp) {
//         // Si existe una tabla anidada, eliminar la última fila de esta tabla
//         if (tablaAnidadaEsp.rows.length > 1) {
//           tablaAnidadaEsp.deleteRow(tablaAnidadaEsp.rows.length - 1);

//           // Ajustar el rowSpan de la primera celda de la tabla anidada
//           if (tablaAnidadaEsp.rows.length > 0) {
//             tablaAnidadaEsp.rows[0].cells[0].rowSpan -= 1;
//           }
//         }
//         if (tablaAnidadaEsp.rows.length == 1) {
//           var tablaTitle = hilera.cells[1].querySelector(".tabla-filasTema");
//           tablaTitle.parentNode.removeChild(tablaTitle);
//           var inputOriginal = hilera.cells[1].querySelector(".tabla-inputfilaTema");
//           inputOriginal.style.display = 'block';
//           for(k = 1; k <= columnas; k++){
//             hilera.cells[k].style.padding = "0.5rem 0.5rem";
//           }
//         }
//       }
//       else {
//         alert("No hay ninguna subfila para eliminar en esta fila");
//       }
//     }

//     //eliminar subfilas completas
//     // Agregar un controlador de eventos al botón para que llame a la función eliminarSubfilaCompleta cuando se presione el botón
//     document.querySelector(".del-subfila").addEventListener("click", eliminarSubfilaCompleta);
//     function eliminarSubfilaCompleta() {
//       let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }
//       // Obtener el número de la fila donde se quiere eliminar la subfila
//       var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;
//       var columna =  document.querySelector(".form-subfila2").value;

//       // Verificar que el valor del input sea un número válido
//       if (isNaN(fila) || fila < 1 + contBool || fila > filas) {
//         alert("Por favor ingresa un número de fila válido");
//         return;
//       }
//       //Si la columna es A crear el formato de titulo
//       if(columna === "A"){
//         eliminarSubfila();
//       }
//       // Obtener la tabla y la fila donde se quiere eliminar la subfila
//       var tabla = document.querySelector(".tabla__tabla");
//       var hilera = tabla.rows[fila];
      
//       // Recorrer cada celda de la fila
//       for (var i = 2; i < hilera.cells.length; i++) {
//         var celda = hilera.cells[i];
        

//         // Verificar si existe una tabla anidada en la celda
//         var tablaAnidada = celda.querySelector("table");
//         if (tablaAnidada) {
//           // Si existe una tabla anidada, eliminarla
//           celda.removeChild(tablaAnidada);
//         }
//       }
//       for(k = 2; k <= columnas; k++){
//         hilera.cells[k].style.padding = "0.5rem 0.5rem";
//       }
//     }

    
//   // ------------------- //
//   // AGREGAR SUBCOLUMNAS //
//   // ------------------- //
//   function agregarSubcolumna(col) {
//     let contBool = 0;
//     if(boolTitleCols == true){
//       contBool = 1;
//     }
//     else{
//       contBool = 0;
//     }

//     // Obtener la tabla y la columna donde se quiere agregar la subcolumna
//     var tabla = document.querySelector(".tabla__tabla");
//     var celda = tabla.rows[1 + contBool].cells[col];
  
//     // Verificar si ya existe una tabla anidada en la celda
//     var tablaAnidada = celda.querySelector("table");
    
//     if (tablaAnidada) {
//       // Si ya existe una tabla anidada, agregar una nueva celda a la segunda fila de esta tabla
//       var celdaNueva = tablaAnidada.rows[1].insertCell();
//       celdaNueva.classList.add("celda-ajustada-cols");
      
//       
//       celdaNueva.style.width = "2.5rem";
//       tablaAnidada.style.width = "100%";
  
//       // Ajustar el colSpan de la primera celda de la tabla anidada
//       tablaAnidada.rows[0].cells[0].colSpan += 1;
//     } else {
//       // Si no existe una tabla anidada, ocultar el input dentro de la celda y crear una nueva tabla anidada en esta celda
//       
//       celda.style.padding = "0px";
//       var tablaAnidada = document.createElement("table");
//       var hilera1 = tablaAnidada.insertRow();
//       var hilera2 = tablaAnidada.insertRow();
//       var celda1 = hilera1.insertCell();
//       celda1.colSpan = 4;
//       celda1.classList.add("celda-ajustada-cols", "col-6");
//       
//       for (var i = 0; i < 2; i++) {
//         var celdaNueva = hilera2.insertCell();
//         celdaNueva.classList.add("celda-ajustada-cols");
//         celdaNueva.style.width = "2.5rem";
//         tablaAnidada.style.width = "100%";
//       }
//       celda.appendChild(tablaAnidada);
//     }
//   }
  
//   function recorridoSubcolumnas(col){
//     let contBool = 0;
//     if(boolTitleCols == true){
//       contBool = 1;
//     }
//     else{
//       contBool = 0;
//     }
//     // Recorrer cada celda de la columna especificada
//     for (var i = 2 + contBool; i <= filas + contBool; i++) {
//       var celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
//       celda.style.padding = "0px";
//       celda.style.border = "none";
//       celda.style.flexDirection = "column";
//       celda.style.display = "flex";

//       // Verificar si ya existe una tabla en la celda
//       var tablaExistente = celda.querySelector("table");
//       if (tablaExistente) {
//         // Si ya existe una tabla, agregar un nuevo td con un textarea dentro a la primera fila de esta tabla
//         var trExistente = tablaExistente.rows[0];
//         var tdNuevo = document.createElement("td");
//         tdNuevo.classList.add("celda-ajustada-colms");
//         tdNuevo.appendChild(textareaNuevo);
//         trExistente.appendChild(tdNuevo);
//       } else {
//         // Ocultar el input existente en la celda
//         var textAreaExistente = celda.querySelector("textarea");
//         textAreaExistente.style.display = "none";
//         var tabla = document.createElement("table");
//         var tr = document.createElement("tr");
//         for (var j = 0; j < 2; j++) {
//           var td = document.createElement("td");
//           td.classList.add("celda-ajustada-colms");
//           tr.appendChild(td);
//         }
//         tabla.appendChild(tr);
//         celda.appendChild(tabla);
//       }
//     }
//    }
  
//    document.querySelector(".add-subcolumna").addEventListener("click", function() {
//     // Obtener el valor del campo de entrada
//     var columna = document.querySelector(".form-subcolumna1").value;
//     var fila = document.querySelector(".form-subcolumna2").value;
  
//     // Verificar que el valor del input sea un número válido
//     if (columna.charCodeAt(0) - 64 < 1 || columna.charCodeAt(0) - 64 > columnas) {
//       alert("Por favor ingresa una columna válida, elegiste la: " + (columna.charCodeAt(0) - 64));
//       return;
//     }
    
//     // Verificar que el valor del input sea un número válido
//     if (isNaN(fila) || fila < 1 || fila > filas) {
//       alert("Por favor ingresa un número de fila válido");
//       return;
//     }

//     if(fila == 1)
//     {
//       agregarSubcolumna(columna.charCodeAt(0) - 64);
//       // Recorrer cada celda de la columna especificada
//       recorridoSubcolumnas(columna);
//     }

//     if(fila == 2){
//       recorridoSubcolumnas(columna);
//     }
//   });
  
// // -------------------- //
// // ELIMINAR SUBCOLUMNAS //
// // -------------------- //

//   //eliminar subcolumnas completas
//   document.querySelector(".del-subcolumna").addEventListener("click", function() {
//     // Obtener el valor del campo de entrada
//     var columna = document.querySelector(".form-subcolumna1").value;
//     let fila = document.querySelector(".form-subcolumna2").value;

//     // Verificar que el valor del input sea un número válido
//     if (columna.charCodeAt(0) - 64 < 1 || columna.charCodeAt(0) - 64 > columnas) {
//       alert("Por favor ingresa una columna válida, elegiste la: " + (columna.charCodeAt(0) - 64));
//       return;
//     }

//     //Realizar recorridos dependiendo de la fila
//     if (fila == 1){
//       recorridoSubcolumnasDel(columna);
//       subcolumnaFila1Del(columna);
//     }
//     else if (fila == 2){
//       recorridoSubcolumnasDel(columna);
//     }
    
//   });
  
//   //recorrido subcolumnas eliminacion
//   function recorridoSubcolumnasDel(col){
//     let contBool = 0;
//     if(boolTitleCols == true){
//       contBool = 1;
//     }
//     else{
//       contBool = 0;
//     }

//     // Recorrer cada celda de la columna especificada
//     for (var i = 2 + contBool; i <= filas + contBool; i++) {
//       let celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
  
//       // Verificar si ya existe una tabla anidada en la celda
//       let tablaAnidada = celda.querySelector("table");
//       if (tablaAnidada) {
//         // Si ya existe una tabla anidada, eliminar el último td de la primera fila de esta tabla
//         let trExistente = tablaAnidada.rows[0];
//         trExistente.removeChild(trExistente.lastChild);
  
//         // Si no hay más td en la primera fila, eliminar la tabla anidada y mostrar el textarea existente en la celda
//         if (trExistente.childNodes.length === 1) {
//           celda.removeChild(tablaAnidada);
//           let textareaExistente = celda.querySelector("textarea");
//           textareaExistente.style.display = "block";
//           celda.style.padding = "0.5rem 0.5rem";
//           celda.style.border = "1px solid black";
//           celda.style.display = "";
//         }
//       }
//     }
//   }
  
//   // eliminacion de la fila 1 segun x columna
//   function subcolumnaFila1Del(col) {
//     let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }

//     // Recorrer cada celda de la columna especificada
//     for (var i = 1; i <= filas; i++) {
//       let celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
  
//       // Verificar si ya existe una tabla anidada en la celda
//       let tablaAnidada = celda.querySelector("table");
//       if (tablaAnidada) {
//         // Si ya existe una tabla anidada, eliminar el último td de la segunda fila de esta tabla
//         let trExistente = tablaAnidada.rows[1];
//         trExistente.removeChild(trExistente.lastChild);
  
//         
//       }
//     }
//   };
  
//   //------------------------------------- //
//   //  Funcion de autorecise del textarea  // 
//   //------------------------------------- //
//   function autoResize(textarea) {
//     textarea.style.height = 'auto';
//     textarea.style.height = textarea.scrollHeight + 'px';
//   }

//   // ---------------------------------------- //
//   //  Funcion de selects de filas y columnas  //
//   // ---------------------------------------- //
//   function ActualizarSelectFilas(){
//     var TitleCont = 0;
//     // Seleccionar el elemento 
//     const selector = document.querySelector(".form-subfila1");
//     selector.innerHTML = "";
//     let option = document.createElement("option");
//     option.value = 0;
//     option.text = "";
//     selector.appendChild(option);
//     // Si hay un elemento titulo adecuarlo a la tabla
//     if (boolTitleCols == true){
//       TitleCont = 1;
//       let option = document.createElement("option");
//       option.value = 0;
//       option.text = "T";
//       selector.appendChild(option);
//     }
//     else{
//       TitleCont = 0;
//     }

//     // agregar las opciones de filas al select
//     for (var i = 1; i <= filas; i++) {
//       let option = document.createElement("option");
//       option.value = i;
//       option.text = i;
//       selector.appendChild(option);
//     }
//   }

//   function ActualizarSelectColumnas(){
    
//     // Seleccionar el elemento 
//     let selector = document.querySelector(".form-subcolumna1");
//     selector.innerHTML = "";
//     let option = document.createElement("option");
//     option.value = 0;
//     option.text = "";
//     selector.appendChild(option);
//     // agregar las opciones de filas al select
//     for (var i = 1 ; i <= columnas; i++) {
//       let option = document.createElement("option");
//       option.value = (String.fromCharCode(64 + i));
//       option.text = (String.fromCharCode(64 + i));
//       selector.appendChild(option);
//     }
//   }

//   // ----------------------- //
//   //  Funcion de main title  //
//   // ----------------------- //
//   function aggMainTitle(evento) {
//     if(evento !== 0){
//       let contBool = 0;
//       if(boolTitleCols == true){
//         contBool = 1;
//       }
//       else{
//         contBool = 0;
//       }
//       evento.value = evento.textContent;
//       if (filas < 100 && !evento.classList.contains("coordenadas__T")) {
//         var hilera = document.createElement("tr");
//         for (var j = 0; j <= 1; j++) {
//           var celda = document.createElement("td");
//           if (j === 0) {
//             celda.classList.add("coordenadas", "coordenadas__fila", "coordenadas__T");
//             var textoCelda = document.createTextNode(evento.value);
//             celda.appendChild(textoCelda);
//             hilera.appendChild(celda);
//           } else {
//             // Establecer el atributo colspan de la celda en el número de columnas de la tabla
//             celda.setAttribute("colspan", columnas + 1);
          
//             // Crear un nuevo textarea y agregarlo a la celda
//             var textarea = document.createElement("textarea");
//             textarea.setAttribute("maxlength", "100");
//             textarea.setAttribute("oninput", "autoResize(this)");
//             textarea.classList.add("input-ajustada");
//             textarea.classList.add("celdaClickNull" , "MainTitle");
//             celda.appendChild(textarea);  
//             // Agregar la celda a la fila y la fila al cuerpo de la tabla
//             let spot = parseInt(evento.value) + contBool;
//             hilera.appendChild(celda);
//             tblBody.deleteRow(spot);
//             tblBody.insertBefore(hilera, tblBody.rows[spot]);
//           }
//         }
//       }
//       else if (filas < 100 && evento.classList.contains("coordenadas__T")){
//         // Funcion de eliminacion de titulo
//         // Obtener la fila que contiene la celda del título
//         let spot = parseInt(evento.value) + contBool;
//         var fila = tblBody.rows[spot];

//         // Verificar si la fila existe y si contiene la celda del título
//         if ((fila && fila.cells.length > 1) && evento.classList.contains("coordenadas__T")) {
//           // Eliminar la fila que contiene la celda del título
//           tblBody.deleteRow(spot);

//             // Agregar una fila a la tabla
//               var hilera = tblBody.insertRow(spot);
//               for (var j = 0; j <= columnas; j++) {
//                 var celda = hilera.insertCell();
//                 if (j === 0) {
//                   celda.classList.add("coordenadas", "coordenadas__fila");
//                   var textoCelda = document.createTextNode(evento.value);
//                   celda.appendChild(textoCelda);
//                 } else {
//                   var textarea = document.createElement("textarea");
//                   textarea.setAttribute("maxlength", "100");
//                   textarea.setAttribute("oninput", "autoResize(this)");
//                   textarea.classList.add("input-ajustada");
//                   textarea.classList.add("celdaClickNull");
//                   celda.classList.add("padre");
//                   celda.appendChild(textarea);
//               }
//             }
            
//             ActualizarSelectFilas();
//             }
//           }
//     }
//     else{
//       if (filas < 100 && boolTitleCols == false) {
//         boolTitleCols = true;
//         var hilera = document.createElement("tr");
//         for (var j = 0; j <= 1; j++) {
//           var celda = document.createElement("td");
//           if (j === 0) {
//             celda.classList.add("coordenadas", "coordenadas__0T");
//             var textoCelda = document.createTextNode("T");
//             celda.appendChild(textoCelda);
//             hilera.appendChild(celda);
//           } else {
//             // Establecer el atributo colspan de la celda en el número de columnas de la tabla
//             celda.setAttribute("colspan", columnas + 1);
          
//             // Crear un nuevo textarea y agregarlo a la celda
//             var textarea = document.createElement("textarea");
//             textarea.setAttribute("maxlength", "100");
//             textarea.setAttribute("oninput", "autoResize(this)");
//             textarea.classList.add("input-ajustada");
//             textarea.classList.add("celdaClickNull" , "MainTitle");
//             celda.appendChild(textarea);  
//             // Agregar la celda a la fila y la fila al cuerpo de la tabla
//             hilera.appendChild(celda);
//             tblBody.insertBefore(hilera, tblBody.rows[1]);
//           }
//         }
//       }
//       else if (filas < 100 && boolTitleCols == true){
//         // Funcion de eliminacion de titulo
//         // Obtener la fila que contiene la celda del título
//         var fila = tblBody.rows[1];
  
//         // Verificar si la fila existe y si contiene la celda del título
//         if (fila && fila.cells.length > 1) {
//           // Eliminar la fila que contiene la celda del título
//           tblBody.removeChild(fila);
//           boolTitleCols = false;
//         }
//       }
//     }
//     ActualizarSelectFilas();
//   }

//   // Obtener el elemento tablaPadre que contiene todos los textareas
//   let tablaPrincipal = document.querySelector(".tabla__tabla");
//   const contextMenu = document.querySelector('#contextMenu');
//   // Variables para almacenar el tiempo de inicio y fin del clic
//   let tiempoStart = 0;
//   let tiempoEnd = 0;

//   var ValueEvent = 0;
  
//   // ---------------------------------------------------- //
//   // Funcion para que funcione en moviles de misma manera //
//   // Agregar un controlador de eventos touchstart al elemento padre
//   tablaPrincipal.addEventListener("touchstart", function(e) {
//     // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
//     if (e.target.classList.contains("coordenadas")) {
//       // Establecer el tiempo de inicio del clic
//       tiempoStart = new Date().getTime();
//     }
//   });

//   // Agregar un controlador de eventos touchend al elemento padre
//   tablaPrincipal.addEventListener("touchend", function(e) {
//     // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
//     if (e.target.classList.contains("coordenadas")) {
//       // Establecer el tiempo de fin del clic
//       tiempoEnd = new Date().getTime();

//       // Verificar si el tiempo transcurrido entre los dos eventos es mayor a 3 segundos
//       if (tiempoEnd - tiempoStart > 200) {
//         if (event.target.classList.contains("coordenadas__fila") ) {
//           let textarea = event.target;
//           textarea.value = textarea.textContent;
//           ValueEvent = textarea;
//             event.preventDefault();
//             contextMenu.style.top = `${event.clientY}px`;
//             contextMenu.style.left = `${event.clientX}px`;
//             contextMenu.style.display = 'block';
          
//         }
//       }
//     }
//   });

//   tablaPrincipal.addEventListener('contextmenu', (event) => {
//     if (event.target.classList.contains("coordenadas__fila") ) {
//       let textarea = event.target;
//       textarea.value = textarea.textContent;
//       ValueEvent = textarea;
//         event.preventDefault();
//         contextMenu.style.top = `${event.clientY}px`;
//         contextMenu.style.left = `${event.clientX}px`;
//         contextMenu.style.display = 'block';
      
//     }
//   });
//   document.addEventListener('click', () => {
//     contextMenu.style.display = 'none';
// });

// const liTitleDinamico = document.querySelector(".TitleFormation");

// liTitleDinamico.addEventListener("click",() => {
//   console.log(ValueEvent);
//   aggMainTitle(ValueEvent);
// })