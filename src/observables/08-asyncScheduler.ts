import { asyncScheduler } from 'rxjs';

//asynscheduler NO crea un observable sino devuelve una suscripcion = el producto de un suscribe

//dos instrucciones que vamos a realizar con ASYNCSCHEDULER
// setTimeout (() => { },3000);
// setInterval(() => { },3000);

/* -------- setTimeout -------------*/
//function 1
const saludar = () => console.log('Hola Mundo');

//function 2 que recibe un parámetro nombre al que saludamos
const saludar2 = nombre => console.log(`Hola ${nombre}`);

//asyncScheduler.schedule(saludar, 2000); //llamamos a async y le pasamos la función como primer parámetro sin los paréntesis () porque se ejecutaría en ese instante y como segundo el tiempo, como tercero será el state

//asyncScheduler.schedule(saludar2, 2000, 'Lola'); //al principio sale undefined en consola al no mandar el argumento del nombre. Debemos añadir el tercer parámetro al schedule, el ESTATE o estado que será sólo un argumento: el nombre

/* -------- setInterval -------------*/
//no puede usarse una función de flecha
//es una función que recibe el state: es un número, un arreglo o un objeto,etc pero sólo puede ser un argumento
const subs = asyncScheduler.schedule( function (state) {
    
    console.log('state', state);

    this.schedule(state + 1, 1000);

}, 3000, 0 ); //indico 0 si quiero que se ejecute de inmediato, indico 3 segundos

//como async devuelve suscripción, nos desuscribimos. Podemos usar setTimeout o AsyncScheduler
// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000); // a los 6seg se destruye la suscripción

asyncScheduler.schedule( () => subs.unsubscribe(), 6000); 

