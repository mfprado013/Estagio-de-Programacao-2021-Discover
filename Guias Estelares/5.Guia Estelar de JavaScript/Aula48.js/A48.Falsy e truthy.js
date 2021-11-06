/*  
  Type conversion (typecasting) vs Type coersion

*/

console.log(number('9') + 5)

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'true' : 'false' )

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinty

*/

console.log( Infinity ? 'true' : 'false' )