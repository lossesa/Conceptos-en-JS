// Arrays (Un array en JS funciona como una lista)
let frutas = ["manzana", "banana", "naranja"];

// 1) Indices
frutas[0]; // "manzana"
frutas[1]; // "banana"

// 2) Longitud
// Se usa length para saber cuantos elementos tiene el array.
console.log(frutas.length); // 3

// 3) Agregar elementos
// Para agregar al final se usa push
frutas.push("pera");

// Para agregar al inicio se usa unshift
frutas.unshift("kiwi");


// 4) Eliminar elementos
// Para eliminar al final
frutas.pop(); // elimina y devuelve el último

// Para eliminar al inicio
frutas.shift(); // elimina y devuelve el primero


// 5) Acceder o modificar elementos
frutas[1] = "sandía"; // reemplaza "banana" por "sandía"


// 6) Recorrer un array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


// 7) Quitar, reemplazar o agregar un elemento de una posicion especifica

// frutas.splice(inicio, cantidad, elemento1, elemento2, ...)
// inicio --> Indice de donde empieza
// Cantidad --> Cantidad de elementos a eliminar
// Elementos a insertar

// Eliminar 1 elemento desde el índice 1
frutas.splice(1, 1); 
console.log(frutas); // ["manzana", "naranja"]

// Insertar un nuevo elemento en el índice 1
frutas.splice(1, 0, "kiwi");
console.log(frutas); // ["manzana", "kiwi", "naranja"]

// Reemplazar "kiwi" por "pera"
frutas.splice(1, 1, "pera");
console.log(frutas); // ["manzana", "pera", "naranja"]



// 8) Buscar elementos por condicion
// Uso de find: Para encontrar el primer elemento que cumpla la condición
let encontrado = frutas.find(fruta => fruta ===  "manzana");
console.log(encontrado);

// Uso de findIndex: Para encontrar el indice del 1er elemento que cumpla la condición
let indice = frutas.findIndex(fruta => fruta ===  "manzana");
console.log("Indice: ", + indice);


// 9) Filter
// Filter se usa para flitrar elementos.
// Por ejemplo, aqui se crea un nuevo array con los elementos filtrados. 

let numeros = [3, 7, 10, 15];
let mayoresA8 = numeros.filter(num => num > 8);
console.log(mayoresA8); // [10, 15]


// 10) Map
// Sirve para transformar o modificar los elementos de un array
// Por ejemplo, aqui se crea un nuevo array con los elementos modificados

let numeros_array_dos = [1, 2, 3];

let dobles = numeros_array_dos.map(num => num * 2);
console.log(dobles); // [2, 4, 6]






















