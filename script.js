/*alert("Hola este es mi Javascript");
let nombre = "Marta";
nombre ="Maria";

var nombre1 = "Marta";

const nombre2 = "Marta";
//nombre2 ="Maria";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML ="Otro";
}else{
    console.log("no se cumple");
}


let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo12");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en caballito.Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
    return contenido;
}
parrafo.innerText = cambiarTexto (nombre, ciudad, gusto);


