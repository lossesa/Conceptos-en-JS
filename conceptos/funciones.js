// Funciones
// 1) Sintaxis normal
function suma_uno (a,b){
    return a + b
}
console.log(suma_uno(3,7))


// 2) Funciones flecha
// Es una forma de escribir una función de manera mas corta.
// Forma 1:
const suma_dos = (a,b) => {
    return a-b;
}
console.log(suma_dos(4,7));

// Forma 2: 
const suma_tres = (a,b) => a + b;
console.log(suma_tres(2,3))

// Forma 3: Version mas corta de la funcion flecha (solo cuando se tiene un solo parametro)
const saludar = nombre => "Hola, " + nombre;
console.log(saludar("Sara"));

