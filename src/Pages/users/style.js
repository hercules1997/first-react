import styled from "styled-components";
import Background from "../../assets/people1.png";

//*CONTAINER CONTENDO TODOS S ITENS, E A INAGEM DE FUNDO*/
export const Container = styled.div`
  background: url("${Background}");
  background-color: black;
  background-size: cover;

  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 40px;
`;

//*CONTAINER DE TODODS OS ITENS (H1, INPUT, LABEL, BUTTON)*/
export const ContainerItens = styled.div`
  background-color: rgb(36, 36, 36);

  display: flex;
  flex-direction: column;

  border-radius: 61px 61px 0px 0px;
  box-shadow: 0px 1px 3px rgba(322, 113, 19, 0.95);

  padding: 50px 36px;
  margin-top: 90px;
  height: 100vh;
`;

//*H1 ESCRITO 'OLÁ, SEJAM BEM-VINDOS'*/
export const H1 = styled.h1`
  color: #ff7f00;

  font-weight: 700;
  font-size: 34px;

  line-height: 40px;
  text-align: center;

  margin-bottom: 40px;
  margin-top: 50px;
`;

//*BOTÃO CADASTRAR*/
export const Button = styled.button`
  background: transparent;
 color: #ff7f00;

  border-radius: 14px;
  border: 1px solid #ff7f00;
  padding: 30px;

  width: 342px;
  height: 74px;

  font-size: 20px;
  font-style: normal;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 160px;

  img {
    transform: rotateY(180deg);
  }

//*QUANDO PASSA O MOUSE SOBRE O BUTTON*/
  &:hover {
    border: none;
    background: #ff7f00;
    color: #ffff;
    box-shadow: 0px 1px 10px rgb(0, 0, 0);
  }

//*QUANDO CLICA NO BUTTON*/
  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;

  background: rgb(49, 49, 49);
  box-shadow: 1px 1px 10px rgb(0, 0, 0);
  border-radius: 14px;
  width: 342;
  height: 58px;
  
  border: none;
  color: white;
  font-size: 20px;
  line-height: 28px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    color: #ffff;
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
