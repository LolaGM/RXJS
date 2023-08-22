import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

//mergeMap:emisiones del observable convertidas a observables (mediante una función especfíca que retorna nuevo observable)

//creamos observable
const letras$ = of('a', 'b', 'c');

letras$.pipe(
    //mergeMap recibe como argumento la emisión del observable inicial o del operador anterior
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i), //i es el producto del interval (0,1,2)
        take(3) //para que no se haga interminable la emisión se usa take y el numero
    )) 
)
// .subscribe({
//     next: val => console.log('next: ',val),
//     complete: () => console.log('complete'),
// });

//cuanto tiempo pasa el usuario presionando el mouse? Creamos 3 observables

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

//escuchamos cuando la persona hace click en HTML. Con pipe llamamos a interval para contar el tiempo hasta que el usuario suelta el ratón (mouseup)
mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$)
    ))
)
.subscribe(console.log); //este es el producto de la suscripción al 2º observable



/* diferencia entre mergeALl y mergeMap

La diferencia únicamente seria en especificar el observable a "unir" con el observable principal:

tienes varios observables que emiten distintos valores, con mergeAll() unirás todas estas emisiones y mostrara una sola salida.

En cambio, con mergeMap() tienes que especificar cuál será el siguiente valor que deseas unir al valor principal, obteniendo exactamente el mismo resultado que mergeAll.
*/
