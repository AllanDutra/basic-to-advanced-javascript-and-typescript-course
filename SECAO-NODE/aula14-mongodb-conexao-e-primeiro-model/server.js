require('dotenv').config();

const express = require('express');

const routes = require('./routes');

const path = require('path');

const { middlewareGlobal } = require('./src/middlewares/middleware');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING).then(() => app.emit('pronto')).catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);

app.use(routes);

app.on('pronto', () => {

    app.listen(3000, () => {

        console.log('Acessar http://localhost:3000');

        console.log('Servidor executando na porta 3000...');

    });

});

// FULL MVC -> front end e back end juntos

// DEPENDÊNCIAS DO PROJETO
// npm i dotenv (para gerenciar variaveis ambientes)
// npm i mongoose (valida dados informados para o banco e faz a conexão)