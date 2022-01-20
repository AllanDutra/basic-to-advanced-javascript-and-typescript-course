// metodos estaticos -> metodos que nao podem ser acessados na instancia, funcoes normais la de fora mas dentro da classe

class ControleRemoto {

    constructor(tv) {

        this.tv = tv;
        
        this.volume = 0;

    }

    // Método de instância
    aumentarVolume() {

        this.volume += 2;

    }

    // Método de instância
    diminuirVolume() {

        this.volume -= 2;

    }
    
    // método estático -> só é acessado pela classe.
    // função dentro da classe por questoes de organizacao.
    static trocaPilha() {

        

    }

}

const controle = new ControleRemoto('LG');

controle.aumentarVolume();

// CUIDADO NAS POSICOES DO THIS EM FUNCOES FORA.

// MÉTODOS ESTÁTICOS NÃO TEM ACESSO AOS DADOS DA INSTANCIA