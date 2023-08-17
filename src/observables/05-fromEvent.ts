import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
*/

//escuchar en este caso el evento click: usamos fromEvent (de tipo Event)
const src1$ = fromEvent<MouseEvent>(document, 'click');

//escuchar en este caso el evento keyup
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: value => console.log('next', value),
    
};

//nos suscribimos a ambos observables (eventos): ya hay alguien suscrito:
// Haciendo click en la pantalla como en el primer observable evento tendremos en consola: el que dispara el click es un MOUSEVENT así que ya podemos ponerle el tipo al observable. Por ejemplo quiero saber coordenadas xy 
//src1$.subscribe(observer);
// src1$.subscribe( ev => {
//     console.log(ev.x);
//     console.log(ev.y);
// });
//usando la desestructuración de esas propiedades del objeto sería:
src1$.subscribe( ({ x, y }) => {
    console.log(x,y);
});

//src2$.subscribe(observer);
//si hago click en el teclado aparece en consola el objeto keyboard event:  el que dispara el keyup es un  KEYBOARDEVENT. Ahora sí en el evento tengo el evento con su tipo. Por ejemplo quiero saber la tecla pulsada
src2$.subscribe( evento => {
    console.log(evento.key);
});
