## Conceitos de HTML
* Vamos começar a aprender sobre estrutura , aqui vamos começar a conversar como o computador .

## Comentarios
* é bom trabalhar com comentario, quando estiver programando sempre fazer marcações para lembrar.

* <!--
  Hypertext Markup Language
  HT = hypertext: Hiper Texto
  M = Mark
  L = Language
-->

isso aparecerá na pagina

o comentario não aparecera na pagina

## Anatomia das Tags 

<!--
  Anatomia das tags

  -Abertura de tag
  -Fechamento de tag
  -Conteúdo
  -Elementos
-->
<h1></h1> - marcação feita pelo emmet

<h1></h1> - marcação feita manualmente 

< - abre a tag > - fecha a tag 

<h1>
  O Titulo 
</h1>
essa é a marcação 

<!--Elementos Vazios-->
<img src="" alt=""> - elemento Vazio

<input type="text">
elemento Vazio

## Atributos HTML

<!---
   Atributos HTML
   - informações extras
   - configurações
  --->
  <img src="imagem.ogng" alt="texto">

  <img src="conteudo"  alt="">
Atributos simples HTML

<!--
   Atributos booleanos
   -Não precisam de conteúdo
-->
<input type="text" disabled>

sem o disabled podemos escrever algo

com o disabled não podemso mais escrever

booleanos = sao valores de verdadeiros ou falsos

<!--
   Aspas
   -omissão
   -simples
   -duplas
-->

<a href="https://google.com">link</a>
tag de link

<a href=''title='isn't'></a>
error

sempre usar aspas -duplas

<a href="title"= "Isn't"></a> 

## Atributos GLobais

<!--
   Atributos Globais mais ultilizados 
   -class
   -contenteditable
   -data-*
   -hidden
   -id
   -style
   -tabindex
   -title

-->

<div -class="carrinho">
     <!-- elementos aqui dentro -->
</div>
class serve para acessar no java script

<div -class="carrinho" contenteditable="true">>
     <!-- elementos aqui dentro -->
</div>
ele trava para não modificar

<div -class="carrinho"data-id="">
       <!-- elementos aqui dentro -->
</div>
ele e usado no css e no java script - id não é indicado usar mais de 1 vez 


<div -class="carrinho"hidden>
  <!-- elementos aqui dentro -->
</div>
 
style serve para usar em css, dar cor etc...


<div tabindex="3">
  <!-- elementos aqui dentro -->
</div>

<div tabindex="2">
  <!-- elementos aqui dentro -->
</div>

<div tabindex="1">
  <!-- elementos aqui dentro -->
</div>

tabin serve para pessoas que não usam mouse somente o teclado ter um acesso melhor no site

<div title="definir um titulo">
  <!-- elementos aqui dentro -->
</div>

serve para definir titulos 

## Aninhamentos de tags

<!--
   Aninhamento de tags
   -Fluxo
   -Hieraquia
   -Posicionamento dos elementos
-->
<p>
  vou <em>escrever</em> escrever um parágrafo
</p>

-não podemos fechar errado, o p não pode fechar na tag em 

-Hieraquia 
tags maiores acima de menores

-Posicionamento
um abaixo do outro, algumas tags não quebram linhas e sim permancencem na mesma 

-tag p sempre fica um ao lado do outro mesmo que quebramos a linha 

-tag br quebra linhas

## Praticando

<!--
   Vamos Praticar
   Escrever 2 paragrafos, dando ênfase e importancia para algumas palavras, e adicone um limk de saiba mais.

   -use a tag para ênfase
   -use a tag strong para importancia
   -o link pode levar para o google
-->


<p><a href="https://google.com">
  <strong> O mundo está cada vez <em>mais tecnologico</em> </strong></a> 
</p>

<p><a href="https://google.com">
  <strong> Cada dia que se passa  <em>ficamos mais inteligentes </em> </strong></a>
</p>

## Conteudo de texto e caracteres reservados

<!--
   Conteúdo do texto e caracteres reservados.
-->

<p>
  
  os espaços

  que colocamos

  alem das quebras de são ignorados 

</p>

se não colocarmos as tags ele não tem quebra e nem espaços

<p>
  &nbsp; &nbsp; &nbsp; &nbsp;
  os espaços
  <br>
  que colocamos
   <br>
  alem das quebras de são ignorados 
  <br>  
</p>

&nbsp;= tag de espaços
<br> = tag de quebra de texto

<p>
 &lt;
  os espaços
  &gt;
  &amp;
  &quot;
  <br>
  
  <br>&quot;que colocamos&quot;
  <br>
   <br>
   &apos;
  alem das quebras de são ignorados 
  <br>  
</p>

&lt; = sinal de menor
&amp; = proprio &
&gt; = sinal de maior
&quot; = aspas dupla
&apos; = aspa unica

## Anatomia de documento

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
     <title>Anatomia do Documento</title>
  </head>

  <body>
      <h1> Titulo</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et aliquam tenetur tempore iure temporibus voluptatum non perspiciatis. Recusandae nisi possimus in tempore veritatis harum tenetur ipsum, aliquam, vero facilis saepe.
    </p>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id est iusto nesciunt officiis dolorum quos repellat suscipit dolores rerum aspernatur, numquam eum architecto cum perspiciatis quidem incidunt neque officia!
     </p>
  </body>
</html>