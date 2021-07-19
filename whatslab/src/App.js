import React from 'react'
import styled from 'styled-components';
import FundoWhatsLab from './img/fundoWhatsLab.jpg'

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 50px ;
  justify-items: center ;
  align-items: center;



`
const MensagemContainer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  background-color: #becfeb;
  p{
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto 0 0;
    word-wrap: break-word;
    max-width: 70%;
    background-color: ${(props) => {
      if (props.usuario == "eu") {
        return "#DCF8C6";
      } else {
        return "white"
      }
    }

    };
  }

`
const InputsContainer = styled.div`




`
const UsuarioInput = styled.input`
  width: 100px;
  border-radius: 10px;
  margin: 0 5px 0 0;


`
const MensagemInput = styled.input`
width: 400px;
border-radius: 10px;
margin: 0 5px 0 0;
  

`
class App extends React.Component {
  state = {
    mensagens: [],

    usuarioValue: '',
    mensagemValue: ''

  }
  onChangeUsuarioValue = (event) => {
    this.setState({ usuarioValue: event.target.value })
  }
  onChangeMensagemValue = (event) => {
    this.setState({ mensagemValue: event.target.value })
  }
  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuarioValue,
      texto: this.state.mensagemValue
    }
    const arrayNovaMensagem = [novaMensagem, ...this.state.mensagens]
    this.setState({ mensagens: arrayNovaMensagem, mensagemValue: '' })
  }

  render() {
    const listaMensagens = this.state.mensagens.map((mensagem, index) => {
      if (mensagem.usuario === 'eu') {
        return (
          <p key={index} usuario={'eu'} >
            <strong>{mensagem.usuario}</strong>: {mensagem.texto}
          </p>

        )
      } else {
        return (
          <p key={index} usuario={'outro'} >
            <strong>{mensagem.usuario}</strong>: {mensagem.texto}
          </p>
        )
      }
    })
    return (
      <AppContainer>
        <MensagemContainer>
          {listaMensagens}
        </MensagemContainer>
        <InputsContainer>
          <UsuarioInput
            onChange={this.onChangeUsuarioValue}
            value={this.state.usuarioValue}
            placeholder={'Nome'}
          />
          <MensagemInput
            onChange={this.onChangeMensagemValue}
            value={this.state.mensagemValue}
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviaMensagem}>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }

}

export default App;
