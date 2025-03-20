//Ejercicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].

let numeros=[12,45,6,89,23];
let mayorcito =numeros[0];

for(let num of numeros){
    if(num > mayorcito){
        mayorcito =num;
    }
}

console.log("el numero mayor es:",mayorcito)

// en el codigo se encuentra el numero mayor en el array utilizando un bucle for...of. primero se inicializa la variable mayorcito con el primer numero del array.luego, el bucle recorre cada numeroy,si encuentra uno más grande que mayorcito, lo actualiza.Al finalizar el recorrido, se imprime el numero más grande.









