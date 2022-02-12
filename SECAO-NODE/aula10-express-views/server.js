const express = require('express');

const routes = require('./routes');

const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

// FALAR PRO EXPRESS QUE VAMOS USAR A PASTA VIEWS PARA VIEWS E A ENGINE QUE ELE DEVE USAR.
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // ENGINE PARA FAZER IFS OU FORS DENTRO DO HTML (instalar ejs)

app.use(routes);

app.listen(3000, () => {

    console.log('Acessar http://localhost:3000');

    console.log('Servidor executando na porta 3000...');

});

// FULL MVC -> front end e back end juntos