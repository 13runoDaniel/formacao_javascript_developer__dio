// ================================================
// DESAFIO: CÁLCULO DE SALÁRIO LÍQUIDO
// ================================================
import { print, gets2 } from './funcao_auxiliar.js';

const salarioBruto = gets2();
const valorBeneficios = gets2();

function calcularPorcentagem( valor, percentual ) {
    return valor * ( percentual / 100 );
}

function getAliquota( salario ) {
    if  ( salario >= 0 && salario <= 1100 ) {
        return 5;
    } else if ( salario >= 1100 && salario <= 2500 ) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = getAliquota( salarioBruto );

const valorImposto = calcularPorcentagem( salarioBruto, aliquotaImposto );

const valorParaPagar = salarioBruto - valorImposto + valorBeneficios;

print( valorParaPagar );