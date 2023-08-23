import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";



const click$ = fromEvent(document, 'click');
const interval$ = interval(1000); // cada segundo


click$.pipe(
    switchMap(() => interval$)
    //mergeMap( () => interval$) 
).subscribe(console.log);



//switchMap(() => interval$) cuando hago un click comienza el primer intervalo, y al hacer el segundo click, el segundo observable comienza habíendose completado el primero:sólo mantiene activa la última suscripción

//mergeMap( () => interval$)  cuando hago un click comienza el primer intervalo, pero al hacer otro click comienza otro intervalo más y así sucesivamente. Esto puede ser un problema de memoria porque mantiene activas varias suscripciones al mismo tiempo