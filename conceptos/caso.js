// 1 )Funcion + dicccionario

function createBook(title, author, genre, isbn){
    return {
        id: Date.now(),
        title,
        author,
        genre,
        isbn,
        isAvailable: true,
        borrowedBy: null,
        borrowedAt: null,
        dueDate: null,
        createdAt: new Date() 
    };
}


// 2) Agregar un libro
function addBookToLibrary(books, title, author, genre, isbn){
    const nuevoLibro = createBook(title, author, genre, isbn);
    books.push(nuevoLibro);
    return nuevoLibro;
}

let biblioteca = [];
const libro_uno = addBookToLibrary(biblioteca, "Terrorific", "Jose", "terror", 230)

const libro_dos = addBookToLibrary(biblioteca, "Terrorific", "Jose", "terror", 230)


// 3) Eliminar un libro
function removeBookFromLibrary(books, id){
    const indice = books.findIndex(libro => libro.id === id);

    if (indice !== -1){
        const removerLibro = books.splice(indice, 1);
        return removerLibro[0];
    }
    return null;
}

// const idAEliminar = biblioteca[0].id;
// const libroEliminado = removeBookFromLibrary(biblioteca, idAEliminar);

// console.log("Libro eliminado:", libroEliminado);
// console.log("Biblioteca después:", biblioteca);

