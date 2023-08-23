import { fromEvent, merge } from "rxjs";
import { map } from 'rxjs/operators';


const keyup$ = fromEvent<PointerEvent>(document, 'keyup');
const click$ = fromEvent<KeyboardEvent>(document, 'click');

//MERGE coge tantos observables como quieras y el orden de salida es por el primero que le indiques. Si emiten al mismo tiempo, el primero tiene prioridad
merge(
    keyup$.pipe( map(event => event.type)),
    click$.pipe( map(event => event.type))
).subscribe(console.log);

//map en sustitución de pluck, para ver por consola el tipo de evento