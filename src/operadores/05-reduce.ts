import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

//REDUCE hasta el final no se muestra el valor acumulado, no va viéndose uno por uno la acumulación

//REDUCE en JS
const numbers = [1,2,3,4,5];

//function (podríamos dejarla en una sóla línea)
const totalReducer = (acumulador: number, valorActual:number ) => {
    return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0); //0 como valor inicial, si cambiamos a otro valor cambia el valor total
console.log('total arr',total); //en consola veremos 15 que es la suma del array completo

//REDUCE en RXJS
interval(500).pipe(
    take(6), //take completa el observable después de la cantidad de veces que le indique ()
    tap(console.log), //desglosa cada take hecho
    reduce(totalReducer), //totalReducer sin () porque no quiero ejecutar la función. Si no indicamos segundo arg  umento al reduce, el valor inicial es 0
)
.subscribe({
    next: val => console.log('next:',val), //es el siguiente valor que aparecería
    complete: () => console.log('complete') 
})
