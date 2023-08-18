import { fromEvent, range } from 'rxjs';
import { map, pluck, mapTo} from 'rxjs/operators';

//usemos range como observable al que suscribirnos
range(1,5);

range(1,5).subscribe( console.log); //imprime del 1 al 5 pero queremos que imprima del 10 al 50
//range(1,5).subscribe( value => console.log(value *10)); //valdría pero no es lo que buscamos


//usamos PIPE para introducir los operadores necesarios

//operador MAP
//es un operador que importamos. Usamos función de flecha y return si tendremos más de una línea de código.Podemos tipar el map con lo que el tipo de entrada y el de salida. Si el valor es numero lo convertiremos a String con toString
range(1,5).pipe(
       map<number, string>( value =>( value * 10).toString()))
   .subscribe( console.log); 
//cuando nos suscribimos ya estamos recibiendo los value number multiplicados

//ejemplo con evento del DOM: creamos observable de tipo fromEvent pero es genérico y debemos saber el exacto
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
//keyup$.subscribe(  value => console.log('map', value.code));

//creo un nuevo observable que tenga ese code que busco y aplico operadores:uso MAP que recibe el event y de ese event quiero en este caso el code
const keyupCode$ = keyup$.pipe(
    map( event => event.code)
);


//operador PLUCK . Ya ha sido deprecado así que se usa map. Lo que hacía era extrae en este caso por ejemplo la key
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);
const keyupPluckMap$ = keyup$.pipe(    
    map(x => x.code)
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

//nos suscribimos y en la pantalla tecleamos una letra
keyupCode$.subscribe(  code => console.log('map', code));
keyupPluckMap$.subscribe(  code => console.log('pluck', code));
keyupMapTo$.subscribe( code => console.log('mapTo', code ) );
//operador MAPTO . Ya ha sido deprecado así que se usa map. 







