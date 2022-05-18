import React from "react";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";

import {
  Container,
  InputField,
  InputLabel,
  HeaderTitle,
  HeaderText,
  Header,
  Footer,
  FooterText,
} from "./styles";

export default function RegisterAccountScreen() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Legal!</HeaderTitle>
        <HeaderText>
          Preencha seus dados que vamos criar uma nova conta pra você.
        </HeaderText>
      </Header>
      <InputField>
        <InputLabel>Seu nome:</InputLabel>
        <Input name="name" placeholder="seu nome completo" value={""} />
      </InputField>
      <InputField>
        <InputLabel>E-Mail:</InputLabel>
        <Input
          name="email"
          keyboardType="email-address"
          placeholder="email@address.com"
          value={""}
        />
      </InputField>
      <InputField>
        <InputLabel>Senha:</InputLabel>
        <Input name="password" placeholder="senha segura" value={""} />
      </InputField>
      <InputField>
        <InputLabel>Confirmação:</InputLabel>
        <Input
          name="passwordConfirm"
          placeholder="confirme sua senha"
          value={""}
        />
      </InputField>
      <Footer>
        <FooterText>
          Ao clicar no botão abaixo você concorda com a nossa política de
          privacidade.
        </FooterText>
        <FooterText>
          Você deve confirmar seu endereço de e-mail para poder fazer login no
          aplicativo.
        </FooterText>
        <Button title="Criar conta!" />
      </Footer>
    </Container>
  );
}
