const express = require('express');

const app = express();

// para usar o body da requisição:
// se não fizer isso todo body de POST ou PUT vai vir sem ser tratado (undefined).
app.use(express.urlencoded({ extended: true }));

// QUERY PARAMS COMEÇAM APÓS O SINAL DE INTERROGAÇÃO (?)
// QUERY PARAM -> chave = valor
// ex: http://facebook.com/profiles?param=x

app.get('/', (req, res) => {

    res.send(`
    
        <form action="/" method="POST">

            Nome: <input type="text" name="nome" /> <br>

            Outro campo: <input type="text" name="outrocampo" />

            <button>Enviar</button>

        </form>

    `);

});

app.get('/contato', (req, res) => {

    res.send("Obrigado por entrar em contato conosco.");

});

// AULA 8:

// (/:id_usuarios) -> req.params (MAIS USADOS)

// ( : ) antes para informar que é um parâmetro

// O interrogação depois faz o parâmetro ser opcional

app.get(`/testes/:id_usuarios?`, (req, res) => {

    // req.params => /profiles/3

    // req.query => /profiles?id=3&nome=Exemplo

    // req.body => vem um objeto com chaves

    // SÃO OS PARES DE CHAVE = VALOR
    console.log(req.query);

    res.send(req.query.nome);

});

app.post(`/`, (req, res) => {

    // VEM PARA POST E PARA PUT
    console.log(req.body);

    // chave "nome" vem do name do input.
    res.send(`O que você me enviou foi: ${req.body.nome}`);

});

app.listen(3000, () => {

    console.log('Acessar http://localhost:3000');

    console.log('Servidor executando na porta 3000...');

});