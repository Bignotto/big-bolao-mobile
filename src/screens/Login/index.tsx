import React from "react";

import { Container, LogoContainer, TempText, LoginForm } from "./styles";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <TempText>Here goes App Logo</TempText>
      </LogoContainer>
      <LoginForm>
        <TempText>Here goes login form</TempText>
      </LoginForm>
    </Container>
  );
}
