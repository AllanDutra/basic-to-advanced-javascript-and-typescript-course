// deixam o código bem mais limpo

// Promises vieram para resolver o "inferno" do callback.

// cadeias de "then's" ficam muito longas

function rand(min = 0, max = 3) {

    min *= 1000;

    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);

}

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

async function executar() {

    try {

        const fase1 = await esperarUmTempo('Fase 1', rand());

        console.log(fase1);

        const fase2 = await esperarUmTempo('Fase 2', rand());

        console.log(fase2);

        const fase3 = await esperarUmTempo('Fase 3', rand());

        console.log(fase3);

        console.log('Terminamos na fase: ' + fase3);

    }
    catch (e) {

        console.log(e);

    }

}

executar();

// estados das Promises:
// Pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada