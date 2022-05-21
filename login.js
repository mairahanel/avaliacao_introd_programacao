//LOGIN

document.querySelector('#logar').addEventListener('click', (e) =>{
    e.preventDefault();

    logar();
})

function logar(){
    let login = document.querySelector('#input-email-login');
    let senha = document.querySelector('#input-senha-login');

    let usuarios = [];

    let usuarioValidar = {
        email: '',
        senha: ''
    }

    usuarios = JSON.parse(localStorage.getItem('usuarios'));

    usuarios.forEach((elemento) => {
        if(elemento.email === login.value && elemento.senha === senha.value){
            usuarioValidar = {
                email: elemento.email,
                senha: elemento.senha
            }
        }

    });

    if(usuarioValidar.email === login.value && usuarioValidar.senha === senha.value){
        window.location.href = 'home.html';
        sessionStorage.setItem('logado', usuarioValidar.email);
    }else{
        alert("Login ou senha inválidos!")
    }

}