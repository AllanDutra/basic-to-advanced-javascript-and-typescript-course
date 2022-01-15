// forEach -> só está disponível em arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach(valor => console.log(valor));

let total = 0;

a1.forEach(valor => total += valor);

console.log(total);