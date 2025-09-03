// Ciclos FOR y WHILE

// 1) FOR
// Cuando sabes cuantas veces repetir algo.
for (let i = 0; i < 5; i++){
    console.log(i)
}

// FOR - OF 
// Para recorrer un array o cualquier otra estructura iterable
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas){
    console.log(fruta);
}

// FOR - IN
// Para recorrer propiedades de un objeto
let persona = { nombre: "Ana", edad: 30 };
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}



// 2) WHILE
// Cuando no sabes cuantas veces repetir algo.

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}


// 3) DO WHILE
let v = 0;
do{
    console.log(v);
    v++;
} while (v < 5);