require('dotenv').config();

const express = require('express');

const routes = require('./routes');

const path = require('path');

const { middlewareGlobal } = require('./src/middlewares/middleware');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING).then(() => app.emit('pronto')).catch((e) => console.log(e));

const session = require('express-session');

const MongoStore = require('connect-mongo');

const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({

    secret: 'shdiushjndfmsndfkjlhdskjfh çlasksdjaoijdm soklndsç as()',

    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),

    resave: false,

    saveUninitialized: false,

    cookie: {

        // 7 dias em milesimos de segundos
        maxAge: 1000 * 60 * 60 * 24 * 7,

        httpOnly: true

    }

});

app.use(sessionOptions);

app.use(flash());

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

// SALVAR SESSÃO NA MEMORIA NAO É RECOMENDADO POIS ELA É PERDIDA SEMPRE QUE O SERVIDOR É REINICIADO

// FLASH MESSAGES - MENSAGENS SALVAS NA SESSÃO

// PACOTES NECESSÁRIOS
// npm i express-session connect-mongo connect-flash