# Terminologia

- Flex Container
  - Flex item
- Nesting
- Axis
   - main
      - start, end
   - cross
      - start, end
- Flex sizing
   - flexível
   - altera width/height dos itens para preenchimento dos espaços do flex container

## Flex Container
 * Flex item 
 * Nesting
 * Axis
 ```html
<div class="flexbox">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
}
```
## Flex sizing 

```css
.conatiner {
  display: flex;
  border: 1px solid red;
  height: 200px;
}
.item {
  background-color: gray;
  border: 1px solid;
  flex:1;
}
```

# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
   * Principal
   * Cruzado
* Espaços entre os itens

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | clumn-reverse)

## flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

## flex-flow

- shorthand
- flex-direction || flex-wrap

## justify-content

- Alinhamento dos elementos dentro do container 
- Distribuição do elementos

## Valores 

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

## align-items

- Alinhamento dos elementos no eixo cruzado

## Valores

- stertch
- flex-start
- flex-end
- center

## Gap

- Espaços entre os elementos

## Valores

Unidades de medidas
fixas: px, pt
flexíveis: %, em, rem

