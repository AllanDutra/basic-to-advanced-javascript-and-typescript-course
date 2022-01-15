// this sempre vai representar quem chamou tal coisa

// vantagem do método construtor -> só com uma linha pode repetir tudo o que tem nele.

function criarPessoa(nome, sobrenome, altura, peso) {

    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        fala() {
            return `${this.nome} está falando...`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            return (this.peso / this.altura ** 2).toFixed(2);
        },
        // Setter
        set nomeCompleto(valor) {
            
            valor = valor.split(' ');

            this.nome = valor.shift();

            this.sobrenome = valor.join(' ');

        }
    };

}

const p1 = criarPessoa('James', 'Bond', 1.70, 50);

const p2 = criarPessoa('Mulher', 'Maravilha', 1.80, 60);

console.log(p1.nomeCompleto, p1.imc);

console.log(p2.nomeCompleto, p2.imc);