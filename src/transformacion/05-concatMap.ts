import { interval, fromEvent } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';



const interval$ =  interval(500).pipe(take(3)); //take con 3 veces
const click$    =  fromEvent(document, 'click');


click$.pipe(
    //switchMap(() => interval$) //switchMap -> último observable emitido
    concatMap(() => interval$), //va a concatenar todos los observables emitidos uno detrás de otro cada vez que hacemos click
)
.subscribe(console.log);

