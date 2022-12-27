import styled from "styled-components";
import Background from "../../assets/people1.png";


 //*CONTAINER CONTENDO TODOS S ITENS, E A INAGEM DE FUNDO*/
export const Container = styled.div`
  background: url("${Background}");
  background-color: black;
  background-size: cover;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

  //*CONTAINER DE TODODS OS ITENS (H1, INPUT, LABEL, BUTTON)*/
export const ContainerItens = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px rgba(322, 113, 19, 0.95);
  margin-top: 90px;
  border-radius: 61px 61px 0px 0px;
  flex-direction: column;
  padding: 50px 36px;
  height: 100vh;
  background-color: rgb(36, 36, 36);
`;

 //*H1 ESCRITO 'CADASTE-SE'*/
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;

  margin-top: 50px;
  text-align: center;
  margin-bottom: 40px;
  color: #f4802f;
  
`;

//*LABELS*/
export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-left: 20px;
  letter-spacing: -0.408px;
  margin-bottom: 10px;
  color: #f4802f;
`;

//*INPUTS PARA O CADASTRO*/
export const Input = styled.input`
  background: rgb(49, 49, 49);
  box-shadow: 1px 1px 10px rgb(0, 0, 0);
  border-radius: 14px;
  width: 342;
  height: 58px;
  outline: none;
  border: none;
  padding-left: 25px;
  color: white;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;

  //*SERVE PARA REMOVER AS DEFINIÇÕES DO INPUT NUMBER POR PADRÃO DO NAVEGADOR */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

//*BOTÃO CADASTRAR*/
export const Button = styled.button`
  background-color: rgb(71, 71, 71);
  border: solid 0.5px rgb(30, 30, 30);
  border-radius: 14px;
  color: #ff7f00;
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
  margin-top: 60%;

//*IMAGEM DO BOTÃO SETA*/
  img {
    width: 60px;
    color: #ff7f00;
    
//*ANIMAR A IMAGEM*/
    -webkit-animation: actions 1s linear infinite;
    -moz-animation: actions 1s linear infinite;
    -ms-animation: actions 1s linear infinite;
    -o-animation: actions 1s linear infinite;
    animation: actions 1s linear infinite;
  }

  &:hover {
    //*QUANDO PASSA O MOUSE SOBRE O BUTTON*/
    background: rgb(49, 49, 49);
    box-shadow: 0px 1px 10px rgb(0, 0, 0);
    color: #ffff;
  }

  &:active {
    //*QUANDO CLICA NO BUTTON*/
    opacity: 0.5;
  }

  //*ANIMAR A IMAGEM*/
  @keyframes actions {
    0% {
      padding-right: 0px;
    }
    20% {
      padding-right: 5px;
    }
    40% {
      padding-right: 10px;
    }
    80% {
      padding-left: 5px;
    }
    100% {
      padding-right: 0px;
    }
  }
`;
