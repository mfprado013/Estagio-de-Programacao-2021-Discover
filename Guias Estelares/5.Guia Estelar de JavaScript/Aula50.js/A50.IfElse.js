// Control Flow
//se estiver sujo
console.log('lavar o copo')
console.log('servir cafe')

//if ... else
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

//if quando estiver em somente 1 linha de codigo mais não é recomentado, e mais indicado fazer dentro dos blocos
