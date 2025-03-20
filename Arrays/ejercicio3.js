//Ejercicio 2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.

let numeros =[15,3,8,12,1];
let menoresa10 = numeros.filter(num =>num < 10);
console.log("numeros menores a 10", menoresa10)


// este codigo utiliza el metodo .filter() para crear un nuevo array con los numeros menores a 10 del array original [15,3,8,12,1]. el metodo .filter() recorre cada numero y si es menor a 10, lo incluye en el numero aray menoresa10
