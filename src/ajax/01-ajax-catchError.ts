import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';

//ajax de RXJS

const url = "https://api.github.com/users?per_page=5";

//function
const manejaErrores = ( response: Response) => {

    if (!response.ok) { //si la respuesta no está OK
        throw new Error( response.statusText);
    }
}

const atrapaError = (err: AjaxError) => { //retorna un error o un nuevo observable
    console.warn('error en: ', err.message);
    return of([]);
}


//fetch api trabaja en base a promesas, no observables o strings de información
const fetchPromesa = fetch(url);

// fetchPromesa
//     .then((resp) => resp.json())
//     .then((data) => console.log("data", data))
//     .catch((err) => console.warn("error en usuarios", err));

// fetchPromesa
//     .then(manejaErrores)//otra promesa
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en usuarios', err));

//THEN manejo de la promesa cuando se resuelve con éxito: Recibo la respuesta que es otra promesa así que uso otro THEN y la paso por json
//CATCH manejo del error

//peticion AJAX
ajax(url).pipe(
    map( resp => resp.response ),//para obtener a los usuarios de la respuesta
    catchError(atrapaError)//operador para tratar error: recibe error y {lo que quiero hacer cuando recibo un error}
)
.subscribe( users => console.log('usuarios', users));

//reducimos el catcheError a una función
