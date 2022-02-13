// importar modulo path do nome para trabalhar com caminhos

const path = require('path'); // Node utiliza CommonJS para importacoes

// todo arquivo js no node é um modulo específico

module.exports = {

    // exportando a configuração do webpack
    mode: 'production',

    // arquivo de entrada
    entry: './frontend/main.js',

    // output -> onde vai sair o arquivo bundle.js
    // "resolve" organiza como vai usar as barras de acessar pastas: / ou \
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    // mapeia o erro no arquivo original, quando esse acontecer no bundle.
    devtool: 'source-map'

};

// pasta src -> código fonte
// pasta public -> pasta onde o webpack vai gerenciar os "bundle", fica tudo que o usuário vê