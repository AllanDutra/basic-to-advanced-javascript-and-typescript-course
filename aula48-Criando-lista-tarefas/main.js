const inputTarefa = document.querySelector('.input-tarefa');

const tarefas = document.querySelector('.tarefas');

function criarLi() {

    return document.createElement('li');

}

function limparImput() {

    inputTarefa.value = '';

    inputTarefa.focus();

}

function criarBotaoApagar(li) {

    li.innerText += " ";

    const botaoApagar = document.createElement('button');

    botaoApagar.innerText = "Apagar";

    botaoApagar.setAttribute('class', 'apagar');

    li.appendChild(botaoApagar);

}

function salvarTarefas() {

    const liTarefas = tarefas.querySelectorAll('li');

    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {

        listaDeTarefas.push(tarefa.innerText.replace(' Apagar', ''));

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);

    localStorage.setItem('tarefas', tarefasJSON);

}

function criarTarefa(textoInput) {

    const li = criarLi();

    li.innerText = textoInput;

    criarBotaoApagar(li);

    tarefas.appendChild(li);

    limparImput();

    salvarTarefas();

}

inputTarefa.addEventListener('keypress', function (e) {

    if (e.keyCode === 13) {

        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);

    }

})

document.addEventListener('click', function (e) {

    const el = e.target;

    if (el.classList.contains('apagar')) {

        el.parentElement.remove();

        salvarTarefas();

    }
    else if (el.classList.contains('btn-tarefa')) {

        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);

    }

})

function adicionarTarefasSalvas() {

    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas'));

    for (let tarefa of listaDeTarefas) {

        criarTarefa(tarefa);

    }

}

adicionarTarefasSalvas();