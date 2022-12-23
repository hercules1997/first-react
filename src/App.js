import React from "react";

import People from "./img/consult.svg";
import Seta from "./img/seta.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Input,
  InputLabel,
  Button,
} from "./style";

function App() {
  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Olá, seja bem-vindo!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Hércules"></Input>

        <InputLabel>Age</InputLabel>
        <Input placeholder="25"></Input>

        <Button>Cadastrar <img alt="seta" src={Seta} /> </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
