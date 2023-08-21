import { Observable, from } from "rxjs";
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1, 2, 3, 4, 5];

//funcion que podríamos tener en una sóla línea
// const totalAcumulador = (acc, curr) => {
//     return acc + curr;
// }

const totalAcumulador = (acc, curr) =>  acc + curr;

//comparamos SCAN con REDUCE

//reduce
from( numeros ).pipe(
    reduce( totalAcumulador, 0), //una única emisión del total
)
.subscribe(console.log); //15

//scan
from( numeros ).pipe(
    scan( totalAcumulador, 0), //una emisión por cada acumulación: 1+0 =1 y así sucesivamente
)
.subscribe(console.log); //1,3,6,10,15

//Redux ( manejar el estado global de la aplicación en un sólo objeto)
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number; 
}

const user: Usuario[] = [ //el usuario va cambiando de autenticado y su token se modifica
    { id: 'fher', autenticado: false, token: null},
    { id: 'fher', autenticado: true, token: 'ABC'},
    { id: 'fher', autenticado: true, token: 'ABC123'},
];

const state$:Observable<Usuario> = from( user ).pipe( //queremos saber cúal fue la  última emisión
    scan<Usuario, Usuario>( (acc: Usuario, cur: Usuario) => {
        return { ...acc, ...cur} //con spread... creo una nueva instancia del objeto usuario
    }, { edad : 33}) //añadimos al objeto usuario la edad que es opcional
);

//nos subscribimos para estar pendientes de los cambios del id del usuario
const id$ = state$.pipe(
    map (state => state.id) //indicamos al scan el tipado
);

//nos suscribimos para ver los cambios en el id del usuario pero necesitamos otro operador que nos saque el valor sólo si es diferente al valor anterior
id$.subscribe(console.log);