const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/home-controller');

const loginController = require('./src/controllers/login-controller');

// ===== ROTAS DA HOME =====

route.get('/', homeController.index);

// ===== ROTAS DE LOGIN =====

route.get('/login/index', loginController.index);

module.exports = route;