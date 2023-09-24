const editor     = document.querySelector("#editor")
const paleta     = document.querySelector("#paleta")
const fontColor  = document.querySelector("#fontColor")
const backColor  = document.querySelector("#backColor")
const backCell   = document.querySelector('.btnBackCell')
const fontCell   = document.querySelector('.btnFontCell')
const uploadfile     = document.querySelector("#upload")

uploadfile.addEventListener("change", e => {
  let file = e.currentTarget.files[0];
    resizeImage(file, 500, 500, function(base64String) {
        // Añade la imagen al div editable
        editor.innerHTML += '<img src="' + base64String + '">';
    });
    upload.value="";
});

const rgbToHex = (r, g, b) => '#' + [r,g,b].map( x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex   
}).join('')

fontColor.addEventListener("click", () => {
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedElement = range.commonAncestorContainer;
    if (selectedElement.nodeType === 3) { // Si es un nodo de texto, obtenemos su elemento padre
      selectedElement = selectedElement.parentElement;
    }
    if (selectedElement.nodeName !== 'TD') {
      // Si el texto seleccionado no está dentro de una celda de tabla, cambia el color del texto
      document.execCommand('foreColor', false, paleta.style.backgroundColor);
    }
    // Cambia el color de todos los elementos descendientes
    let descendants = selectedElement.getElementsByTagName('*');
    for (let i = 0; i < descendants.length; i++) {
      if (descendants[i].nodeName === 'INPUT' || descendants[i].nodeName === 'TEXTAREA') {
        descendants[i].style.color = paleta.style.backgroundColor;
      }
    }
  }
});


backColor.addEventListener("click", () => {
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedElement = range.commonAncestorContainer;
    if (selectedElement.nodeType === 3) { // Si es un nodo de texto, obtenemos su elemento padre
      selectedElement = selectedElement.parentElement;
    }
    if (selectedElement.nodeName !== 'TD') {
      // Si el texto seleccionado no está dentro de una celda de tabla, cambia el color del texto
      document.execCommand('backColor', false, paleta.style.backgroundColor);
    }
    // Cambia el color de todos los elementos descendientes
    let descendants = selectedElement.getElementsByTagName('*');
    for (let i = 0; i < descendants.length; i++) {
      if (descendants[i].nodeName === 'INPUT' || descendants[i].nodeName === 'TEXTAREA') {
        descendants[i].style.backgroundColor = paleta.style.backgroundColor;
      }
    }
  }
});

backCell.addEventListener("click", () => {
  let sel = window.getSelection();
  if (sel.rangeCount) {
    console.log(tdSeleccionado)
    if (tdSeleccionado.classList.contains("Cell0Row0")){
      tdSeleccionado.style.backgroundColor = paleta.style.backgroundColor;
      return;
    }
      let range = sel.getRangeAt(0);
      let rects = range.getClientRects();
      let cells = document.querySelectorAll('td');
      cells.forEach(cell => {
          let cellRect = cell.getBoundingClientRect();
          for (let i = 0; i < rects.length; i++) {
              if (rects[i].left >= cellRect.left && rects[i].right <= cellRect.right && rects[i].top >= cellRect.top && rects[i].bottom <= cellRect.bottom) {
                  cell.style.backgroundColor = paleta.style.backgroundColor;
                  let descendants = cell.getElementsByTagName('*');
                  for (let j = 0; j < descendants.length; j++) {
                      descendants[j].style.backgroundColor = paleta.style.backgroundColor;
                  }
              }
          }
      });
  }
});

fontCell.addEventListener("click", () => {
  let sel = window.getSelection();
  if (sel.rangeCount) {
      let range = sel.getRangeAt(0);
      let rects = range.getClientRects();
      let cells = document.querySelectorAll('td');
      cells.forEach(cell => {
          let cellRect = cell.getBoundingClientRect();
          for (let i = 0; i < rects.length; i++) {
              if (rects[i].left >= cellRect.left && rects[i].right <= cellRect.right && rects[i].top >= cellRect.top && rects[i].bottom <= cellRect.bottom) {
                  cell.style.color = paleta.style.backgroundColor;
                  let descendants = cell.getElementsByTagName('*');
                  for (let j = 0; j < descendants.length; j++) {
                      descendants[j].style.color = paleta.style.backgroundColor;
                  }
              }
          }
      });
  }
})

const link = () => document.execCommand('createlink', false, prompt('Enter a URL:', 'http://') )
const alterFont    = size => document.execCommand("fontSize", false, parseInt(size) )
const applyCommand = comand => document.execCommand(comand)

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "style") {
        const newBackgroundColor = paleta.style.backgroundColor;
        fontColor.style.color = newBackgroundColor;
      }
    });
  });
  
  observer.observe(paleta, { attributes: true });
  document.getElementById('editor').addEventListener('paste', function(e) {
    let items = (e.clipboardData || window.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            let file = items[i].getAsFile();
            resizeImage(file, 500, 500, function(base64String) {
                // Añade la imagen al div editable
                editor.innerHTML += '<img src="' + base64String + '">';
            });
            e.preventDefault(); // Previene el comportamiento predeterminado
            break;
        }
      }
    });

    function resizeImage(file, maxWidth, maxHeight, callback) {
      let img = new Image();
      img.onload = function() {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          let width = img.width;
          let height = img.height;
  
          // Calcula las nuevas dimensiones de la imagen manteniendo su aspecto original
          if (width > height) {
              if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
              }
          } else {
              if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
              }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          // Dibuja la imagen en el canvas con las nuevas dimensiones
          ctx.drawImage(img, 0, 0, width, height);
  
          // Obtiene la imagen del canvas como base64
          let dataUrl = canvas.toDataURL('image/jpeg');
  
          callback(dataUrl);
      };
      img.src = URL.createObjectURL(file);
  }
