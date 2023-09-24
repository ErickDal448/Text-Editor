# **|Editor de Textos|**
## Introducción: 
Este sistema está hecho para poder crear y guardar formatos de texto para llenar sus datos y luego imprimirlos.

## Dependencias: 
- Este sistema hace uso de node.js, con coneccion a una base de datos de mongo db y con el formato ejs. 
    con las siguiente dependencias:
    - "body-parser": "^1.20.2",
    - "dotenv": "^16.3.1",
    - "ejs": "^3.1.9",
    - "express": "^4.18.2",
    - "mongodb": "^6.1.0",
    - "mongoose": "^7.5.2"


## Funcionalidades:
- **1: Visualizar plantillas.**
    Primeramente al iniciar el sistema se podrán ver tus plantillas generadas previamente, además de un botón para poder crear más plantillas. A partir de ahí puedes, crear una plantilla nueva o editar una plantilla previamente creada.
---
- - **1.1: Crear Plantilla.** Al momento de darle click al botón de crear plantilla debes colocar el título y descripción de tu plantilla, donde previamente se abrirá el apartado de edición de plantilla.

- - **1.2: Editar plantilla creada.** Si seleccionas una plantilla previamente creada se abrirá un menú de seleccion de rol, seguido de eso se mostrara el menú de edición de plantilla donde saldrán todos los aspectos que agregaste en la plantilla que seleccionaste.

- - **1.3: Editar info de plantilla.** Se accede a esta opcion al dar click al icono de configuracion de la plantilla, donde puedes cambiar el título o la descripción de la plantilla o en caso de querer eliminar esta el icono de delete donde se puede eliminar la plantilla.
---

- **2: Rol.** Se pueden tener dos roles al momento de abrir una plantilla, como editor, o para impresion.
---
- - **2.1: Edicion** En este rol se puede editar todo el formato con todas sus caracteristicas 
- - **2.2: Impresion** En este rol se puede editar los diferentes inputs que se hayan colocado para posteriormente poder imprimir la plantilla con todos los datos de los input.

---
- **3: Edición de texto.** Este apartado se encuentra en el menú izquierdo y se puede editar el texto que se encuentra en la hoja de edicion.
----
- - **3.1: Colores y tamaño.** Se pude cambiar el color para algunos de los siguientes parametros y cambiar el tamaño del texto.
- - **3.2: Justificación.** Se pude justificar el texto de manera de izquierda, derecha, central y lineal.
- - **3.3: Editor de texto en su estilo.** Se puede cambiar al estilo de texto en bold, italic, strike y con underline.
- - **3.4: Espaciado.** Se puede realizar un outdent o un indent en el texto.
- - **3.5: Cambiar colores del texto.** Se puede cambiar la forma del color del texto, de manera de cambiar su letra o cambiar su fondo.
- - **3.6: regresar.** Se tiene la opción de regresar o avanzar en caso de error.
- - **3.7: Incersión.** Se puede incertar diferentes cosas como diferentes inputs (date, checkbox y textarea), una imagen o una tabla
---
- **4: Tablas.** Cuando se inserta una tabla te pide n cantidad de filas y n cantidad de columnas; tiene ciertas configuraciones que no son compatibles con el menu lateral, se accede a su configuracion con el click derecho.
---
- - **4.1: Null.** Con la opción de poner campos en null (teniendo el recuadro en negro) vuelve a la normalidad en color blanco y sin contenido al darle de nuevo a null en la misma celda.

- - **4.2: Color de fondo:** Esta funcion realiza un cambio de background en cada celda seleccionada con el color que se tenga en la paleta en el ménu lateral, no se debe de interactuar con el boton de fondo de texto. 

- - **4.3: Color de texto:** Así como el anterior cambia el color del texto. 

- - **4.4: Agregar fila.** En este apartado se agrega una fila al final de la tabla.

- - **4.5: Agregar columna** En este apartado se agrega una columna al final de lado derecho de la tabla.

- - **4.6: Eliminar fila.** En este apartado se elimina una fila al final de la tabla.

- - **4.7: Eliminar columna** En este apartado se elimina una columna al final de lado derecho de la tabla.

- - **4.8: Hacer subfila o subcolumna:** En estos apartados se tiene la opción de crear subfilas o subcolumnas, no es recomendable tener muchas ya que se llena mucho la tabla, ni tampoco mezclar las subcolumnas con las subfilas.

---
- **5: Agregar imagenes**
Se pueden agregar las imagenes apartir del boton de incerción o a traves de copear y pegar una imagen.
---
- **6: Guardar.** Al dar click al boton de guardar, la hoja editada se guardara en la plantilla del usuario. 
---
- **7: Imprimir.** Al dar click al botón de imprimir se abrira una pagina donde se vera todo el formato de la hoja, donde a su vez se abrira una pestaña de impresión con los formatos que se tengan previos. 
---
