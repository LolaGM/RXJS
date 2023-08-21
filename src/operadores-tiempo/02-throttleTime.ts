import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, map } from "rxjs/operators";

//throttle Time emite el valor y luego se espera el tiempo en segundos que le indiquemos. Se usa para controlar las emisiones de observables


//EJEMPLO 1

//creamos observable para escuchar los clicks del document: haremos click en el document y en consola nos indica el tipado del FromEvent: PointerEvent
const click$ = fromEvent(document, 'click');

//usamos el operador DEBOUNCETIME y luego nos suscribimos. A los 3 segundos aparecerá el mensaje en consola
click$.pipe(
    throttleTime(3000))
// .subscribe( console.log);

//EJEMPLO 2
//elemento HTML input
const input = document.createElement('input'); //creamos el elemento
document.querySelector('body').append(input); //lo insertamos en el body

//creamos observable input pendiente de ese input: todo lo que escribamos en el input HTML se verá en consola la tecla 
const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, { //le mandamos también un scheduler para captar del primer al último elemento del input y también la configuración
        leading: true, //primer elemento
        trailing: true //último elemento
    }), 
    map(e => (e.target as HTMLInputElement).value),
    distinctUntilChanged()
)
.subscribe( console.log);

//para evitar las peticiones al servidor backend duplicadas por escribir lo mismo en el input, usaremos el debounceTime además del distinctUntilChanged