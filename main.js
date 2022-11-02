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
const panelAsideImg = $(".panel-aside-img");
const panelAsideTxt = $(".panel-aside-txt");
const btnImage = $(".btn-image");
const btnText = $(".btn-text");

const contMeme = $(".image-meme");
const inputColor = $("#input-color");
const inputTopText = $("#input-top-text");
const inputBottomText = $("#input-bottom-text");

// Funciones

//  Modo claro y modo oscuro
btn.addEventListener("click",()=> {
header.classList.toggle("lightMode");
body.classList.toggle("lightMode2");
aside.classList.toggle("lightModeAside");
panelAsideTxt.classList.toggle("lightModeAside")
if(header.classList.contains("lightMode")){
    btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i>Modo Oscuro'
}else{
    btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i>Modo Claro'
}
});

//Eventos

// Agregar imagen con url
url.addEventListener("input", (event) => {
  let imageUrl = event.target.value;
  imageMeme.style.backgroundImage = `url(${imageUrl})`;
});


// Descargar imagen
const descargarMeme = () => {
  domtoimage.toBlob(descargarImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

downloadBtn.addEventListener('click', descargarMeme);

//Cerrar abrir y alternar panel
closeImgPanel.addEventListener("click", ()=>{
  panelAsideImg.classList.add("hidden");
}) 

btnImage.addEventListener("click", () => {
  panelAsideImg.classList.remove("hidden");
  panelAsideTxt.classList.add("hidden");
});

closeTextPanel.addEventListener("click", ()=>{
  panelAsideTxt.classList.add("hidden");
}) 

btnText.addEventListener("click", () => {
  panelAsideTxt.classList.remove("hidden");
  panelAsideImg.classList.add("hidden");
});


// Cambiar color de fondo de la imagen
inputColor.addEventListener("blur", (event) => {
  descargarImagen.style.backgroundColor = event.target.value
});

// Editar texto superior
inputTopText.addEventListener("input", (event)=>{
  descargarImagen.innerText = event.target.value;
})




// Editar texto inferior
inputBottomText.addEventListener("input", (event)=>{
  descargarImagen.innerText = event.target.value;
})





