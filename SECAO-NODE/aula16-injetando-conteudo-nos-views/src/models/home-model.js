const mongoose = require('mongoose');

// MODEL É RESPONSÁVEL POR CRIAR, BUSCAR E VALIDAR OS DADOS.

const HomeSchema = new mongoose.Schema({

    titulo: { type: String, required: true },

    descricao: String

});

// nome do model: Home
// schema: HomeSchema
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;