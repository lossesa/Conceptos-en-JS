// Tipos de ambitos en JS
// 1) Ambito global
// Las variables son accesibles desde cualquier parte del código.

let nombre = "Maria";

// La funcion puede acceder a nombre.
function saludar(){
    console.log("Hola " + nombre);
}
// saludar();


// 2) Ambito de funcion
// Las variables que se declaran dentro de una funcion solo son accesibles dentro de esta. 

function saludarDos(){
    let nombre = "Sara";
    console.log("Hola " + nombre);
}
// console.log(nombre); // Esto daria un error.


// 3) Ambito de bloque
// Las variables declaradas dentro de un bloque como IF, FOR o WHILE solo son accesibles dentro de esta.

if (true){
    let nombre = "Jose";
    console.log("Hola " + nombre);
}
// console.log(nombre); // Esto daria un error.



