document.getElementById('divPrint').addEventListener('click', function() {
    // Obtén el div que quieres imprimir
    var div = document.getElementById('editor').cloneNode(true);

    // Obtén todos los inputs y textareas en el div
    var inputs = div.getElementsByTagName('input');
    var textareas = div.getElementsByTagName('textarea');

    // Establece el valor actual de cada input y textarea en el div
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            if(inputs[i].checked){
                inputs[i].setAttribute('checked', 'checked');
            } else {
                inputs[i].removeAttribute('checked');
            }
        } else {
            inputs[i].setAttribute('value', inputs[i].value);
        }
    }
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].textContent = textareas[i].value;
    }

    // Crea una ventana nueva
    var printWindow = window.open('', '_blank');

    // Escribe el contenido del div en la nueva ventana
    printWindow.document.write('<html><head><title>Imprimir</title>');
    
    // Aquí puedes agregar tus enlaces a los archivos CSS y JavaScript
    printWindow.document.write('<meta charset="UTF-8">');
    printWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    printWindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
    printWindow.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">');
    printWindow.document.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>');
    printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/global.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/index.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/EditarPlantilla.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/secciones/texto.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/secciones/tabla.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/secciones/agg-seccion.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/EditorTexto/editor.css">');
    printWindow.document.write('<link rel="stylesheet" href="/assets/css/mostrarComo.css">');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="/assets/css/EditorTexto/sheets-of-paper-a4.css">');
    printWindow.document.write('<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>');
    printWindow.document.write('<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>');
    printWindow.document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script>');
    printWindow.document.write('<style>');
    printWindow.document.write('input[type="date"]::-webkit-calendar-picker-indicator { display: none; }');
    printWindow.document.write('input[type="date"] { border: none; }');
    printWindow.document.write('textarea { border: none; resize: none; margin:5px}');
    printWindow.document.write('</style>');

    printWindow.document.write('</head><body>');
    printWindow.document.write(div.innerHTML);
    printWindow.document.write('</body></html>');

    // Asegúrate de que todo el contenido se haya cargado antes de imprimir
    printWindow.document.close();
    printWindow.onload = function() {
        printWindow.print();
    };
});
