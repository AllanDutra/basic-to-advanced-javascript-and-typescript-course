import { GeraCPF } from './modules/GeraCPF';

import './assets/css/style.css';

// IIE

(function () {

    const gera = new GeraCPF();

    const cpfGerado = document.querySelector('.cpf-gerado');

    cpfGerado.innerHTML = gera.gerarNovoCPF();

})();