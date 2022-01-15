// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // _proto_: Object.prototype
};

const objB = {
    chaveB: 'B',
    // _proto_: objA
};

const objC = {
    chaveC: 'C',
    // _proto_: objB
};

// PERMITE O REAPROVEITAMENTO DE CÓDIGOS QUE ESTÃO EM OUTRO OBJETO

// MEXER COM O OBJETO _proto_ PODE PREJUDICAR A PERFORMANCE

// muda a "cadeia" de objB
Object.setPrototypeOf(objB, objA);

// muda a "cadeia" de objC
Object.setPrototypeOf(objC, objB);

// console.log(objC.chaveA);

function Produto(nome, preco) {

    this.nome = nome;

    this.preco = preco;

}

// métodos de objeto sempre irei criar dentro do prototype!!

Produto.prototype.darDesconto = function (percentualDesconto) {

    this.preco = this.preco - (this.preco * (percentualDesconto / 100));

}

Produto.prototype.aumentarPreco = function (percentualAumento) {

    this.preco = this.preco + (this.preco * (percentualAumento / 100));

}

const p1 = new Produto('Camiseta', 50);

// p1.darDesconto(100);

// p1.aumentarPreco(100);

// console.log(p1);

// literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumentarPreco(100);

// console.log(p2);

const p3 = Object.create(Produto.prototype, {

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }

});

p3.aumentarPreco(5);

console.log(p3);