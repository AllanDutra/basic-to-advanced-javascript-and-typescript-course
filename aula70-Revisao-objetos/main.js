const pessoa1 = new Object();

pessoa1.nome = 'Luiz';

pessoa1.sobrenome = 'Otávio';

pessoa1.idade = 30;

pessoa1.falarNome = function () { return `${this.nome} está falando...` };

pessoa1.getDataNascimento = function () {

    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade;

}

// MOLDES (Factory functions / Constructor functions / Classes)

// constructor functions -> não precisa de 'return'
function Pessoa(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

    this.getNomeCompleto = () => { return `${this.nome} ${this.sobrenome}` }

    // Object.freeze(this);

    // return this (implicito);
    
}

const p1 = new Pessoa('Allan', 'Dutra');

console.log(p1.getNomeCompleto());