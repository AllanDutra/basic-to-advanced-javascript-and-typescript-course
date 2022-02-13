exports.paginaInicial = (req, res, next) => {

    // O SESSION USADO NO INICIO DO SERVER HABILITOU O RECURSO DA REQUISIÇÃO:
    // req.session.usuario = { nome: 'Allan', logado: true };
    console.log(req.session.usuario);

    // O FLASH HABILITOU TAMBÉM:
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'Pane no sistema.');
    // req.flash('success', 'Ai simmm!');

    // ACESSAR AS FLASH MESSAGES
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));

    // SÓ PODEM SER ACESSADAS UMA VEZ DEPOIS DE CRIADAS.

    res.render('index');

    next();

}

exports.trataPost = (req, res) => {

    res.send(req.body);

}