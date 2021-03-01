import React, { useState, useEffect } from 'react'

import './Mega.css'

export default (props) => {
    
    const [quantidade, setQuantidade] = useState(1)
    const [numerosSorteados, setNumerosSorteados] = useState([0])

    function gerarNumeros(qtde) {

        
        
        if(qtde > 60){
            alert("Você deve digitar valores menores ou igual a 60!")
        }else{
            let numerosAleatorios = []
            let numAleatorio = 0

            for(let i = 0; i < qtde; i++){
            
                numAleatorio = parseInt(Math.random() * (61 - 1) + 1)
    
                if(numerosAleatorios.includes(numAleatorio)){
                    i--
                }else{
                    numerosAleatorios.push(numAleatorio)
                }
                
            }
            setNumerosSorteados(numerosAleatorios.sort((a, b)=> {
                return a - b
            }))


        }
        
    }

    return (
        <div className="Mega">
            <h4>Sorteador de números para Mega-Sena</h4>

            <div className="Input">
                <label htmlFor="qtdeInput">Informe a quantidade de números a serem sorteados:</label>
                <input 
                    id="qtdeInput" 
                    type="number" 
                    value={quantidade} 
                    onChange={(e) => setQuantidade(+e.target.value) }
                    min={1}
                    max={60}
                />
                
            </div>
            <button onClick={() => gerarNumeros(quantidade)}>Sortear números</button>
            <h4>Números sorteados:</h4>
            <div className="RenderNumeros">
                {
                    numerosSorteados.map(n => {
                        return (
                            <div className="DivNumero">
                                <a className="Numero">{ n }</a>    
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )
}