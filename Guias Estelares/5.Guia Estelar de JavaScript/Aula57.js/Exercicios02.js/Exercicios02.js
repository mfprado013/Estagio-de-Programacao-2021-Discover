/* ### Sistema de gastos familiar


Crie um Objetos que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá caluculra o total de receitas e despesas e irá mostras uma mensagem se a familia esta com o saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
  incomes: [3500, 2500, 1300, 5000],
  expenses: [250, 500, 183, 3500]
}

function sum(array) {
  let total = 0;
  for(let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  
   const  total = calculateIncomes - calculateExpenses 

   const itsOK = total >= 0
    
    let balanceText = "negativo"

   if (itsOK) {
     balanceText = "positivo"
    }

    console.log('Seu saldo é ${balanceText}: ${total}')
}

calculateBalance()

