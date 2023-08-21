import { range } from "rxjs";
import { map, tap } from "rxjs/operators";



const numeros$ = range(1,5);


//numeros$.subscribe(console.log);

numeros$.pipe(
    tap( x => console.log('antes del subs', x)),
    map( val => val * 10),
    //partial observer
    tap({
        next: valor => console.log('después',valor), //se ejecuta cada vez que el tap reciba el siguiente valor
        complete: () => console.log('Se terminó todo'),//se ejecuta cuando todo el observable se complete incluyendo el subscribe
    })
)
.subscribe(val => console.log('subs', val));