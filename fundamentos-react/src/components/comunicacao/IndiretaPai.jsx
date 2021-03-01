import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default (props) => {

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function FornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <p><strong>Nome: { nome }. </strong></p>
                <p><strong>Idade: { idade }. </strong></p>
                <p><strong>Nerd? { nerd ? "Sim" : "Não" }.</strong></p>
            </div>

            <IndiretaFilho quandoClicar={FornecerInformacoes}/>
        </div>
    )
}