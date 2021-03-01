import React, { cloneElement } from 'react'
 
export default (props) => {
    
    return (
        <div>
            { 
                // cloneElement(props.children, { ...props }) Para um único elemento


                //Utilizando o map para passar as props para mais de um elemento
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
        </div>
    )
}