import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";


//DISTINCT UNTIL CHANGE distingue si se ha emitido ya ese valor PREVIAMENTE(sea número o string)

const numerosConString$ = of(1,'1',1,3,3,2,2,4,4,5,3,1,'1'); //el tipado de of debería ser <number|string> pero sin indicarlo no da error

numerosConString$.pipe(
    distinctUntilChanged() 
).subscribe( console.log); //emite los siguientes valores 1 1 1 3 2 4 5 3 1 1 siendo el último 1 y el segundo 1 strings


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: ' Megaman', 
    },
    {
        nombre: ' Megaman', 
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
        nombre: ' X', 
    },
    {
        nombre: ' Zero', 
    },
];

from(personajes).subscribe(console.log); 

from(personajes).pipe( //le expresamos la condición para que el nombre anterior sea igual al actual
        distinctUntilChanged( (anterior, actual )=> anterior.nombre === actual.nombre)) //el array de objetos lo hemos cambiado para que tenga nombres repetidos seguidos y así probar este operador y aún así necesita
    .subscribe( characters => console.log('personaje sin haberse repetido en el nombre anterior', characters));