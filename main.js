// Función de utilidad
const $ = (selector) => document.querySelector(selector);

// Variables
const header = $("#header");
const body = $("#body");
const aside = $("#aside");
const btn = $("#btn");
const url =$("#image-url");
let imageMeme = $(".image-meme");
const imageTextTop = $("#image-text-top");
const imageTextBottom = $("#image-text-bottom");
let descargarImagen = document.getElementById("img-descargar");
const canvasMeme = $(".canvas-meme");
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
const noTopText = $("#no-top-text");
const inputBrillo = $("#input-brillo");
const inputOpacidad = $("#input-opacidad");
const inputContraste = $("#input-contraste");
const inputDesenfoque = $("#input-blur");
const inputEscalaDeGrises = $("#input-grayscale");
const inputSepia = $("#input-sepia");
const inputHue = $("#input-hue");
const inputSaturado = $("#input-saturate");
const inputNegativo = $("#input-invert");
const btnReseat = $(".reseat-filters");

//Eventos

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

// Agregar imagen con url
url.addEventListener("input", (event) => {
  let imageUrl = event.target.value;
  imageMeme.style.backgroundImage = `url(${imageUrl})`;
});

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
  imageTextTop.innerText = event.target.value;
})

// Editar texto inferior
inputBottomText.addEventListener("input", (event)=>{
  imageTextBottom.innerText = event.target.value;
})



// //Remover texto superior
// noTopText.addEventListener("click", () => {
// console.log(noTopText);
//   imageTextTop.classList.add("hidden");

// });

/*
const actualizarFiltros = () => {
  let brightness = inputBrillo.value;
  let opacity = inputOpacidad.value;
  let contrast = input.inputContraste;
  let blur = inputDesenfoque.value;
  let grayscale = inputEscalaDeGrises.value;
  let sepia = inputSepia.value;
  let hue = inputHue.value;
  let saturate = inputSaturado.value;
  let invert = inputNegativo.value;

  imageMeme.style.filter = `brightness(${brightness}) opacity(${opacity}%) contrast(${contrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue(${hue}deg) saturate(${saturate}%) invert(${invert}%)`;

};


inputBrillo.addEventListener("change", actualizarFiltros)
inputOpacidad.addEventListener("change", actualizarFiltros)
inputContraste.addEventListener("change", actualizarFiltros)
inputDesenfoque.addEventListener("change", actualizarFiltros)
inputEscalaDeGrises.addEventListener("change", actualizarFiltros)
inputSepia.addEventListener("change", actualizarFiltros)
inputHue.addEventListener("change", actualizarFiltros)
inputSaturado.addEventListener("change", actualizarFiltros)
inputNegativo.addEventListener("change", actualizarFiltros)*/


// Cambiar filtros

inputBrillo.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `brightness(${event.target.value})`;
})

inputOpacidad.addEventListener("change", (event)=>{
  descargarImagen.style.opacity = `${event.target.value}%`
})

inputContraste.addEventListener("change", (event)=>{
  console.log('event');
  descargarImagen.style.filter = `contrast(${event.target.value}%)`
})

inputDesenfoque.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `blur(${event.target.value}px)`
})

inputEscalaDeGrises.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `grayscale(${event.target.value}%)`
})

inputSepia.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `sepia(${event.target.value}%)`
})

inputHue.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `hue-rotate(${event.target.value}deg)`
})

inputSaturado.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `saturate(${event.target.value}%)`
})

inputNegativo.addEventListener("change", (event)=>{
  descargarImagen.style.filter = `invert(${event.target.value}%)`
})

// Funciones

// Descargar imagen
const descargarMeme = () => {
  domtoimage.toBlob(canvasMeme).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

downloadBtn.addEventListener('click', descargarMeme);

const resetearFiltros = () => {
  inputBrillo.value = 1;
  inputOpacidad.value = 100;
  inputContraste.value = 100;
  inputDesenfoque.value = 0;
  inputEscalaDeGrises.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturado.value = 100;
  inputNegativo.value = 0;

};

btnReseat.addEventListener("click", resetearFiltros);



