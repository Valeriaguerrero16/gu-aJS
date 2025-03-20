//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.

let numeros =[3,7,2,9,5]
let suma =0;

for (let num of numeros){
    suma += num;
}

console.log("la sumita es:",suma);

// se calcula la suma de los numeros en el array utilizando for...of. se inicializa una variable suma en 0 y luego el bucle recorre cada array y lo suma a suma.
