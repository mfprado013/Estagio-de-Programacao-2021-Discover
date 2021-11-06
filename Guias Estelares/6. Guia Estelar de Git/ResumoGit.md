# O que é git

Git  é um sistema de controle de versões distribuído, usado no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo, aqui vamos ter acesso no nosso projeto e aqui podemos ver modificaçoes, excluir, mover, renomear.

O Git é muito usado para os programadores que trabalham em um mesmo projeto ou ate mesmo se for um programamor sozinho, pois podemos salvar nossos projetos e saber quem fez a ultima modificação ou ate mesmo o que a gente precisou modificar, e tambem temos acesso no que tiramos  (arquivos apagados) desdo inicio do projeto ate no seu fim conseguimos saber o que foi tirado e colocado.

## Configuração
A preimeira cinfiguração do git é feita apenas 1 vez por computador onde vamos colocar nossos "dados" e ali vai se manter mesmo com atualizações:
  ## Sua Identidade
 
      * Assim que instalar o git, abra o terminal e digite 
        $ git config --global core.editor "code --wgit config --global user.name "Matheus Felipe Do Prado"

        $ git config --global user.email
        matheus_100_sp@hotmail.com

  ## Git config

   [] Permite ver e atribuir

   [] Estavas bvariaveis podem ser armazenadas em 3 lugares diferentes:

       1- /etc/gitconfig: válido para todos os usuários no sistema em todos os seus repositorios. Se você passar a oção --system para git config , ele lê e escreve neste arquivo.

       2- ~/.gitconfig ou ~/.config/git/config: Somente para o seu usuario, podemos fazer o git ler e escrever neste arquivo passando na opção --global.

       3- config no diretório Git (ou seja .git/config) de qualquer repositório que você estaja usando: específico para este repositório.

        * Cada nível sobreescre os valores no ível anterior, .git/config prevalecem sobre /etc/ gitconfig.

  ## Git Config - Editor
  Com o git temos a opção de usa o visual code e VIM foram as opções apresentadas, temos outras so que essas são as mais usadas aqui você vai configurar para que o git tenha acesso livre em seu projeto e depois você conseguir acessar ele tranquilamente.

  O editor VIM já e a opção padrão mais podemos configurar para o visual code:
 
 * git config --global core.editor "code --w"

  Aqui nos podemos ver qual editor esta rodando no Git
   * Ver vonfiguração 
      git config --list

  Observação sobre as configurações é que elas podem ser alteradas a qualquer momemto que você quiser.


# Git Help
 
O Git help é um comando para ajudar no prorpio Git, quando você precisa acessar algum comando do prorpio Git e não lembra, use o Git Help , aqui vai aparecer os comando e o como chamar o comando (codigo).

# Git Status

Como Git Help o Status vai ter o mesmo sentido mais ele vai servir para você acessar as modificações recentes que precisou fazer, ele vai te mostra tudo e quem alterou elas por ultimo é ai que entra a primeira config que precisamos fazer onde colocamos nossa "assinatura" essa assinatura serve para indentificar o Dev que mexeu por ultimo no projeto.

# Criando Repositorios

No Git Bash, abrimos o terminal e vamos criar um arquivo com isso vamos ter acesso ao aquivo, aqui você pode fazer alteraçoes necessarias, editar aquivos, excluir, procurar arquivos que foram apagados, corrir "cagadas", aqui vai servir como um restarador e uma memoria para o Dev, pois aqui vai guarda tudo, o que ele esquecer ele poder procura no Git que vai encontra novamente.

Como guardar os arquivos, vamos usar o comando git-ds-al=list , esse comando vai guarda os arquivos ou melhor dizer salvar , e tambem vamos começar a ter nossa commit.

# Commit
A commite é um  gerenciamento de dados e controle de versão, commit refere-se ao processo de tornar permanente um conjunto de alterações, ou seja, de efetivar as alterações, um uso comum é a conclusão de uma transação.

# Criando Commit
Como fazer commit?
Começa criando um arquivo, vamos colocar os conteudos nesse arquivo assim que esse arquivo estiver pronto vamos fazer seu commit, com isso cada arquivo tem seu commit, aqui o commit é como um mensageiro, ele vai ser como uma mensagem de alteração, ele vai falar que a uma mudança~.

# Log
O log do git tem como ultilidade de buscar commit antigos e recentes, nesse log há o commit, Author , date.

 *Aqui esta em um Snapshot que funciona como uma foto do que acabou de ser feito, aqui mostra  do que é composto no log.


* Snapshot A -  {6fd78a0cf}
               parent: null
               author: matheus
               message:
               Initial Commit:

* Snapshot B - {8d9e0a9f4}
              parent:6fd78a0cf
              author: matheus
              message:
              Second Commit: 

* Snapshot C - {56dec34a2}
              parent:8d9e0a9f4
              author: matheus
              Thrid Commit:

* Snapshot pode ser comparado como uma foto de como estava o ultimo commit, então é muito dificil acontecer de existir commit iguais.

# Git Add
O comando git add adiciona um arquivo à área de teste do Git. Esta área contém uma lista de todos os arquivos que você alterou recentemente, seu repositório será atualizado na próxima vez que você criar um commit com suas mudanças, e executar o comando git add não altera seu trabalho no repositório.

# Git Diff
O git diff é um comando que quando executado, realiza uma função de comparação nas fontes de dados, essas fontes de dados podem ser commits, ramificações, arquivos e outros.

# Git Delete
Aqui vamos usar git rm para excluir um arquivo em seu repositório Git é executar o comando “git rm” e especificar o arquivo a ser excluído observe que ao usar o comando “git rm”, o arquivo também será excluído do sistema de arquivos.

# Renomear e Mover arquivos 
* Pra renomear podemos fazer do jeito mais simples ir no arquivo botão direito e renomear ou podemod usar o comando =git mv  repository_local.md, logo depois será commit.

* Para mover arquivos é a mesma coisa temos o jeito simples que é ir no arquivo e mover para onde você quer que fiquei o arquivo ou podemos usar o comando =git mv restory_local.md

