// ex: 705.484.450-52

// pegar os 9 primeiiros digitos de um cpf

// multiplicar cada um por numeros ordem regressiva de 10 até o 2 (10, 9, 8, 7...), cada um dando seu valor

// somar todos os 9 valores obtidos pela multiplicacao anterior

// pegar o 1º digito do cpf com a formula: 11 - ( (somaTotalObtida) % 11 ) = 1º digito, se o valor desta conta for maior que 9, consideramos o como 0.

// pegar os 9 primeiros digitos do cpf agora tambem com o 1º digito obtido

// multiplicar cada um por numeros ordem regressiva de 11 até o 2 (11, 10, 9, 8...), cada um dando seu valor 

// somar todos os 10 valores obtidos pela multiplicacao anterior

// efetuar conta 11 - ( (somaTotalObtidaNovamente) % 11 ) = 2º digito, se o valor desta conta for maior que 9, consideramos o como 0.

// concatenar os 9 digitos anteriores com os digitos que geramos.

// se ele for igual ao cpf informado no inicio significa que é um cpf valido, caso contrário: inválido

function CpfValidator(cpf) {

    Object.defineProperty(this, 'cpf', {

        enumerable: true,

        configurable: false,

        get: function () {
            return cpf;
        },

        set: function (valor) {

            if (typeof valor !== "string") throw new TypeError('Cpf deve ser do tipo string');

            cpf = valor;

        }

    });

}

CpfValidator.prototype.isSequence = function () {

    const cpfLimpo = this.cpf.replace(/\D+/g, '');

    return cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo;

}

CpfValidator.prototype.returnDigit = function (digitosPercorrer) {

    digitosPercorrer = Array.from(digitosPercorrer);

    let multiplicador = digitosPercorrer.length + 1;

    const somaResultadosMultiplicacoes = digitosPercorrer.reduce((acumulador, digito) => {

        acumulador += (multiplicador * Number(digito));

        multiplicador--;

        return acumulador;

    }, 0);

    const digitoEncontrado = 11 - (somaResultadosMultiplicacoes % 11);

    return digitoEncontrado > 9 ? '0' : String(digitoEncontrado);

}

CpfValidator.prototype.isValid = function () {

    if (!this.cpf || !(this.cpf?.length === 11 || this.cpf?.length === 14) || this.isSequence()) return false;

    const cpfLimpo = this.cpf.replace(/\D+/g, '');

    let digitosCPF = cpfLimpo.substring(0, 9);

    const primeiroDigito = this.returnDigit(digitosCPF);

    digitosCPF += primeiroDigito;

    const segundoDigito = this.returnDigit(digitosCPF);

    digitosCPF += segundoDigito;

    return digitosCPF === cpfLimpo;

}

const cpfValidator1 = new CpfValidator('111.111.111-11');

console.log(cpfValidator1.isValid());