const path = require('path');

// path.resolve nao usa barras
// caminho do arquivo que quero escrever
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Ze' },
//     { nome: 'Rafa' },
// ]

// const json = JSON.stringify(pessoas, '', 2);

// escrever(caminhoArquivo, json);

const lerArquivo = async (caminho) => {

    const dados = await ler(caminho);

    renderizarDados(dados);

}

const renderizarDados = (dados) => {

    dados = JSON.parse(dados);

    dados.forEach(p => console.log(p.nome));

}

lerArquivo(caminhoArquivo);