// --- Arquitetura Modular: Import e Export (ES Modules) ---
import { gets, print } from './exportacao.js';

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for ( let i = 0; i < quantidadeDeAlunos; i++ ) {
    const numeroSorteado = gets();

    if ( numeroSorteado > maiorValorEncontrado ) {
        maiorValorEncontrado = numeroSorteado;
    }
}
print( maiorValorEncontrado );