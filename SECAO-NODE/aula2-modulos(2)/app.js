// se vira para criar um caminho para mim de acordo com o sistema operacional
const path = require('path');

const Cachorro = require('./mod');
const cachorro = new Cachorro('Cachorrinho');
cachorro.latir();

// variaveis internas dentro do modulo que podem ser usadas.

// caminho absoluto do arquivo atual
console.log(__filename);

// caminho absoluto da pasta atual
console.log(__dirname);

console.log(path.resolve(__dirname, '..', '..'));