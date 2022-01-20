// 705.484.450-52 e 070.987.720-03

class ValidaCPF {

    constructor(cpfEnviado) {

        Object.defineProperty(this, 'cpfLimpo', {

            writable: false,

            enumerable: false,

            configurable: false,

            value: cpfEnviado.replace(/\D+/g, '')

        })

    }

    verificarSequencia() {

        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

    }

    static gerarDigito(cpfSemDigitos) {

        let total = 0;

        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {

            total += reverso * Number(stringNumerica);

            reverso--;

        }

        const digito = 11 - (total % 11);

        return digito <= 9 ? String(digito) : "0";

    }

    gerarNovoCPF() {

        // DO 0 MENOS 2 CARACTERES
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);

        const digito1 = ValidaCPF.gerarDigito(cpfSemDigitos);

        const digito2 = ValidaCPF.gerarDigito(cpfSemDigitos + digito1);

        this.novoCPF = cpfSemDigitos + digito1 + digito2;

    }

    validar() {

        if (!this.cpfLimpo) return false;

        if (typeof this.cpfLimpo !== 'string') return false;

        if (this.cpfLimpo.length !== 11) return false;

        if (this.verificarSequencia()) return false;

        this.gerarNovoCPF();

        return this.novoCPF === this.cpfLimpo;

    }

}

const validaCPF = new ValidaCPF('070.987.720-03');

// console.log(validaCPF.validar() ? "CPF Válido" : "CPF Inválido");

// SE NAO USAR A PALAVRA THIS NO METODO SIGNIFICA QUE EM NENHUM MOMENTO PRECISA DA INSTANCIA, OU SEJA, PODE TORNAR O METODO ESTATICO