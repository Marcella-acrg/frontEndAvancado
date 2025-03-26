import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(null)
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero() {
        if(numerosSorteados.length < 6) {
            let sorteado;
            do {
                sorteado = Math.floor(Math.random() * 60) + 1
            } while (numerosSorteados.includes(sorteado))
            
            let numeroFormatado = sorteado < 10 ? `0${sorteado}` : `${sorteado}`

            setNumeroSorteado(numeroFormatado)
            setNumerosSorteados(prevNumeros => [...prevNumeros, numeroFormatado])
        } else {
            alert("Já temos 6 números sorteados")
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h2>Último número sorteado: {numeroSorteado}</h2>
        <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena