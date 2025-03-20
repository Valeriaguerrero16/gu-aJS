//Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.


const libro = {
    titulo:"caperucita roja",
    autor: "charles perrault",
    año:1967
};

const libroJSON = JSON.stringify(libro);

console.log(libroJSON);

// primero se crea el objeto libro, se utiliza  JSON.stringify(libro) para convertir el libro en una cadena de formato JSON y finalment se imprime en formato JSON.