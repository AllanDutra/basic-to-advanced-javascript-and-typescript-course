// modulos são arquivos no js

// "mundo oculto" no arquivo

// quando exportamos uma variavel ou funcao, permitimos outro arquivo acessar estas exportações.

// qualquer coisa exportada sem o default é importado sem a chave.

import multiplicacao from './modulo1';

const nome = 'Pedro';

// const p1 = new MeuModulo.Pessoa('Allan', 'Dutra');

console.log(multiplicacao(2, 5));