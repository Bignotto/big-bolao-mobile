import React from "react";

import {
  Container,
  LogoContainer,
  TempText,
  LoginForm,
  LogoImage,
} from "./styles";

import LogoPng from "../../assets/Logo.png";
import LogoSvg from "../../assets/soccer.svg";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
      <LoginForm>
        <TempText>Here goes login form</TempText>
      </LoginForm>
    </Container>
  );
}
