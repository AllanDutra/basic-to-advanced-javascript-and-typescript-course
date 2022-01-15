// funções que tem explicitamente "function" possuem: arguments -> sustenta todos os argumentos da função 

function funcao() {

    let total = 0;

    for (let argumento of arguments) {

        total += argumento;

    }

    // console.log(total);

}

funcao(5, 65);

function somar(a, b = 0, c = 5) {

    // console.log(a + b + c);

}

somar(5, undefined, 20);

// similar ao arguments
const conta = (operador, acumulador, ...numeros) => {

    for (let numero of numeros) {

        if (operador === "+") acumulador += numero;

        if (operador === "-") acumulador -= numero;

        if (operador === "/") acumulador /= numero;

        if (operador === "*") acumulador *= numero;

    }

    console.clear();

    console.log(acumulador);

}

conta('*', 1, 2, 2, 2, 2, 10);