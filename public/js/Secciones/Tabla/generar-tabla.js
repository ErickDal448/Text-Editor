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
              td.style.maxWidth = "3rem";
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
      menu.style.left = `${e.pageX}px`;
      menu.style.top = `${e.pageY}px`;
  
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
    
    // Agregar un controlador de eventos contextmenu a cada elemento td
    tds.forEach(function(td) {
      td.addEventListener("contextmenu", function(e) {
        // Prevenir la acción predeterminada del navegador al hacer clic derecho
        e.preventDefault();

        // Almacenar una referencia al elemento td en el que se hizo clic derecho
        tdSeleccionado = td;

        // Mostrar el menú personalizado en la posición del cursor
        menu.style.display = "flex";
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
      });

      // Agregar un controlador de eventos contextmenu a cada td anidado
      var tdsAnidados = td.querySelectorAll("td");
      tdsAnidados.forEach(function(tdAnidado) {
        tdAnidado.addEventListener("contextmenu", function(e) {
          // Prevenir la acción predeterminada del navegador al hacer clic derecho
          e.preventDefault();

          // Almacenar una referencia al elemento td anidado en el que se hizo clic derecho
          tdSeleccionado = tdAnidado;

          // Mostrar el menú personalizado en la posición del cursor
          menu.style.display = "flex";
          menu.style.left = `${e.pageX}px`;
          menu.style.top = `${e.pageY}px`;

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
      tdSeleccionado.textContent = "";
    }
    

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
  tds.forEach(td => {
    td.addEventListener('input', () => {
      ajustarAlturaFila(td.parentNode);
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
  // Hacer Subcolumnas 
  menu.querySelector(".makeSubCol").addEventListener("click", SubColMake);
  // Agregar Subcolumnas 
  menu.querySelector(".addSubCol").addEventListener("click",SubColMake);
  //Eliminar Subcolumnas 
  menu.querySelector(".delSubCol").addEventListener("click",SubColDell);
}); 

      // ---------------- //
      // Agregar SUBFILAS //
      // ---------------- //

  function SubRowMake(){
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
          let numfila = indiceFila.rowIndex + contBool;
           // Obtener la cantidad de celdas en la primera fila
          let columnas = indiceFila.cells.length;

          // Mostrar el índice de la fila
          //console.log("Número de fila:", numfila);
        
          let hilera = Stabla.rows[numfila];
    
          // Verificar si ya existe una tabla anidada en la segunda celda de la fila
          var tablaAnidada = hilera.cells[0].querySelector("table");
          if (tablaAnidada) {
            // Si ya existe una tabla anidada, agregar una nueva fila a esta tabla
            var hileraNueva = tablaAnidada.insertRow();
            var celdaNueva = hileraNueva.insertCell();
            celdaNueva.classList.add("celda-ajustada", "CelRow", "Cell0");
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
            celda1.classList.add("celda-ajustada", "col-6", "CelRow", "mainCell");
            celda1.textContent = "-";
            var celda2 = hilera1.insertCell();
            celda2.classList.add("celda-ajustada", "CelRow", "Cell0");
            celda2.textContent = "-";
            var celda3 = hilera2.insertCell();
            celda3.classList.add("celda-ajustada", "CelRow", "Cell0");
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
        //console.log("Índice de columna:", indiceColumna);
        let numcolumna = indiceColumna;
        // Buscar el elemento tr más cercano en el árbol DOM ascendente desde el elemento en el que se hizo clic
        let indiceFila = tdSeleccionado.closest("tr");

        // Obtener el índice de la fila
        let numfila = indiceFila.rowIndex + contBool;

        // Acceder a la fila seleccionada
        let filaSeleccionada = Stabla.rows[numfila];

        // Obtener la cantidad de celdas en la fila seleccionada
        let Tcolumnas = filaSeleccionada.cells.length;

    
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
            celdaExistente.classList.add("celda-ajustada", "CelRow", "backCells"); // Agregar una clase a la celda que contiene una tabla anidada
    
            // Crear una tabla anidada dentro de la celda existente
            var tablaAnidada = document.createElement("table");
            tablaAnidada.classList.add("tabla-anidada"); // Agregar una clase a la tabla anidada para aplicar estilos
            var tblBodyAnidado = document.createElement("tbody");
    
            // Agregar una hilera anidada horizontal
            var hileraAnidada = document.createElement("tr");
            var celdaAnidada = document.createElement("td");
            celdaAnidada.textContent = "-";
            celdaAnidada.classList.add("celda-ajustada", "CelRow", "secondCells");
            
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

      function SubRowDell() {
        // Obtener la fila del elemento seleccionado
        let fila = tdSeleccionado.parentNode;

        // Verificar si la celda en la columna 0 tiene un elemento hijo con la clase "mainCell"
        let inicio = fila.cells[0].querySelector('.mainCell') ? 0 : 1;

        // Recorrer las celdas de la fila
        for (let i = inicio; i < fila.cells.length; i++) {
          let celda = fila.cells[i];   

            // Si es la primera celda, eliminar la celda "Cell0" en la posición 0
            if (i == 0) {
              let Cell0 = celda.querySelector(".Cell0");
              if (Cell0) {
                Cell0.remove();
              }
              let allCell0 = celda.querySelectorAll('.Cell0');
              if (allCell0.length === 1){
                // Eliminar todas las clases existentes
                celda.className = '';
                // Agregar las clases originales
                celda.classList.add("celdaClickNull");
                celda.classList.add("SubFila0");
                celda.classList.add("SubColumna0");
                // Restablecer el contenido de la celda
                celda.innerHTML = " - ";
              }
            } 
            // Para las demás celdas, eliminar la tabla anidada
            else {
              let tablaAnidada = celda.querySelector("table");
              if (tablaAnidada) {
                tablaAnidada.remove();
              }
            }

            // Después de eliminar, verificar si quedan celdas "secondCells"
            let secondCells = celda.querySelectorAll('.secondCells');

            // Si no quedan celdas "secondCells", volver al estado original
            if (secondCells.length === 0 && i != 0) {
              // Eliminar todas las clases existentes
              celda.className = '';
            
              // Agregar las clases originales
              celda.classList.add("celdaClickNull");
              
              if(i === 1){
                // Agregar las clases específicas de la columna y fila
                celda.classList.add("SubFila1");
              }
              // Agregar las clases específicas de la fila
              let filaIndex = fila.rowIndex;
              if (filaIndex === 1) {
                celda.classList.add("SubColumna1");
              }
            
              // Restablecer el contenido de la celda
              celda.innerHTML = " - ";
            }

          }
        }

// Agregar un controlador de eventos click al botón "Agregar Fila" del menú personalizado
menu.querySelector(".addRow").addEventListener("click", function() {
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
      nuevaCelda.classList.add("celdaClickNull");
      // Agregar clases a las celdas dependiendo de su posición
      if (i === 0) {
        nuevaCelda.classList.add("SubFila0");
      } else if (i === 1) {
        nuevaCelda.classList.add("SubFila1");
      }

      if (nuevaFila.rowIndex === 0) {
        nuevaCelda.classList.add("SubColumna0");
      } else if (nuevaFila.rowIndex === 1) {
        nuevaCelda.classList.add("SubColumna1");
      }
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al botón "Agregar Columna" del menú personalizado
menu.querySelector(".addCol").addEventListener("click", function() {
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
      nuevaCelda.classList.add("celdaClickNull");
      // Agregar clases a las celdas dependiendo de su posición
      if (i === 0) {
        nuevaCelda.classList.add("SubColumna0");
      } else if (i === 1) {
        nuevaCelda.classList.add("SubColumna1");
      }

      if (nuevaCelda.cellIndex === 0) {
        nuevaCelda.classList.add("SubFila0");
      } else if (nuevaCelda.cellIndex === 1) {
        nuevaCelda.classList.add("SubFila1");
      }
    }
  }

  // Ocultar el menú personalizado después de hacer clic en el botón
  menu.style.display = "none";
});

// Agregar un controlador de eventos click al botón "Eliminar Fila" del menú personalizado
menu.querySelector(".delRow").addEventListener("click", function() {
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
menu.querySelector(".delCol").addEventListener("click", function() {
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

//   // ------------------- //
//   // AGREGAR SUBCOLUMNAS //
//   // ------------------- //

function SubColMake() {
  // Si la celda seleccionada está en la fila 0 o 1, entonces agrega subcolumnas
  if (tdSeleccionado.parentNode.rowIndex <= 1) {
    let inicio;
    if(tdSeleccionado.parentNode.rowIndex == 1){
      inicio = 1;
    }else{
      inicio = 0;
    }
    agregarSubcolumnas(tdSeleccionado, inicio);
  }
}
 
function agregarSubcolumnas(celda, inicio) {
  // Obtener la tabla que contiene la celda
  let tabla = celda.parentNode.parentNode;

  // Obtener todas las filas de la tabla
  let filas = tabla.querySelectorAll(".celdaClickNull");

  // Obtener el índice de columna de la celda de entrada
  let indiceColumna = celda.cellIndex;

  // Recorrer todas las filas de la tabla
  for (let i = inicio; i < filas.length; i++) {
    // Obtener la celda correspondiente en la columna
    let celdaActual = filas[i].querySelectorAll(".celdaClickNull")[indiceColumna];

    // Comprobar si celdaActual es undefined
    if (celdaActual) {
      // Comprobar si la celda ya ha sido procesada
      if (celdaActual.classList.contains('ColsProcess')) {
        let subTabla = celdaActual.querySelector(".tabla-anidadaCols");

        if(i === 0){
          let subFila0 = subTabla.querySelector(".Cell0Row0");
          subFila0.colSpan += 1;
          let subFila = subTabla.querySelector(".Cell0Row1");
          let subCelda = subFila.insertCell();
              subCelda.textContent = "-";
              subCelda.classList.add("celda-ajustada-colms")
        }
        else{
          let subFila = subTabla.querySelector(".CellnRown");
          let subCelda = subFila.insertCell();
            subCelda.textContent = "-";
            subCelda.classList.add("celda-ajustada-colms");
        }
      }
      else{
        // Marcar la celda como procesada
        celdaActual.classList.add('ColsProcess');
        // Crear una nueva tabla para las subcolumnas
        let subTabla = document.createElement("table");
        subTabla.classList.add("tabla-anidadaCols")
        // Si la celda está en la fila 0, entonces agrega tres filas a la subtabla
        if (i === 0) {
          let subFila = subTabla.insertRow();
          let subCelda = subFila.insertCell();
          subCelda.classList.add("Cell0Row0", "CelCol");
          subCelda.colSpan = "2";
          subCelda.textContent = "-";
          subCelda.classList.add("celda-ajustada-colms")
          subFila = subTabla.insertRow();
          for (let i = 0; i < 2; i++) {
              subFila.classList.add("Cell0Row1");
              let subCelda = subFila.insertCell();
              subCelda.textContent = "-";
              subCelda.classList.add("celda-ajustada-colms", "CelCol")
            
          }
        }
        
        // Si la celda está en la fila 1, entonces agrega dos filas a la subtabla
        else if(i > 0){
          let subFila = subTabla.insertRow();
          subFila.classList.add("CellnRown");
          for (let i = 0; i < 2; i++) {
            let subCelda = subFila.insertCell();
            subCelda.textContent = "-";
            subCelda.classList.add("celda-ajustada-colms", "CelCol")
          }
        }

        // Reemplaza el contenido de la celda por la nueva tabla
        celdaActual.innerHTML = '';
        celdaActual.appendChild(subTabla);
      }
    }
  }
}

// // -------------------- //
// // ELIMINAR SUBCOLUMNAS //
// // -------------------- //
function SubColDell() {
  // Si la celda seleccionada está en la fila 0 o 1, entonces agrega subcolumnas
  if (tdSeleccionado.parentNode.rowIndex <= 1) {
    let inicio;
    if(tdSeleccionado.parentNode.rowIndex == 1){
      inicio = 1;
    }else{
      inicio = 0;
    }
    eliminarSubcolumna(tdSeleccionado);
  }
}
function eliminarSubcolumna(celda) {
  // Obtener la tabla que contiene la celda
  let tabla = celda.parentNode.parentNode;

  // Obtener todas las filas de la tabla
  let filas = tabla.querySelectorAll(".celdaClickNull");

  // Obtener el índice de columna de la celda de entrada
  let indiceColumna = celda.cellIndex;


  // Recorrer todas las filas de la tabla
  for (let i = 0; i < filas.length; i++) {
    // Obtener la celda correspondiente en la columna
    let celdaActual = filas[i].querySelectorAll(".celdaClickNull")[indiceColumna];

    // Comprobar si celdaActual es undefined
    if (celdaActual) {
      // Comprobar si la celda ya ha sido procesada
      if (celdaActual.classList.contains('ColsProcess')) {
        // Obtener la subtabla
        let subTabla = celdaActual.querySelector(".tabla-anidadaCols");
        if (subTabla) {
          if(i == 0){
             // Obtener todas las filas de la subtabla
            let subFilas = subTabla.querySelectorAll("tr");
            let ultimaCelda = subFilas[1].lastElementChild;
            let subCeldas = subFilas[1].querySelectorAll("td");
            if (ultimaCelda) {
              subFilas[1].removeChild(ultimaCelda);
            }
            if (subCeldas.length == 2) {
              celdaActual.removeChild(subTabla);
              celdaActual.classList.remove('ColsProcess');
              celdaActual.textContent = "-";
            }
          }
          else{
            // Obtener todas las filas de la subtabla
            let subFilas = subTabla.querySelectorAll("tr");
            // Recorrer todas las filas de la subtabla
            for (let j = 0; j < subFilas.length; j++) {
              // Obtener todas las celdas de la fila
              let subCeldas = subFilas[j].querySelectorAll("td");
              // Si solo quedan dos celdas, eliminar una
              if (subCeldas.length > 1) {
                let ultimaCelda = subFilas[j].lastElementChild;
                if (ultimaCelda) {
                  subFilas[j].removeChild(ultimaCelda);
                }
              }
              // Si solo queda una celda, eliminar toda la subtabla y remover la clase 'ColsProcess'
              if (subCeldas.length == 2) {
                celdaActual.removeChild(subTabla);
                celdaActual.classList.remove('ColsProcess');
                celdaActual.textContent = "-";
              }
            }
          }
        }
      }
    }
  }
}

divSave.addEventListener("click", () => {
  let editor = document.getElementById('editor'); // Asegúrate de reemplazar 'editor' con el id correcto de tu div
  let celdas = editor.querySelectorAll('td.celdaClickNull');
  console.log(celdas);
  celdas.forEach((celda) => {
    celda.style.padding = '0px';
    let tablaAnidada = celda.querySelector('.tabla-anidadaCols');
    
    if (tablaAnidada) {
      console.log("calc(" + celda.offsetHeight + 'px' + "- 1rem)");
      tablaAnidada.style.height = "calc(" + celda.offsetHeight + 'px' + " - 0.5rem)";
    }
  });
})
