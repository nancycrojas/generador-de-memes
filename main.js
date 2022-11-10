// Función de utilidad
const $ = (selector) => document.querySelector(selector);

// Variables
const header = $("#header");
const body = $("#body");
const aside = $(".aside");
const url = $("#image-url");
const imageMeme = $(".image-meme");
const imageTextTop = $("#image-text-top");
const imageTextBottom = $("#image-text-bottom");
const descargarImagen = $("#img-descargar");
const canvasMeme = $(".canvas-meme");
const panelAsideImg = $("#panel-aside-img");
const panelAsideTxt = $("#panel-aside-txt");
const contMeme = $(".image-meme");
const inputColor = $("#input-color");
const spanColor = $("#span-color")
const optionsBlend = $("#options-blend");
const inputTopText = $("#input-top-text");
const inputBottomText = $("#input-bottom-text");
const noTopText = $("#no-top-text");
const noBottomText = $("#no-bottom-text")
const font = $("#font");
const fontSize = $("#font-size");
const inputColorLetter = $("#input-color-letter");
const spanColorLetter = $("#span-color-letter")
const inputColorBackground = $("#input-color-background");
const spanColorBg = $("#span-color-bg");
const checkboxBackground = $("#checkbox-background");
const spacing = $("#form-spacing");
const formLineSpacing = $("#form-line-spacing");
const inputBrillo = $("#input-brillo");
const inputOpacidad = $("#input-opacidad");
const inputContraste = $("#input-contraste");
const inputDesenfoque = $("#input-blur");
const inputEscalaDeGrises = $("#input-grayscale");
const inputSepia = $("#input-sepia");
const inputHue = $("#input-hue");
const inputSaturado = $("#input-saturate");
const inputNegativo = $("#input-invert");

// Botones
const btn = $("#btn");
const btnImage = $(".btn-image");
const btnText = $(".btn-text");
const downloadBtn = $("#download-btn");
const closeImgPanel = $(".close-image-panel");
const btnReseat = $(".reseat-filters");
const closeTextPanel = $(".close-text-panel");
const btnNone = $("#btn-none");
const btnLight = $("#btn-light");
const btnDark = $("#btn-dark");
const alignLeft = $(".align-left");
const alignCenter = $(".align-center");
const alignRight = $(".align-right");

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

// Cerrar abrir y alternar panel
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
  spanColor.innerHTML = event.target.value;
});

// Cambiar modo de mezcla de fondo
optionsBlend.addEventListener("change", (event)=>{
  console.log(event.target.value);
  if(event.target.value == 'Ninguno'){
    descargarImagen.style.backgroundBlendMode = 'unset'
  }
  if(event.target.value == 'Aclarar'){
    descargarImagen.style.backgroundBlendMode = 'lighten'
  }
  if(event.target.value == 'Oscurecer'){
    descargarImagen.style.backgroundBlendMode = 'darken'
  }
  if(event.target.value == 'Diferencia'){
    descargarImagen.style.backgroundBlendMode = 'difference'
  }
  if(event.target.value == 'Luminosidad'){
    descargarImagen.style.backgroundBlendMode = 'luminosity'
  }
  if(event.target.value == 'Multiplicar'){
    descargarImagen.style.backgroundBlendMode = 'multiply'
  }
});

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

// Editar texto superior
inputTopText.addEventListener("input", (event)=>{
  imageTextTop.innerText = event.target.value;
})

// Editar texto inferior
inputBottomText.addEventListener("input", (event)=>{
  imageTextBottom.innerText = event.target.value;
})

// Remover texto superior
noTopText.addEventListener("click", (event) => {
 console.log(event);
 imageTextTop.classList.toggle("hidden");
});

// Remover texto inferior
noBottomText.addEventListener("click", (event) => {
  console.log(event);
  imageTextBottom.classList.toggle("hidden");
 });

// Cambiar familia de fuente
font.addEventListener("change",(event)=>{
  console.log(event.target.value);
  if(event.target.value == 'Arial'){
    imageTextTop.style.fontFamily = 'Arial, Helvetica, sans-serif'
    imageTextBottom.style.fontFamily = 'Arial, Helvetica, sans-serif'
  }
  if(event.target.value == 'Arial Black'){
    imageTextTop.style.fontFamily = 'Arial Black'
    imageTextBottom.style.fontFamily = 'Arial Black'
  }
  if(event.target.value == 'American Typewriter'){
    imageTextTop.style.fontFamily = 'American Typewriter'
    imageTextBottom.style.fontFamily = 'American Typewriter'
  }
  if(event.target.value == 'Andale Mono'){
    imageTextTop.style.fontFamily = 'Andale Mono'
    imageTextBottom.style.fontFamily = 'Andale Mono'
  }
  if(event.target.value == 'Comic Sans MS'){
    imageTextTop.style.fontFamily = 'Comic Sans MS'
    imageTextBottom.style.fontFamily = 'Comic Sans MS'
  }
  if(event.target.value == 'Helvetica'){
    imageTextTop.style.fontFamily = 'Helvetica'
    imageTextBottom.style.fontFamily = 'Helvetica'
  }
  if(event.target.value == 'Impact'){
    imageTextTop.style.fontFamily = 'Impact'
    imageTextBottom.style.fontFamily = 'Impact'
  }
  if(event.target.value == 'Verdana'){
    imageTextTop.style.fontFamily = 'Verdana'
    imageTextBottom.style.fontFamily = 'Verdana'
  }
  if(event.target.value == 'Times New Roman'){
    imageTextTop.style.fontFamily = 'Times New Roman'
    imageTextBottom.style.fontFamily = 'Times New Roman'
  }
});

// Cambiar tamaño de fuente
fontSize.addEventListener("input",(event)=>{
  console.log(event.target.value);
  imageTextTop.style.fontSize = `${event.target.value}px`
  imageTextBottom.style.fontSize = `${event.target.value}px`
});

//Cambiar alineación
alignLeft.addEventListener("click",(event)=>{
  console.log(event.target.value);
  event.preventDefault();
  imageTextTop.style.textAlign = 'left'
  imageTextBottom.style.textAlign = 'left'
})

alignCenter.addEventListener("click",(event)=>{
  console.log(event.target.value);
  event.preventDefault();
  imageTextTop.style.textAlign = 'center'
  imageTextBottom.style.textAlign = 'center'
})

alignRight.addEventListener("click",(event)=>{
  console.log(event.target.value);
  event.preventDefault();
  imageTextTop.style.textAlign = 'right'
  imageTextBottom.style.textAlign = 'right'
})

// Cambiar color de texto
inputColorLetter.addEventListener("blur", (event) => {
  imageTextTop.style.color = event.target.value
  imageTextBottom.style.color = event.target.value
  spanColorLetter.innerHTML = event.target.value;
});

// Cambiar color de fondo de texto
inputColorBackground.addEventListener("blur", (event)=>{
  console.log(event);
  imageTextTop.style.backgroundColor = event.target.value
  imageTextBottom.style.backgroundColor = event.target.value
  spanColorBg.innerHTML = event.target.value;
});

// Fondo transparente
checkboxBackground.addEventListener("change", (event)=>{
  console.log(event);
  if(checkboxBackground.checked){
    imageTextTop.style.backgroundColor = 'transparent';
    imageTextBottom.style.backgroundColor = 'transparent';
  }
  else{
    imageTextTop.style.backgroundColor = inputColorBackground.value;
    imageTextBottom.style.backgroundColor = inputColorBackground.value;
  }
})

// Cambiar contorno de texto
btnLight.addEventListener("click", (event) =>{
  event.preventDefault();
  imageTextTop.classList.add("light-outline");
  imageTextBottom.classList.add("light-outline");
  imageTextTop.classList.remove("dark-outline");
  imageTextBottom.classList.remove("dark-outline");
});

btnDark.addEventListener("click", (event) =>{
  event.preventDefault();
  imageTextTop.classList.add("dark-outline");
  imageTextBottom.classList.add("dark-outline");
  imageTextTop.classList.remove("light-outline");
  imageTextBottom.classList.remove("light-outline");
});

btnNone.addEventListener("click", (event) =>{
  event.preventDefault();
  imageTextTop.classList.add("none-outline");
  imageTextBottom.classList.add("none-outline");
  imageTextTop.classList.remove("light-outline");
  imageTextBottom.classList.remove("light-outline");
  imageTextTop.classList.remove("dark-outline");
  imageTextBottom.classList.remove("dark-outline");
});

// Cambiar padding de texto
spacing.addEventListener("input",(event)=>{
  console.log(event.target.value);
  imageTextTop.style.padding = `${event.target.value}px`
  imageTextBottom.style.padding = `${event.target.value}px`
});

// Cambiar alto de línea de texto
formLineSpacing.addEventListener("input",(event)=>{
  console.log(event.target.value);
  if(event.target.value == '0.8'){
    imageTextTop.style.lineHeight = '0.8'
    imageTextBottom.style.lineHeight = '0.8'
  }
  if(event.target.value == '1'){
    imageTextTop.style.lineHeight = '1'
    imageTextBottom.style.lineHeight = '1'
  }
  if(event.target.value == '1.2'){
    imageTextTop.style.lineHeight = '1.2'
    imageTextBottom.style.lineHeight = '1.2'
  }
  if(event.target.value == '1.5'){
    imageTextTop.style.lineHeight = '1.5'
    imageTextBottom.style.lineHeight = '1.5'
  }
  if(event.target.value == '2'){
    imageTextTop.style.lineHeight = '2'
    imageTextBottom.style.lineHeight = '2'
  }
  if(event.target.value == '2.5'){
    imageTextTop.style.lineHeight = '2.5'
    imageTextBottom.style.lineHeight = '2.5'
  }
}); 

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



