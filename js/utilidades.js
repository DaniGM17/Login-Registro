function creaMensaje(texto){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList('alert', 'alert.success');
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function(){
        nuevoElemento.remove();
    }, 2000);
}