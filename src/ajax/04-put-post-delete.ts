import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1'; //demora la peticion en 1 segundo (simulación de retraso en ida y vuelta)

//petición HTTP post con la configuración de headers
// ajax.put( url, {
//     id: 1,
//     nombre: 'Fernando'
// }, {
//     'mi-token': 'ABC123' //mi-token está entre comillas simples porque así JS no entiende que es una resta de variables
// }).subscribe(console.log);

//determinar si es un POST o un PUT: podríamos tener el método en una variable y así cambiar si es PUT o POST
ajax({
    url: url, //podría refactorizarse a url al llamarse las dos igual
    method: 'PUT', //
    headers: { 
        'mi-token': 'ABC123' //mi-token está entre comillas simples porque así JS no entiende que es una resta
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe(console.log);
