import { Observable, fromEvent } from "rxjs";

import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';

import { ajax } from "rxjs/ajax";

import { GithubUser } from './interfaces/github-user.interface';
import { GithubUsersResp } from './interfaces/github-users.interface';

//REFERENCIAS
const body = document.querySelector('body');

//referencias con dos objetos
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

//añadimos al HTML
body.append(textInput, orderList);

//escuchamos la caja input para llamar API de GITHUB y mostrar usuarios que se hayan escrito

//HELPERS
//funcion para mostrar usuarios
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';
    
    for ( const usuario of usuarios ) { //recorrer los elementos dentro de usuarios

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);

    }
}


//STREAMS
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup'); //indicamos el tipado para usar el value

//para ver el problema, ponemos aparte los operadores: quiero ver el valor del objeto input sólo

input$.pipe(
    debounceTime<KeyboardEvent>(500),  
    map<KeyboardEvent, string>( event => (event.target as HTMLInputElement).value),
    map<string, Observable<GithubUsersResp>>( text => ajax.getJSON(
        `https://api.github.com/search/users?q=${ text }`
    )),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>(item => item.items)
    
).subscribe( mostrarUsuarios);
//).subscribe( resp => mostrarUsuarios ( resp as GithubUser[]));


//versión sin funcion de mostrar usuarios:
//.subscribe(users => {
    //console.log('users', users);
//recibo un observable: si de este objeto quiero alguna propiedad en específica como la url