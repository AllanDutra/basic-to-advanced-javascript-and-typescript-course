// express -> microframework que ajuda a trabalhar com a web

const express = require('express');

const app = express();

// express ajuda a trabalhar com rotas da aplicação

// rotas:

// http://meusite.com/ <- GET -> entregue a página: /
// http://meusite.com/sobre <- GET -> entregue a página: /sobre
// http://meusite.com/contato <- GET -> entregue a página: /contato

app.get('/', (req, res) => {

    // req (requisição) - o que to pedindo

    // res (resposta) - a resposta do servidor

    res.send(`
    
        <form action="/" method="POST">

            Nome: <input type="text" name="nome" />

            <button>Enviar</button>

        </form>

    `);

});

// é possível ter todos os metodos na mesma rota (POST, GET, PUT, DELETE);
app.post(`/`, (req, res) => {

    res.send("Recebi o formulário.");

})

// uma porta = um processo rodando no servidor

app.get('/contato', (req, res) => {

    res.send("Obrigado por entrar em contato conosco.");

});

// "servidor escute a porta 3000"
app.listen(3000, () => {

    console.log('Acessar http://localhost:3000');

    console.log('Servidor executando na porta 3000...');

});

// nodemon -> dependência de desenvolvimento.

// npx nodemon .\server.js -> inicia o "monitoramento" do nodemon

// servidor atualiza toda vez que salvo um arquivo