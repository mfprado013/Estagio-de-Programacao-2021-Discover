## CSS
* O que entendo sobre CSS antes de fazer a aula 
   O  CSS é uma expanãousada para dar estilo na nossa estrura de programção, onde podemos brincar com as cores e estilos de diferentes para monta uma estrutura , aqui vamos deixa nosso sites mais bonitos esteticamentes e mais atraentes, precisamos sempre deixa ele bem chamativo e confortavel.

## Introdução do CSS
# Introdução 

## O que significa css ?
 * Cascading Style Sheet
 * Código para criar estilos no HTML
 * Não é uma linguagem de programação;
* É uma linguagem de style Sheet

## Vamos ao exemplo

<h1>Titulo da pagina</h1>

h1 {
  color: blue;
 }
 
 * Aqui entendi como funciona o CSS para que ele serve e a diferença entre ele eo HTML, HTML é a estrutura , CSS é a estilização da estrutura, CSS não é linguagem de programação como citado ali em cima e sim uma linguagem de estil, tabem percibi a difrença de codigo, por exemplo no HTML o h1 é representado por <h1>, ja no CSS é h1{}, no css vamos procura a estrura do HTML, cada linha de codiço vai ser chamada a  estilização. 
 ## Sobre comentarios
# Comentários

 * Não irá afetar o seu código
 * Ajuda a lembrar blocos de códigos
 * Deixa dicas para leitura
 * Ajuda outros a entenderem
 * Nunca esqueça de fechar um comentário aberto

 Comentários começam com `/*` e terminam com `*/`. 

 ``` css
 
 /* Básico */
/*-------------------------*/
body{
  font: lem/150% Helvertica, Arial, sans-serif;
  padding: lem;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em){
  /*let's special case the global font size on large screen or window, we increase the font size for better readability*/
  bpdy{
    font-size: 130%
  }
}

h1{ font-size: 1.5em;}

/* elementos especificos */
/* --------------------------------------*/

div p, #id:first-line{
  background-color: red;
  border-radius: 3px;
}

div p{
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```
* Você poderá usar para desabilitar partes do seu código

```css
/* special{
  color: red;
}*/

p{
  color: blue;
}
```
/* iniciantes e muito bom fazer bastante comentarios */
 

Aqui aprendi algumas formas de comentarios, e a importancia de comentar tambem, mostra como podemos desabilitar alguns codigos, tambem vi formataçoes, aprendi que é bem importante fazer comentario que esta començando 

## Anatomia CSS
# Anatomia

```css
h1{
  color: blue;
  font-size: 60px;
  background: gray;
}
```
* Selector
* Declaration
* Properties
* Property Value 

/* Aqui esta uma estrura de formatacão de titulo, h1 seria o selector , {} par de chaves seria declaration onde pesso que todos h1 que eu tiver em index recebam as informaçoes, color,font-size,background vao ser is properties e property value, segui um exemplo que teve na aula */

<h1>Titulo</h1>

h1{
  color: blue;
  font-size: 60px;
  background: gray;
}

/* Com esse comando mudamos a cor do Titulo e a cor de fundo do Titulo */

## Selectors CSS
# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros

<div id="container" class="m-40">
	<h1>Título</h1>
	<h2>Subtitulo</h2>
</div>

CSS
/* ID selector */
#container {
	width: 200px;
}

/* Class selector */
.m-40 {
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 {
	color: blue;
	font-size: 60px;
	background: gray;
}

/* Aqui começamos a fazer as formataçoes, ja comecei a gostar mais de css */  

<div id="container" class="m-40">
	<h1>Matheus</h1>
	<h2>Prado</h2>
</div>

#container {
	width: 400px;
}

.m-40 {
	margin: 20px;
}

h1, h2 {
	color: red;
	font-size: 60px;
	background: black;
}

/*---------------------------*/

<div id="container" class="m-40">
	<h1>Marvel</h1>
	<h2>DC</h2>
</div>

#container {
	width: 120px;
}

.m-40 {
	margin: 40px;
}

h1 {
	color: red;
	font-size: 80px;
	background: blue;
}

h2 {
	color: yellow;
	font-size: 60px;
	background: black;
}

/* ----------------------*/

<div id="container" class="m-40">
	<h1>Thor</h1>
	<h2>Zeus</h2>
</div>

#container {
	width: 80px;
}

.m-40 {
	margin: 120px;
}

h1 {
	color: blue;
	font-size: 100px;
	background: gray;
}

h2 {
	color: silver;
	font-size: 100px;
	background: blue;
}

## Box model
/* Box model
  aqui vamos aprender sobre caixas, vamos aprender os modelos de caixa e como usar */

  <h1>Marvel</h1> 
<p>Homem Aranha</p>
<button>Clique aqui</button>

h1{
  border: 3px solid black;
  margin: 40px;
  padding: 80px; 
  background: red;
}

p{
  border: 10px solid blue;
  margin: 70px;
  padding: 40px;
  background: red;
}

button {
  border: 4px solid ;
  margin: 1px;
  padding: 10px;
  background: silver
}

https://codepen.io/mfprado013/pen/LYjZdqO

## Estudando CSS

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    h2{
      color: silver;
    }

    strong{
      color: skyblue;
    }
  </style>

 <link rel="stylesheet" href="stryle.css">

</head>
<body>

  <h1 style="color: salmon;">
    Titulo
    <strong style="color: yellow">subtitulo</strong>
  </h1>

  <h2>
  Matheus
     <strong>
       Prado
    </strong>
</h2>

<h3>
  luke
  <strong>
    Main
  </strong>
</h3>

</body>
</html>

Aqui montamos uma pequena estrutura para mexer com CSS temos alguns comando para uso quando estiver fazendo algum projeto, temos o modelo style que podemos usar no index, temos link , tambem o @import, e temos arquivo css, obs: gosto do aqruivo, acho mais organizado.

@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap';


h3 {
  color: aliceblue;
}

strong{
  color: black;
}

## cascata
# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso hoje muitas regras para p mesmo elemento.

* Seu estilo é lido de cima para baixo.

1 - origem
2 - especificidade
3 - importancia

### Origem do estilo

inline > tag Style > tag link

### Especificidade
 
É um calculo matematico, onde, cada tipo de selector e origem de estilo, possuem valores a serem considerados.

0 - Universal selector, combinators e negation pseudo-class (:not())
1 - Element type selector e pseudo-elements (::before, ::after)
10 - classes e attribute selectors ([type="radio"])
100 - id selector.
1000 - inline

### A regra !important

* cuidado evite o uso
* não é considerado uma boa pratica
* quebra o cluxo natural da cascata

<h1 class="title" id="my-title">titulo</h1>

<style>
  h1 {
    color: black;
  }
</style> = e essa origem  se torna mais forte que a debaixo


<h1 style="color": red>Titulo</h1>
               
<p>subtitulo</p> = essa origem se torna mais forte que o que o outro
 


## origem

<style>
  h1 {
    color: black;
  }
</style> = e essa origem  se torna mais forte que a debaixo


<h1 style="color": red>Titulo</h1>
               
<p>subtitulo</p> = essa origem se torna mais forte que o que o outro

h1 {
  color: green:
}

h1 {
  color: silver 
} = essa origem se torna mais forte


Aqui mostra as origens do CSS, onde usamos e qual se torna mais forte que a outra, lembrando que o CSS trabalha em forma de castaca, sendo que a mais forte sempre sera a debaixo.


.title {
  color: green;
} = quando colocado no html uma class não usa a ordem da cascata e sim com ele tem que ser o primeiro

#my-title {
  color:red;
}
h1 {
  color: green:
}

h1.tittle#my-title {
  color: silver 
} = essa origem se torna mais forte

* {
  color:green;
} = mesmo colocando ele embaixo ela não funciona 


o !important pega o mais fraco e acaba com a estrurta, o !important serve so para a gente acessar as informaçoes no css de alguem se agnt tiver usando de alguem, agora se estamos fazendo nosso prorpio não precisamos usar. 

## At - rules
# At - rules 

* Está relacionado ao comportamento do css
* Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

-@import   /* incluir um CSS externo*/
-@media    /* regras condicionais para dispositivos*/
-@font-face /* fontes externas*/
-@keyframes  /* animation*/

```css

@import url("http://local.com/style.css";)

@media (min-width: 500px){
  /* rules here */
}

@font-face {
  /* rules here*/
}

@keyframes nameofanimation{
  /* reles here*/
}

## shorthand

# Shorthand

* junção de propriedades
* resumido
* legivel

```css

{
  /* background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* backgroun dhorthand */
  background: #000 url(images/bg.gif) no-repeat left top;
/* font properties */
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;

/* font shorthand */ 
font: bold italic .8em/1.2 Arial, sans-serif;

}

## detalhes

* não ira considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhante, podemos encontrar problemas

## Propriedades que aceitam shorthand

animation,backgrouns,border,border-bottom,corder-color,border-left,border-radius,border-right,border-style,border-top-border-width,colum-rule-columns,flex,flex-flow-font,grid,grid-area,grid-column,grd-row,grid-template,list-style,margin,oofset,outline,overflow,padding,place-content,place-items,place-self,text-decoration,transition

**https://developer.mozilla.org/en-us/docs/web/css/shorthand_properties**

## funçoes 

# Funçoes

* nome seguido de abre e fecha parentesis
* recebe argumentos

## Exemplos

```css
@import url("http://urlaqui.com/style.css");
{
  color: rgb(255,0,100);
  width: calc(100% - 10px);
}
## Funçoes
# Funçoes

* nome seguido de abre e fecha parentesis
* recebe argumentos

## Exemplos

```css
@import url("http://urlaqui.com/style.css");
{
  color: rgb(255,0,100);
  width: calc(100% - 10px);
}

## Vendor Prefixes

permite que browser adicione `features` a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

```css

p{
 
    -webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
    -moz-background-clip: text; /* Mozilla (Firefox) */
    -ms-background-clip: text; /* Internet Explorer ou Edge*/
    -o-background-clip: text; /* Opera */
}
