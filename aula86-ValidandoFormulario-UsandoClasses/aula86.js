class ValidaFormulario {

    constructor() {

        this.formulario = document.querySelector('.formulario');

        this.eventos();

    }

    eventos() {

        this.formulario.addEventListener('submit', e => {

            // arrow function não permite alteração do "this"

            this.handleSubmit(e);

        })

    }

    handleSubmit(e) {

        e.preventDefault();

        const camposValidos = this.camposSaoValidos();

        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {

            alert('Formulário enviado.');

            this.formulario.submit();

        }

    }

    senhasSaoValidas() {

        let valid = true;

        const senha = this.formulario.querySelector('.senha');

        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            
            this.criarErro(senha, 'Campos senha e repetir senha precisam ser iguais.');

            this.criarErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');

            valid = false;

        }

        if (senha.value.length < 6 || senha.value.length > 12) {

            this.criarErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');

            valid = false;

        }

        return valid;

    }

    camposSaoValidos() {

        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {

            errorText.remove();

        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {

            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {

                this.criarErro(campo, `Campo "${label}" não pode estar em branco.`);

                valid = false;

            }

            if (campo.classList.contains('cpf')) {

                if (!this.validarCPF(campo)) valid = false;

            }

            if (campo.classList.contains('usuario')) {

                if (!this.validarUsuario(campo)) valid = false;

            }

        }

    }

    validarUsuario(campo) {

        const usuario = campo.value;

        // flag
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
         
            this.criarErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');

            valid = false;

        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {

            this.criarErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            
            valid = false;

        }

        return valid;

    }

    validarCPF(campo) {

        const cpf = new ValidaCPF(campo.value);

        if (!cpf.validar()) {

            this.criarErro(campo, 'CPF Inválido.');

            return false;

        }

        return true;

    }

    criarErro(campo, msg) {

        const div = document.createElement('div');

        div.innerHTML = msg;

        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);

    }

}

const valida = new ValidaFormulario();