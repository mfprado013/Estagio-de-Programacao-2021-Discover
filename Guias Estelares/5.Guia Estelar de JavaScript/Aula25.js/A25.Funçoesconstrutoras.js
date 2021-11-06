
/*
   Function () constructor
   * expressão new
   * criar um novo objeto
   * this keyword
*/

function person(name){
  this.name = name 
  this.walk = function (){
    return this.name + "esta andando"
  }
}
const matheus = new person("matheus")
const felipe = new person("felipe")
console.log(matheus.walk())
console.log(felipe.walk())


let name = new String("matheus")

console.log(name)