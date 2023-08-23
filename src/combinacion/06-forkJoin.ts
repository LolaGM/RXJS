import { forkJoin, interval, of } from "rxjs";
import { delay, take } from 'rxjs/operators';

//FORKJOIN deprecado. Se pasa un array de observables u objeto como argumento. Regresa un observable


//OF es síncrono y se terminaría 
const numeros$     = of(1,2,3,4);
const intervalo$   = interval(1000).pipe( take(3)); //empieza en cero
const letras$      = of('a', 'b', 'c').pipe(delay(3500)); 

// forkJoin(
//     [numeros$,
//     intervalo$,
//     letras$]
// ).subscribe(console.log); //emitiría 4,2,c porque es el último elemento de cada observable

// forkJoin(
//     [numeros$,
//     intervalo$,
//     letras$]
// ).subscribe(resp => {
//     console.log('numeros: ', resp[0]) // concateno la respuesta con el primera posicion [0]
//     console.log('intervalo: ', resp[1]) // concateno la respuesta con el segunda posicion [1]
//     console.log('letras: ', resp[2])  // concateno la respuesta con el tercera posicion [2]
// }); //sería difícil de leer así el arreglo así que vamos a probar otra opción: poner los observables como un objeto

// forkJoin({numeros$,
//     intervalo$,
//     letras$
// }).subscribe(resp => {
//     console.log(resp) // por consola cuando abrimos el objeto hace un orden alfabético
// }); 


forkJoin({// para poner nombres personalizados a las propiedades
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(resp => {
    console.log(resp) 
});


