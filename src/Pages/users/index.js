import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Seta from "../../assets/seta3.png";
import Trash from "../../assets/trash.svg";

import {
  Container,
  H1,
  ContainerItens,
  Button,
  User,
} from "../../Pages/users/style";



function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      async function fetchUser() {
        const { data: allUser } = await axios.get("http://localhost:3019/users")

        setUsers(allUser)
      }
      fetchUser()

  }, [])


  async function removeUser(userId) {
    
    await axios.delete(`http://localhost:3019/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  const navigate = useNavigate()
  
  function navigationPages() {
    navigate('/')
  }

  return (
    <Container>
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p>
              <p>{user.age}</p>
              <p>{user.order}</p>

              <button onClick={() => removeUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={navigationPages} >
          <img id="seta3" alt="seta" src={Seta} />Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
