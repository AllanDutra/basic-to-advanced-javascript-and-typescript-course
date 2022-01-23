import { ValidaCPF } from "./ValidaCPF";

export class GeraCPF {

    rand(min = 100000000, max = 999999999) {

        return String(Math.floor(Math.random() * (max - min) + min));

    }

    formatarCPF(cpf) {

        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    }

    gerarNovoCPF() {

        const cpfSemDigito = this.rand();

        const digito1 = ValidaCPF.gerarDigito(cpfSemDigito);

        const digito2 = ValidaCPF.gerarDigito(cpfSemDigito + digito1);

        const novoCPF = cpfSemDigito + digito1 + digito2;

        return this.formatarCPF(novoCPF);

    }

}