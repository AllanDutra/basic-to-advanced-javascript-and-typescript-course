// _proto_ fica dentro do pai do objeto e não precisa criar funções toda vez que instanciar o objeto

// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

    // sobrescreve o definido em prototype pois o motor do javascript sempre procura do nivel mais interno para o externo
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;

}

// MÉTODOS DENTRO DE OBJETOS QUE FAZEM COISAS, É INTERESSANTE LANÇÁ-LOS DENTRO DE UM PROTOTYPE

// já está atrelado ao objeto automaticamente
// Pessoa.prototype

// O pai de todos os objetos do javascript é o Object.prototype

// pessoa1 -> Pessoa.prototype -> Object.prototype

Pessoa.prototype.nomeCompleto = function () {

    return this.nome + ' ' + this.sobrenome;

}

// instânica
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1);
console.dir(pessoa2);