import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Seta from "../../assets/seta3.png";

import {
  Container,
  H1,
  ContainerItens,
  Input,
  InputLabel,
  Button,
} from "../../Pages/home/style";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3019/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    if (inputName.current.value === "" || inputAge.current.value === "") {
      navigate()
    } else {
      navigate("/users");
    }

    setUsers([...users, newUsers]);
  }

  return (
    <Container>
      <ContainerItens>
        <H1>Cadasre-se!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>

        <InputLabel>Age</InputLabel>
        <Input type="number" ref={inputAge} placeholder="Digite sua idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
