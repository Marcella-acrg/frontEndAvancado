import React from 'react'
import Aluno2 from './components/Aluno2'

const App = () => {

  const alunos = [
    {id: 1, nome: "João", email: "joao@gmail.com", curso: "Sistemas para internet", media: 9.5},
    {id: 2, nome: "Marcella", email: "marcella@gmail.com", curso: "Sistemas para internet", media: 10},
    {id: 3, nome: "Maria", email: "maria@gmail.com", curso: "Sistemas de informação", media: 7.5}
  ]

  return (
    <div>
      {alunos.map((aluno2) => (
        <Aluno2 key={aluno2.id} {...aluno2} />
      ))}
    </div>
  )
}

export default App
