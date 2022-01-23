// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function esperarUmTempo(msg, tempo) {

    return new Promise((resolve, reject) => {

        if (typeof msg !== "string") {

            reject("BAD VALUE");

            return;

        };

        setTimeout(() => {

            resolve(msg.toUpperCase() + ' - passei');

            return;

        }, tempo);

    });

}

// mesmo que a maioria das promessas seja executada com sucesso, se alguma der erro, todas nao sao executadas.
const promises = [
    // 'Primeiro valor',
    esperarUmTempo('Promise 1', 3000),
    esperarUmTempo('Promise 2', 500),
    esperarUmTempo('Promise 3', 1000),
    // 'Outro valor'
];

// recebe um array de promises e retorna todos os valores em um unico then.
Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((error) => {
        console.log(error);
    });

// uma "corrida" de promessas, só devolve o resultado da primeira que for executada.
// entrega o resultado da primeira que resolver mas continua executando as outras promessas restantes.
Promise.race(promises)
    .then((resultadoDaMaisRapida) => {
        console.log(resultadoDaMaisRapida);
    })
    .catch((error) => {
        console.log(error);
    })

function baixarPagina() {

    const emCache = true;

    // retorna uma promise já resolvida.
    if (emCache) return Promise.resolve('Página em cache');

    return esperarUmTempo('Baixei a página', 3000);

}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log(e);
    })