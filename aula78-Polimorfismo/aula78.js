// Polimorfismo -> maneira de fazer métodos se comportarem de diferentes formas em subclasses
// Classe -> função construtora

// Superclasse
function ContaBancaria(agencia, conta, saldo) {

    this.agencia = agencia;

    this.conta = conta;

    this.saldo = saldo;

}

ContaBancaria.prototype.sacar = function (valor) {

    if (valor > this.saldo) {

        console.log("Saldo insuficiente: R$ " + this.saldo.toFixed(2));

        return;

    }

    this.saldo -= valor;

};

ContaBancaria.prototype.depositar = function (valor) {

    this.saldo += valor;

    this.verSaldo();

};

ContaBancaria.prototype.verSaldo = function () {

    console.log(
        `Ag/C: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );

};

// SOBRESCREVENDO O MÉTODO SACAR UTILIZANDO-SE DO POLIMORFISMO

function ContaCorrente(agencia, conta, saldo, limite) {

    ContaBancaria.call(this, agencia, conta, saldo);

    this.limite = limite;

}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {

    if (valor + (this.saldo + this.limite)) {

        console.log("Saldo insuficiente: R$ " + this.saldo.toFixed(2));

        console.log("Limite: R$ " + this.limite.toFixed(2));

        return;

    }

    this.saldo -= valor;

}

function ContaPoupanca(agencia, conta, saldo) {

    ContaBancaria.call(agencia, conta, saldo);

}

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype);

ContaPoupanca.prototype.constructor = ContaPoupanca;

