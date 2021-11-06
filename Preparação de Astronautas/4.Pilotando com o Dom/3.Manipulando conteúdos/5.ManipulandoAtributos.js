// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.settAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

header.setAttribute('class', 'bg header')