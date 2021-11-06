// Adicionando elementos
const div = document.createElement('div')
div.inserText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div,script.nextSibling)