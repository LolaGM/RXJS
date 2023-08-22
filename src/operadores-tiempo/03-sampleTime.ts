import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";



const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    sampleTime(2000), //más eficiente colocarlo antes de otro operador
    map( ({x,y}) => ({x,y})), //coordenadas del puntero x y
)
.subscribe(console.log);
