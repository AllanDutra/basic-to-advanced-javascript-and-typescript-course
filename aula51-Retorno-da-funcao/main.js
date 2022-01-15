function criarPessoa(nome, sobrenome) {

    return { nome, sobrenome };

}

const p1 = criarPessoa('Allan', 'Dutra');

function criarMultiplicador(multiplicador) {

    return function (n) {

        return n * multiplicador;

    }

}

const duplica = criarMultiplicador(2);

const triplica = criarMultiplicador(3);

const quadriplica = criarMultiplicador(4);