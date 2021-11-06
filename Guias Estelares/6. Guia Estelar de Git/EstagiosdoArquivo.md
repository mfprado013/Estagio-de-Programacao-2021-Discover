## Estágios do Aquivo em Repositorio

*git init/clone - aqui inicia um aquivo local

*git add/- working Diretory daqui passamos para o segundo passo que o stage Area

*git commit  - local Repository 
aqui começamos a moldader seu aquivo

* Modifed - aqui é onde pedimos auteraçoes nada

* Staged -  Aqui o arquivo estava pronto para ser commit - assim que commitamos ele entra nos bancos de dados do repositorio

## Git Worflow

  * Local Repository = agora vem o arquivo das outras de baixo, se criar mais de uma versão vamos ir tendo mtas versoes uma atras da outra.

git commit

  * Staged = file.txt(1)

git add.

  *Working Diretory = file.txt(v1)

  ## Hash SHA-1
   checksum - converto dados em numero
        * CADA COMMIT ELE CONVERTE OS DADOS EM NUMEROS
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
