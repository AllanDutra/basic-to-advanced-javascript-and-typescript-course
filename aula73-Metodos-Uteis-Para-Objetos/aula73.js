// vendo
// Object.assign (copia um outro objeto)
// Object.getOwnPropertyDescriptor (retorna o que é informado no defineProperty)
// Object.values (similar ao keys)
// Object.entries (similar ao keys) retorna arrays com a propriedade e seu respectivo valor

// Já vimos
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties
// Object.defineProperty

// estão apontando para o mesmo endereço na memória
const produto = { nome: 'Produto base', preco: 1.8 };

// const outraCoisa = {
//     ...produto,
//     material: 'porcelana'
// };

// outra alternativa pro spread
const outraCoisa = Object.assign({}, produto, { material: 'porcelana' });

outraCoisa.nome = 'Caneca';

outraCoisa.preco = 2.5;

for (let [chave, valor] of Object.entries(produto)) {

    console.log(`${chave}: ${valor}`);

}