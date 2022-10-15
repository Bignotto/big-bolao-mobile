import React, { useState } from "react";

import {
  Container,
  LogoContainer,
  LoginForm,
  InputLabel,
  InputField,
  Spacer,
  Footer,
} from "./styles";

import AppLogo from "../../shared/components/AppLogo";
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Alert, KeyboardAvoidingView, StatusBar, Keyboard } from "react-native";
import { useAuth } from "../../shared/hooks/AuthContext";
import { AppError } from "../../shared/errors/AppError";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const { signIn, resetPasswordEmail } = useAuth();

  const navigation = useNavigation<any>();
  const theme = useTheme();

  async function handleLogin() {
    try {
      await signIn(email, password);
    } catch (error) {
      if (error instanceof AppError)
        return Alert.alert(`${error.message} - ${error.statusCode}`);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  async function handleRegisterAccount() {
    navigation.navigate("RegisterAccount");
  }

  async function handleResetPassword() {
    if (email.length === 0)
      return Alert.alert("Insira seu e-mail para recuperar sua senha.");

    try {
      await resetPasswordEmail(email);
    } catch (error) {
      return Alert.alert("Ocorreu um erro. Tente novamente em alguns minutos.");
    }

    Alert.alert("Clique no link enviado ao seu e-mail para mudar sua senha.");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
        translucent
      />
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <LoginForm>
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
            placeholder="senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPasswrod(text)}
          />
        </InputField>
        <Spacer />
        <Button title="Login" onPress={handleLogin} />
        <Spacer />
        <Button title="Criar conta" onPress={handleRegisterAccount} />
        <Spacer />
        <Button
          title="Recuperar senha"
          color={theme.colors.primary}
          onPress={handleResetPassword}
        />
      </LoginForm>
    </Container>
  );
}
