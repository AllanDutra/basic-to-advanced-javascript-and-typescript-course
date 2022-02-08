const fs = require('fs').promises;

// flag = w: apaga tudo que ta escrito no arquivo e escreve o que to pedindo

// flag = a: adiciona conteudo ao que ja existe no arquivo

module.exports = (caminho, dados) => {

    // encoding ja vai por padrao o utf-8
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8' });

}

// BOM PARA USAR EM LOG