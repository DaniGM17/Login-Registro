//creacion de variables de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formsignup');

formulario.addEventListener('submit', registro);

function registro(e) {
    e.preventDeafault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passVal = pass.value;


    if (nombreVal == '' || emailVal == '' || userVal == '' || passVal == '') {
        creaMensaje('Verifica tus campos');
        return;
    }

    const usuario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passVal
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = ''; 
    email.value = '';
    user.value = '';
    pass.value = '';

    creaMensaje('Usuario Registrado');
}

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