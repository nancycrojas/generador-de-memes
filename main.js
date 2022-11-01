// Función de utilidad
const $ = (selector) => document.querySelector(selector);

// Variables
const header = $("#header");
const body = $("#body");
const aside = $("#aside");
const btn = $("#btn");
const url =$("#image-url");
const imageMeme = $(".image-meme");
const descargarImagen = document.getElementById("img-descargar");
const downloadBtn = document.getElementById("download-btn");
const closeImgPanel = $(".close-image-panel");
const closeTextPanel = $(".close-text-panel");

// Funciones

//  Modo claro / modo oscuro
btn.addEventListener("click",()=> {
header.classList.toggle("lightMode");
body.classList.toggle("lightMode2");
aside.classList.toggle("lightModeAside");
if(header.classList.contains("lightMode")){
    btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i>Modo Oscuro'
}else{
    btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i>Modo Claro'
}
});

//Eventos

//Agregar  url de imagen
url.addEventListener("input", (event) => {
  let imageUrl = event.target.value;
  imageMeme.style.backgroundImage = `url(${imageUrl})`;
});


//Descargar meme
const descargarMeme = () => {
  domtoimage.toBlob(descargarImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

downloadBtn.addEventListener('click', descargarMeme);

//Cerrar modal
closeImgPanel.addEventListener("click", ()=>{
  aside.classList.add("hidden");
})  
  


