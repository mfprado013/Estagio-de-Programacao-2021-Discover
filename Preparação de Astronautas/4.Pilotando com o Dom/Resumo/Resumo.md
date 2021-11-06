# DOM (Document Object Model)

* É o HTML convertido para um objeto JavaScript
* API que representa e interage com o HTML
* Estrutura de dados de dados do tipo árvore, criada pelo browser
* Propriedades e métodos

## Para que ?

* JavaScript usa a DOM para se conectar ao HTML
* Manipular o HTML com o JavaScript
* Você só programa pra WEB porque existe a DOM

 - <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
  <body>
    <h1>Meu Blog</h1>
  </body>
</html> 

## getElementById
* Como já diz o nome, é uma função do JavaScript que serve para retornar um elemento do DOM que é identificado por um ID específico.

  - <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
</body>
    <script src="./1.getbyld.js"></script>
</html>

- // getElementByld()

const elemnet = document.getElementById('blog-title')
console.log(elemnet)

## getElementsByClassname
* É um comando para retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada.
 - <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu Blog - Discover</title>
  </head>
  <body>
    <h1>Meu Blog</h1>
  </body>
  <script src="./2.getElementsByClassName.js"></script>
</html>

-// getElementsByClassName()

const element = document.getElementsByClassName('one');
console.log(element)

## getElementsByTagName
* É um comando para retorna uma coleção de objetos através das tags html, se você quiser utilizar o document. querySelector() e retornar uma coleção, existe o comando document.
 - <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
</body>
    <script src="./3.getElementsByTagName.js"></script>
</html>

// getElementsByTagName()

// Tag meta
const element = document.getElementsByTagName('meta')
console.log(element)

// Tag body 
const element = document.getElementsByTagName('body')
console.log(element)

// Tag head
const element = document.getElementsByTagName('head')
console.log(element)

## querySelector
* É um comando para retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.
- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1 class="one">Meu Blog</h1>
</body>
    <script src="./4.querySelector.js"></script>
</html>

- // querySelector()

const element =  document.querySelector('meta')
console.log(element)

## querySelectorAll
* É um comando para retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1 class="one">Meu Blog</h1>
</body>
    <script src="./5.querySelectorAll.js"></script>
</html>

// querySelectorAll()

const element =  document.querySelectorAll('.one')
console.log(element)

const elements =  document.querySelectorAll('#one')
console.log(element)

elements.forEach(el => console.log(el))

## TextContent
* Essa propriedade textContent da interface Node representa o conteúdo de texto de um nó e dos seus descendentes. Nota: textContent e HTMLElement. innerText são facilmente confundidos, mas os dois possuem importantes diferenças entre sí.

 - <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
</body>
    <script src="./1.TextContent.js"></script>
</html>

- // Manipulando conteúdo
// textContent

const element = document.querySelector('h1')

element.textContent = "Olá Devs!"

console.log(element.textContent)

## innerText
* É utilizado na manipulação do DOM, o innerHTML retorna todo o texto e o html que existem no elemento. Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
</body>
    <script src="./2.innerText.js"></script>
</html>

- // Manipulando conteúdo
// innerText

const element = document.querySelector('h1')

element.innerText = "Olá Devs!"

## innerHTML
* O innerHTML retorna todo o texto e o html que existem no elemento. Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
</body>
    <script src="./3.innerHTML.js"></script>
</html>

-// Manipulando conteúdo
// innerHTML

const element = document.querySelector('h1')

element.innerHTML= "Olá Devs! <small>!!!</small>"

## Value
* Neste atributo especifico que o usuário deve preencher o campo com um valor antes de enviar o formulário. Ele não pode ser usado quando o atributo type está definido como hidden , image ou um tipo de botão ( submit , reset ou button ).
-<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
  <h1>Meu Blog</h1>
  <input type="text">
</body>
    <script src="./4.Value.js"></script>
</html>

- // Manipulando conteúdo
// value

const element = document.querySelector('input')

element.value = "Valor que eu quiser"

const element = document.querySelector('input')

console.log(element.value)
element.value = "outro valor"

## Style
* O elemento HTML style contém informações de estilo para um documento ou uma parte do documento.
-<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./1.AlterandoEstilocomStyle.js"></script>
</html>

-// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f302"
console.log(element.style.backgroundColor)

## classList
*  É uma propriedade somente de leitura que retorna uma coleção DOM ativa dos atributos de classe do elemento, usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de element. className.
- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>

  <style>
    .active {
      color: red;
    }
  
    .green {
       background-color: green;
    }
  </style>
</head>
<body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./2.classList.js"></script>
</html>

-// Alterando estilos
// ClassList
const element = document.querySelector('body')

element.classList.add['active', 'green']
console.log(element.classList)
//element.classList.remove('active')
element.classList.toggle('active')

## parentElemente
* Essa propriedade parentElement retorna o elemento pai do elemento especificado, na maioria dos casos, não importa qual a propriedade que você usa, no entanto, parentNode é provavelmente o mais popular, propriedade é somente de leitura.

## parentNode
* É uma propriedade DOM somente de leitura que retorna o nó (node) parente de um Node referenciado na árvore DOM e se torna extremamente aconselhável que você conheça a estrutura DOM para um melhor estudo e aprendizado.

- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
    <header>
      <h1>Meu Blog</h1>
    </header>

    <script src="./1.parentELementeparentNode.js"></script>
  </body>
</html>

- // Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body')

console.log(element.parentNode)

## Elementos Filhos
* // Navegando pelos elementos
// childNodes children
const el = document.querySelector('body')

// firstChild firstElementChild
console.log(el.children)
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

## Elementos Irmãos
* // Navegando pelos elementos

const el = document.querySelector('header')
// nextSibling previousElementSibling
console.log(el.nextElementSibling)

//previousSibling previousElementSibling
console.log(el.previousSibling)

console.log(el.previousElementSibling)

## insertBefore
* Nessa função insertBefore() recebemos dois argumentos, o primeiro é o nó a ser inserido, o segundo argumento é o nó antes do qual esse nó vai ser inserido. Esse método é chamado no nó que vai ser o pai do novo nó e o segundo argumento deve ser filho desse nó pai
- <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog - Discover</title>
</head>
<body>
    <header>
      <h1>Meu Blog</h1>
    </header>

    <script src="./2.insertBefore.js"></script>
  </body>
</html>

-// Adicionando elementos
const div = document.createElement('div')
div.inserText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div,script.nextSibling)

## Eventos
* São ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado. Por exemplo, se o usuário clica em um botão numa pagina web, você pode querer responder a esta ação mostrando na tela uma caixa de informações. Nesse artigo, nós iremos discutir sobre alguns conceitos importantes envolvendo eventos, e veremos como eles funcionam nos browsers. Isto não será algo cansativo para estudar; somente o que você precisar saber até agora.