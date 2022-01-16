// Faz a mesma coisa que uma função construtora, apenas tem um jeito diferente de ser escrita

// Não tem a complexidade de ter que atrelar um prototype ou algo do tipo, ela já faz automaticamente
// métodos automaticamente linkados ao prototype
class Pessoa {

    // se precisar de parâmetros:
    constructor(nome, sobrenome) {

        this.nome = nome;

        this.sobrenome = sobrenome;

    }

    falar() {
        console.log(`${this.nome} está falando...`);
    }

    comer() {
        console.log(`${this.nome} está comendo...`);
    }

    beber() {
        console.log(`${this.nome} está bebendo...`);
    }

}

// SEM CLASSE:

function Pessoa2(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

}

Pessoa2.prototype.falar = function () {

    console.log(`${this.nome} está falando...`);

}

const p1 = new Pessoa('Allan', 'Eu');