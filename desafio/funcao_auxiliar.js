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

const numerosInformados = [ 5, 3, 4, 1, 10, 8 ];

let indexNumeros = 0;

export function gets1() {
    const numeros = numerosInformados[ indexNumeros ];
    indexNumeros++;

    return numeros;
}