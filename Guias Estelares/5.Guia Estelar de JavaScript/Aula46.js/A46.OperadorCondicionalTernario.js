// Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//condição então valor 1 se não valer 2
// condition ? value1 : value2

//Exemplos

//Cafe da manha top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'cafe top' : 'cafe ruim'

let pao = false
let queijo = true

const niceBreakfast = pao || queijo ? 'cafe top' : 'cafe ruim'


// maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive': "can't drive"
console.log(canDrive)
