import React from "react";

import {
  Container,
  LogoContainer,
  LoginForm,
  InputLabel,
  InputField,
} from "./styles";

import AppLogo from "../../shared/components/AppLogo";
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <LoginForm>
        <InputField>
          <InputLabel>E-Mail:</InputLabel>
          <Input name="email" placeholder="email@address.com" />
        </InputField>
        <InputField>
          <InputLabel>Senha:</InputLabel>
          <Input name="password" placeholder="senha" secureTextEntry={true} />
        </InputField>
        <Button title="Login" />
      </LoginForm>
    </Container>
  );
}
