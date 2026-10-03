const listaDeEntradas = [ 5, 50, 10, 98, 23 ];
let i = 0; 

function gets() {
    const valor = listaDeEntradas[ i ];
    i++;
    
    return valor;
}

function print( texto ) {
    console.log( texto );
}

export { gets, print };