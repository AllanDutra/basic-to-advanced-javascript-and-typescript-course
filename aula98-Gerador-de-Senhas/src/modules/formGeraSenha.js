import { gerarSenha } from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');

const qtdCaracteres = document.querySelector('.qtd-caracteres');

const chkMaiusculas = document.querySelector('.chk-maiusculas');

const chkMinusculas = document.querySelector('.chk-minusculas');

const chkNumeros = document.querySelector('.chk-numeros');

const chkSimbolos = document.querySelector('.chk-simbolos');

const btnGerarSenha = document.querySelector('.gerar-senha');

export const formGeraSenha = () => {

    btnGerarSenha.addEventListener('click', () => {

        senhaGerada.innerHTML = gerar();

    })

};

function gerar() {

    const senha = gerarSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    )

    return senha || "Nada selecionado.";

}