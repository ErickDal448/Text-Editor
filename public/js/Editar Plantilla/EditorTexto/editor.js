const editor     = document.querySelector("#editor")
const paleta     = document.querySelector("#paleta")
const fontColor  = document.querySelector("#fontColor")
const backColor  = document.querySelector("#backColor")
const upload     = document.querySelector("#upload")

upload.addEventListener("change", e => {
    let file    = e.currentTarget.files[0]
    let reader  = new FileReader()
    let img     = new Image(100, 100)
    reader.onloadend = () => {
        img.src = reader.result
        editor.appendChild(img)
        upload.value=""
    }
    reader.readAsDataURL(file)
})

const rgbToHex = (r, g, b) => '#' + [r,g,b].map( x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex   
}).join('')

fontColor.addEventListener("click", () => {
    let color = paleta.style.backgroundColor.replace("rgb(", "").replace(")", "").split(",")
    document.execCommand('foreColor', false, rgbToHex( parseInt(color[0]), parseInt(color[1]), parseInt(color[2]) ) )
})
backColor.addEventListener("click", () => document.execCommand('backColor', false, paleta.style.backgroundColor ))

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