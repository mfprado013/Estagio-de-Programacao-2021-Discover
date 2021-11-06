// function hoisting

sayMyName();


function sayMyName(){
  console.log('matheus')
}
// é como se pegasse esse codigo e jogasse ele para cima 

sayMyName();


sayMyName = function (){
  console.log('matheus')
}// não é uma função saymyname

sayMyName();


var or const function sayMyName(){
  console.log('matheus')
}
// var e const tambem não são funçoes