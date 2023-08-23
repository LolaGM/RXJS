import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";



const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading'); //class loading del CSS
loadingDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');

//STREAM
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true) //la primera emisión va a ser true
    )
    .subscribe(resp => {

        if ( resp === true ) {
            body.append( loadingDiv)
        }else{
            document.querySelector('.loading').remove();
        }

        console.log(resp);
})