//Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.

const jsonString = '[{"id": 1,"producto": "lapiz"},{"id": 2, "producto": "Borrador"}]';
const productos = JSON.parse(jsonString);
productos.forEach(producto =>{
    console.log(producto.producto);
});

//El JSON proporcionado es solo una cadena de texto que tiene una lista de objetos, cada uno con un `id` y un `producto`. Para convertirlo a un objeto JavaScript, use `JSON.parse(jsonString)`, que transforma esa cadena en un array de objetos que puedo manejar en el código. Después, para mostrar los productos, use `.forEach()`, que recorre la lista y muestra el nombre de cada producto con `console.log()`. Así puedo trabajar fácilmente con los datos.

