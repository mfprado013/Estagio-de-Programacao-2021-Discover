## O que é git ? 

# Controle de Versão
 * Registro de alterações em um ou mais arquivos
 * Lembrar versões específicas mais atrde
 * Reverter para estado anterior determinados arquivos ou um projeto inteiro
 * Compare as mudanças ao longo do tempo
 * Veja quem modificou pela úlyima vez algo pode estar causando um problema
 * Quem introduziu um problema ou quando 
 * Se você estragar tudo ou perder arquivos, você pode facilmente recuperar
 * E muito mais 

 ## Tipos de Controle de Versão

 # Sistemas Locais

 * Copiar os arquivos para outro diretório
 * Muito comum e muito simples
 * Incrivelmente propensa a erros
 * Fácil de sobreescrever arquivos, caso haja feito uma cópia errada

 | Para superar os possíveis erros, existe o RCS - Revision Control System

 * Ferramenta popular (antigamente)para controle de versão
 * Mantem conjuntos de alterações, ou seja, as diferenças entre os arquivos
 * Formato especial no disco;
 * Re-criar como qaulquer arquivo se parecia em qualquer ponto no tempo, adicionando -se todas as alterações ao aqruivo.

| E se você precisar colaborar com desenvolvedores em outros sistemas ?

# Sstemas Centralizados
   Exemplo: CVS, Subversion e Perforce.

* Um único servidor que contém todos os arquivos de controle de versão
* Vários clientes usam arquivos a aprtir desse lugar central.

Por muitos anos, este tem sído o padrão para controle de versão.

# Vantagens sobre VCSs locais

* Controle sobre atividades dos colaboradores no projeto.
* Os administradores têm controle refinado sobre quem pode fazer o que;
* Mais fácil de administrar um CVCS do que lidar com bancos de dados locais em cada cliente.

# Desvantagens
* Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando.
* Se o disco rígido do banco de dados central for corrompido, você perde absolutamente tudo
* Sistemas VCS locais sofrem com esse mesmo problema

| Sempre que você temha toda a história do projeto em um único lugar, há o risco de perder tudo.

## Sistemas Distribuídos
  Exemplo: Git, Mercurial, Bazaar ou darcs

* Duplicar (clonar) localmente o repositório completo.
* Se qualquer servidor morrer, e esses distemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para servidor.
* Cada clone é de fato um backup completo de todos os dados.
* Clientes usam o estado mais recente dos arquivos

## O que é Git?

* Sistema de controle de versão distribuido
* Open-Source
* Pontos na história: commit (viagem no tempo)
  * Histórico de alterações no código
  * Voltar para qualquer ponto na história
* Controlar o fluxo de novas funcionalidades
  * Ramificações: branch (universos paralelos)
  * Vários devs no mesmo projeto
  * Análise e resolução de conflitos
  