# WEB Semântica

## O que é ?
* Adicinar significado á uma linguagem
* No caso do HTML, para dar significado ao conteúdo


## Web Semântica
* Controlar a organização a apresentação do nosso conteúdo

  - Cada site é único, entretanto, existem padrões ou convenções, que nós identificamos
  
* Ao usar uma marcação semântica consistente, para identificar os user agents a identificar corretamente os elementos e apresentá-los aos visitantes da pagina

* Isso se torna extremamente relevante para acessibilidade, ou seja, para visitantes que precisam usar leitores de página, por exemplo. Com uma página desorganizada, fica complexo para o visitante com necessidades epeciais, fazer um bom uso da nossa página.

* Além disso, os motores de buscam dão preferência para que estão com sua semântica em dia. Um site bem estruturado e organizado é um site melhor encontrado na web.

# HTML5 Semântico

## As Tags
* Elas que irão ajudar a criar um HTML semântica, pois algumas tags tem significados específicos e orientações claras sobre onde devem ficar na página dela existir.

  - Exemplo:
      <p>
      Nós (programadores),somos pagos para resolver problemas, não para memorizar soluções.
               - Mayk Brito
      </p>

  * Com uma melhor semântica
     <blockquote>
      Nós (programadores),somos pagos para resolver problemas, não para memorizar soluções.
               <cite>- Mayk Brito</cite>
     </blockquote>

## Entendendo os significados
* Como autor da página, é sua responsabilidade entender os significados dos elementos
* Muitas vezes é simples, pois o HTML não possui um leque gigante de elementos 
* Algumas vezes é complexo de se entender alguns element os.

   - Saiba que:
      Alguns elementos, você irá usar em todos os documentos que você criar, e alguns, talvez você nunca precse utilizar.

Em muitos caos, marcação do conteúdo é uma questão de gosto pessoal e será diferente de autor para autor.

* HTML5 entra para melhorar a semântica

## Seções comuns em documentos HTML

  - cabeçlho <header>
  - navegação <nav>
  - conteúdo principal <main>
  - barra lateral <aside>
  - rodapé <footer>

- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
   
   <header>
     logomarca

      <nav>
          <ul>
             <li>item</li>
          </ul>
      </nav>
   </header>
   
   <main>
      conteudo principal
   </main>
    
   <aside>
      parte lateral
   </aside>

</body>
</html>

## Header
* O header representa um grupo de suporte introdutório ou navegacional que pode conter alguns elementos de cabeçalho mas também outros elementos como um logo, seções de cabeçalho, formulário de pesquisa, e outros.
   - - Onde utilizar?
    - Quando no início da página, é visto como global
    - Pode ser usado em outros elemntos semânticos como article, section
    - header dentro header ou footer?
  - Múltiplos headers
  - Não possui atributos específicos
   <body>
  <header>  
    logomarca
    <nav></nav>
  </header>

  <section>
    <header>
       <h2>Essa é uma secão</h2>
       <p>para falar da secão</p>
    </header>

     <span>ao lado</span>
  </section>

  <section>
    <header></header>
  </section>

</body>

## Nav
* Navegação ( <nav> ) representa uma seção de uma página que aponta para outras páginas ou para outras áreas da página, ou seja, uma seção com links de navegação, um documento pode ter vários elementos nav, por exemplo, um para navegação no site e outro para navegação dentro da página.
  - <nav></nav>
  
  - Onde e por que utilizar ?
  - não possuem atributos especificos, somente os globais

 <header>
   <nav> 
     <ul><li></li></ul>
  </nav>
</header>

<article>
   <section>
     <header>
       <nav></nav>
     </header>
   </section>
</article>

## Main
* O elemento main define o conteúdo principal dentro do body em seu documento ou aplicação, como conteúdo principal aquele relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação.
 - <main></main>

  - Onde e por que ultilizar ? 
  - Não possuem atributos específicos, somente os globais

  <body>
  
   <main>
     <nav></nav>
     <p>publicidade</p> <!--não podemos utilizar-->
   </main> 

</body>

<body>
  

  <main>
    <h1>Receitas</h1>
    <p>Essa é uma receita de torta de maçã</p>

    <article>
       <h2>Receita de torta maçã</h2>
       <p>Essa é uma receita de torta de maçã</p>
    </article>

    <article>
        <h2>Receita de torta de limão</h2>
        <p>Essa é uma receita de torta de limão</p>
    </article>

  </main>
</body>

## Articule
* É mais comum ser usado para conter informações que podem ser distribuídas no site ou aplicativo em que aparecem.

- <article></article>

  - Onde é por que ultilizar ?
  - Não possuei atributos específicos, somente os globais

  <main>
  <h1>Receitas</h1>
  <p>Essa é uma receita de torta de maçã</p>

  <article>
     <h2>Receita de torta maçã</h2>
     <p>Essa é uma receita de torta de maçã</p>
  </article>

  <article>
      <h2>Receita de torta de limão</h2>
      <p>Essa é uma receita de torta de limão</p>
  </article>
</main>

## Aside
* Representa por seção de uma página que consiste de conteúdo que é relacionado ao conteúdo do seu conteudo, que poderia ser considerado separado do conteúdo. Essas seções são, muitas vezes, representadas como barras laterais.
 - <aside></aside>

   - Conteúdos levemente relacionados ao controle principal
    - explicações
    - glossários
    - biografia do autor
    - informações de perfil
  - atributos: apenas globais

  <header>
  <div>
    <strong>Construtores & Cia.</strong>
    <span>Um portal de construção</span>
  </div>
  <nav>
    <ul>
      <li>Homepage</li>
      <li>Sobre</li>
      <li>Contato</li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Como construir uma casa</h1>
    <p>Nesta página pretendo mostrar passo a passo as etapas de construção de uma casa, baseado na minha experiência de construção de uma casa. Para tanto e antes de começar gostaria de definir o perfil de casa que estou construindo para que você faça as devidas adaptações para o seu projeto, ok?
    </p>

    <ul>
      <li>Tamanho de terreno:302 m/2</li>
      <li>Área a ser construída: aproximadamente 120 m/2</li>
      <li>Padrão de construção: Não sei</li>
    </ul>

    <p>
      Muito bem. Agora que você já sabia o perfilda casa, vou detalhar cada uma das etapas abaixo e em muitos casos mostrarei mais detalhes em páginas paralelas com links indicando. Vamos lá:
    </p>
    <!--Glossário-->
    <aside>
      <h3>Glossário</h3>
      <dl>
        <dt>Terraplanagem</dt>
        <dd>É o processo de terraplanagem. Se a terra é plana, não precisaria fazer isso.</dd>
      </dl>
    </aside>
  </article>
</main>

<hr>  

<!--Contéudo relacionado-->
<aside>
  <h3>links Relacionados</h3>
  <ul>
    <li><a href="">Terraplanar com sucesso</a></li>
    <li><a href="">10 passos para construir seu castelo.</a></li>
    <li><a href="">Ele construiu uma piscina no deserto e olha no que deu</a></li>
  </ul>
</aside>
<!--publicidade relacionada-->
<aside>
  <strong>Oferecimento: Oferê Cimentos</strong>
</aside>

<hr>

<footer>
  <em>Copyright Author - 2020</em>
</footer>

## Footer
* Esse elemento de Rodapé (<footer>) representa um rodapé para o seu sectioning content (conteúdo de seção) mais próximo ou sectioning root elemento (ou seja, seu parente mais próximo <article> , <aside> , <nav> , <section> , <blockquote> , <body> , <details> , <fieldset> , <figure> , <td> (en-US)).

- <footer></footer>

  - Geralmente no final da página
    - informações do autor, copyright, contato, sitemap, voltar ao topo
  - atributos: globais

  <article>
  <h1>Sobre nós</h1>
  <p>Formamos um time de profissionais :</p>
  <ol>
    <li>Capacitados</li>
    <li>Gentis</li>
    <li>Honestos</li>
    <li>Gentils</li>
  </ol>

  <h2>Quem são</h2>
  <ul>
    <li>Harry Hair</li>
    <li>Dora Depiladora</li>
    <li>Massoterapeuta Massa</li>
    <li>Estetícista</li>
    <li>Pedro Curi</li>
    <li>Bárbara Brabeira</li>
    <li>Cecília (para seus cílios)</li>
  </ul>

  <footer>
    <p>º2020 Cabeleleila leila</p>
  </footer>
  
</article>

## Section
* O <section> representa uma seção genérica contida em um documento HTML, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.
 - <section></section>

  - Onde e por que utilizar?
  - apenas globais

  -section>
  <h2>Contato</h2>
  <p>Fale conosco</p>
</section>

<!--Antes era usado div-->

<header>
  <nav></nav>
</header>

<article>
  <h2>Receita 1</h2>
  <p>Como fazer a receita</p>
</article>
</section>
    <h2>Modo de preparo</h2>
    <p>Modo de preparo</p>
<section>

<header>
  <nav></nav>
</header>

<main>
  <h1>Minha Receitas</h1>
   <p>descriação da receita</p>

  <section>
    <h2>Modo de preparo</h2>
    <p>Modo de preparo</p>
  </section>
</main>

## Elementos Genericos não semânticos
* Elementos não semãnticos, para uso genéricos.

  <div></div>
    usada se não conseguir achar um elemento de bloco semântico.
  
  <span></span>
     usado se não conseguir achar um elemento de texto semãntio.

    em ambas, use atributos globais como id e class para entregar maior significado
    
  - <h1>Titulo <span class="destaque">destacada</span></h1>

<section>
  <h2>Carrinho de compra</h2>
</section>

<div class="cart">
  <h2>Carrinho de compras</h2>
</div>