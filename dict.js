// Diccionarios (Objeto)
// Funciona con un clave-valor

let persona = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "Madrid"
};


// 1) Acceder a valores
console.log(persona.nombre); // "Carlos"
console.log(persona["ciudad"]); // "Madrid"


// 2) Agregar nuevas claves
persona.profesion = "Ingeniero";
persona["pais"] = "España";

console.log(persona);

// 3) Eliminar una clave
delete persona.edad;


// 4) Recorrer un objeto (dict)
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}


// 5) Confirmar la existencia de una clave
console.log("nombre" in persona); // true

