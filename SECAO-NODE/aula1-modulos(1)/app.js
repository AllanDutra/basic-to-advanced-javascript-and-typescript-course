// quando é importado, sempre é importado o modulo inteiro

// import do node é feito pelo require.
// quando são modulos do node só coloca o nome do modulo
const path = require('path');

const axios = require('axios');

// const falarNome = require("./mod1").falarNome;

// ou

// quando utilizamos caminho são modulos criados por mim
const { Pessoa, falarNome } = require("./mod1");

// console.log(falarNome());

const p1 = new Pessoa('Allan');

console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(e => console.log(e));