##  Semantica
<!--
  Semantica

  -Dar significado
  -Elementos semanticos
-->

## Cabeçalhos e paragrafos

<!--
   Cabeçalhos e parágrafos
-->
<h1>sobre mim</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eius laborum, expedita quas iure esse ipsam, aspernatur deleniti, quis ratione facilis provident dolorem impedit nisi earum quia excepturi distinctio consequatur?
 </p>
 
<h2>nascimento</h2>
<h3>Infancia</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<h3>Adolescencia</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias magni in quae, vitae laudantium nemo blanditiis quo assumenda, neque tempora exercitationem error porro quidem ea aperiam doloribus dignissimos, quibusdam modi?</p>

<h2>trabalho</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
<a href="">saiba mais</a>

## Listas ordenadas e não ordenadas

<!--
  Listas
  - ordenadas
  _não ordenadas
-->
<h1>Suco Detox</h1>
<h2>Ingredientes:</h2>

<ol>
  <li>3 - folha de couve; </li> 
<li>1 - laranja;</li>
<li>1 - pedacinho de gengibre;</li>
<li>300ml - de agua</li>
<li>
  Adoçante a gosto;</li>
<li>
  Gelo a gosto.</li>
</ol>
 lista ordenada

 <ul>
  <li>3 - folha de couve; </li> 
  <li>1 - laranja;</li>
  <li>1 - pedacinho de gengibre;</li>
  <li>300ml - de agua</li>
  <li>
    Adoçante a gosto;</li>
  <li>
    Gelo a gosto.</li>
 </ul>
 lista não ordenada

## Citaçoes 
<!--
  Citaçoes

  <blockquote>

  <cite>

  <q>  
-->

<blockquote cite="https://developer.mozilla.org/en-us/docs/web/HTML/element/blockquote">
  <p>O <strong>Elemento HTML <code>&lt;blockquote&gt;</code></strong> (ou <em> HTML Block Quotation Element</em>) indica que um texto externo foi citado.</p>
</blockquote>
blockquote

<p>De acordo com <a href="https://developer.mozilla.org/en-us/docs/web/HTML/element/blockquote">
<cite>pagina MDN blockquote </cite></a></p>
cite

<p>O elemento quote - <code>&lt;q&gt;</code> - é <q cite="https://developer.mozilla.org/en-us/docs/web/HTML/element/q">usado para citações curtas que não precisam de paragrafos ou quebras de linhas.</q>-- <a href="https://developer.mozilla.org/en-us/docs/web/HTML/element/q"><cite>MDN q page</cite></a>.</p>
q

## Abreviaçoes
<!--
  Abreviaçoes

  <abbr>
-->

<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.</p>

## Detalhes de contato
<!--
   Detalhes de contato
   <address>
-->

<address>
  <p>Matheus Prado <br>
    <strong>Guariba,sp</strong>
    </p>
</address>

## Lista de descrição

<!--
  Listas de descrição

   <dl>
     <dt><dt>
     <dt><dt>
   </dl>      
-->

<h2>Glossario</h2>
<dl>
  <dt>Hypertext</dt>
  <dd>É um hiper texto</dd>

  <dt>Markup</dt>
  <dd>Marcação de texto</dd>

  <dt>Language</dt>
  <dd>Linguagem com sua semantica e sintaxe...</dd>
</dl>

## Representando códigos de computador

<!--
   Representando códigos de computador 
    <code>
       Partes genéricas de código
    
    <pre>
      Blocos de Código, pouis essa tag mantém os espaços em branco e recuos que eu colocar meu código
-->

<pre>
  <code>
    document
       .querySelector("body")
  </code>
</pre>

<pre>
  <code>
    &lt;prev>&lt;/prev>
  </code>
</pre>

quando quiser mostrar codigos sempre usar os caracteres especiais

## Elementos genéricos
<!--
    Elementos genéricos

    *<div>
    *<span>  
-->
<div>
  um texto qualquer
</div>
<span>outro</span> <span> texto</span>


<div class="cart">
  <span>Mustang</span>
   <span>R$350.000,00</span>
</div>

-Organização para conseguir usar css e java script é essencial 

## HyperLinks elementos ancoras

<!--
   HyperLinks - Elemento Âncora: <a>
     
    *Anatomia

    *Atributos:
       -globais
       -href
         -para onde iremos, quando clicamos no link?
          -url completa
          -fragmento
          -email
          -telefone
          -e outros
       -download
       -target
          -_self (padrão)
          -_blank 
-->

<a href="">contéudo</a>
-o link so funciona se tiver conteudo url,email,telefone, fragmentos.



<a href="download">contéudo</a>
-ao inves de ir na imagem ele ira fazer o download.

<a href="target">contéudo</a>
-o target é funciona como alvo.

<a href="https//google.com" target="_blank">contéudo</a>
-quando clicado você não sai da janela que esta.

## Fragmentos

<!--
  Fragmentos 
-->


<p>Encontre-me</p>

<ul>
<li><a href="https://rocketseat.com.br" target="_blank">Website</li>
<li><a href="mailto:matheus_100_sp@hotmail.com">E-mail</li>
<li><a href="tel:+5516996356302">Telefone</li>
</ul>

-quando colocado o target = _blank, ele ira abri uma nova guia ao inves de abri na mesma aba

<p>Saiba mais</p>

<ul>
<li><a href="#about" >Sobre mim</li>
<li><a href="#history">História</li>
<li><a href="#works">Trabalhos</li>
</ul>

<h1 id="about">Sobre mim</h1>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus est aspernatur debitis hic culpa, pariatur consequatur nihil maiores voluptate deleniti voluptatem, dolores vitae architecto rem quisquam explicabo atque obcaecati ullam!

<h2 id="history">História</h2>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cumque dolor inventore. Maxime culpa repellat praesentium fugit ipsum iusto molestiae obcaecati, cumque omnis laboriosam in, eos provident libero eius facilis.

<h2 id="works">Trabalhos</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique inventore nihil odio magnam ex rerum nobis quae amet adipisci pariatur maiores, natus hic repudiandae beatae fuga facilis. Sapiente, harum.

- quando usamos a tag id ela ira navegar no proprio conteudo 

## Conteúdo dos hyperlinks

<!--
  Conteúdo dos hyperlinks

  -qualquer conteúdo

-->

<a href="http://google.com" title="Ir para Google">
 <h1>Google</h1> 
 <p>Claro que posso</p>
 <img src="https://source.unsplash.com/random" alt="">
</a>

- podemos usar qualquer titulo ou tag.

## URLs e caminhos dos aquivos 
<!--
  URLs e caminhos dos arquivos 
   -Unifom Resource Locator
    -https://www.rockseat.com.br
    -Sequência de texto que define onde algo está localizado na web
   -URL usam caminhos para encontrar aquivos

   -Caminhos dos arquivos 
    -Onde, no explorador de arquivos, um recurso esá localizado 
-->

<a href="hyperLinks.html">Abrir HyperLinks</a>
-essa é uma forma de chamarmos no nosso prorpio projeto se tivermos mais pastas

<a href="https://google.com">Abrir HyperLinks</a>
-aqui vamos por URL.

## Como navegar pelos caminhos

<!--
  Como navegar pelos caminhos?
  
  -mesmo diretório
  -entrando em diretórios
  -saindo de diretórios
  -diretório raiz (root ou pai)
-->

<a href="hyperlinks.html">abrir hyperlinks</a>
<a href="outros/conteudo-a-elemnt.html">arquivos na pasta outros</a>
-diretório dentro

<a href="..hyperlinks.html">abrir hyperlinks</a>
<a href="..outros/conteudo-a-elemnt.html">arquivos na pasta outros</a>
-diretório fora

<a href="./hyperlinks.html">abrir hyperlinks</a>
<a href="./outros/conteudo-a-elemnt.html">arquivos na pasta outros</a>
-diretório raiz

## URLs absolutos vs relativos

<!--
  URLs absolutos versus relativos

  - Absolutos
    - inclui protocolo e nome de domínio
       - http://www.rocketseat.com.br/projeto/index.html
    - sempre apontará para o mesmo local, pois é absoluto
  - Relativos
    - relativo á página aberta no momento
    - apontará para lugares diferentes
-->

<a href="google.com">relativo:
  ir para o google</a>
- relativo é quando esta na pasta.

<a href="https://google.com">absoluto: ir para o google </a>
- absoluto usamos URLs.  

## Exercicio

https://github.com/mfprado013/exercicio 

## Table

<!--
  <table>

    Prós
    - Visualização de dados via linhas e colunas.
    - Boa acessibilidade para leitura dos dados

    Contras
    - Pouco flexível
    - Precisa de estabilização para melhor visualização

    Não usar
    - Para criar layout
-->

<table>

  <caption>
    Pessoas por idade
  </caption>

  <thead>
    <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td>Matheus</td>
  <td>22</td>
  <tr>
    <td>Felipe</td>
    <td>22</td>
  </tr>
</tr>
</tbody>

<tfoot>
  <tr>
    <td>Total:</td>
    <td>2 Pessoas</td>
  </tr>
  
</tfoot>
 
  
</table>

## tabelas
<!--
  2 Lojas
   Quantos produtos foram produzidos, quantos vendidos e agrupado por nome dos produtos
-->
<table>

  <caption>Produzidos vs Vendidos por loja</caption>
   
  <colgroup>
  <col>
  <col span="2" style="background-color: blue;">
  <col span="2" style="background-color:  red;">
</colgroup>

  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2" scope="colgroup">BMW</th>
      <th colspan="2" scope="colgroup">HONDA</th>
    </tr>
    
    <tr>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">SVU</th>
      <td>1200</td>
      <td>200</td>
      <td>1500</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">SPORT</th>
      <td>800</td>
      <td>400</td>
      <td>1000</td>
      <td>500</td>
    </tr>

  </tbody>
</table>

## Table Avançado

<!--
  2 Lojas
   Quantos produtos foram produzidos, quantos vendidos e agrupado por nome dos produtos
-->
<table>

  <caption>Produzidos vs Vendidos por loja</caption>
   
  <colgroup>
  <col>
  <col span="2" style="background-color: blue;">
  <col span="2" style="background-color:  red;">
</colgroup>

  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2" scope="colgroup">BMW</th>
      <th colspan="2" scope="colgroup">HONDA</th>
    </tr>
    
    <tr>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">SVU</th>
      <td>1200</td>
      <td>200</td>
      <td>1500</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">SPORT</th>
      <td>800</td>
      <td>400</td>
      <td>1000</td>
      <td>500</td>
    </tr>

  </tbody>
</table>

## Head

<!--
   <head>
-->

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="">
</head>

- esse é o head, ele não aparece visualmente.

## Meta

<!--
  <meta>

  atributos
   - charset
   - name
   - content
-->
 <head>
    <!-- dodificação de caracteres especias -->
  <meta charset="UTF-8"> 
  
    <!-- porstabilidade para dispositivos mobiles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

 </head>

## Links para icones personalizados

<!--
  <link> para ícones personalizados
-->

<!-- favicon básico -->
<link rel="icon" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone não-Retina, iPod Touch e dispositivos Android 2.1+: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">

<!-- iPad de primeira e segunda geração: -->
<link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPad de terceira geração com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!--
  <meta>
   - charset
   - viewport
   - author
   - description
   - robots
-->
<head>
   <!-- SEO: SEARCH ENGINE OPTIMIZANTION (motores de busca = google )-->
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <meta name="author" content="Matheus Prado">
   <meta name="description" content="Um website para iniciantes em programação">
   <meta name="robots" content="index, follow">
   
</head> 
<!--
  <meta> para redes sociais
-->
<head>
  <!-- Open Graph: facebook 0-->
  <meta property="og:image" content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg">
  <meta property="og:description" content="Aqui vem um texto para ser mostrado ao compartilhar no facebook">
    <meta property="og:title" content="Um site da Rocketseat">

<!-- twitter -->
<meta name="twitter:title" content="Rocketseat">

</head>

