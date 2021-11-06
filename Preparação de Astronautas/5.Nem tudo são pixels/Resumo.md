# Nem tudo são pixels

## Valores e unidades de medida

* cada propriedade possui valores `property: value`
* estudo constante a fim de entender as propriedades e seus valores

## Prática

* como conhecer e estudo os valores na documentação ?
    * <color> <length>
* os termos podem variar. `values` ou `data types`

# Tipos numéricos

*<integer>        Número inteiro como -10 ou 223
*<number>         Número decimal como -2.4, 60 ou 0.234
*<dimension>      É um <number> com uma unidade junto: 90deg, 2s, 8px
<percentagem>     Representa a fração de outro número: 50%

## Unidades comuns

* <length>         Representa um valor de distância: px, em, vw
* <angle>          Representa um angulo: deg, rad, turn
* <time>           Representa um tempo: s, ms
* <resolution>     Representa resoluçoes para dispositivos: dpi

# Distâncias absolutas <lemgth>

São fixas e não alteram seu valor.

Unidade    Nome               Equivalência
cm         centímetros        1cm = 96px/2.54
in         Inches (polegadas) 1in = 2.54cm = 96px
px         Pixels             1px = 1/96th of lin

* o mais comum e mais utilizado é o **px**
* não recomendo usar cm

# Distâcias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

  * Beneficio: Maior adaptação aos diferentes tipos de tela

Unidade         Relativo a
em              Tamanho da font do pai.
rem             Tamanho da font do elemento raiz (root/html)
vw              1% da viewport width.
vh              1% da viewport height.

# Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor

# Posiçoes

<position> = valor

Representa um conjunto de coordernadas 2D:
 - top, right, bottom, left e center

* Usado para alguns tipos de propriedades
* Não confundir com propriedade `position`

# Strings e identificadores

* Strings: Texto envolto em aspas
* Identificadores: red, black, gold;