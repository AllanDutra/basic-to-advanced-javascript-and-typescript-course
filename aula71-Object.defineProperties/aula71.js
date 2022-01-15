// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // mostra esta chave

        value: estoque, // valor

        writable: true, // Define se o valor pode/não ser alterado

        configurable: false, // pode reconfigurar a variavel com outro "Object.defineProperty" ou não

    });

    Object.defineProperties(this, {

        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }

    });

}

const p1 = new Produto('Camiseta', 20, 3);

console.log(Object.keys(p1));

for (let chave in p1) { console.log(chave) };