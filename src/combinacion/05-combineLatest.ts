import { combineLatest, fromEvent, merge } from "rxjs";
import { map, pluck } from 'rxjs/operators';

//La función combineLatest se usa de forma distinta actualmente. Ya no recomiendan el uso de pasarle una cantidad de observables (como enseña Fernando), recomiendan pasar los argumentos en un sólo arreglo en su lugar.

// const keyup$ = fromEvent<PointerEvent>(document, 'keyup');
// const click$ = fromEvent<KeyboardEvent>(document, 'click');

// combineLatest(
//     keyup$.pipe( map(event => event.type)),//map en sustitución de pluck
//     click$.pipe( map(event => event.type))//map en sustitución de pluck
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append( input1, input2 );


//Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(       
        map<KeyboardEvent, string>( event => (event.target as HTMLInputElement).value),
    );

const combinado = combineLatest(
    [getInputStream( input1 ),
    getInputStream( input2 )]
);
combinado.subscribe( console.log )



