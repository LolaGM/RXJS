import { of, from} from 'rxjs';

/* OF y FROM crean observables pero:
OF = toma argumentos y genera una secuencia
FROM = espera un arreglo, un objeto, promesa, observable,etc para crea un observable
*/

const observer =  {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
};

//iterable con funcion generadora * que emite estos valores cada vez que se solicite valor nuevo
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

//recorremos con for
// for (let id of miIterable){
//     console.log(id);
// }

//usamos un FROM
from ( miIterable ).subscribe(observer); // por consola muestra cada elemento 


//creamos observable
// const source$ = from ([1,2,3,4,5]);
//const source$ = of ([1,2,3,4,5]); //emite sólo una vez el valor total del arreglo: para transformarlo en from usaríamos spread ... dentro of (...[1,2,3,4,5])
//const source$ = of (...[1,2,3,4,5]); // por consola saldría cada valor individual del array
const sourceFrom$ = from('Lola'); // por consola sale cada elemento del string L o l a
const sourceOf$ = of('Lola'); //por consola saldría el valor completo Lola

//nos suscribimos al observable correspondiente:
sourceFrom$.subscribe(observer);
sourceOf$.subscribe(observer);

/*FROM nos permite usar cualquier cosa y convertirla en observable */
//promesa usando fetch = función JS que permite realizar peticiones HTTP (traer información)
//el tipado de FROM está inferido: sería from<Promise><Response>
const sourcePromise$ = from ( fetch('https://api.github.com/users/klerith') );

sourcePromise$.subscribe(observer); // por consola veo la peticion HTTP con información



