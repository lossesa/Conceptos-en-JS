// Ejercicios 
// 1. Ejercicios con un ARRAY SIMPLE

const prompt = require('prompt-sync')();

numeros = [];
cantidad_numeros = parseInt(prompt("Ingresa la cantidad de numeros a ingresar: "));

while (true) {
    numero = parseFloat(prompt("Ingresa un numero: "));
    numeros.push(numero);
    if (numeros.length === cantidad_numeros)
        break;
};
console.log(numeros);



// 2. Ejercicios con un ARRAY DE ARRAYS

lista_nombres = [
    ["Sara", "Maria", "Mariana"],
    ["Camilo", "Esteban", "Carlos"],
    ["Sebastian", "Sofia", "Karla"],
    ["Jhostin", "Kevin", "Estefania"],
]

// Acceder a los valores por le indice
console.log(lista_nombres[0]);
console.log(lista_nombres[0][0]);

// Recorre con dos bucles for
for (let i = 0; i < lista_nombres.length; i++) {
    for (let j = 0; j < lista_nombres[i].length; j++) {
        console.log(`Nombre en [${i}][${j}]: ${lista_nombres[i][j]}`);
    }
}


// 3. Ejercicios con un ARRAY DE OBJETOS

lista_persona = [
    {nombre: "Sara", edad: 20, ciudad: "Cali"},
    {nombre: "Sofia", edad: 25, ciudad: "Cali"},
    {nombre: "Jose", edad: 31, ciudad: "Pereira"},
    {nombre: "Aden", edad: 19, ciudad: "Bogota"},
];

// Acceder a un objeto individual por el indice.
console.log(lista_persona[2]);
console.log(lista_persona[1].edad);

// Recorrer la lista con un for
for (let i= 0; i < lista_persona.length; i++){
    console.log("\n---Persona---")
    console.log("Nombre: ", lista_persona[i].nombre);
    console.log("Edad: ", lista_persona[i].edad);
    console.log("Ciudad: ", lista_persona[i].ciudad);
}

// Recorrer la  lista con forEach
lista_persona.forEach(persona => {
    console.log("\n---Persona---")
    console.log("Nombre: ", persona.nombre);
    console.log("Edad: ", persona.edad);
    console.log("Ciudad: ", persona.ciudad);
});

