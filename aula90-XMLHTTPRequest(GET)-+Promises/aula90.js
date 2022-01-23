// requisicao ajax so funciona por http -> necessario um servidor

// ajax -> XMLHTTPRequest, pega qualquer dado, XML é so o nome

const request = obj => {

    return new Promise((resolve, reject) => {

        // xml http request -> ajax
        const xhr = new XMLHttpRequest();

        // método, url, assyncrono
        xhr.open(obj.method, obj.url, true);

        // se fosse algo que precisaria de corpo, deveria enviar dentro dos parametros de send.
        xhr.send();

        xhr.addEventListener('load', () => {

            // quando chegar aqui dentro, ja vai ter recebido a resposta do servidor.

            if (xhr.status >= 200 && xhr.status < 300) {

                resolve(xhr.responseText);

            } else {

                reject(xhr.statusText);

            }

        })

    });

};

document.addEventListener('click', e => {

    const el = e.target;

    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {

        e.preventDefault();

        carregarPagina(el);

    }

});

async function carregarPagina(el) {

    const href = el.getAttribute('href');

    const objConfig = { method: 'GET', url: href };

    try {

        const response = await request(objConfig);

        carregarResultado(response);

    }
    catch (error) {

        console.log(error);

    }

}

function carregarResultado(response) {

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;

}