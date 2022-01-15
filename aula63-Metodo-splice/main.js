const nomes = ['Maria', 'Mateus', 'Matue', 'Poze', 'Junin', 'Lil Gabi'];

// nomes.splice(indice atual (o que vou mexer), quantos deletar, elemAdd1, elemAdd2, elemAdd3...);

// const removidos = nomes.splice(-2, Number.MAX_VALUE);

// nomes.splice(3, 0, 'RICARDO', 'neymar');

// pop 
const removidosPop = nomes.splice(-1, 1);

console.log('pop', removidosPop);

// shift
const removidosShift = nomes.splice(0, 1);

console.log('unshift', removidosShift);

const adicionadosPush = nomes.splice(nomes.length, 0, 'Ultimo');

console.log('push', adicionadosPush);

const adicionadosShift = nomes.splice(0, 0, 'Inicial');

console.log('shift', adicionadosShift);