import React, { useState } from "react";

import {
  Container,
  LogoContainer,
  LoginForm,
  InputLabel,
  InputField,
  Spacer,
} from "./styles";

import AppLogo from "../../shared/components/AppLogo";
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Alert } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  async function handleLogin() {
    Alert.alert(`email: ${email} pass:${password}`);
  }

  return (
    <Container>
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
      </LoginForm>
    </Container>
  );
}
