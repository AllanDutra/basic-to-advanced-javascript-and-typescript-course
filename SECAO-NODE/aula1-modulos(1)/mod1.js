const nome = 'Luiz';

const sobrenome = 'Miranda';

const falarNome = () => nome + " " + sobrenome;

// É SOMENTE DO NODE, NAO TEM NO NAVEGADOR
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falarNome = falarNome;

// atalho
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falarNome = falarNome;

// o this do node aponta ao module.exports tambem

// this.qualquerCoisa = 'Qualquer coisa';

class Pessoa {

    constructor(nome) {

        this.nome = nome;

    }

}

// exports.Pessoa = Pessoa;

module.exports = {
    nome, sobrenome, falarNome, Pessoa
}

// NÃO APONTA MAIS PRO MESMO OBJETO, NAO PODE SER FEITO ASSIM !!!
// exports = {

// }