import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

//TAKEWHILE permite recibir valores mientras la condición se cumpla
const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe( //usamos la desestructuración JS: x  , y
    map ( ({ x, y}) => ({ x, y })),
    //takeWhile( ({ y }) => y <= 150)
    takeWhile( ({ y }) => y <= 150, true) //true se refiera a si incluir el valor 150 dentro de la condición 
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});