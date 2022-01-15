function relogio() {

    function criarHoraDosSegundos(segundos) {

        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });

    }

    const relogio = document.querySelector('.relogio');

    let segundos = 0;

    let timer;

    function iniciarRelogio() {

        relogio.classList.remove('pausado');

        clearInterval(timer);

        timer = setInterval(function () {

            segundos++;

            relogio.innerHTML = criarHoraDosSegundos(segundos);

        }, 1000);

    }

    function pausarRelogio() {

        relogio.classList.add('pausado');

        clearInterval(timer);

    }

    function zerarRelogio() {

        relogio.classList.remove('pausado');

        clearInterval(timer)

        segundos = 0;

        relogio.innerHTML = criarHoraDosSegundos(segundos);

    }

    document.addEventListener('click', function (e) {

        const el = e.target;

        if (el.classList.contains('iniciar')) return iniciarRelogio();

        if (el.classList.contains('pausar')) return pausarRelogio();

        if (el.classList.contains('zerar')) return zerarRelogio();

    });

}

relogio();