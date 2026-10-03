// --- Arrays: Manipulação de Vetores e Ciclos (For) ---
const ninjas = [ 'Naruto', 'Sasuke', 'Sakura' ];
console.log( ninjas[ 0 ] );
ninjas.push( 'Kakashi' );
console.log( ninjas );
ninjas[ 1 ] = 'Sai';
console.log( ninjas );
ninjas.push( 'Time:', 7 );
console.log( ninjas );
ninjas.pop();
console.log( ninjas );
ninjas.shift();
console.log( ninjas );

const notas = [];
notas.push( 5, 7, 10, 8, 3 );
console.log( notas.length );

for ( let i = 0; i < 10; i++ ) {
    console.log( i );
}

const nome = 'Perry o Gato';

for ( let i = 0; i < nome.length; i++ ) {
    console.log( nome[ i ] );
}

const notaAtribuida = [];
notaAtribuida.push( 10 );
notaAtribuida.push( 8 );
notaAtribuida.push( 7 );

let soma = 0;

for ( let i = 0; i < notaAtribuida.length; i++ ) {
    const nota = notaAtribuida[ i ];
    soma += nota;
}

const mediaFinal = soma / notaAtribuida.length;
console.log( mediaFinal.toFixed( 2 ) );

// ================================================
// DESAFIO: CRIAR PROGRAMA DE TABUADA
// ================================================
const numeroReceber = 5;

for ( let i = 1; i <= 10; i++ ) {
    const resultado = numeroReceber * i;
    console.log( resultado );
}

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const tabuadaCompleta = [];

for ( let i = 0; i < numeros.length; i++ ) {
    for ( let j = 0; j < numeros.length; j++ ) {
        const resultado = numeros[ i ] * numeros[ j ];
        tabuadaCompleta.push( resultado );
    }
}
console.log( tabuadaCompleta );

const numerosBase = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for ( let i = 0; i < numerosBase.length; i++ ) {
    const numeroBase = numerosBase[ i ];
    console.log( `--- Múltiplo de ${ numeroBase }: ---` );

    for ( let j = 0; j < numerosBase.length; j++ ) {
        const multiplicador = numerosBase[ j ];
        const resultado = numeroBase * multiplicador;
        console.log( `${ numeroBase } x ${ multiplicador }=
            ${ resultado }` 
        );
    }
    
    console.log( '' );
}

// ================================================
// DESAFIO: PERCURSO DE LISTA E NÚMEROS PARES
// ================================================
const listaDeNumeros = [ 1, 3, 7, 8, 9, 10, 27, 13, 58, 16, 88 ];
const numeroPar = [];
const numeroImpar = [];

for ( let i = 0; i < listaDeNumeros.length; i++ ) {
    const isNumeroPar = listaDeNumeros[ i ];

    if ( isNumeroPar % 2 === 0 ) {
        numeroPar.push( listaDeNumeros[ i ] );
    } else {
        numeroImpar.push( listaDeNumeros[ i ] );
    }
}
console.log( numeroPar );
console.log( numeroImpar );