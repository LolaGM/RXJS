import { concat, interval, of } from "rxjs";
import { take } from 'rxjs/operators';



const interval$ = interval (1000);

//function concat que regresa un observable (en la que creamos 3 emisiones del observable)
concat(
    interval$.pipe( take(3) ),  //0 1 2
    interval$.pipe( take(2) ),  //0 1
    of(1)
).subscribe( console.log);
