import React from "react";

import {
  Container,
  LogoContainer,
  TempText,
  LoginForm,
  LogoImage,
} from "./styles";

import AppLogo from "../../shared/components/AppLogo";
import Input from "../../shared/components/Input";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <LoginForm>
        <Input name="email" placeholder="email@address.com" />
      </LoginForm>
    </Container>
  );
}
