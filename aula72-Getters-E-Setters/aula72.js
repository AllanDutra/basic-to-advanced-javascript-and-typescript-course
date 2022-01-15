// defineProperty  - Getters e Setters (maneiras de proteger a propriedade)

function Produto(nome, preco, estoque) {

    this.nome = nome;

    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // mostra esta chave

        configurable: true, // pode reconfigurar a variavel com outro "Object.defineProperty" ou não

        get: function () {

            return estoquePrivado;

        },

        // No setter que eu valido o valor
        // Não trabalhar com as propriedades do objeto com o this. quando estiver usando setter (evitar loops), caso queira fazer isso, devo criar uma variável privada
        set: function (valor) {

            if (typeof valor !== "number") throw new TypeError('Bad value');

            estoquePrivado = valor;

        }

    });

}

// função factory
function criaProduto(nome) {

    return {

        get nome() {
            return nome;
        },
        set nome(valor) {

            // com o setter consigo interceptar o valor enviado para a variavel

            nome = valor;
        }

    };

}

// const p1 = new Produto('Camiseta', 20, 3);

// console.log(p1);

// p1.estoque = 'allan';

// console.log(p1.estoque);

// COM A FUNÇÃO FACTORY
const p2 = criaProduto('Camiseta');

p2.nome = 'Qualquer coisa';

console.log(p2.nome);