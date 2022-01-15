// Função recursiva -> Funcao que ela mesma se chama

function recursiva(max) {
    
    if (max > 10) return;
    
    console.log(max);

    max++;

    recursiva(max);

}

recursiva(0);