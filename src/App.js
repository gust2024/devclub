import React from 'react'
import logo from './assets/logoDevPlay.png'


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from './styles';
//JSX
function App() {

  return (
    <Container>
      <Image alt="logo" src={logo}/>
      <ContainerItens>
        
        <H1>Sign In</H1>
        
        <InputLabel>Usuario</InputLabel>
        <Input placeholder="Usuario" />

        <InputLabel>Senha</InputLabel>
        <Input placeholder="Senha" />

        <Button> LOGIN</Button>

      </ContainerItens>

    </Container>
  );
}

export default App 