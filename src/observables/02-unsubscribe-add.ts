import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value    => console.log('next:', value),
    error: error   => console.warn('error:', error),
    complete: ()   => console.info('Completed ')
};

const intervalo$ = new Observable<number>( subscriber => {

    //crear un contador 1,2,3,4,5...
    let count = 0;

    const interval = setInterval( () => {
        //incrementamos el valor
        count++; 
        //emitimos ese valor
        subscriber.next(count);
        console.log(count);
        
    },1000);//cada  segundo


    setTimeout(() => {
        subscriber.complete();
    }, 2500);
    
    //procedimiento que quiero que se ejecute cuando se realiza el unsubscribe
    return () => {
        clearInterval(interval); //limpia el interval que está funcionando
        console.log('Interval destroyed');
    }
});

//los valores se imprimen mediante el subscribe como si fuera console.log. Creamos en variable const subs la subscription para poder parar el contador y desuscribirnos.Hacemos 3 suscripciones al observable y le mandamos el observer como parámetro al subscribe

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
//const subs3 = intervalo$.subscribe( observer );

//encadenar subscripciones a la suscripcion original: ( da error si add el subs3)
subs1.add( subs2 );

//cancelar subscriptions por ejemplo a los 3 segundos = 3000 
setTimeout( () => {
    subs1.unsubscribe()
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout'); //último en ejecutarse tras hacer la limpieza con unsubscribe
}, 6000);

/* RXJS ya tiene una función que hace todo esto de contador y limpieza */
