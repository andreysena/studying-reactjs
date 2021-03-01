import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {
    
    const itemsLista = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}. {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                { itemsLista }
            </ul>
        </div>
    )
}