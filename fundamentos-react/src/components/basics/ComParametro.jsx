import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                { props.aluno } tem nota { notaInt }
            </p>
            <p>
                <strong>{ status }</strong>!
            </p>
        </div>
    )
}