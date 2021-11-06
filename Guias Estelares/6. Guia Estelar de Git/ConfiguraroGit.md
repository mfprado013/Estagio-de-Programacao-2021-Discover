## Configuração Inicial

* Essa configuração você fará apenas uma vez por computador e o efeito se manterá após atualizações.

Você também pode mudá-las em qualquer momento rodando esses comandos novamente.

# Sua Identidade
 
 * Assim que instalar o git, abra o terminal e digite 
  $ git config --global core.editor "code --wgit config --global user.name "Matheus Felipe Do Prado"
  $ git config --global user.email
  matheus_100_sp@hotmail.com

# Isto é importante porque cada commit usa esta informaçõa, e ela é carimbada de forma imutável nos commits que você começa a criar:

* Se quisermos substituir essa informação com nomes diferente para projeto especificos podemos roidar o comando sem a opçao de --global 

## Editor
Aqui podemos trocar o editor 

git config --global core.editor "code --w"

* Ver vonfiguração 
git config --list

## Git config

[] Permite ver e atribuir
[] Estavas bvariaveis podem ser armazenadas em 3 lugares diferentes:

  1- /etc/gitconfig: válido para todos os usuários no sistema em todos os seus repositorios. Se você passar a oção --system para git config , ele lê e escreve neste arquivo.

  2- ~/.gitconfig ou ~/.config/git/config: Somente para o seu usuario, podemos fazer o git ler e escrever neste arquivo passando na opção --global.

  3- config no diretório Git (ou seja .git/config) de qualquer repositório que você estaja usando: específico para este repositório.

  Cada nível sobreescre os valores no ível anterior, .git/config prevalecem sobre /etc/gitconfig.

  
