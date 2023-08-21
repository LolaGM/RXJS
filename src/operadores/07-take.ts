import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

//take(number): usado para limitar la cantidad de emisiones del observable. Cuando llega a esa límite, completa la suscripción
//también cancela la ejecución del observable

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(t => console.log('tap', t)), //para ver 
    take(3) //las veces que indiquemos irá apareciendo en el suscribe: si en of tengo 5 y en take 30 se completa al llegar a 5
)
.subscribe({
    next: val => console.log('next:', val), //se ejecuta cada vez que el observable emite un valor y muestra ese valor
    complete: () => console.log('complete'), // se ejecuta cuando el observable completa su emisión.
});


