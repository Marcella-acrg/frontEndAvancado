import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador + 1)
    }

  return (
    <div>
        <h1>Contador com useState</h1>
        <h2>O contador está em: {contador}</h2>
        <button onClick={incrementarContador}>Incrementar contador</button>
    </div>
  )
}

export default HookContador