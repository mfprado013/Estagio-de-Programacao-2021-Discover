# JavaScriprit

## O que é, Para que serve ?

JavaScript é uma linguagem de programação interpretada estruturada, de script que usamos juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias.

Nele conseguimos fazer comando para um site funcionar, aqui vamos mandar no computador, a gente manda o comando ele obedece, o JS é como um adestrador de computador, vamos poder comandar o que quisermos com JS, montar projetos legais e muito mais.

## Escrita e Sentido

Por que é importante a escrita ?
Simplesmente porque se a gente tiver alguma coisa escrita errada no comando ele não vai funcionar, uma virgula ou ponto errado nosso comando pode não funcionar, se a palavra tiver errada tamem, por isso precisamos de atenção.

Por que é importante o sentido?
Precisamos ser bem claro com o computador, se mandarmos um comando "faça um suco de laranja" podemos não ter resultado, precisamos ser bem claros e com muito sentido se quero um suco de laranja tenho que explicar "Pegue a laranja, tire o caldo da laranja em um copo, assim que tirar todo caldo o suco está pronto" sentido e claresa, então aqui ja vamos ter uma base para começar a trabalha com JS.

## Como Executar os comandos

Quando estivermos fazendo os comandos vamos precisar saber se esta indo bem, se está correto então vamos aprender como executar.

## Por CodePen site onde podemos roda HTML, CSS, JavaScript

## No visual studio code

EXEMPLO:

Vamos criar um arquivo HTML e colocar esse comando :

  <script>

  console.log('bem vindos ao starter')
  
 </script>

## Logo depois vamos pelo navegador com f12 onde vamos abrir o devtoolsconsole.log('Bem vindos ao Starter') - codigo de execução

## Comentarios

Comentar em JS é importante ?
Sim, é importante ainda mais para quem está começando, em comentarios você pode a notar tudo e tambem marca lugares que você precisa volta depois, vamo ver como podemos comentar:

// barra barra serve para fazemos comentarios para ajudar

/\* esse ja para se formos usar mais de uma linha

-
-
-
-
-
-
-
-

exemplo

//console.log('Bem vindos ao Starter') - ingnora o codigo

## String

É uma cadeia de caracteres ou "string" é uma sequência de caracteres, geralmente utilizada para representar palavras, frases ou textos de um programa como por exemplo:

String

- = Cadeia de carateres
  " " = aspas duplas
  ' ' = aspas simples
  `` = template literals ou template strings

console.log("matheus")
console.log('matheus')
console.log(`matheus`)
console.log(1 + 1 )
console.log("matheus $(1+1)")

aqui estão maneiras como fazer as escritas, vamos entender como montar um texto para
leitura js

## Boolean

Boolean ou lógico, é um tipo de dado primitivo que possui dois valores, que podem ser considerados como 0 ou 1, falso ou verdadeiro, chamado boolean em homenagem a George Boole, que definiu um sistema de lógica algébrica, aqui simplesmente você vai fazer o computador te ajudar, dando resposta com falso ou verdadeiro.

## Underfined vs Null

- Underfined :
  Aqui são os valores indefinidos, arquivo que não contem valor, praticamente um arquivo em branco, como quando começamos um arquivo novo em alguns apps, geralmente esse novo arquivo vem com o nome de Underfined.

- Null :
  Aqui são os valores nulos, arquivo que não contem conteúdo, arquivo existe diferente do Underfined que não existe, aqui vai estar nulo.

## Array

Arrays são geralmente descritas como "lista de objetos", elas são basicamente objetos que contem múltiplos valores armazenados em uma lista, um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em poder acessar cada valor dentro da lista individualmente, se nós pegarmos uma série de produtos e seus preços armazenados em uma array.

Array (vetores)

- Uma lista
- Agrupamento de dado
-
- ["matheus",22]

## Object

Um objeto é uma coleção de dados ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções que são chamadas de propriedades e métodos quando estão dentro de objetos), aqui abaixo como podemos utilizar object:

- Object
- Objeto
- Propriedades / Atributos
- Funcionalidades / Metodos

(propriedades: "valor")

console.log({
name:"matheus",
idade:"22",
andar: function(){
console.log('andar')
}
})

## Variaveis

As variáveis são nomes simbólicos para os valores na sua aplicação, o nome das variáveis, chamados de identificadores, obedecem determinadas regras:

- JavaScript deve começar com uma letra
- Underline (\_)
- Cifrão ($)
- Caracteres subsequentes podem também ser números (0-9)
- Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).
- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável
- var
- let
- const

      Exemplo:

       ## <script>

      * var

      var clima = "quente"
      clima= "frio" /* aqui estamos usando a vareavel, alterando clima */

      console.log("clima")

      * let
      let clima = "quente"
      clima= "frio" /* podemos mudar qualquer coisa*/

      console.log(clima)

      * const
      const clima = "quente"
      clima= "frio"

      console.log(clima)
      /* Aqui ja não podemos alterar nada, aqui sempre vai ser constante */

  </script>

<script>

    let clima: 0  
      console.log(typeof clima)

</script>

<script>

    let clima = true // boolean
    clima= "" // string

    console.log(typeof clima)

</script>

<script>

    const clima = "true" // boolean
    console.log(typeof clima)

</script>

## Functions

O construtor Function cria um novo objeto Function chamar o construtor diretamente pode criar funções dinamicamente, mas sofre com problemas de segurança e desempenho semelhante, no entanto, diferentemente de eval, a Função construtora cria funções que executam somente no escopo global.

     function createPhrases() {
     console.log('A sociedade vai te ver como fracaço, mais siga em frente')
     console.log('Podemos tornar nossos sonhos reias, basta agir ao inves de sonhar')
     console.log('Hoje você estuda, amanhã você será o professor')

}

     // executar a função
    // rodar, chamar , invocar

// execute, run , call, invoke
createPhrases()

console.logo("fim do programa")

## Arrow

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

const sayMyName = () => {
console.log('Matheus')
}

sayMyName()

## CallBack

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

    function sayMyName(name) {

console.log('antes de executar a função callback)

(name)

console.log('depois da callback')
}

sayMyName(
() => {
console.log('estou em uma callback')
}
)

## Funções construtoras

Aqui temos exemplode funções construtoras:

/\*
Function () constructor

- expressão new
- criar um novo objeto
- this keyword
  \*/

function person(name){
this.name = name
this.walk = function (){
return this.name + "esta andando"
}
}
const matheus = new person("matheus")
const felipe = new person("felipe")
console.log(matheus.walk())
console.log(felipe.walk())

let name = new String("matheus")

console.log(name)

## Prototype

Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

     Prototype

     * prototype-based language
     * prototype chain
     * __proto__

- Prototype (prototipo) algo que está sendo criado pela primeira vez

- Tudo que formos fazer tem que ser encapsulado, por simbolos que utilizamos

- Existe varios tipos de prototipos na string

- Ele pode ser usado para numeros

- Os ultimos prototypes sempre vão ser os mais puros

- Nos temos varios dados que são embrulhados

## New

O operador new cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (built-in) que possuem uma função construtora.

    let Name = new String('matheus')
      Name.surName = "prado"
      let age = new Number(22)

console.log(Name.surName, age)

let name = new Date('1998-11-09')
console.log(date.**proto**)

## Delete

O deleteoperador JavaScript remove uma propriedade de um objeto; se não houver mais referências à mesma propriedade, ela será liberada automaticamente.

console.log(typeof "matheus")

    const person = {
      name: 'matheus',
      age: 22,

}

delete person.age

console.log(person)

## Aritmeticos

Operadores aritméticos tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico, os operadores aritméticos padrão são os de soma (+), subtração (-), multiplicação (\*) e divisão (/).

Estes operadores trabalham da mesma forma como na maioria das linguagens de programação quando utilizados com números de ponto flutuante (em particular, repare que divisão por zero produz um NaN.

## multiplicação \*

     - console.log(3 * 5)

## divisão /

     - console.log(12 / 2)

## soma +

     - console.log(40 + 30)

## subtração -

     - console.log(60 - 120)

## resto da divisão %

- let remainder
- remainder = 11 % 3
- console.log(remainder)

## incremento ++

- let increment = 0
- increment++
- console.log(increment++)//depois
- console.log(++increment)//antes

## decremento --

- let decrement = 0
- decrement--
- console.log(decrement--)
- console.log(--decrement)

## exponencial \*\*

    - console.log(2 ** 3)

## Operadores de atribuição (Assignment)

let x

console.log(x)

//assignment
x = 1

//addition assignment
x += 2

//subtraction assignment
x -= 1

//multiplication assignment
x \*= 2

//division assignment
x /= 2

//remainder, exponetiation
x %= 2
x \*\*= 2

## Procedência Operadores

De cima para baixo, do mais importante ao menos importante.

- grouping ( )
- negação e incremento ! ++ --
- multiplicação e divisão \* /
- adição e subtração + -
- relacional < <= > >=
- igualdade == != === !==
- AND &&
- OR ||
- condicional ?:
- assignment (atribuição) = += -= \*= %=

## If e Else
A estrutura condicional if/else é um recurso que indica quais instruções o sistema deve processar de acordo com uma expressão booleana, o sistema testa se uma condição é verdadeira e então executa comandos de acordo com esse resultado.
   
    console.log('lavar o copo')
      console.log('servir cafe')

## if . else
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

* if quando estiver em somente 1 linha de codigo mais não é recomentado, e mais indicado fazer dentro dos blocos

## Switch
O Switch testa o valor contido em uma variável e o compara com os valores fornecidos em cada aso, representados pela palavra reservada case, a estrutura switch compara o valor de cada caso com o da variável sequencialmente, e sempre que encontra um valor correspondente, executa o código associado ao caso.

  witch(expression) {
  case 'a':
    //codigo
    console.log('a')
     break
    case 'b':
      console.log('b')
    //codigo parea expression b 
    break
  default:
    console.log('default')
}


function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
      case '+':
          result = number1 + number2
          break
      case '-':
          result = number1 - number2 
          break
      case '*':
          result = number1 * number2
          break
      case '/':
          result = number1 / number2 
          break
      default:
          console.log('não implementado')
          break
  }

  return result
}

console.log(calculate(4, '%', 8))

## Try / Catch
Vamos usar try, porque estamos fazendo operação de conversão, é uma maneira mais robusta de tratar possíveis erros no momento da conversão, por exemplo, não é possível converter um caractere ? 
Por um número, mas  como a entrada de dados é liberada o usuário final poderá digitar algo errado, resultando em erro e quebra da execução do programa por falha, com o try podemos evitar esta queda brusca e então tratar o erro da melhor forma.

 function sayMyName(name = ''){
  if(name === '') {
     throw 'nome e obrigatorio'
  }
  console.log('depois do erro')
}
//try...catch
try {
   sayMyName( )
} catch(e){
  console.log(e)
}


console.log('após ao try/catch')

## For

// Estrutura de repetição
// for
//break - para a execução do loop
// continue - pula a execução do momento

for(let i = 1; i <= 10; i++){
  console.log(i)
}

for(let i = 1; i <= 10; i++){
 if(i === 5){
     break;

 }
 console.log(i)
 }

 ## While

 / Estrutura de repetção
//while
let i = 0
while (i < 10) {
  console.log(i)

  i++
}

// o while da limite no codigo para ele não deixa infinito

## Forof
// for ... of

let name = 'matheus'
let name = ['joão', 'paulo', 'pedro'] 

for(let name of names){
  console.log(name)

}

## ForIn
O laço for in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.