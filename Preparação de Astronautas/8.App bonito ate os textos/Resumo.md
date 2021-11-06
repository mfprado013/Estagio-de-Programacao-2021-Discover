# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family
 -A propriedade font-family do CSS permite que se faça uma lista de prioridades de familias de fontes e/ou nomes genéricos de famílias a serem especificado


* Tipo de fonte de um elemento
* Lista de fotes e ordem de prioridade
* Inclui *fallback* font

```CSS
p {
   font-family: "Times New Roman", Times, serif;
}
```
   - serif
   - sans

## Font Weight
-    A propriedade CSS font-weight especifica o peso ou a intensidade da fonte (ex.: negrito). Algumas fontes  oferecem apenas as opções normal e negrito.


* Peso da fonte

```CSS
p {
  font-weight: bold;
}
```

## Font Style

* O Estilo da fonte

```CSS
span {
  font-style: italic;
}
```

## Font Size

* O tamanho da fonte

```CSS
p {
  font-size: 18px;
}
```

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?

* @font-face
* @import
* @link

## Font-variant

* variação na apresentação fonte

```CSS
p {
  font-variant: small-caps;
}
```
## Font-stretch

* alargamento ou encolhimento da fonte 
* aceita palavra-chave como : expanded, condensed, normal 
* aceita porcentagens de 50% a 200%

```CSS
p {
  font-stretch: expanded;
}
```

## Letter-spacing
 
* Espaços entre caracteres

```CSS
p {
  letter-spacing: 4px;
}
```
## Word-spacing

* Espaço entre caracteres

```Css
p {
  word-spacing: 4px;
}
```

## Line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```CSS
p {
  line-height: 1.6;
}
```

## Text-tranform

* Transformação do texto

```CSS
p { 
  text-transform: uppercase; /*capitalize | lowercase | none*/
}
```

## Text-decoration

* Aparencia decoratva de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* Color: `<color>` values

```CSS
p{
  text-decoration: underline; /*shorthand*/
}
```

## Text-align

* Alinhamento de um texto

```CSS
p {
  text-align: center; /*left | right | center | justify*/
}
```

## Text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores 

```CSS
p {
  text-shadow: 1px 1px 1px red,
              2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

## Shorthand

* font-style, font-weight, font-stretch, font-size, line-height, e font-family.

```CSS
p {
  /* -style, -variant, -weight, -stretch, -size, line-height, e -family.*/
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```