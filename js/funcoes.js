// --- Funções e Parâmetros ---
function olaMundo() {
    console.log( 'Hello World' );
}
olaMundo();

function funcaoComParametro( parametroInformado ) {
    console.log( parametroInformado );
}
funcaoComParametro( 'Olá, mundo' );

// --- Retorno de Valores ---
function funcaoComRetorno( valor ) {
    return valor * valor;
}

const valorAoQuadrado = funcaoComRetorno( 5 );
console.log( valorAoQuadrado );

function incrementarJuros( valor, percentualJuros ) {
    const valorDoAcrescimo = ( percentualJuros / 100 ) * valor;
    
    return valor + valorDoAcrescimo;
}
console.log( incrementarJuros( 100, 10 ) );

// --- Modularização: Desafio IMC ---
function calcularImc( altura, peso ) {
    return peso / Math.pow( altura, 2 );
}    

function classificarImc( imc ) {
    if ( imc < 18.5 ) {
        return 'Abaixo do peso';
    } else if ( imc >= 18.5 && imc <= 25 ) {
        return 'Peso normal';
    } else if ( imc >= 25 && imc <= 30 ) {
        return 'Acima do peso';
    } else if ( imc >= 30 && imc <= 40 ) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function mainImc() {
    const altura = 1.66;
    const peso = 65;

    const imc = calcularImc( altura, peso );
    console.log( classificarImc( imc ) );
}
mainImc();

// --- Funções como Cidadãs de Primeira Classe ---
console.log( mainImc );

const variavelMain = mainImc;
variavelMain();

mainImc = function () {
    console.log( 'Alterado a função' );
};
mainImc();

// --- Funções Imediatamente Invocadas (IIFE) ---
( function () {
    const altura = 1.66;
    const peso = 73;

    const imc = calcularImc( altura, peso );
    console.log( 'Função imediatamente invocada: ' + classificarImc( imc ) );
} )();

// ================================================
// DESAFIO: FUNCAO INFORMAR NOME
// ================================================
function escreverNome( nome ) {
    console.log( 'Meu nome é ' + nome );
}
escreverNome( 'Bruno Daniel' );

// ================================================
// DESAFIO: CLASSIFICAÇÃO POR FAIXA ETÁRIA
// ================================================
function classificarFaixaEtaria( idade ) {
    if ( idade < 14 ) {
        return 'É criança, pois tem ' + idade + ' anos.';
    } else if ( idade <= 17 ) {
        return 'É adolescente, pois tem ' + idade + ' anos.';
    } else if ( idade <= 64 ) {
        return 'É adulto, pois tem ' + idade + ' anos.';
    } else {
        return 'É idoso, pois tem ' + idade + ' anos.';
    }
}

function mainIdade() {
    const informarIdade = 32;

    const resultado = classificarFaixaEtaria( informarIdade );
    console.log( resultado );
}
mainIdade();

// ================================================
// DESAFIO: INVOCANDO FUNCAO DENTRO DA FUNCAO
// ================================================
function meuNome( nome ) {
    return 'Olá, meu nome é ' + nome;
}

function mainFrase() {
    console.log( meuNome( 'Perry' ) + ' e eu gosto do sofá' );
}
mainFrase();

// ================================================
// DESAFIO: CALCULAR DESCONTO
// ================================================
function aplicarDesconto( valor, desconto ) {
    return valor - ( valor * ( desconto / 100 ) );
}

function aplicarJuros( valor, taxa ) {
    return valor + ( valor * ( taxa / 100 ) );
}

function mainPagamento( formaDePagamento ) {
    const valorDoProduto = 100;

    if ( formaDePagamento === 1 ) {
        console.log( aplicarDesconto( valorDoProduto, 10 ) );
    } else if ( formaDePagamento === 2 ) {
        console.log( aplicarDesconto( valorDoProduto, 15 ) );
    } else if ( formaDePagamento === 3 ) {
        console.log( valorDoProduto );
    } else if ( formaDePagamento === 4 ) {
        console.log( aplicarJuros( valorDoProduto, 10 ) );
    } else {
        console.log( 'Selecionar método de pagamento' );
    }
}
mainPagamento( 3 );