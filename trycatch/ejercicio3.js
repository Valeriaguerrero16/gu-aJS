//Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.

try {
    let aventura = 20 / 4;
    console.log("la aventura de la division es:" + aventura);
} catch (error) {
    console.log("algo salió mal en la aventura:" + error);  
}finally{
    console.log("este mensaje siempre sadrá,no importa lo que pase.");
}

try {
    let aventuraImposible = 20/0;
    console.log("la aventura imposible da como resultado:" + aventuraImposible);
} catch (error) {
    console.log("algo salió ml en la aventura imposible:"+ error);   
}finally{
    console.log("este mensaje siempre saldrá, paso lo que pase.");
}


// el bloque try es donde se intenta ejecutar el codigo,y si todo esta bien,se ejecuta sin problemas. SI hay algún error, como intentar dividir entre cero, el bloque catch captura ese error y muestra un mensaje para avisarnos. Finalmente, el bloqe finally siempre se ejecuta, sin importar si hubo error o no, y nos asegura que un mensaje siempre se imprima en la consola.