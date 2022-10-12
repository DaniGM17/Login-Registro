//variables para vincular los objetos al formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones
function login(e){
    e.preventDefault();
    let usuarioVal = usuario.value;
    let passwordVal = password.value;
    
    if(usuarioVal == '' || passwordVal == ''){
        return;
    }
}