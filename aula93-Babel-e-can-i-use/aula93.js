// compatibilidade do navegador com os codigos.

// navegadores mais antigos nao tem compatibilidade com alguns recursos das novas versoes do ecmascript

// can i use -> site para verificar se o recurso utilizado ainda é compativel com os navegadores.

// babel -> transpilador para que nosso código possa ser executado em qualquer navegador. (babeljs.io)

// webpack utiliza o babel

// npm init -y -> inicia o gerenciador de pacotes do node (package.json)

// npm install --save-dev @babel/cli @babel/preset-env @babel/core -> instalar os pacotes do babel para transpilar nosso código

// babel seria uma dev dependency pois só é utilizado para desenvolvimento

// @ + numero da versao -> instala especificamente uma versao colocada apos o nome do pacote.

const nome = 'Luiz';

const obj = { nome };

const novoObj = { ...obj };

console.log(novoObj);

// npx babel "nomedoarquivo" -o "arquivodesaida" --presets=@babel/env

// bundle -> arquivo de saida.

// bundle seria utilizado no index.html como arquivo de js, fazendo todos os navegadores serem compativeis com nosso codigo.

// flag -w faz o comando ficar escutando nosso codigo

class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;

        this.sobrenome = sobrenome;

    }

}

// raramente utilizamos o babel na "unha".

// mais utilizado é o webpack