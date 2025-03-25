import React from 'react'

const Divisao = ({num1, num2}) => {

    if(num2 === 0) {
        return <h1>Divisor igual a zero, operação não pode ser realizada!</h1> 
    } 

    const resultado = num1 / num2

  return (
    <div>
        <h1>O resultado de {num1} / {num2} é igual a {resultado}</h1>
    </div>
  )
}

export default Divisao