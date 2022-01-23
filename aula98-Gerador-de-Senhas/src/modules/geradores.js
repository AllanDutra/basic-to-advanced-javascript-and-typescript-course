// funcao baseada nos "DEC" da tabela ASC
// String.fromCharCode(number);

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gerarMaiuscula = () => String.fromCharCode(rand(65, 91));

const gerarMinuscula = () => String.fromCharCode(rand(97, 123));

const gerarNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ',.;~^[]{}!@#$%*()_+=-';

const gerarSimbolo = () => simbolos[rand(0, simbolos.length)];

export function gerarSenha(qtd, maiusculas, minusculas, numeros, simbolos) {

    const senhaArray = [];

    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {

        // avaliação de curtu-circuito
        maiusculas && senhaArray.push(gerarMaiuscula());

        minusculas && senhaArray.push(gerarMinuscula());

        numeros && senhaArray.push(gerarNumero());

        simbolos && senhaArray.push(gerarSimbolo());

    }

    return senhaArray.join('').slice(0, qtd);

}