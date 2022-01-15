const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retornar a soma do dobro de todos os pares

// -> Filtrar pares

// -> Dobrar valores

// -> Reduzir (somar tudo)

const pares = numeros.filter(num => num % 2 === 0);

const dobrados = pares.map(par => par * 2);

const total = dobrados.reduce((acumulador, valor) => acumulador += valor);

console.log(total);