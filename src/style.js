import styled from "styled-components";
import Background from "./img/fundo1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 40px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 36px;
  height: auto;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
`;
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
`;
export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 20px;
  letter-spacing: -0.408px;

  color: #eeeeee;
`;
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`;
export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  color: white;
  padding: 30px;
  width: 342px;
  height: 74px;
  font-size: 17px;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 160px;
`;
