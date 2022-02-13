// 'next' indica a proxima funcao que vai ser executada, nao pode esquecer em middleware
exports.middlewareGlobal = (req, res, next) => {

    // só injeta essa variavel dentro da resposta
    res.locals.umaVariavelLocal = 'Valor variável local.';

    // também pode criar o locals para cada rota.

    next();

}

exports.checkCsrfError = (err, req, res, next) => {

    if (err) return res.render('404');

    next();

}

exports.csrfMiddleware = (req, res, next) => {

    res.locals.csrfToken = req.csrfToken();

    next();

}