// 1. Declare uma variável de nome weight
//var weight;

// 2. Que tipo de dado é a variável acima?
//console.log(typeof weight)
/*
   3. Declare uma variável e atribua valores para cada um dos dados:
     * name: String
     * age: Number (integer)
     * stars: Number (float)
     * isSubscribed: Boolean
    
*/

var name = 'matheus'
var age = 22
var stars = 5.8
var isSubscribed = true 

/* 4. A variável student abaixo é de que tipo de dados ?


   4.1 Atribua a ela as mesmas propriedades e valores do exercícios 3.

   4.2 Mostre no console a seguinte mensagem:
     
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

    */

var students = {

  name : 'matheus',
  age : 22,
  weight : 109,
  isSubscribed : true,

  };

//console.log('${students.name} de idade ${students.age} peso ${students.weight} kg.')

/*
  5. Declare uma variável do tipo Array, de nome student e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
//var students = []

/* 
 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student de questão 4. (Não copiar e dcolar o objeto, mas usar objeto criado e inserir ele no Array)
 */

students = [
  students 
  ]

 //console.log(students)

 /*
   7. Coloque no console o valor da posiçao zero do Array acima
   */
 // console.log(students[0])

/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/

const Cris = {
  name: "Cris",
  age: 39;
  weight: 78.9,
  isSubscribed: true,
}

students = [
  students,
  Cris
]
console.log(students)  
//students[1] = Cris

/*
9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Apos a sua resposta, rode o código e veja se acertou

 console.log(a)
 var a = 1
*/
 // esse codigo vai dar como resposta underfined, pois não nada criado, so tem o codigo, e tambem o codigo esta inverso  

console.log(a)
var a = 1 

certo 

var a = 1 
console.log(a)