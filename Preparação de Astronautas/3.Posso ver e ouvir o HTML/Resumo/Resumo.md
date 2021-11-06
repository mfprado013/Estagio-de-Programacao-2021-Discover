# Aúdio e Vídeo HTML

## Vídeo
*  <video>

    - src
    - controls
    - se não funcionar ?
      - Fallback content
    - source
     - src
     - type
    - sobre serviços de terceiros


<!--source-->
<video controls>
  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

<!--
  width
  height
  autoplay
-->
<video controls
    width="500"
    height="400"
    autoplay
>

  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

<!--preload-->
<video controls
    preload="metadata" ou preload="none"
>

  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

<!--loop-->
<video controls
   loop
>

  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

<!--
  muted
  autoplay
-->
<video controls
 muted
 autoplay
>

  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

<!--poster-->
<video controls
   poster="./icon.png"
>

  <source src="https://www.youtube.com/watch?v=PrqYohBV58o&t=66s" type="video/mp4">
  <p>Este browser não suporta video, baixe-o aqui </p>
</video>

## Áudio
*  <audio>

    - src
    - controls
    - se não funcionar?
      - fallback content
    - source
     - src
     - type

     <audio controls>
  <source src="./assets-example/viper.mp3" type="audio/mp3"> 
  <source src="./assets-example/viper.ogg" stype="./assets-example/viper.ogg">
  <p>Seu navegador não suporta audio.</p>
</audio>

<audio autoplay>
  <source src="./assets-example/viper.mp3" type="audio/mp3"> 
  <source src="./assets-example/viper.ogg" stype="./assets-example/viper.ogg">
  <p>Seu navegador não suporta audio.</p>
</audio>

## Inframe
* <iframe>

    - atributos
      -src
      -height
      -width
      -title (acessibilidade)
      -allowfullscreen
      -frameborder

<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/PrqYohBV58o"
  title="YouTube video player"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<iframe 
src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14862.70036436114!2d-48.23191845!3d-21.3633073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1635828507598!5m2!1spt-BR!2sbr"
 width="600" 
 height="450" 
 style="border:0;" 
 allowfullscreen="" 
 loading="lazy">
</iframe>

# Images

## Images
*  <img>

  -src
  -alt
  -title
  -width
  -height
  -adicionando link
  <!--
- src
- alt
-->
<img src="https://source.unsplash.com/random" alt="Imagem de title">

<!--
  -title
  -width
  -height
-->
<img src="https://source.unsplash.com/random" alt="Imagem de title"
title="Colocar um título na imagem"
width="150px"
height="100px"
>

<!--adicionando link-->
<a href="https://google.com">
      <img src="https://source.unsplash.com/random" 
      alt="Imagem de title">
</a>

## Background
* background-image

  - com a tag style
  - somente para stilo
  - não é semântico e falta significado

  <p style="background-image:url('./icon.png')">Imagem</p>

## Figures
*  Criando Título visíveis para as imagens

  <figure>
  = O Elemento HTML figure representa o conteúdo independente, frequentemente com uma legenda figcaption, é normalmente referido como uma única unidade
  
  
  <figcaption>
  = O Elemento HTML Figcaption representa uma legenda ou uma legenda associada com uma figura ou ilustração descrita pelo resto dos dados do elemento <figure> que seu elemento pai.

  <a href="https://google.com">
  <figure>
   <img 
    src="https://source.unsplash.com/random" 
    alt="Imagem de title"
    title="Colocar um título na imagem"
    height="250px"
    >
    <figcaption>Colocar um título na imagem </figcaption>
  </figure>
</a>

## SVG
* Gráficos Vetoriais Escaláveis (SVG) é uma linguagem de marcação XML para descrever gráficos vetoriais bidimensionais, o SVG funciona juntamente com HTML, CSS e JavaScript. Use o SVG para melhorar uma página comum HTML ou uma aplicação web.

- <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
</svg>

<svg 
  width="300" 
  height="200">
    <rect 
      stroke="blue"
      stroke-width="4"
      width="100%" 
      height="100%" 
      fill="blue"/>
</svg>

<img src=".assets-exemple/ball.svg" alt="">
  