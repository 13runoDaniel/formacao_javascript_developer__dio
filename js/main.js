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