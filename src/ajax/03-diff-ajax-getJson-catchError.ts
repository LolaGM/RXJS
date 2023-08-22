import { of } from 'rxjs';
import { AjaxError, ajax } from "rxjs/ajax";
import  { catchError} from "rxjs/operators";

//el url tiene dos xx como error para probar el código del catchError
const url = 'https://httpbinxx.org/delay/1'; //demora la peticion en 1 segundo (simulación de retraso en ida y vuelta)
//const url = "https://api.github.com/users?per_page=5";


const manejaError = ( resp: AjaxError ) => {
    console.warn('error', resp.message);	//es coonveniente enviar algo
    return of({}); //retorno un observable objeto vacío
}

//diferencia entre ajaxGetJson y una petición normal??
// const obs$ = ajax.getJSON(url).pipe(
//     catchError( manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError( manejaError)
// );

const obs$ = ajax.getJSON(url).pipe(
    catchError( manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError( manejaError)
);

//obs2$.subscribe(data => console.log('ajax:', data));
obs$.pipe(
    catchError( manejaError)
)
.subscribe({ //podemos mandar el observer
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')
}); 
