import React from 'react'

import If, { Else } from './If'

export default (props) => {
    
    const usuario = props.usuario || {}

    return (
        <>
            <If test={usuario && usuario.nome}>
                <p>Seja bem-vindo <strong>{ usuario.nome }!</strong></p>
                
                <Else>
                    <p>Seja bem-vindo <strong>Amigão!</strong></p>  
                </Else>
            </If>
        </>
    )
}