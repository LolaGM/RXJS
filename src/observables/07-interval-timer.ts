import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),  
}

//ejemplo concreto para programar un OBSERVABLE usando timer
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

//el primer valor de ambos observables es cero 0 y ahí empezará 
//INTERVAL hace un intervalo de tiempo
const interval$ = interval(1000); 
//TIMER emite el valor en un intervalo de tiempo
//const timer$ = timer(2000); 
//const timer$ = timer(0); // aunque sea cero el timer no es instantáneo, se ejecuta tan pronto como JS lo lea
//const timer$ = timer(2000,1000); //creamos un interval iniciando en dos segundos
//const timer$ = timer(0); //en vacío no deja así que 0
const timer$ = timer( hoyEn5 ); //hemos programado cuando queremos que se emita el valor del observable usando el timer : 5 segundos o las horas o días de una NOTIFICACIÓN


//es asíncrono porque primero se imprimen por consola inicio y fin y luego comienza el interval
console.log('inicio');
//interval$.subscribe( observer); //nunca emitió el complete porque nunca se completó
timer$.subscribe( observer);
console.log('final');