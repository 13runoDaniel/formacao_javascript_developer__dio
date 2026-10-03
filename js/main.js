console.log( 'Hello World' );

// --- Variáveis (Let e Const) ---
let variavelLet = 'Mutável';
console.log( variavelLet );
variavelLet = 'Pode ser alterado';
console.log( variavelLet );

const variavelConst = 'Imutável';
console.log( variavelConst );

// --- Operadores ---
const atribuicaoDeValor = 'Usado para atribuir valor =';
console.log( atribuicaoDeValor );

const soma = '+';
console.log( soma );

const subtracao = '-';
console.log( subtracao );

const multiplicacao = '*';
console.log( multiplicacao );

const divisao = '/';
console.log( divisao );

// --- Operações Matemáticas ---
const somarValor = 10 + 10;
console.log( somarValor );

const subtrairValor = 10 - 10;
console.log( subtrairValor );

const multiplicarValor = 10 * 10;
console.log( multiplicarValor );

const dividirValor = 10 / 10;
console.log( dividirValor );

// ================================================
// DESAFIO: CUSTO DE VIAGEM
// ================================================
const valorCombustivel = 6.79;
const kmPorLitro = 12;
const distanciaEmKm = 1288;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * valorCombustivel;
console.log( valorGasto.toFixed( 2 ) );

// --- Operadores de Igualdade (== vs ===) ---
const numeroTexto = '10';
const numeroNumero = 10;

const comparacaoFraca = numeroTexto == numeroNumero;
console.log( comparacaoFraca );

const comparacaoForte = numeroTexto === numeroNumero;
console.log( comparacaoForte );

// --- Operador NÃO (! - NOT) ---
const estaChovendo = false;
const fazSol = !estaChovendo;
console.log( 'Faz sol? ' + fazSol );

const temPermissao = true;
const estaBloqueado = !temPermissao;
console.log( 'Está bloqueado? ' + estaBloqueado );

// --- Operador E (&& - AND) ---
const temIdade = 18;
const possuiCarteira = true;
const podeConduzir = ( temIdade >= 18 ) && possuiCarteira;
console.log( 'Pode conduzir? ' + podeConduzir );

// --- Operador OU (|| - OR) ---
const isFeriado = false;
const isFimDeSemana = true;
const podeDescansar = isFeriado || isFimDeSemana;
console.log( 'Pode descansar? ' + podeDescansar );

// --- Variáveis e Booleanos (Condicionais) ---
const booleanVerdadeira = true;
console.log( booleanVerdadeira );
const booleanFalsa = false;
console.log( booleanFalsa );

let numero = 10;
let isNumeroPar = ( numero % 2 ) === 0;
console.log( isNumeroPar );

numero = 5;
isNumeroPar = ( numero % 2 ) === 0;
console.log( isNumeroPar );

const numeroBase = 15;
const numeroDivisivelPorCinco = ( numeroBase % 5 ) === 0;

if ( numeroDivisivelPorCinco ) {
    console.log( 'Sim' );
} else {
    console.log( 'Não' );
}

const idade = 32;

if ( idade <= 12 ) {
    console.log( 'Criança' );
} else if ( idade <= 17 ) {
    console.log( 'Adolescente' );
}  else if ( idade <= 24 ) {
    console.log( 'Jovem' );
} else {
    console.log( 'Adulto' );
}

// ================================================
// DESAFIO: CUSTO DE VIAGEM COM CONDICIONAIS
// ================================================
const valorCombustivelGasolina = 6.99;
const valorCombustivelEtanol = 4.89;
const kmPorLitroDeCombustivel = 12;
const distanciaEmKmDaViagem = 100;
const combustivelUtilizado = 'etanol';

if ( combustivelUtilizado === 'gasolina' ) {
    const litrosConsumidos = distanciaEmKmDaViagem / kmPorLitroDeCombustivel;
    const valorTotal = litrosConsumidos * valorCombustivelGasolina;
    console.log( 'O valor total a ser pago é de R$' + 
        valorTotal.toFixed( 2 ) + ' abastecido com gasolina' 
    );
} else {
    const litrosConsumidos = distanciaEmKmDaViagem / kmPorLitroDeCombustivel;
    const valorTotal = litrosConsumidos * valorCombustivelEtanol;
    console.log( 'O valor total a ser pago é de R$' + 
        valorTotal.toFixed( 2 ) + ' abastecido com etanol' 
    );
}

// ================================================
// DESAFIO: CALCULO DE MEDIA E CLASSIFICACAO
// ================================================
const nota1 = 10;
const nota2 = 7;
const nota3 = 4;

const somarNotas = nota1 + nota2 + nota3;
const mediaFinal = somarNotas / 3;
console.log( mediaFinal );

if ( mediaFinal < 5 ) {
    console.log( 'Reprovação' );
} else if ( mediaFinal >= 5 && mediaFinal <= 7 ) {
    console.log( 'Recuperação' );
} else {
    console.log( 'Passou de semestre' );
}

// ================================================
// DESAFIO: CALCULO DE IMC E CLASSIFICACAO
// ================================================
const altura = 1.53;
const peso = 62;
const resultadoImc = peso / ( altura * altura );
console.log( resultadoImc.toFixed( 2 ) );

if ( resultadoImc < 18.5 ) {
    console.log( 'Abaixo do peso' );
} else if ( resultadoImc >= 18.5 && resultadoImc <= 25 ) {
    console.log( 'Peso normal' );
} else if ( resultadoImc >= 25 && resultadoImc <= 30 ) {
    console.log( 'Acima do peso' );
} else if ( resultadoImc >= 30 && resultadoImc <= 40 ) {
    console.log( 'Obeso' );
} else {
    console.log( 'Obesidade grave' );
}

// ================================================
// DESAFIO: CONDICAO DE PAGAMENTO
// ================================================
const valorDoProduto = 500;
const pagamentoDebito = .1;
const pagamentoDinheiroOuPix = .15;
const pagamentoDuasParcelas = valorDoProduto;
const pagamentoComMaisDeDuasParcelas = .1;
const metodoPagamento = 2;

if ( metodoPagamento === 1 ) {
    const calculoDeDesconto = valorDoProduto * pagamentoDebito;
    const valorPendente = valorDoProduto - calculoDeDesconto;
    console.log( 'O valor a ser pago é de R$' + valorPendente.toFixed( 2 ) );
} else if ( metodoPagamento === 2 ) {
    const calculoDeDesconto = valorDoProduto * pagamentoDinheiroOuPix;
    const valorPendente = valorDoProduto - calculoDeDesconto;
    console.log( 'O valor a ser pago é de R$' + valorPendente.toFixed( 2 ) );
} else if ( metodoPagamento === 3 ) {
    const valorPendente = pagamentoDuasParcelas;
    console.log( 'O valor a ser pago é de R$' + valorPendente.toFixed( 2 ) );
} else {
    const calculoDeJuros = valorDoProduto * pagamentoComMaisDeDuasParcelas;
    const valorPendente = valorDoProduto + calculoDeJuros;
    console.log( 'O valor a ser pago é de R$' + valorPendente.toFixed( 2 ) );
}