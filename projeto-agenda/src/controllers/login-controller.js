const Login = require('../models/login-model');

exports.index = (req, res) => {

    res.render('login');

};

exports.register = async (req, res) => {

    try {

        const login = new Login(req.body);

        await login.register();

        if (login.errors.length > 0) {

            req.flash('errors', login.errors);

            req.session.save(() => {

                return res.redirect('index');

            });

            return;

        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');

        req.session.save(() => {

            return res.redirect('index');

        })

    } catch (e) {

        console.log(e);

        res.render('404');

    }

}