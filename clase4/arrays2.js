// Ejercicios en clase 4 de programacion III

// 1. Crear un arreglo que almacene la información de una persona la cual se le debe pedir al usuario. (Nombre, apellido, edad, genero, telefono, correo ).

const prompt = require('prompt-sync')();

info = [];
// const nombre = prompt("Ingrese su nombre: ");
// const apellido = prompt("Ingrese su apellido: ");
// const edad = parseInt(prompt("Ingrese su edad: "));
// const genero = prompt("Ingrese su genero: ");
// const telefono = parseInt(prompt("Ingrese su telefono: "));
// const correo = prompt("Ingrese su correo: ");

// info.push(nombre);
// info.push(apellido);
// info.push(edad);
// info.push(genero);
// info.push(telefono);
// info.push(correo);

// console.log(info)

// while (true){
//     const nombre = prompt("Ingrese su nombre: ");
//     const apellido = prompt("Ingrese su apellido: ");
//     const edad = parseInt(prompt("Ingrese su edad: "));
//     const genero = prompt("Ingrese su genero: ");
//     const telefono = parseInt(prompt("Ingrese su telefono: "));
//     const correo = prompt("Ingrese su correo: ");
//     info.push(nombre);
//     info.push(apellido);
//     info.push(edad);
//     info.push(genero);
//     info.push(telefono);
//     info.push(correo);
//     if (info.length === 6){
//         break
//     }
// }
// console.log(info);


// 2. .Crear un arreglo para guardar un listado de animales. El arreglo iniciara con 3 animales y luego debe pedir al usuario que agregue la cantidad de animales que el desee.

let animales = ["Caballo", "Sapo", "Iguana"];
// let cantidad_animales = parseInt(prompt("Ingrese la cantidad de animales a ingresar: "));

// let contador = 0;
// while (contador < cantidad_animales) {
//     const nuevo_animal = prompt("Ingrese el animal: ");
//     animales.push(nuevo_animal);
//     contador++;
// }

// console.log(animales);



// 3.  Mostrar el numero de elementos que tiene el array de forma automatica.
// console.log("Cantidad total de animales: " + animales.length);


// 4. Quitar el primer animal de la arreglo.
// console.log(animales.shift());
// console.log(animales);


// 5.  Validar si existe el león dentro del arreglo, luego de validar si existe mostrar la posición en la que se encuentra. Si no existe mostrar el mensaje: "El leon no esta en el arreglo"

animales.push("leon");

animales.includes("leon");


if (animales.includes("leon")){
    console.log(indexOf("leon"));
    console.log("Si esxiste")
} else {
    console.log("El leon no esta en el arreglo")
}

  