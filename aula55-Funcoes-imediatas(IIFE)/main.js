// IIFE -> Imediately invoked function expression (invocada imediatamente quando criada)

let nome = 'Raimundo';

(function () {
    const nome = 'Ribamar'
    console.log(nome);
})()

nome = 'Samuel';