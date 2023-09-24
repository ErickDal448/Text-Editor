function insertAtCursor(input) {
  var sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
      var range = sel.getRangeAt(0);
      range.deleteContents();

      // Verificar si el cursor está dentro del div con id 'editor'
      var parentNode = range.commonAncestorContainer;
      while (parentNode != null && parentNode.id != 'editor') {
          parentNode = parentNode.parentNode;
      }
      var inEditor = parentNode != null;

      // Si el cursor no está dentro del div con id 'editor', salir de la función
      if (!inEditor) {
          return;
      }

      // Verificar si el cursor está dentro de una tabla
      parentNode = range.commonAncestorContainer;
      while (parentNode != null && parentNode.nodeName != 'TABLE') {
          parentNode = parentNode.parentNode;
      }
      var inTable = parentNode != null;

      // Agregar el estilo width: 100% si el cursor está dentro de una tabla y el input no es un checkbox con la clase 'check'
      if (inTable) {
        if (input.includes('type="checkbox"')){
          input = input.replace('<input', '<input style="width: auto;"');
        }
        else{
          if (input.includes('textarea')){
            input = input.replace('<textarea', '<textarea style="width: 90%;"');
          }
          else{
            input = input.replace('<input', '<input style="width: 90%;"') ;
          }
          
        }
      }

      var el = document.createElement('div');
      el.innerHTML = input;
      var frag = document.createDocumentFragment(), node, lastNode;
      while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      
      // Preserve the selection
      if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }
}

document.getElementById('btnDate').addEventListener('click', function(e) {
    e.preventDefault();
    var input = '<input type="date">';
    insertAtCursor(input);
});

document.getElementById('btnText').addEventListener('click', function(e) {
  e.preventDefault();
  var input = '<textarea style="overflow: hidden; "></textarea>';
  insertAtCursor(input);
  textAreaDetect();
});

document.getElementById('btnCheck').addEventListener('click', function(e) {
    e.preventDefault();
    var input = '<input type="checkbox" class="check">';
    insertAtCursor(input);
});


function  textAreaDetect() {
  let textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea) => {
    textarea.addEventListener('mouseup', function() {
      // Aquí puedes agregar el código para ajustar el maxlength del textarea
      // Por ejemplo:
      let style = window.getComputedStyle(textarea);
      let width = parseInt(style.width);
      let height = parseInt(style.height);
      let fontSize = parseInt(style.fontSize);
      let lineHeight = parseFloat(style.lineHeight) / fontSize;

      // Asume que cada carácter ocupa aproximadamente la misma cantidad de espacio que una 'm'
      let charWidth = fontSize * 0.62;
  
      // Calcula el número de caracteres por línea y el número de líneas
      let charsPerLine = Math.floor(width / charWidth);
      let lines = Math.floor(height / (fontSize * lineHeight));

      // Establece el maxlength en función del número de caracteres por línea y el número de líneas
      textarea.maxLength = charsPerLine * lines;
    });
  });
};
divSave.addEventListener("click", () => {
  let textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea) => {
    // Aquí puedes agregar el código para ajustar el maxlength del textarea
      // Por ejemplo:
      let style = window.getComputedStyle(textarea);
      let width = parseInt(style.width);
      let height = parseInt(style.height);
      let fontSize = parseInt(style.fontSize);
      let lineHeight = parseFloat(style.lineHeight) / fontSize;

      // Asume que cada carácter ocupa aproximadamente la misma cantidad de espacio que una 'm'
      let charWidth = fontSize * 0.62;
  
      // Calcula el número de caracteres por línea y el número de líneas
      let charsPerLine = Math.floor(width / charWidth);
      let lines = Math.floor(height / (fontSize * lineHeight));

      // Establece el maxlength en función del número de caracteres por línea y el número de líneas
      textarea.maxLength = charsPerLine * lines;
  })
})
