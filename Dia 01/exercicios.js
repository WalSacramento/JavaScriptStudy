//Criar um programa que calcule a média de notas de uma lista de alunos.

let aluno = prompt('Digite o nome do aluno:')

let quantidadeNotas = prompt('Digite a quantidade de notas do aluno:')

let notasAux = 0

for (let index = 1; index <= parseInt(quantidadeNotas); index++) {
  let notas = prompt('Digite a nota de numero ' + index)

  notasAux = notas + notasAux
  console.log(notasAux)
}

const media = notasAux / parseInt(quantidadeNotas)
console.log('A média do aluno ' + aluno + ' é:' + media)

//Desenvolver um jogo da adivinhação, onde o usuário tem que adivinhar um número gerado pelo computador.
