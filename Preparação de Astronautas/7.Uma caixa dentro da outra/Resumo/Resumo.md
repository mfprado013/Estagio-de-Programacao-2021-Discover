# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é ?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura)    Width | height
- Conteúdo                      Content
- Bordas                        Border
- Preencimento interno          Padding
- Espaços fora da caixa         Margin

* Cada elemento na sua página, será considerado uma caixa.

## Box-Sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box

```CSS
div {
  box-sizing: border-box;
}

## display: block vs display: inline

- Como as caixas se comportam em relação ás outras caixas
- Comportamento externo das caixas

**block**                           **inline**
Ocupa toda a linha, colocando         Elemento ao lado do outro
o próximo elemento abaixo desse  

Width e height são respeitados        Width e height não funcionam

padding, margin, border irão          Somente valores horizontais de margin, padding e border
funcionar normalmente


Exemplos:
block `<p> <div> <section>`, todos os headings`<h1><h2>...` inline: `<a> <strong> <span> <em>`

## Margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- value: `<length>` | `<percentage>` | auto

```CSS
div {
  /* shorthand*/
  margin: 12px 16px 10px 4px;
  margin: 12px 16px 0;
  margin: 8px 16px;
  margin: 8px;

}
```
* Cuidado com margin colapsing(top se junta ao bottom)

## Padding

Preenchimento interno da caixa

-padding-top | padding-right | padding-bottom | padding-left
-value: `<length>` | `<percentage>` | auto

```CSS
div {
  /*shorthand*/
  padding: 12px 16px 10px 4px;
  padding: 12px 16px 0;
  padding: 8px 16px;
  padding: 8px;
}
```

* Padding poderá causar diferença na largura de um elemento 

## Border ( e outline)

As bordas da caixa 

- value: `<border-style>` | `<border-width>` | `<border-color>`
- style: solid | dotted | dashed | double | groove | ridge | inset | outset
- width: `<length>`
- color: `<color>`

```CSS
div
   /*shorthand*/
   border-top: solid 2px; /* top | right | bottom | left */
   /*style*/
   border: solid;
   /*width <length> | style*/
   border: 2px dotted;
   /*style | color */
   border: outset #f33;
   /*width | style | color*/
   border: medium dashed green;
}
```

### E outline ?

- difere em 4 sentidos:
  - Não modifica o tamanho da caixa, pois não é parte do Box Model
  - Poderá ser diferente de retagular
  - Não permite ajuste individuais
  - Mais usado pelo user agent para acessibilidade