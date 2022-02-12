// USAR MÓDULOS DO NODE.

exports.paginaInicial = (req, res) => {

    res.send(`
    
        <form action="/" method="POST">

            Nome: <input type="text" name="nome" /> <br>

            Outro campo: <input type="text" name="outrocampo" />

            <button>Enviar</button>

        </form>

    `);

}

exports.trataPost = (req, res) => {

    res.send(`Ei, sou sua nova rota de POST.`);

}