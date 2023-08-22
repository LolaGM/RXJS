import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";



//emite el último valor emitido por observable en un periodo de tiempo determinado
const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map( ({x,y})=> ({x,y}) ), //filtramos el objeto y desestructuramos las propiedades xy
    tap(val => console.log('tap',val)), //para ver el moment en que se hace click
    auditTime(2000), //a los dos segundos se emite el último valor (en caso de ser varios clicks, el último)
).subscribe( console.log);