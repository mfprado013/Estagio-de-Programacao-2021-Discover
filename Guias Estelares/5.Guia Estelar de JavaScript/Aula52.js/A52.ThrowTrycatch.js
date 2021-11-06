// throw
function sayMyName(name = ''){
  if(name === '') {
     throw 'nome e obrigatorio'
  }
  console.log('depois do erro')
}
//try...catch
try {
   sayMyName( )
} catch(e){
  console.log(e)
}


console.log('após ao try/catch')
