//Ejercicio 6.1: Crea una función esperarSegundos(segundos) que use setTimeout con async/await.


async function esperarSegundos(segundos) {
    await new  Promise(resolve => setTimeout(resolve, segundos * 1000));
        console.log(`Han pasado ${segundos} segundos.`); 
    }
    esperarSegundos(6);
    

//La función `esperarSegundos` es una función que trabaja de manera asíncrona, lo que significa que no se detiene mientras espera. Use `await` para hacer que espere a que se cumpla una promesa. Esa promesa la creamos con `new Promise` y usamos `setTimeout` para que espere el tiempo que le pasamos en segundos (pero convertido a milisegundos). Cuando pasa ese tiempo, se muestra el mensaje en la consola.