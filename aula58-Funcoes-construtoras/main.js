// Construtora -> precisamos iniciar com letra maiuscula ex: Pessoa (new)
// molde para um certo objeto
// deve ser inicializada com a palavra new

function Pessoa(nome, sobrenome) {

    // ATRIBUTO PRIVADO -> NÃO DISPONÍVEL FORA DO CORPO DA FUNÇÃO
    const ID = 123456;

    this.nome = nome;

    this.sobrenome = sobrenome;

    this.metodo = () => {

        console.log(this.nome + " diz:" + " sou uma pessoa");

    };

}

const p1 = new Pessoa('Allan', 'Dutra');

const p2 = new Pessoa('Juscelino', 'KubCHESTER');

p2.metodo();