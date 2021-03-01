import React, { useState } from 'react'

import './Mega.css'

export default (props) => {

    let numeros = []
    let num = 0
    const [quantidade, setQuantidade] = useState(0)
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function gerarNumeros(qtde) {

        if(qtde > 60){
            alert("Você deve digitar valores menores ou igual a 60")
        }else{
            for(let i = 0; i < qtde; i++){
            
                num = parseInt(Math.random() * (61 - 1) + 1)
    
                if(numeros.includes(num)){
                    i--
                }else{
                    numeros.push(num)
                }
                
            }
            setNumerosSorteados(numeros.sort((a, b)=> {
                return a-b
            
            }).toString().replace(/,/g, ', '))
        }
        
    }


    return (
        <div>
            <h4>Sorteador de números</h4>

            <div className="Input">
                <label htmlFor="qtdeInput">Informe a quantidade de números a serem sorteados:</label>
                <input 
                    id="qtdeInput" 
                    type="number" 
                    value={quantidade} 
                    onChange={(e) => setQuantidade(+e.target.value) }
                />
                
            </div>
            <button onClick={() => gerarNumeros(quantidade)}>Sortear números</button>
            <h3>Números sorteados:</h3>
            <p>{ numerosSorteados }</p>
        </div>
    )
}