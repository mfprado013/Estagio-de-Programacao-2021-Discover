# Nem só de classes ou IDs

## Seletores

Conecta um elementos HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
   - Todos os elementos HTML
* ID Selector
   - Um elemento que tenha um atributo `id`
   - Cada id deverá ser único
* Class Selector
   - Os elementos que contenha um atributo`class`.
   - Podemos ter uma ou mais classes.
* Attribute Selector
   - Um elemento que tenha um atributo específico.
* Pseudo-class Selector
   - Elementos em um estado específico.

## Múltiplo

Você poderá selecionar múltiplos elementos a aplicra alguma regra CSS para todos eles.

Usamos uma separação por vírgulas para isso.

```CSS
h, p, a{
  color: red;
}
```

# Combinators 

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```CSS
body article h2
```

## Child combinator

 * Identificado pelo sinal `>` entre
 * Seleciona somente o elemnto que é filho direto do pai
 * Elementos depois do filho direto serão desconsiderados
 
 ```CSS
 body > ul > li
 ```

 ## Adjacent sibling combinator

 * Identificado pelo sinal `+`  entre dois seletores
 * Seleciona somente o elemento do lado direto que é irmão direto na hierarquia

 ```CSS
 h1 + p
 ```

## General sibling combinator

* Identificado pelo sinal `~` entre dois seletores
* Seleciona todos os elementos irmãos

```CSS
h1 ~ p
```

## Utilizando combinadores

```CSS
ul > li[class="red"]
```

## Observação

* Seletores muito específicos tendem a causar dificuldades no  reuso das regras de estilização dos elementos.
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 ponto seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do usuário

* :houver
* :focus

## Atributos

* :disabled
* :required

