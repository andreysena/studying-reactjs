import React from 'react'

export default (props) => {
    return (
        <div style={{
            marginTop: '20px',
        }}>       
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput" 
                type="number" 
                value={props.passo}
                onChange={(e) => props.setPasso(+e.target.value)}
            />
        </div>
    )
}