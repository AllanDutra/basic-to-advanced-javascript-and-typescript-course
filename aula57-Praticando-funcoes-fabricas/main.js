// Factory function -> retorna um objeto
// function criarCalculadora() {

//     return {

//         display: document.querySelector('.display'),

//         iniciar() {

//             this.cliqueBotoes();

//             this.pressionaEnter();

//         },

//         pressionaEnter() {

//             this.display.addEventListener('keyup', (e) => {

//                 if (e.keyCode === 13) return this.realizarConta();

//             });

//         },

//         realizarConta() {

//             let conta = this.display.value;

//             try {

//                 conta = eval(conta);

//                 if (!conta) return alert('Conta inválida');

//                 this.display.value = String(conta);

//             }
//             catch {

//                 return alert('Conta inválida');

//             }

//         },

//         limparDisplay() {

//             this.display.value = '';

//         },

//         removerUmCaractere() {

//             this.display.value = this.display.value.slice(0, -1);

//         },

//         cliqueBotoes() {

//             document.addEventListener('click', (e) => {

//                 const el = e.target;

//                 if (el.classList.contains('btn-num')) {

//                     this.btnParaDisplay(el.innerText);

//                 }
//                 else if (el.classList.contains('btn-clear')) {

//                     this.limparDisplay();

//                 }
//                 else if (el.classList.contains('btn-del')) {

//                     this.removerUmCaractere();

//                 }
//                 else if (el.classList.contains('btn-eq')) {

//                     this.realizarConta();

//                 }

//             });

//         },

//         btnParaDisplay(valor) {

//             this.display.value += valor;

//         }

//     };

// }

// const calculadora = criarCalculadora();

// calculadora.iniciar();

// convertendo para função construtora

function Calculadora() {

    const display = document.querySelector('.display');

    this.iniciar = () => {

        cliqueBotoes();

        pressionaEnter();

    };

    const pressionaEnter = () => {

        display.addEventListener('keyup', (e) => {

            if (e.keyCode === 13) return realizarConta();

        });

    }

    const limparDisplay = () => display.value = '';

    const realizarConta = () => {

        let conta = display.value;

        try {

            conta = eval(conta);

            if (!conta) return alert('Conta inválida!');

            display.value = String(conta);

        }
        catch {

            return alert('Conta inválida!');

        }

    }

    const removerUmCaractere = () => display.value = display.value.slice(0, -1);

    const cliqueBotoes = () => {

        document.addEventListener('click', (e) => {

            const el = e.target;

            if (el.classList.contains('btn-num')) {

                btnParaDisplay(el.innerText);

            }
            else if (el.classList.contains('btn-clear')) {

                limparDisplay();

            }
            else if (el.classList.contains('btn-del')) {

                removerUmCaractere();

            }
            else if (el.classList.contains('btn-eq')) {

                realizarConta();

            }

        });

    };

    const btnParaDisplay = (valor) => {

        display.value += valor;

        display.focus();

    }

}

const calculadora = new Calculadora();

calculadora.iniciar();