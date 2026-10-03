const notasEscolares = [ 10 ];

let indexNotas = 0;

export function print( resultado ) {
    console.log( resultado );
}

export function gets() {
    const mediaEscolar = notasEscolares[ indexNotas ];
    indexNotas++;
    
    return mediaEscolar;
}