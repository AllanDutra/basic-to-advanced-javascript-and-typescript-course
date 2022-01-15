// Declaração de funcção (Function hoisting)

falarOi();

function falarOi() {

    console.log('Oie!');

}

// First-class objects
// Function expression

const souUmDado = function () {

    console.log('Sou um dado.');

}

souUmDado();

// Arrow function

const funcaoArrow =  () => {

    console.log('Sou uma arrow function');

}