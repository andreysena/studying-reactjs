import React from 'react'

export default (props) => {

    const isPar = props.num % 2 === 0

    return (
        <div>
            {
                isPar ? 
                    <span>Par</span>
                    :
                    <span>Ímpar</span>
            }
            
            
        </div>
    )
}