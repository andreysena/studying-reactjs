import React from 'react'

export default props => {
    
    const { min, max } = props

    const numAleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <p>
            O número aleatório gerado entre {min} e {max} é: {numAleatorio}
        </p>
    )

}