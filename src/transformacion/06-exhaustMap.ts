import { interval, fromEvent } from 'rxjs';
import {  exhaustMap,  take } from 'rxjs/operators';



const interval$ =  interval(500).pipe(take(3)); //take con 3 veces
const click$    =  fromEvent(document, 'click');


click$.pipe(
    exhaustMap(() => interval$), 
)
.subscribe(console.log);

//exhaustMap(() => interval$) es muy útil cuando se están lanzando eventos rápidamente (spammeando) :observables emitiendo muchos valores y que podamos ignorar: usuario clickando muchas veces un botón o enviando varias veces el formulario

