 function finalResult () {
   let principal = document.getElementById('principal').value
   let numberOfYears = document.getElementById('numberOfYears').value
   let anualAddition= document.getElementById('anualAddition').value
   let rollOver = document.getElementById('rollOver').value
   let start =  document.getElementById('start').value
   let end =  document.getElementById('end').value
   let interestRate = document.getElementById('interestRate').value
   let makeAdditions = document.getElementById('start')

  if (makeAdditions === 'start') {

    let step1 = 1+(interestRate/100)
    let step2 = Math.pow(step1,numberOfYears)
    let step3 = principal + anualAddition
     const result = step3*step2
            document.getElementById('result').innerHTML = 'GHS '+ result.toFixed(2)
  }else {
    let step1 = 1+(interestRate/100)
    let step2 = Math.pow(step1,numberOfYears)
     const result = principal*(step2)
            document.getElementById('result').innerHTML = 'GHS '+ result.toFixed(2)
  }

 }

if (true) {

}
