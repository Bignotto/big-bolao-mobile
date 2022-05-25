import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signUp } = useAuth();

  async function handleSubmit() {
    if (password !== passwordConfirm)
      return Alert.alert("As senhas não batem.");

    try {
      await signUp(email, password);
    } catch (error) {
      if (error instanceof AppError) Alert.alert(error.message);
    }
  }

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
        <Input
          name="name"
          placeholder="seu nome completo"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </InputField>
      <InputField>
        <InputLabel>E-Mail:</InputLabel>
        <Input
          name="email"
          keyboardType="email-address"
          placeholder="email@address.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </InputField>
      <InputField>
        <InputLabel>Senha:</InputLabel>
        <Input
          name="password"
          placeholder="senha segura"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </InputField>
      <InputField>
        <InputLabel>Confirmação:</InputLabel>
        <Input
          name="passwordConfirm"
          secureTextEntry={true}
          placeholder="confirme sua senha"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
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
        <Button title="Criar conta!" onPress={handleSubmit} />
      </Footer>
    </Container>
  );
}
