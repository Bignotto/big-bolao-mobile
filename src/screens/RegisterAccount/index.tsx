import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
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
  RegisterForm,
} from "./styles";

export default function RegisterAccountScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signUp } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  async function handleSubmit() {
    if (password !== passwordConfirm)
      return Alert.alert("As senhas não batem.");

    try {
      await signUp(email, password, name);
    } catch (error) {
      if (error instanceof AppError) Alert.alert(error.message);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.text}
        />
        <HeaderTitle>Nova conta</HeaderTitle>
        <HeaderText>
          Preencha seus dados que vamos criar uma nova conta pra você.
        </HeaderText>
      </Header>
      <ScrollView>
        <RegisterForm>
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
        </RegisterForm>
        <Footer>
          <FooterText>
            Ao clicar no botão abaixo você concorda com a nossa política de
            privacidade.
          </FooterText>
          <Button title="Criar conta!" onPress={handleSubmit} />
        </Footer>
      </ScrollView>
    </Container>
  );
}
