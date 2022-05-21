//CADASTRO
let formCadastro = document.querySelector('#form-cadastro');
let inputEmailCadastro = document.querySelector('#input-email-cadastro');
let inputSenhaCadastro = document.querySelector('#input-senha-cadastro');
let inputSenhaCadastro2 = document.querySelector('#input-senha-cadastro2');


formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    let email_cadastrar = inputEmailCadastro.value;
    let senha_cadastrar = inputSenhaCadastro.value;
    let senha_verificar = inputSenhaCadastro2.value;

    let usuario = {
        email_cadastrar,
        senha_cadastrar,
        senha_verificar
    }

    if(senha_cadastrar == senha_verificar){
        inserirUsuario(usuario);
        limparCamposCadastro();
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    }else{
        alert("Algo deu errado! Verifique se todos os campos estão preenchidos corretamente.")
    }})


function inserirUsuario(usuario){
    
    const banco_usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    banco_usuarios.push(usuario) 

    localStorage.setItem('usuarios', JSON.stringify(banco_usuarios));
}

function limparCamposCadastro(){
    inputEmailCadastro.value = "";
    inputSenhaCadastro.value = "";
    inputSenhaCadastro2.value = "";
}

