function mostrarHora() {

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

// De 1 em 1 segundo executa a função 
const timer = setInterval(function () {

    console.log(mostrarHora());

}, 1000);

setTimeout(function () {

    clearInterval(timer);

}, 10000);