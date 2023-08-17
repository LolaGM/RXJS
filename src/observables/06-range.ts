import { asyncScheduler, of, range} from 'rxjs';

// OF no está diseñado para trabajar con rangos porque podría ser enorme el listado, para eso usaríamos RANGE
const srcOf$ = of(1,2,3,4,5);

console.log('inicio del OF');
srcOf$.subscribe(console.log);
console.log('fin del OF');

//uso del RANGE: 
const srcRange$ = range(-5,10); //donde empieza y el número de veces que se repite,
//const srcEmptyRange$ = range(); // si no tiene valores 
const srcSingleRange$ = range(5); //el valor por defecto de comienzo es cero si no le indicas y acabará en 4
const srcRangeHundred$ = range(1,100);

//para hacer asíncrona: asyncScheduler
const srcAsynchronous$ = range(1,5, asyncScheduler);
console.log('inicio del RANGE');
srcAsynchronous$.subscribe(console.log);
console.log('fin del RANGE');

console.log('inicio del RANGE');
srcRange$.subscribe(console.log);
console.log('fin del RANGE');

console.log('inicio del RANGE');
//srcEmptyRange$.subscribe(console.log);
console.log('fin del RANGE');

console.log('inicio del RANGE');
srcSingleRange$.subscribe(console.log);
console.log('fin del RANGE');


console.log('inicio del RANGE');
srcRangeHundred$.subscribe(console.log);
console.log('fin del RANGE');

