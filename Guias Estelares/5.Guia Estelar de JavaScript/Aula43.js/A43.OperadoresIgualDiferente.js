//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta á comparação

let one = 1 
let two = 2 

// ==  igual a 
console.log(two == 1 ) //FALSO
console.log(one == "1") //VERDADEIRO

// != diferente de
console.log(one != two)//VERDADEIRO
console.log(one != 1)//FALSO
console.log(one != "1")//FALSO


// === estritamente igual a 
console.log( one === "1") //falso - string
console.log( one === 1 ) // verdadeiro - number

// !== estritamente diferente de 
console.log (two !== "2") // falso - mas a expressão e verdadeira
console.log (two !== 2 ) // falso


// > maior que 
console.log(one > two)//false

// >= Maior igual a 
console.log(one >= 1)//true
console.log(two >= 1)//true

//< menor que
console.log(one < two )//true

//<= menor igual a 
console.log(one <= two)//true
console.log(one <= 1)//true
console.log(one <= 0)//false










