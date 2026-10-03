// --- Objetos: Criação, Manipulação e Métodos ---
const primeiroObjeto = {
    nome: 'Perry o Gato',
    idade: 8,
    especie: 'Gato'
};
console.log( primeiroObjeto.nome );
console.log( primeiroObjeto.idade );
console.log( primeiroObjeto.especie );
console.log( primeiroObjeto );

primeiroObjeto.peso = '4 kg';
console.log( primeiroObjeto );

delete primeiroObjeto.especie;
console.log( primeiroObjeto );

const objetoComMetodo = {
    nome: 'Bruno Daniel',
    idade: 32,

    apresentarse: function () {
        console.log( `Meu nome é ${ this.nome } e 
            tenho ${ this.idade } anos de idade.` 
        );
    }
};
objetoComMetodo.apresentarse();

objetoComMetodo.apresentarse = function () {
    console.log( `Sou ${ this.nome }` );
};
objetoComMetodo.apresentarse();

console.log( primeiroObjeto[ 'nome' ] );
primeiroObjeto.nome = 'Kat Perry';
console.log( primeiroObjeto );

// --- Classes: Instanciação e Múltiplos Objetos ---
class Ninja {
    nome;
    idade;
    patente;
    aldeia;

    apresentarse() {
        console.log( `Meu nome é ${ this.nome }, tenho 
            ${ this.idade } anos, sou um ${ this.patente } 
            da aldeia da ${ this.aldeia }.` 
        );
    }
}

const naruto = new Ninja();
naruto.nome = 'Naruto Uzumaki';
naruto.idade = 12;
naruto.patente = 'Genin';
naruto.aldeia = 'Folha';

const sasuke = new Ninja();
sasuke.nome = 'Sasuke Uchiha';
sasuke.idade = 12;
sasuke.patente = 'Genin';
sasuke.aldeia = 'Folha';

const gaara = new Ninja();
gaara.nome = 'Gaara do Deserto';
gaara.idade = 12;
gaara.patente = 'Genin';
gaara.aldeia = 'Areia';

const kankuro  = new Ninja();
kankuro.nome = 'Kankuro';
kankuro.idade = 14;
kankuro.patente = 'Genin';
kankuro.aldeia = 'Areia';

naruto.apresentarse();
sasuke.apresentarse();
gaara.apresentarse();
kankuro.apresentarse();

// --- Classes: Construtores e Processamento de Dados ---
class Pessoa {
    nome;
    sobrenome;
    idade;
    genero;
    anoDeNascimento;

    constructor( nome, sobrenome, idade, genero ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.genero = genero;
        this.anoDeNascimento = 2026 - idade;
    }

    apresentarse() {
        return `Olá, meu nome é ${ this.nome } ${ this.sobrenome }, 
        tenho ${ this.idade } anos, sou do gênero ${ this.genero } 
        e nasci no ano de ${ this.anoDeNascimento }.`;
    }
}

const brunodaniel = new Pessoa( 'Bruno', 'Daniel', 32, 'masculino' );
console.log( brunodaniel.apresentarse() );

// --- POO: Lógica de Negócio e Comparação entre Objetos ---
function compararNinja( ninja1, ninja2 ) {
    if ( ninja1.idade > ninja2.idade ) {
        console.log( `${ ninja1.nome } é mais velho do 
            que o ${ ninja2.nome }.` 
        );
    } else if ( ninja1.idade < ninja2.idade ) {
        console.log( `${ ninja2.nome } é mais velho do 
            que o ${ ninja1.nome }.` 
        );
    } else {
        console.log( `${ ninja1.nome } e ${ ninja2.nome } 
            têm a mesma idade.` 
        );
    }
}

class Akatsuki {
    nome;
    idade;

    constructor( nome, idade ) {
        this.nome = nome;
        this.idade = idade;
    }
}

const itachi = new Akatsuki( 'Itachi', 21 );
const nagato = new Akatsuki( 'Nagato', 35 );
compararNinja( itachi, nagato );

// ================================================
// DESAFIO: CLASSE CARRO E CÁLCULO DE GASTO
// ================================================

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor( marca, cor, gastoMedioPorKm ) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso( distanciaEmKm, precoCombustivel ) {
        const litrosConsumidos = distanciaEmKm * this.gastoMedioPorKm;
        const valorGasto = litrosConsumidos * precoCombustivel;

        return valorGasto;
    }
}

const gol = new Carro( 'Volkswagen', 'preto', 1 / 12 );
console.log( `O valor gasto pelo Gol foi de R$
    ${ gol.calcularGastoDePercurso( 130, 5.89 ).toFixed( 2 ) }` 
);
const crv = new Carro( 'Honda', 'Preto', 1 / 7 );
console.log( `O valor gasto pela CR-V foi de R$
    ${ crv.calcularGastoDePercurso( 130, 5.89 ).toFixed( 2 ) }` 
);

// ================================================
// DESAFIO: CLASSE PESSOA E CÁLCULO DE IMC
// ================================================
class Eldianos {
    constructor( { nome, altura, peso } ) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc() {
        const calculoImc = this.peso / ( this.altura * this.altura );
        return calculoImc;
    }

    classificarImc() {
        const imc = this.calcularImc();

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
}

const erenyeager = new Eldianos( {
    nome: 'Eren Jaeger',
    altura: 1.83,
    peso: 82
} );
console.log( `Olá, meu nome é ${ erenyeager.nome } e 
    meu IMC se enquadra no ${ erenyeager.classificarImc() }` 
);

const mikasaackerman = new Eldianos( {
    nome: 'Mikasa Ackerman',
    altura: 1.76,
    peso: 68
} );
console.log( `Olá, meu nome é ${ mikasaackerman.nome } e 
    meu IMC se enquadra no ${ mikasaackerman.classificarImc() }` 
);

const arminarlert = new Eldianos( {
    nome: 'Armin Arlert',
    altura: 1.68,
    peso: 55
} );
console.log( `Olá, meu nome é ${ arminarlert.nome } e 
    meu IMC se enquadra no ${ arminarlert.classificarImc() }` 
);

const jose = new Eldianos( {
    nome: 'José',
    altura: 1.75,
    peso: 120
} );
console.log( `Olá, meu nome é ${ jose.nome } e meu 
    IMC se enquadra no ${ jose.classificarImc() }` 
);