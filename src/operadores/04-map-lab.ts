import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nisl sagittis, faucibus ligula in, vehicula sem. Suspendisse nec magna a justo tristique tincidunt. Donec nulla risus, pellentesque eget sollicitudin et, ullamcorper a eros. Sed finibus fringilla pharetra. Praesent euismod scelerisque imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum malesuada id velit id pulvinar. Mauris tempus accumsan urna, a imperdiet lacus fermentum in. Aliquam vestibulum vitae est et finibus.
<br/><br/>
Sed consequat mauris sed magna convallis, ac pharetra felis sagittis. Vivamus dapibus auctor lectus in viverra. Vivamus fringilla faucibus ligula, eu vestibulum augue hendrerit ut. Praesent ut bibendum elit. Sed a sapien eros. Suspendisse neque odio, auctor eget sagittis quis, tincidunt ut mi. Suspendisse blandit luctus orci, quis aliquam diam faucibus vel. Aenean suscipit ex eget dui porta scelerisque. Nunc bibendum lobortis dolor a tempor. Duis condimentum ante mauris, id eleifend lacus condimentum ut. Vivamus posuere, neque quis pellentesque condimentum, urna ligula elementum ex, eget dapibus ipsum diam ut erat. Vestibulum nec quam vel massa ornare rutrum sed et elit. Phasellus vulputate mi vitae massa hendrerit elementum.
<br/><br/>
Nam et sagittis sem, at aliquam nibh. Phasellus turpis justo, vestibulum in euismod fermentum, mollis id tortor. Duis vel iaculis elit. Quisque auctor, turpis mattis iaculis placerat, ex elit tempor urna, ut ultrices elit lorem id est. Sed auctor risus et sollicitudin egestas. Quisque enim dui, congue ut augue et, convallis faucibus ligula. Vestibulum nec justo pulvinar risus pharetra scelerisque. Vestibulum quam tellus, feugiat in metus vel, malesuada finibus ligula. Duis rutrum feugiat facilisis.
<br/><br/>
Nullam egestas ex nisl, in dictum lorem dapibus vitae. Maecenas pulvinar metus sed magna bibendum, accumsan scelerisque nisi venenatis. Nulla id elit id turpis ultrices suscipit. Donec volutpat, nulla a congue ultrices, magna lacus convallis odio, ut molestie nisl tellus sit amet diam. In hac habitasse platea dictumst. Maecenas a molestie ligula. Donec sit amet gravida diam.
<br/><br/>
Aliquam leo ipsum, pulvinar maximus enim vel, convallis placerat quam. Maecenas non turpis eros. Maecenas a leo a ante vulputate consectetur rutrum semper enim. Donec et ullamcorper orci. In a ante quis ante imperdiet tincidunt quis non elit. Vivamus lacinia faucibus nisl, et feugiat quam consequat condimentum. Suspendisse accumsan eleifend tristique. Phasellus sit amet mi et lorem consequat blandit sit amet semper orci. Praesent efficitur purus lobortis scelerisque varius. Donec sit amet purus ac turpis semper iaculis at eget mauris. Praesent ac metus eu nisi pharetra rhoncus. Donec mollis tellus ligula, a congue felis bibendum at.
`;

const body = document.querySelector('body');
//lo añado al body
body.append(texto);

//progress bar
const progressBar = document.createElement('div');
//le añado la clase css existente:
progressBar.setAttribute('class', 'progress-bar');
//lo añado al body
body.append(progressBar);

//función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    //console.log(event);
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    //imprimimos esa información para ver si es correcta
    //console.log({scrollTop,scrollHeight,clientHeight});

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


//streams: creamos observable que esté pendiente de escuchar en este caso el scroll en la página HTML
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

//trabajaremos en base al porcentaje del scroll en el css
const progress$ = scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {

    progressBar.style.width = `${porcentaje}%`;
});

