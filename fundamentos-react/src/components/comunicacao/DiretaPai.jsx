import React from 'react'

import DiretaFilho from './DiretaFilho'

export default (props) => {

    return (
        <div>
            <DiretaFilho nome="João" idade={20} bool={true}/>
            <DiretaFilho nome="Caio" idade={12} bool={false}/>
            <DiretaFilho nome="Camila" idade={32} bool={true}/>
        </div>
    )
}