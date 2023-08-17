import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('Completed [obs]')

};

//const obs$ = Observable.create();
//siempre indicar qué tipo de información va a ser el Observable
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hello');
    subs.next('World');

    //forzar un error usando una propiedad nombre que no existe
    //const a = undefined;
    //a.nombre = 'Lola';

    subs.complete(); //hará que ninguna información llegue a los subscriptores  aunque lo indiquemos después. Que no se va a emitir nada para ellos

    subs.next('Hola');
    subs.next('no se imprime');
});

obs$.subscribe( observer );//mando al observer


//obs$.subscribe( resp => { console.log(resp); }); es lo mismo que esto que emite por consola los valores del observable
//obs$.subscribe(console.log);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error:', error), // o console.error
//     () => console.info('Completed') //qué hacer cuando se complete el observable
// )
