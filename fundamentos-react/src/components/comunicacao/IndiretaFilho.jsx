import React from 'react'

export default (props) => {

    const nomes = ["", "João", "Manuel", "Miguel", "Carlos", "Igor", "Mario", "Vitor"]
    const idadeMin = 35
    const idadeMax = 80

    const gerarIdade = () => parseInt(Math.random() * (idadeMax - idadeMin) + idadeMin)
    const gerarNome = () => {
        const posicaoArray = parseInt(Math.random() * ( 8 - 1) + 1)
        return nomes[posicaoArray]
    }
    const defineBool = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => {
                    props.quandoClicar(gerarNome(), gerarIdade(), defineBool())
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}