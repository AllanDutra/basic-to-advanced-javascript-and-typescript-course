// uma melhoria para XMLHTTPRequest

// segundo parametro -> objeto de configuracao de requisicao, pode mandar o body por ele.
// fetch('pagina1.html', {})
//     .then(resposta => {

//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');

//         return resposta.text();

//     })
//     .then(html => {

//         console.log(html);

//     })
//     .catch(e => {

//         console.log(e);

//     })

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

    // then com corpo { } precisa de return no resultado se for presseguido de outro then

    try {

        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();

        carregarResultado(html);

    } catch (e) {

        console.log(e);

    }

}

function carregarResultado(response) {

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;

} 