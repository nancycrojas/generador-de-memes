const header = document.getElementById("header");
const main = document.getElementById("container");
const aside = document.getElementById("aside");
const btn = document.getElementById("btn");

//  Modo claro / modo oscuro

btn.addEventListener("click",()=> {
header.classList.toggle("lightMode");
main.classList.toggle("lightMode2");
aside.classList.toggle("lightModeAside");
if(btn.innerText==="Modo Oscuro"){
    btn.innerText="Modo Claro";
}
else{
    btn.innerText="Modo Oscuro"
}
});