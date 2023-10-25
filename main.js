const form = document.getElementById('form-atividade');
const nomesP = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizar();
})

function adicionarLinha(){
    const nome = document.getElementById('nome');
    const tel = document.getElementById('telefone');

    if (nomesP.includes(nome.value) || numeros.includes(tel.value)){
        alert('Esse nome ou telefone já está na lista!');
    } else {

        nomesP.push(nome.value);
        numeros.push(tel.value);

        linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${tel.value}</td>`;
        linha += `</tr>`
        linhas += linha;

    }

        nome.value = '';
        tel.value = '';
    
}

function atualizar(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}