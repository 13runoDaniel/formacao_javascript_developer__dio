// ================================================
// DESAFIO: CLASSIFICAÇÃO DE MÉDIA ESCOLAR
// ================================================
import { print, gets } from './funcao_auxiliar.js';

const mediaDoAluno = gets();

if ( mediaDoAluno >= 0 && mediaDoAluno < 5 ) {
    print( 'Reprovado' );
} else if ( mediaDoAluno >= 5 && mediaDoAluno < 7 ) {
    print( 'Recuperação' );
} else if ( mediaDoAluno >= 7 && mediaDoAluno <= 10 ) {
    print( 'Aprovado' );
} else {
    print( 'Informe um número válido' );
}