import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Familia from './components/basics/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Fragment from './components/basics/Fragment'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

export default () => (
    <div className="App">
        <h1>Fundamentos de React</h1>

        <div className="Cards">

            <Card titulo="#13 - Desafio do Sorteador de Números da Mega Sena" color="#188038">
                <Mega />
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}/>
            </Card>

            <Card titulo="#11 - Componentes controlado" color="orange">
                <Input/>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="red">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="salmon">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização condicional" color="darkcyan">
                <ParOuImpar num={60}/>
                <UsuarioInfo usuario={{nome: "Teste"}}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição em Tabela" color="purple">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="magenta">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com filhos" color="brown">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="João"/>
                    <FamiliaMembro nome="Julia" />
                    <FamiliaMembro nome="Gabriel" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="green">
                <Aleatorio min={1} max={7}/>
            </Card>
            
            <Card titulo="#03 - Fragmento" color="blue">
                <Fragment />    
            </Card>
            
            <Card titulo="#02 - Com Parâmetro" color="orange">
                <ComParametro 
                    titulo="Sugundo Componente"
                    aluno="João"
                    nota={7.8}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="cyan">
                <Primeiro></Primeiro>    
            </Card>
        </div>
        
    </div>
)