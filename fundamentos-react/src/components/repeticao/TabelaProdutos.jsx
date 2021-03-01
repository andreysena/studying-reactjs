import React from 'react'

import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default (props) => {

    const linhaTabela = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? "LinhaPar" : "LinhaImpar"}key={ produto.id }>
                <td>{ produto.id }</td>
                <td>{ produto.nome }</td>
                <td>{ produto.preco }</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th className="IdColumn">ID</th>
                        <th>Nome do Produto</th>
                        <th>Preço do Produto</th>
                    </tr>
                </thead>
                <tbody>
                    { linhaTabela }
                </tbody>
            </table>
        </div>
    )
}