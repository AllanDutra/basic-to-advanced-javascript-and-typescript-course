// Funcoes geradoras -> meio que pausam o codigo
// nao entrega todos valores de uma vez -> pode melhorar performance

// yield -> semelhante ao return

function* geradora1() {

    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';

}

const g1 = geradora1();

// console.log(g1.next().value);

// console.log(g1.next().value);

// console.log(g1.next());

function* geradora2() {

    let i = 0;

    while (true) {

        yield i;

        i++;

    }

}

function* geradora3() {

    yield 0;
    yield 1;
    yield 2;

}

function* geradora4() {

    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}

const g4 = geradora4();

for (let valor of g4) {

    console.log(valor);

}