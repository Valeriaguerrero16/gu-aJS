//Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.
try {
    let resultado = rositaFresita * 100
    console.log(resultado)
} catch (error) {
    console.log( "¡OMG! Algo salió mal con Rosita:" + error);
    
}

//En el bloque `try, intente multiplicar la variable `rositaFresita` por 100, pero como no he definido esa variable antes, JavaScript genera un error. En el bloque `catch`, capture ese error y lo mostre en la consola con un mensaje que menciona a **Rosita** para explicar lo que ocurrió.
