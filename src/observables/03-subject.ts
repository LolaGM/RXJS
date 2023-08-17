import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = { //poner el tipado de Observer en number da error: No puede ser de tipo number u otro. Funciona con el <any> porque puede ser de cualquier tipo. Saludos.

    next: value    => console.log('next:', value),
    error: error   => console.warn('error:', error),
    complete: ()   => console.info('Completed')
};

//creamos observable de tipo number que emita número aleatorio cada mili segundos
const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {        
        clearInterval(intervalID);
        console.log('Interval destroyed');
    };
});

//subject = observable especial con características importantes:
//1- casteo múltiple = muchas suscripciones al mismo observable subject (cast emitir)
//2- también es observer
//3- maneja next, error, complete

const subject$ = new Subject();
//para que el observable funcione, nos subscribimos. Lo guardamos en una suscription que luego será desuscrita
const subscription = intervalo$.subscribe( subject$);


//para que un observable se ejecute, tiene que haber al menos una subscription
// const subs1 = intervalo$.subscribe( random => console.log('subs1: ', random));
// const subs2 = intervalo$.subscribe( random => console.log('subs2: ', random));

//en vez de estar suscritos al intervalo, nos suscribimos al subject:
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


//temporizamos el observable
setTimeout(() => {

    subject$.next(10); //siguiente valor

    subject$.complete(); //completar el observable

    subscription.unsubscribe(); //nos desuscribimos a la suscription

},3500);
