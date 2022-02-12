// 'next' indica a proxima funcao que vai ser executada, nao pode esquecer em middleware
exports.middlewareGlobal = (req, res, next) => {
    
    if (req.body.cliente) {
        
        console.log();

        console.log(`Vi que você postou ${req.body.cliente}`);

        console.log();

    }

    next();

}