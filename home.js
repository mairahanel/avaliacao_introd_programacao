// MENU DE RECADOS
let formulario = document.querySelector('#form-recados');
let inputDescricao = document.querySelector('.input-descricao');
let inputDetalhamento = document.querySelector('.input-detalhamento');

let botaoCancelar = document.querySelector('#button-cancelar');
let botaoAtualizar = document.querySelector('#button-atualizar');
let botaoSalvar = document.querySelector('#button-salvar');

let tabelaRegistros = document.querySelector('#tabela-registros');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    salvar();
})

document.addEventListener('DOMContentLoaded', pegarDadosStorage);

function salvar(){
    let listaRecados = JSON.parse(localStorage.getItem
    ('meus_recados')) || [];


    let descricao = inputDescricao.value;
    let detalhamento = inputDetalhamento.value;

    let recado = {
        descricao,
        detalhamento
    }

    listaRecados.push(recado);

    salvarNaTabela(recado);
    salvarNoLocalStorage(listaRecados);
    limparCamposHome()
}

function salvarNoLocalStorage(listaRecados){
    localStorage.setItem('meus_recados', JSON.stringify
    (listaRecados));
}

function salvarNaTabela(dadosRecado){
    let novaLinha = document.createElement('tr');
    let colunaId = document.createElement('td');
    let colunaDescricao = document.createElement('td');
    let colunaDetalhamento = document.createElement('td');
    let colunaAcoes = document.createElement('td');


    //colunaId.innerHTML = dadosRecado.id;
    colunaDescricao.innerHTML = dadosRecado.descricao;
    colunaDetalhamento.innerHTML = dadosRecado.detalhamento;
    colunaAcoes.innerHTML = `
                                <button class="button-editar">Editar</button>
                                <button class="button-apagar">Apagar</button>

                            `

    novaLinha.appendChild(colunaId);
    novaLinha.appendChild(colunaDescricao);
    novaLinha.appendChild(colunaDetalhamento);
    novaLinha.appendChild(colunaAcoes);
    
    tabelaRegistros.appendChild(novaLinha);
}

function limparCamposHome(){
    inputDescricao.value = "";
    inputDetalhamento.value = "";
}

function pegarDadosStorage(){

    let dadosStorage = JSON.parse(localStorage.getItem('meus_recados'));

    if(dadosStorage){
        for(let recado of dadosStorage){
            salvarNaTabela(recado);
        }
    }

    return
}

//BOTÃO EDITAR RECADO E CANCELAR RECADO








//VERIFICANDO SE A PESSOA ESTÁ LOGADA
/*let sessao = sessionStorage.getItem('logado');

//fazer o botão**
document.querySelector('#sair').addEventListener('click', () => {
    sair();
})

function sair(){
    sessionStorage.removeItem('logado');
    window.location.href = 'login.html';
}

logadoNaHome();

function logadoNaHome(){
    if(sessao){
        sessionStorage.setItem('logado', sessao);
    }

    if(!sessao){
        window.location.href = 'login.html';
    }
}*/