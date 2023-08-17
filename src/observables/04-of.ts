import { of} from 'rxjs';


//of convierte la secuencia de argumentos que recibe y que fluye a través de él (sea un listado separado por comas o un arreglo  []) y la lee hasta el final de la misma. Es importante indicarle a OF el tipo de dato que va a fluir por él

//const obs$ = of<number>(1,2,3,4,5,6);

const obs$ = of<number[]>(...[1,2,3,4,5,6],2,3,4,5,6);//si es un arreglo[] de números sería un elemento y para leerlo usaríamos por ejemplo spread ...

//const obs$ = of<any>([1,2],{ a: 1, b:2}, function(){}, true, Promise.resolve(true)); //mandamos al of varios tipos de argumentos y lo indicamos con any

console.log('Inicio del Obs$');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);

console.log('Fin del Obs$');
