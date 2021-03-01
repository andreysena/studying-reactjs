import React from 'react'
import './Botoes.css'

export default (props) => {
    return (
        <div className="Botoes">
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}