import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";


//DISTINCT distingue si se ha emitido ya ese valor (sea número o string)
const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1); //el tipado de of debería ser <number|string> pero sin indicarlo no da error

numeros$.pipe(
    distinct() // ===
)
.subscribe( console.log);


const numerosConString$ = of(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numerosConString$.pipe(
    distinct() // ===
).subscribe( console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: ' Megaman', 
    },
    {
        nombre: ' X', 
    },
    {
        nombre: ' Zero', 
    },
    {
        nombre: ' Dr.Willy', 
    },
    {
        nombre: ' X', 
    },
    {
        nombre: ' Megaman', 
    },
    {
        nombre: ' Zero', 
    },
];

from(personajes).subscribe(console.log); //pasa todo el arreglo de objetos personajes completo con las repeticiones

from(personajes).pipe( //para trabajar con objetos, el distinct necesita más información: recibo un personaje y quiero que esté pendiente si no se ha emitido previamente
        distinct( p => p.nombre))
    .subscribe( characters => console.log('personaje sin nombre repetido', characters));