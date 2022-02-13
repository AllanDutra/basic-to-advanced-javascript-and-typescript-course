const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/home-controller');

const contatoController = require('./src/controllers/contato-controller');

// MIDDLEWARE => UMA FUNÇÃO NO MEIO DO CAMINHO

// req.session = { nome: 'Allan', sobrenome: 'Dutra' };

// ===== ROTAS DA HOME =====

// TAMBÉM É POSSÍVEL FAZER OUTRA COISA DEPOIS DE RESPONDER O CLIENTE.
route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

// ===== ROTAS DE CONTATO =====

route.get(`/contato`, contatoController.paginaInicial);

module.exports = route;