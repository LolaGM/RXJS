import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";



//dos observables para el SAMPLE
const interval$ = interval(500);
const click$    = fromEvent( document, 'click');


interval$.pipe(
    sample(click$) //se emite un valor en el intervalo cuando el click emite su valor
)
.subscribe(console.log);

//obtenemos la muestra de cómo está el primer observable en el momento que hago click y hago uso del segundo observable
