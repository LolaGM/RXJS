import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );

//filter evalúa una condición y se sale si no la cumple
range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

//el objeto personajes va a ser un arreglo de tipo Personaje
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

//generador de observable FROM al que le pasamos objeto PERSONAJES. Usamos el operador filter y cuando cumple la condición pasa
from( personajes ).pipe(
    filter( p => p.tipo !== 'heroe' )
).subscribe( console.log );



const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ), // recibe keyboardEvent, sale string
    filter( key => key === 'Enter' ),
);


keyup$.subscribe( console.log );
