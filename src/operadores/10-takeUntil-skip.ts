import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

//TAKEUNTIL permite emitir valores a un observable hasta que otro observable emita su primer valor

//crear botón 
const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

//insertarlo en el body
document.querySelector('body').append(boton);

//primer observable
const counter$ = interval(1000);

//segundo observable
//const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap( () => console.log('tap después de skip')),
)

//operador
counter$.pipe(
        takeUntil(clickBtn$) //hasta que pulsas en el botón sigue la cuenta
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete'),
});