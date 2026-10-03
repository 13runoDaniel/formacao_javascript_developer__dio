# Resumo de Estudos: Fundamentos e Arquitetura em JavaScript

Guia rápido de referência para conceitos fundamentais de lógica de programação e sintaxe em JavaScript.

---

## 1. Variáveis (`let` e `const`)
Espaços na memória do computador usados para armazenar dados que serão reutilizados ao longo do programa.

* **`let`:** Cria uma variável cujos valores podem ser alterados (mutáveis) ao longo da execução do código.
* **`const`:** Cria uma variável de valor fixo que não pode ser alterada após a sua atribuição inicial (imutável). É a mais recomendada para valores que não mudam.

---

## 2. Operadores
Símbolos especiais usados para realizar operações com os dados das variáveis.

* **Operador de Atribuição (`=`):** Utilizado para atribuir ou atualizar o valor de uma variável (ex: `const idade = 25`).
* **Operadores Aritméticos:** Usados para cálculos matemáticos básicos e manipulação numérica:
  * `+` (Soma)
  * `-` (Subtração)
  * `*` (Multiplicação)
  * `/` (Divisão)
  * `%` (Módulo / Resto da Divisão): Retorna o resto restante de uma divisão inteira (muito utilizado para verificar se números são pares, ímpares ou divisíveis por outros valores).
* **Operadores de Igualdade (`==` vs `===`):**
  * `==` (Igualdade fraca): Compara valores convertendo os tipos se necessário (ex: `'10' == 10` resulta em verdadeiro).
  * `===` (Igualdade estrita): Compara tanto o valor quanto o tipo de dado, sendo a prática mais segura e recomendada (ex: `'10' === 10` resulta em falso).
* **Operador Lógico NÃO (`!` - NOT):** Inverte o valor booleano de uma expressão (de verdadeiro para falso e vice-versa).
* **Operador Lógico E (`&&` - AND):** Retorna verdadeiro apenas se **todas** as condições envolvidas forem verdadeiras.
* **Operador Lógico OU (`||` - OR):** Retorna verdadeiro se **pelo menos uma** das condições envolvidas for verdadeira.

---

## 3. Funções Globais / Utilitários
* **`console.log()`:** Função global utilizada para exibir mensagens, textos ou resultados de variáveis diretamente no console/terminal.

---

## 4. Métodos
* **`.toFixed()`:** Função interna associada a um tipo de dado (neste caso, números) que executa uma operação específica (ex: formatar casas decimais, `valor.toFixed(2)`).
* **`Math.pow()`:** Objeto matemático global com métodos úteis, sendo o `.pow(base, expoente)` utilizado para calcular a potenciação (ex: calcular a altura ao quadrado para o IMC: `Math.pow(altura, 2)`).

---

## 5. Estruturas Condicionais (`if`, `else if`, `else`)
Blocos de controlo de fluxo que permitem executar diferentes blocos de código com base em condições booleanas (verdadeiro ou falso).

* **`if`:** Executa o bloco de código se a condição inicial for verdadeira.
* **`else if`:** Permite testar novas condições caso a anterior tenha falhado.
* **`else`:** Executa um bloco de código alternativo caso nenhuma das condições anteriores seja verdadeira.

---

## 6. Funções
Blocos de código reutilizáveis projetados para realizar uma tarefa específica, permitindo modularizar o código, evitar repetições e organizar a lógica.

* **Declaração Básica:** Definidas com a palavra-chave `function`, seguidas de um nome, parâmetros entre parênteses e o bloco de código entre chavetas (ex: `function olaMundo() { ... }`). São executadas ao serem chamadas (invocadas), como `olaMundo();`.
* **Parâmetros e Argumentos:** Valores passados para dentro da função através dos parênteses para serem utilizados na sua execução interna.
* **Retorno de Valores (`return`):** Permite que a função devolva um resultado processado para quem a chamou, encerrando a execução da mesma.
* **Modularização:** Prática de dividir o código em pequenas funções especializadas (ex: separar o cálculo matemático da lógica de exibição ou classificação, como no cálculo de IMC).
* **Funções como Cidadãs de Primeira Classe (First-Class Functions):** Em JavaScript, as funções são tratadas como qualquer outro tipo de dado. Podem ser atribuídas a variáveis, passadas como parâmetros ou reatribuídas (ex: `const minhaVariavel = minhaFuncao;`).
* **Funções Imediatamente Invocadas (IIFE - Immediately Invoked Function Expression):** Funções anónimas criadas e executadas imediatamente no mesmo momento em que são definidas, encapsuladas entre parênteses e seguidas por `();`. Muito úteis para isolar o escopo de variáveis.

---

## 7. Objetos e Classes (POO)
Estruturas avançadas para modelar dados do mundo real, agrupar comportamentos e reutilizar moldes de código.

* **Criação de Objetos:** Coleções dinâmicas de chaves e valores delimitadas por chavetas (ex: `const obj = { nome: 'Perry', idade: 8 }`).
* **Manipulação de Propriedades:** Capacidade de adicionar (`objeto.peso = '4 kg'`) ou apagar (`delete objeto.especie`) propriedades dinamicamente.
* **Notação de Ponto e Colchetes:** Acesso a propriedades via ponto (`objeto.nome`) ou colchetes (`objeto['nome']`).
* **Métodos:** Funções associadas a um objeto que definem o seu comportamento ou ações.
* **A Palavra-Chave `this`:** Referência interna ao objeto atual que está a executar o método, permitindo aceder às suas propriedades.
* **Classes (`class`):** Moldes genéricos usados para instanciar múltiplos objetos com a mesma estrutura (ex: `class Ninja { ... }` e `const naruto = new Ninja();`).
* **Construtores (`constructor`):** Método especial executado automaticamente ao criar uma instância com o operador `new`, utilizado para inicializar propriedades e processar dados iniciais (como o ano de nascimento ou cálculo de IMC).

---

## 8. Arrays e Estruturas de Repetição (`For`)
Estruturas para armazenamento de coleções ordenadas de dados e ciclos para automação de tarefas repetitivas.

* **Arrays (Vetores):** Listas ordenadas de elementos indexados numericamente a partir de `0` (ex: `const ninjas = [ 'Naruto', 'Sasuke' ]`).
* **Métodos de Manipulação de Arrays:**
  * `.push()`: Adiciona novos elementos ao final do array.
  * `.pop()`: Remove o último elemento do array.
  * `.shift()`: Remove o primeiro elemento do array.
  * `.length`: Propriedade que retorna a quantidade de elementos presentes no array.
* **Estrutura de Repetição (`for`):** Bloco utilizado para executar código repetidas vezes com base numa inicialização, condição e incremento (ex: percorrer itens de um array ou calcular médias).
* **Ciclos Aninhados (Nested Loops):** Utilização de um ciclo `for` dentro de outro para processamento cruzado de dados, como a geração de tabelas completas de multiplicação (tabuadas).

---

## 9. Arquitetura Modular (`Import` e `Export` - ES Modules)
Prática de dividir o código em múltiplos ficheiros para organizar melhor o projeto, separar responsabilidades e reutilizar funções entre diferentes módulos.

* **`export`:** Permite disponibilizar variáveis, funções ou objetos de um ficheiro para que possam ser utilizados noutros locais (ex: `export { gets, print };`).
* **`import`:** Permite carregar e utilizar funcionalidades exportadas de outros ficheiros no contexto atual (ex: `import { gets, print } from './exportacao.js';`).