import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";


//of síncrono
const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),
);



numeros$.subscribe(console.log);
