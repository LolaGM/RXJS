//web usada: https://reqres.in/ en la sección de LOGIN succesful 

import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { tap, map, mergeMap, catchError, switchMap } from 'rxjs/operators';

//HELPER o funcion que retorna la petición AJAX como observable (como parámetro indico userPass recibiendo email y password) y llamando a la API al apartado de login con delay de 1seg. y luego le pasamos el body
//Esta función la podremos llamar en el pipe de submitForm$ y en ella tenemos que manejar el error
const peticionHttpLogin = (userPass: { email: string; password: string; }) =>
    ajax.post<{ token: string }>('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            map(({ response }) => response.token),
            catchError(err => of('xxx'))
        );

// creamos formulario aquí en vez del index
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass  = document.createElement('input');
const submitBtn  = document.createElement('button');

//configuraciones a los campos
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in'; //correo electrónico sacado de reqres.in en la seccion de POST login succesful

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka'; //contraseña sacada de reqres.in en la seccion de POST login succesful

submitBtn.innerHTML = 'Ingresar'; 

//insertamos en el formulario
form.append( inputEmail, inputPass, submitBtn );

//insertamos en el HTML
document.querySelector('body').append(form);

//al darle a ingresar por defecto al principio hace refresh de la página lo que actualmente no se hace así que vamos a arreglarlo. Estaremos pendientes de los eventos que emita el form

//STREAMS
const submitForm$ = fromEvent<Event>( form, 'submit')
    .pipe(
        tap( event => event.preventDefault()) ,
        map( event => ({
            email: event.target[0].value,
            password: event.target[1].value
        })),
        switchMap( peticionHttpLogin ) //se podría usar mergeMap y exhaustMap pero las peticiones que realizaría serían muchas
    );

submitForm$.subscribe( token => { 
    console.log(token);
})

/*

TAP no modifica el flujo de eventos del observable. Del evento quitamos por defecto ese refresh. 

MAP transformamos la salida del objeto: nos interesa email y password (como indica la API de resq.in)

MERGEMAP dispara el observable de la petición, suscribirse y dar respuesta

De la petición http que es un observable nos llega un objeto del que queremos sacar el token  así que debemos usar map.
Recordemos que las peticiones HTTP se pueden hacer en un servicio y llamarlas cuando sean necesarias.

Debemos suscribirnos. Recibimos un objeto. El token que recibiríamos sería de reqres.in


*/
