//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.

function dividir(num1, num2){
    try{
        if(num2 ===0){
            throw "error: no se puede dividir por 0";
        }
        return num1/ num2;
    }catch(error) {
    return error;
    }
}
console.log(dividir(10,2));
console.log(dividir(10,0));

//La función dividir recibe dos números, que son los que va a dividir. Antes de hacer la división, en el bloque `try`verifico si el segundo número es cero, porque no se puede dividir por cero. Si es así, uso `throw`  para lanzar un mensaje de error. Si algo sale mal, el  bloque `catch`  captura el error y devuelve el mensaje de error para que sepa qué pasó, en lugar de que el programa se rompa.
