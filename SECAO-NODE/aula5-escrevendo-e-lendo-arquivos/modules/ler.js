const fs = require('fs').promises;

// vai retornar uma promise
module.exports = (caminho) => fs.readFile(caminho, 'utf-8');