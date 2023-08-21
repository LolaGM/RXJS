import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";


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


from(personajes).pipe(
    distinctUntilKeyChanged('nombre'), //le indicamos la key como la hemos definido en la interfaz con objeto o en las propiedades
).subscribe(console.log );