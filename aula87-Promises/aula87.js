// Sem noção exata de quando os dados serão retornados.

function gerarNumero(min, max) {

    min *= 1000;

    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);

}

function esperarUmTempo(msg, tempo) {

    // recebe uma função dentro dessa promeça
    return new Promise((resolve, reject) => {

        if (typeof msg !== "string") reject("BAD VALUE");

        // quando a promise é criada, obrigatoriamente tem que ou resolver ou rejeitar ela.

        setTimeout(() => {

            // resolve só pode receber um unico parametro.
            resolve(msg);

        }, tempo);

    });

}

esperarUmTempo('Frase 1', gerarNumero(1, 3))
    .then(r => {
        console.log(r);
        return esperarUmTempo('Frase 2', gerarNumero(1, 3));
    })
    .then(r => {
        console.log(r);
        return esperarUmTempo('Frase 3', gerarNumero(1, 3));
    })
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log('ERRO: ' + e);
    });