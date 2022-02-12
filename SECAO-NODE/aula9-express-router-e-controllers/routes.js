const express = require('express');

const route = express.Router();

const homeController = require('./controllers/home-controller');

const contatoController = require('./controllers/contato-controller');

// ELE VAI VER QUAL ROTA É, E AI CHAMAR UM CONTROLLER PARA A REQUISIÇÃO.

// DEVE SE CRIAR UM CONTROLLER PARA CADA COISA ESPECÍFICA

// ===== ROTAS DA HOME =====

route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

// ===== ROTAS DE CONTATO =====

route.get(`/contato`, contatoController.paginaInicial);

module.exports = route;