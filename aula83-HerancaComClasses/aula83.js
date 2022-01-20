class DispositivoEletronico {

    constructor(nome) {

        this.nome = nome;

        this.ligado = false;

    }

    ligar() {

        if (this.ligado) {

            console.log(this.nome + " já ligado.");

            return;

        }

        this.ligado = true;

    }

    desligar() {

        if (!this.ligado) {

            console.log(this.nome + " já desligado.");

            return;

        }

        this.ligado = false;

    }

}

const d1 = new DispositivoEletronico('smartphone');

class Smartphone extends DispositivoEletronico {

    constructor(nome, cor, modelo) {

        // chama e executa todo o codigo do construtor pai
        super(nome);

        this.cor = cor;

        this.modelo = modelo;

    }

}

const smartphone1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');

class Tablet extends DispositivoEletronico {

    constructor(nome, temWifi) {

        super(nome);

        this.temWifi = temWifi;

    }

    // pode fazer polimorfismo nos metodos executados antes aqui.
    ligar() {

        console.log('Método ligar alterado.');

    }

}

// quanto mais extends mais especifica a classe filha fica.
// nao fazer hierarquia muito longa, no maximo uma ou duas (pro codigo nao ficar muito acoplado)

const t1 = new Tablet('iPad', false);