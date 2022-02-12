const express = require('express');

const routes = require('./routes');

const path = require('path');

const { middlewareGlobal } = require('./src/middlewares/middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // CSS, BUNDLE, LOGOS

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// DEFININDO O MIDDLEWARE PARA TODAS AS REQUISIÇÕES EM TODAS AS ROTAS.
app.use(middlewareGlobal);

app.use(routes);

app.listen(3000, () => {

    console.log('Acessar http://localhost:3000');

    console.log('Servidor executando na porta 3000...');

});

// FULL MVC -> front end e back end juntos