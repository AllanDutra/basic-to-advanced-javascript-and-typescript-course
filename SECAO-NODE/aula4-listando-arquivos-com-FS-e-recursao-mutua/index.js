// recursao mutua -> dependencia circular

// tem grandes recursos para o sistema de arquivos
const fs = require('fs').promises;

const path = require('path');

async function readdir(rootDir) {

    rootDir = rootDir || path.resolve(__dirname);

    // exibe as pastas do diretorio informado
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);

}

async function walk(files, rootDir) {

    for (let file of files) {

        const fileFullPath = path.resolve(rootDir, file);

        // coleta estatisticas do arquivo informado pelo caminho inteiro
        const stats = await fs.stat(fileFullPath);

        // continua o for para o proximo elemento
        if (/\.git/g.test(fileFullPath)) continue;

        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {

            readdir(fileFullPath);

            continue;

        }

        if (
            !/\.html$/g.test(fileFullPath)
        ) continue;

        console.log(fileFullPath);

    }

}

readdir('C:/Dev/Course-Javascript-and-TypeScript-Basic-to-Advanced');