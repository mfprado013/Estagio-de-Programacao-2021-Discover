# Formulários de outro planeta 

## Formularios
* Para que serve?
  - Para podermos pegar dados, fazer interação com clientes, aulos ou funcionarios etc... , com formularios podemos fazer pesquisas de satisfação do cliente, aulos e funcionarios, tambem temos a possibilidades de usar para avaliações em geral.

* Onde vamos Ultilizar ?
  - Vamos ultilizar HTML basico, um pouco de CSS para dar vida e muito JS para fazer os comandos para dar vida ao formulario. 

## Form 
* Form é a tag usada para formularios, ela é parecida com <sector> e <footer> que são containers, mas seu diferencial é que ela recebe valores, outras principais method (metodos) para o form é Post e Get.
   - OBS: "FORM NUNCA PODE SER COLOCADO DENTRO DE FORM"

# Method
Fornece várias maneiras de executar um pedido,dados de formulários HTML podem ser enviados através de dois deles: o método GET eo método POST.

## Post
* Cria um par nome/valor que são passados no corpo da mensagem de pedido HTTP, a string não pode exceder 255 caracteres.

## Get
* Cria uma seqüência de consulta(query string) e a acrescenta à URL do script no servidor que manipula a solicitação.

<form action="" method="post" e "get">

</form>

# Fieldset
* O <fieldset> é usado para agrupar elementos, assim como labels ( <label> ), dentro de um formulário web o conteúdo de fluxo, sectioning root, listed, form-associated element, palpable content. Um elemento <legend> opcional, seguido por conteúdo de fluxo.
 
 - Atributos especiais
    - Disabled
       - desabilita todos os elementos internos
       - não serão enviados ao submeter o formulário
    - Form
       - o id de um formulário ao qual esse fieldset pertence
       - não precisa estar dentro do formulário
    - Name 
       - nome do grupo

       <legend>
         - nome do agrupamentos
         - primeiro elemento dentro do fieldset

## Label
* É usado para criar, alterar ou remover um rótulo, label altera o rótulo de volume atual ou remove o rótulo existente.
   
   -<label>

    - associar e identificar uma (ou mais) tag de entrada de dados
    - acessibilidade
    - você poderá clicar para mudar o foco da entrada de dados

  Atributos
  - for
      - para fazer a conexão entre este label e a tag de entrada de dados
      - é feita via id do input
      - só funciona com elementos específicos
         - button, input (not hidden), meter, output, progress, select, texterea
    <label for="">Nome Completo:</label>
<input type="text">

## Button
* Button é uma tag que cria um botão onde podemos colocar um nome para indentificar a função como (Enviar), podemos colocar atributos nele tambem.
  
  -Atributos Comuns
   - Type
       - submit
       - reset
       - button
    - autofocus
    - disabled
    - name 
    - value
    - form

    <!--TYPE-->
<form action="">
   <input type="text" value="">
   <button type="reset">Limpar</button>
</form>

<!--AUTOFOCUS-->
<button autofocus>Enviar</button>

<!--DISABLED-->
<button disabled>Enviar</button>

<!--NAME E VALUE-->
<button type="submit" name="button" value="Valor qualquer">Enviar</button>

<!--FORM-->
<form action="" id="meu-form"></form>

<button type="submit" form="meu-form">Enviar</button>

## Datalist
* O elemento HTML Datalist contém um conjunto de elementos option que representam as opções possíveis para o valor de outros controles.
   - # <datalist>

    - Lista de valores como sugestão a uma tag <input>
    - Valores sugestivos e não obrigatorios
    - Usuário poderão selecionar um dos valores, ou colocar um diferente da sugestão.

    <datalist id="fruitsdata">
       <option>apple</option>
       <option>banana</option>
       <option>mango</option>
       <option>orange</option>
       <option>cherry</option>
   <datalist>
     
   # list
   
   - recebe como valor o id de um <datalist> residente no mesmo documento.

<input
  type="text"
  list="fruitsdata" 
  placeholder="Escolha uma fruta"/>

<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
<datalist>

<datalist id="colorsdata">
  <option>#ff0000</option>
  <option>#00ff00</option>
</datalist>

<input type="color" list="fruitsdata" />


# Tags de entrada de dados

* Input = É a mais usada em formularios e ela aceita diversos tipos de dados.
   - Atributos
  - types
  - name
  - id

## Input Atributos
* Autocomplete = É o que vai sempre lembra do seu e-mail e senha padrão se você deixar salvo.
  - <input type="email" autocomplete="email">

* Autofocus =  É um atributo booleano, pode ou não ser definido em um elemento é usado em campos de formulários, serve para um elemento receber automaticamente o foco quando a página carrega, os elementos que podem receber esse atributo são: button , input , keygen , select e textarea. 
   -  <input type="type" autofocus>

* Disabled = É um atributo booleano, com propriedade de deficiência deve ser desativado elementos <input>, quando disabled atributo definido, permitindo que os usuários a cumprir determinadas condições (como a caixa de seleção, etc.), a fim de usar <input> elementos.
   - <input type="type" value="qualquer" disabled>

* Value = É um atributo especifico que o usuário deve preencher o campo com um valor antes de enviar o formulário, não pode ser usado quando o atributo type está definido como hidden , image ou um tipo de botão ( submit , reset ou button ).
   - <input type="type" value="texto">

* Readonly = É um atributo especifico no campo de entrada, é somente leitura. Campo somente leitura não pode ser modificado, mas os usuários ainda podem usar a tecla Tab para alternar para o campo, você também pode selecionar ou copiar o seu texto.
   - <input type="type" value="texto" readonly>

* Form = É um atributo especifico para iniciar o formulario, quando vamos inicar a construção de um formulario usamos há tag form.
   - <form id="meu form"></form>
      <input name="email" type="type" form="meu-form">

* Name = É um atributo importante para os campos do tipo input, onde ele serve para identificar o valor daquela variável.
   - <input name="email">

* Required = É usado para indicar que o preenchimento do usuário é obrigatória em um elemento antes que um formulário possa ser enviado.
   - <input type="type" required>
   
* Placeholder = É utilizado para indicar ao navegador o texto que deverá aparecer escrito no campo do formulário, na maioria das vezes utilizado para indicar ao usuário como deve ser preenchido aquele campo em específico ou a função daquele campo de formulário.

   - <label for="email">Email</label>
       <input type="Email" placeholder="Digite seu email">

## Password
* É uma maneira do usuário digitar senhas com segurança, o elemento é mostrado como um controle de edição de texto de uma linha, no qual o texto é omitido para que não possa ser lido, geralmente substituindo cada caractere por um símbolo como o astesrisco ("*") ou um ponto ("•")
    -input type="passowrd">

  - Colocar uma senha de maneira segura 
  - Esconde o que está sendo digitado no campo
  - O estilo da apresentação do campo, depende do User Agent

  # Atributos 

  - minlength / maxlength
    * O número mínimo e/ou màximo de caracteres para este campo
  - size
    * O número aceitável de caracteres que esse campo deverá conter
  - pattern
    * Expressão regular para validar o que está sendo digitado no campo
    * Expressão regular para validar o que está sendo digitado no campo
    * Altamente recomendado o uso de um padrão de segurança alta de senhas
    * exemplo: queremos que a senha contenha caracteres hexadecimais com limite de no mínimo 4 e no máximo 8 caracteres
     * pattern="{0-9afA-f]{4,8}"
  - Placeholder
    * Mostra um exemplo um exemplo de texto a ser digitado no campo
  - readonly / disabled
    * Atributo booleano indicando se o campo está habilitado ou não
  - required
    * o campo será obrigatório
  - inputmode
    * poderá alterar o uso do teclado em smartphone
    * exemplo: queremos que o cliente só adicione números
       * inputmode="numeric"
  - autocomplete
    * on: permite a seugestão de: new-passoword ou current - password
    * off: desbilita a opçao autocompletar
    * new-password: o navegador poderá sugerir uma nova senha
       -<!--Placeholder-->
<form action="">

  <input type="password"
        minlength="4" 
        maxlength="8"
        size="8"

  >


   <button type="submit">Enviar</button>
</form>

<!--readonly / disabled-->
<form action="">
  <input pattern="{0-9afA-f]{4,8}"
   title="Coloque HEX no mínimo 4 caracteres e no máximo 8 caracteres"
   placeholder="coloque sua senha"
   readonly ou disabled
  >


   <button type="submit">Enviar</button>
</form>

<!--required-->
<form action="">
  <input type="password"
    required
  >
   <button type="submit">Enviar</button>
</form>

<!--inputmode="numeric"-->
<form action="">
  <input type="password"
    required
    inputmode="numeric"
  >
   <button type="submit">Enviar</button>
</form>

<!--autocomplete="on"-->
<form action="">
  <input type="password"
    autocomplete="on"
  >
   <button type="submit">Enviar</button>
</form>

<!--autocomplete="new-password"-->
<form action="">
  <input type="password"
    autocomplete="new-password"
  >
   <button type="submit">Enviar</button>
</form>

<!--autocomplete="off"-->
<form action="">
  <input type="password"
    autocomplete="off"
  >
   <button type="submit">Enviar</button>
</form>

## Email 
* Marcaçã que espera o usuário digitar um email, irá validar se o valor digitado é um email
   -# Atributos

  - placeholder
  - readonly / disabled
  - value

  - required

  - multiple
    * o campo irá receber 1 ou mais emails, separado por vírgulas
  - minlenght / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter
  - size
    * Valor numérico indicando quantas carateres esse
  - pattern
    * Uso de expressão regular para validar o campo
    * Exemplo: o usuário só poderá colocar email do domínio 
    matheus_100_sp@hotmail.com
      * pattern="[.+@matheus\.com]"
  - list
    * O id de uma tag <datalist> que está no mesmo documento
    * <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
       * Os valores do <datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão
       -<!--placeholder-->
<form action="">
 <input type="email"
 readonly
 value="matheus_100_sp@hotmail.com">
 <button type="submit">Enviar</button>  
</form>

<!--required-->
<form action="">
  <input type="Obrigatorio"
  required>
  <button type="submit">Enviar</button>
</form>

<!--multiple-->
<form action="">
  <input type="email"
  multiple>
  <button type="submit">Enviar</button>
</form>

<!--minlenght-->
<form action="">
  <input type="email"
   minlength="8"
  >
  <button type="submit">Enviar</button>
</form>

<!--maxlenght-->
<form action="">
  <input type="email"
    maxlength="250"
  >
  <button type="submit">Enviar</button>
</form>

<!--size-->
<form action="">
  <input type="email"
    size="17"
  >
  <button type="submit">Enviar</button>
</form>

<!--pattern-->
<form action="">
  <input type="email"
  pattern="[.+@matheus\.com]"
  title="Somente emails matheus.com serão aceitos"
  >
  <button type="submit">Enviar</button>
</form>

<!--list-->
<form action="">
  <datalist id="emailslist">
    <option>matheus_100_sp@hotmail.com</option>
  </datalist>
  <input type="submit" list="emailslist">
  <button type="submit">Enviar</button>
</form>

## URL
* É o que espera que o usuário digite uma url para fazer a pesquisa.
   -# Atributos
  
  - placeholder
  - readonly / disabled
  - value

  -required

  - minlength / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter

  - size
    * Valor numérico indicado quantos caracteres esse campo deveria conter, modificando o tamanho do campo o usuário

  - pattern
     * Uso de expressão regular para validar o campo
  - list 
    * o id de uma tag <datalist> que está no mesmo documento
    * <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
       * Os valores do <datalist> que não foram compatíveis com o campo, não serão apresentados como sugestão
  - spellcheck
     * Habilitar a verificação ortográfica para este input
      - <!--placeholder-->
<form action="">
  <input type="url"
  placeholder="http://example.com"
  value="htt://example.com"
  disabled
  >
  <button type="submit">Enviar</button>
</form>

<!--required-->
<form action="">
  <input type="url"
  placeholder="http://example.com"
  required
  >
  <button type="submit">Enviar</button>
</form>

<!--minlength-->
<form action="">
  <input type="url"
  placeholder="http://example.com"
  minlength="8"
  >
  <button type="submit">Enviar</button>
</form>

<!--maxlength-->
<form action="">
  <input type="url" 
  placeholder="http://example.com"
  maxlength="250"
  >
  <button type="submit">Enviar</button>
</form>

<!--- size-->
<form action="">
  <input type="url"
  placeholder="http://example.com"
  pattern=".*\.com\.br.*"
  title="Somente dominios .com.br serão aceitos"
  required
  >
  <button type="submit">Enviar</button>
</form>

<!--pattern-->
<datalist id="urlsdata">
  <option>http://meusite.com.br</option>
  <option>https://meusite.com.br</option>
</datalist>
<form action="">
  <input type="url"
  placeholder="http://example.com"
  pattern=".*\.com\.br.*"
  title="Somente dominios .com.br serão aceitos"
  required
  list="urlsdata"
  >
  <button type="submit">Enviar</button>
</form>

<!--list-->
<datalist id="urlsdata">
  <option>http://meusite.com.br</option>
  <option>https://meusite.com.br</option>
</datalist>
<form action="">
  <input type="url"
  placeholder="http://example.com"
  pattern=".*\.com\.br.*"
  title="Somente dominios .com.br serão aceitos"
  required
  list="urlsdata"
  >
  <button type="submit">Enviar</button>
</form>

<!--spellcheck-->
<datalist id="urlsdata">
  <option>http://meusite.com.br</option>
  <option>https://meusite.com.br</option>
</datalist>
<form action="">
  <input type="url"
  placeholder="http://example.com"
  pattern=".*\.com\.br.*"
  title="Somente dominios .com.br serão aceitos"
  required
  list="urlsdata"
  spellcheck="true"
  >
  <button type="submit">Enviar</button>
</form>

## File
* O usuário poderá escolher 1 ou mais arquivos para enviar no formuário.
   -  # atributos

  - value
   - contém o arquivo a ser enviado
  - accept
   - descreve que tipos de arquivos serão aceitos
   - exemplo: .doc, .docs, .pdf, audio/*, image/png, png
  - files
   - a lista de arquivo ou arquivos
   - multiple
     - permite o envio de múltiplos arquivos

  # Envio dos arquivos
  Para envio dos arquivos o formulário o método
  POST e o atributo enctype como "multipart/form-data"
   -<!---value-->
<input type="file">

<!--accept-->
<input type="file" accept=".doc">
<input type="file" accept="image/*">
<input type="file" accept=".png">
<input type="file" accept=".docx">
<input type="file" accept="audio/*">

<!--multiple-->
<input type="file" multiple>

<!--Envio dos arquivos-->
<form action="" method="post" enctype="multipart/form-data">
   <input type="file">
</form>

## Color
* É uma interface para selecionar cor.
   - # Atributos
   - value: RGB
     -Se inválido, o preto será exibido
   - list
    * o id de uma tag <datalist> irá conter uma lista de valores pré definidos a fim
    * os valores do <datalist> que não serem compatíveis com o campo 
     -<!--value-->
<input type="color" value="#00ff00">

<!--list-->
<datalist>
  <option>#0000ff</option>
</datalist>
<input type="color" list="colorsdata">

# Checkbox
* São caixas que podem ser marcadas e selecionar um valor para ser enviado,  se não selecionado, não será enviado nenhum dado.
   - # Atributos
  -globais
  -value
    * valor que aqulee campo contem 
    * se não estiver presente, o padrão é "on"
  - Checked
    * para deixar o campo marcado por padrão
    -  label for="subscribe">Receber notificações</label>
<input type="checkbox" name="subscribe" id="subscribe" value="subscribe">
<!-- subscribe ="on"-->

<label for="subscribe">Receber notificações</label>
<input type="checkbox" name="subscribe" id="subscribe" value="subscribe" checked>

<!-- interest=coding,music-->
<fieldset>
   <legend>Choose your interests</legend>
   <div>
     <input type="checkbox" id="coding" name="interest" value="coding" checked>
   </div>
   <div>
     <input type="checkbox" id="music" name="interest" value="music">
     <label for="music">Music</label>
   </div>
</fieldset>

# Hidden
* É um atributos que deixa invisivel aos olhos de quem estava fazendo o formulario.
   - <input type="hidden"  name="id" value="8">

# Radio
* Projetado para selecionar uma única opção de um grupo de opções.
   # ATRIBUTOS ESSENCIAIS
  - Checked
     indica que o campo foi marcado
  - value 
     valor que aquele campo contém

    - <fieldset>
  <legend>Bora tomar um cafe ?
    <label for="yep">sim</label>
    <input type="radio" id="yep" name="coffe" value="yes">

    <label for="nono">não</label>
    <input checked type="radio" id="nono" name="coffe" value="no">
  </legend>
</fieldset>

# Textarea
* É utilizado para texto grandes, em caso de formularios com avaliações ou perguntas que precisam mais de 1 linha para responder.
   - # Atributos
   -id
   -name
   -rows e cols
   -maxlength e minlength
   -wrap
   .. outros comuns aos <input>s
    - autocomplete, autofocus, disabled,placeholder,readonly,form,required 
     -<!--id-->
<label for="message">Mensagem</label>
<textarea id="message"></textarea>

<!--name-->
<textarea name="message"></textarea>

<!--cols/rows-->
<textarea cols="30" rows="10"></textarea>

<!--maxlength-->
<textarea maxlength="4"></textarea>

<!--minlength-->
<textarea minlength="4"></textarea>

<!--wrap-->
<textarea wrap="off"></textarea>

<!--autocomplete-->
<textarea autocomplete="email"></textarea>

<!--autofocus-->
<textarea autofocus></textarea>

<!--disabled-->
<textarea disabled>matheus</textarea>

<!--placeholder-->
<textarea placeholder="matheus felipe do prado"></textarea>

<!--readonly-->
<textarea readonly>matheus felipe do prado</textarea>

<!--form-->
<textarea form="matheus felipe do prado"></textarea>

<!--required-->
<textarea required></textarea>

# Select
* É um atributo utilizado para casos de opções de escolha, onde existe mais de uma opção ai usamos o select para selecionar a opção que queremos ou a acerta.
   - # ATRIBUTOS ÙNICOS
   - multiple
     habilita múltiplas opções
   - size
     quando opções visíveis ?
     - <label for="carselect">Qual modelo de carro</label>
<br>
<select name="carmodel" id="carselect">
  <option value="">Selecione o modelo</option>
  <option value="Audi">A5</option>
  <option value="Nissan">GTR-35</option>
  <option value="Honda">Civic Si</option>
</select>
<!--carmodel=audi
    carmodel=nissan-->

    <label for="carselect">Qual modelo de carro</label>
    <br>
    <select name="carmodel" id="carselect" multiple>
      <option value="">Selecione o modelo</option>
      <option value="Audi">A5</option>
      <option value="Nissan">GTR-35</option>
      <option value="Honda">Civic Si</option>
    </select>

    <label for="carselect">Qual modelo de carro</label>
<br>
<select name="carmodel" id="carselect" multiple size="3">
  <option value="">Selecione o modelo</option>
  <option value="Audi">A5</option>
  <option value="Nissan">GTR-35</option>
  <option value="Honda">Civic Si</option>
</select>

# Optgroup
* É um atributo em conjunto com o select, aqui ele se agrupa.
   - <!--multipe size-->
<label>Please choose one or more pets:
  <select name="pets" multiple size="8">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="wolf">Wolf</option>
    </optgroup>
    <optgroup label="flying pets">
      <option value="parront">Parront</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>

  </select>
</label>

<!--optgroup-sem multiple size-->
<label>Please choose one or more pets:
  <select name="pets">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="wolf">Wolf</option>
    </optgroup>
    <optgroup label="flying pets">
      <option value="parront">Parront</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>

  </select>
</label>

# Search 
* É um atributo usado como text, mas poderá ser um pouco diferente dependendo do user agent
  # Atributos

  - list/ <datalist>
  - pattern
  - aria-label

  <!--list/ <datalist>-->
<datalist id="searchterms">
  <option>Mac</option>
  <option>Win</option>
  <option>Linux</option>
 </datalist>
<!--aria-label-->
<form action="">
 <input type="search" name="q" list="searchterms"
 placeholder="Digite seu termo de busca"
 size="29"
 aria-label="Campo de pesquisa: Digite seu termo de busca">
 <button>Pesquisar</button>
</form>


<!--pattern-->
<datalist id="searchterms">
  <option>Mac</option>
  <option>Win</option>
  <option>Linux</option>
 </datalist>

<form action="">
  <label for="">Pesquisar pelo ID</label>
 <input type="search" name="id" 
 size="5"
 pattern="[0-9]{2}"
 title="Digite o número do ID:99">
 <button>Pesquisar</button>
</form>

# Number
* Esse atributo é usado para tarablhar com os numeros, aqui vamos usar para ter controle de minimo e maximo.
   -  # Atributos
  - min/max
  - step
  - placeholder
  - value/disabled
  - list

<!--min/max-->
<form action="">
  <input type="number" min="2" max="45">
  <button>Enviar</button>
</form>

<!--step-->
<form action="">
  <input type="number" step="100">
  <button>Enviar</button>
</form>

<!--placeholder-->
<form action="">
  <input type="number" placeholder="Digite somente numeros">
  <button>Enviar</button>
 </form>

 
 <!--value/disabled-->
<form action="">
  <input type="number" value="100" disabled>
  <button>Enviar</button>
 </form>

 <!--list-->
 <datalist id="numerolist">
   <option>100</option>
 </datalist>
<form action="">
  <input type="number" value="100" list="numeroslist">
  <button>Enviar</button>
 </form>

 # Range
 * É um atributo para fazer controle numerico, é muito usado para mostrar quanto falta para terminar o fomulario.
     - # Atributos

  - min/max
  - step

 -<!--min/max-->
<input type="range" min="1" max="100" value="10">

<!--step-->
<input type="range" min="-10" max="10" step="5">

# Data e hora
* É um atributo para trabalhamos com data e hora, mas ainda não esta 100, ainda falta umas melhoras.
   -<!--date-->
<input type="date" value="2021-11-01">

<!--datetime-->
<input type="datetime-local">

<!--month-->
<input type="month">

<!--time-->
<input type="time">

<!--week-->
<input type="week">