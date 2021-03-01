import React, { useState } from 'react'
import './Input.css'

export default (props) => {
    
    const [valor, setValor] = useState('Inicial')

    return (
        <div className="Input">
            <h2>{ valor }</h2>
            <div className={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={(e) => setValor(e.target.value)}/>
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
            
        </div>
    )
}