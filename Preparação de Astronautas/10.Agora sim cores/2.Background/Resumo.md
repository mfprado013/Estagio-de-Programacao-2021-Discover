# Background

- Define um fundo para o nosso elemento
- Sua área de atuação é caixa toda 
- Por padrão, é Transparente

### Exemplo

- Usar cores sólidas 
- Usar imagens
- Controlar
     - a posição das imagens,
     - se elas se repetem ou não
     - o tamanho delas na caixa
- Usar cor e imagem juntas 
- Usar cor gradiente

```HTML
<header>

</header>
<main>
  <h1>Evolua rápido como a tecnologia.</h1>
  <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos.</p>
<main>
```
```CSS
* {margin: 0;}

header {
  height: 100px;
  border: 7px dashed red;
  padding: 16px;

  background-color: rgb(55, 100, 50);
  background-image: url(https://app.rocketseat.com.br/node/agora-sim-cores/group/background/lesson/background-image-repeat);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover ou 50%; /*podemos usar porcentagem, em, px*/
  background-origin: border-box;
  background-clip: padding-box;

  background: rgb(55, 100, 50) url(https://app.rocketseat.com.br/node/agora-sim-cores/group/background/lesson/background-image-repeat) no-repeat right top / 50px border-box content-box fixed;
   
  background: linear-gradient(rgba(255, 255, 0)), rgba(255, 0,0, 0.2))
}
```

