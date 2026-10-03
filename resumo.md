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

---

## 5. Estruturas Condicionais (`if`, `else if`, `else`)
Blocos de controlo de fluxo que permitem executar diferentes blocos de código com base em condições booleanas (verdadeiro ou falso).

* **`if`:** Executa o bloco de código se a condição inicial for verdadeira.
* **`else if`:** Permite testar novas condições caso a anterior tenha falhado.
* **`else`:** Executa um bloco de código alternativo caso nenhuma das condições anteriores seja verdadeira.