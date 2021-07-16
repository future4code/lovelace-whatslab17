import React from 'react'
import styled from 'styled-components'

const CaixaPrincipal = styled.h1`
    background-color: grey;
    border: 1px solid black;
    width: 100% auto;
`
const Texto = styled.p`
    background-color: papayawhip;
    border: 1px solid black;
`

export default class EntradaDeTexto extends React.Component {
    render() {

    return (
    
    <div>

        <CaixaPrincipal> Meu primeiro componente! </CaixaPrincipal>
        <button> Mandar mensagem! </button>
        <p>this.props.texto</p>

    </div>

    )
}
}
