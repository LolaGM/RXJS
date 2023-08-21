import { fromEvent } from "rxjs";
import { first, take, tap } from 'rxjs/operators';

//escuchamos el evento del documento: click
const click$ = fromEvent<PointerEvent>(document, 'click');

//usamos el operador tap para ver y el first con su condición nos dará el primer valor que la cumpla ( si es que queremos indicarle condición)
click$.pipe(
    //take(1),//take valdría para la primera vez que hacemos click pero usaremos first
    tap(() => console.log('tap')),//para tener siempre los resultados
    first<PointerEvent>(event => event.clientY >= 150), //haremos que sea el puntero igual o superior a 150 y sólo en ese caso se emite el susbcribe
)
.subscribe ({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});