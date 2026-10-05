// ================================================
// DESAFIO: FILTRO DE VALORES PARES E ÍMPARES
// ================================================
import { print, gets1 } from './funcao_auxiliar.js';

const n = gets1();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for ( let i = 0; i < n; i++ ) {
    const numeroInformado = gets1();

    if ( numeroInformado % 2 === 0 ) {
        if ( maiorNumeroPar === null 
            || numeroInformado > maiorNumeroPar ) {
            maiorNumeroPar = numeroInformado;
        }
    } else {
        if ( menorNumeroImpar === null 
            || numeroInformado < menorNumeroImpar ) {
            menorNumeroImpar = numeroInformado;
        }
    }
}

print( `Maior número par: ${maiorNumeroPar}` );
print( `Menor número impar: ${menorNumeroImpar}` );