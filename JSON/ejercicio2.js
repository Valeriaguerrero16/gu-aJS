//Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.

const jsonString = '{"nombre":"Ana","edad":30,"ciudad":"Madrid"}';
const objeto= JSON.parse(jsonString);
console.log(objeto.edad);

//es un JSON representado como una cadena de texto (jsonString), que contiene informacion de una persona incluyendo el nombre y la edad y la ciudad. use JSON.parse(jsonString)para convertir esa cadena JSON en un objeto JS.el metodo convierte el texto JSON a un objeto con todo lo correspondiente.Y como nos pide la edad entocnes escojo ese objeto y lo imprimo en la consola.


