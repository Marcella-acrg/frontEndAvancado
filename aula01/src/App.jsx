import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


const App = () => {
  return (
    <div>
      <Adicao num1={6} num2={4} />
      <Subtracao num1={20} num2={5} />
      <Multiplicacao num1={2} num2={50} />
      <Divisao num1={50} num2={2} />
      <PrecisoEstudar nomeDaTecnologia="java" />
    </div>
  )
}

export default App