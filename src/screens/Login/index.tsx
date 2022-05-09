import React from "react";

import {
  Container,
  LogoContainer,
  TempText,
  LoginForm,
  LogoImage,
} from "./styles";

import AppLogo from "../../shared/components/AppLogo";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <LoginForm>
        <TempText>Here goes login form</TempText>
      </LoginForm>
    </Container>
  );
}
