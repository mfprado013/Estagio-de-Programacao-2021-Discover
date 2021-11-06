/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível

*/

/* ### Transformar notas escolares 

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

let score = 60

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
  scoreFinal = "A"
} else if (scoreB) {
  scoreFinal = "B"
} else if (scoreC) {
  scoreFinal = "C"
} else if (scoreD) {
  scoreFinal = "D"
} else if (scoreF) {
  scoreFinal = "F"
}

console.log(scoreFinal)
}


console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(22))
console.log(getScore(17))
console.log(getScore(30))
console.log(getScore(80))
console.log(getScore(55))
console.log(getScore(67))