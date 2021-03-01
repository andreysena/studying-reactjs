import React, { Component } from 'react'

import Botoes from './Botoes'
import PassoForm from './PassoForm'
import Display from './Display'

//Craindo um componente baseado em classe
export default class Contador extends Component{

    //Definindo estados em um componente baseado em classe
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }


    /* Abaixo está umas das maneiras de apontar qual o contexto em que a função
    inc estará inserida */

    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }


    /* Abaixo está uma alternativa para a função de incremento, criá-la como uma 
    arrow function e atribuí-la à uma variável*/

    //Declarando a função para realizar o incremento
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    //Criação da função render, responsável por renderizar o conteúdo em tela
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />

                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                
                <Botoes setInc={this.inc} setDec={this.dec} />

            </div>
        )
    }
}