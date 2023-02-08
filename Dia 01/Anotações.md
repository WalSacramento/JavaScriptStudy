# JavaScriptStudyWeek

## Dia 01

- Revisão dos conceitos básicos de JavaScript, como variáveis, operadores, tipos de dados e estruturas de controle.

Variáveis:
Em JavaScript, as variáveis são usadas para armazenar valores. Elas podem ser declaradas com a palavra-chave var, let ou const e podem conter diferentes tipos de dados, como números, strings, objetos, entre outros. Por exemplo:

var nome = "Lucas";
let idade = 25;
const PI = 3.14;

Operadores:
Operadores são símbolos que realizam operações matemáticas ou lógicas em valores ou variáveis. Alguns dos operadores mais comuns em JavaScript incluem o operador de adição (+), subtração (-), multiplicação (\*), divisão (/), módulo (%), igualdade (==) e identidade (===).

Tipos de dados:
JavaScript suporta diferentes tipos de dados, como números, strings, booleanos, objetos e arrays. Por exemplo:

const nome = "Lucas"; // string
const idade = 25; // number
const casado = false; // boolean
const hobbies = ["leitura", "esportes", "viagens"]; // array
const pessoa = {nome: "Lucas", idade: 25}; // objeto

Estruturas de controle:
As estruturas de controle são utilizadas para controlar o fluxo de execução de um programa. Algumas das estruturas de controle mais comuns em JavaScript incluem if/else, switch/case e loops (for, for...in, for...of, while, do...while). Por exemplo:

const idade = 25;

if (idade >= 18) {
console.log("Você é maior de idade");
} else {
console.log("Você é menor de idade");
}

const diaSemana = "quarta";

switch (diaSemana) {
case "segunda":
console.log("Hoje é segunda");
break;
case "terça":
console.log("Hoje é terça");
break;
case "quarta":
console.log("Hoje é quarta");
break;
default:
console.log("Dia da semana não reconhecido");
}

for (let i = 0; i < 10; i++) {
console.log(i);
}

- Introdução às funções e como elas são utilizadas para modularizar o código.

Funções são blocos de código reutilizáveis que podem ser invocados a qualquer momento. Elas são definidas com a palavra-chave function seguida pelo nome da função e uma lista de argumentos entre parênteses. O corpo da função é escrito entre chaves {} e pode conter uma ou mais linhas de código. Quando uma função é invocada, os valores dos argumentos são passados para ela e o código dentro do corpo da função é executado.

Funções de arrow, também conhecidas como arrow functions, são uma forma mais concisa de escrever funções em JavaScript. Elas são definidas usando a sintaxe (arg1, arg2, ...) => expression. Se o corpo da função é composto por uma única expressão, então o retorno é implícito. Caso contrário, o corpo da função deve ser envolto por chaves {} e a palavra-chave return deve ser usada para retornar o valor.

Algumas vantagens das funções de arrow incluem uma sintaxe mais concisa, um escopo de this mais claro e a capacidade de ser usado como uma expressão. No entanto, é importante ter em mente que funções de arrow não possuem seu próprio this, o que significa que ele herda o this de seu escopo pai. Isso pode ser útil em certas situações, mas pode ser confuso em outras.

Em resumo, ambas as funções e funções de arrow são ferramentas úteis para criar código reutilizável em JavaScript, mas é importante escolher o tipo certo de acordo com suas necessidades.

- Prática com exercícios simples de lógica de programação.
