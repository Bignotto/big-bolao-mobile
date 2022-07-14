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
import { Alert, KeyboardAvoidingView, StatusBar, Keyboard } from "react-native";
import { useAuth } from "../../shared/hooks/AuthContext";
import { AppError } from "../../shared/errors/AppError";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const { signIn } = useAuth();

  const navigation = useNavigation<any>();

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

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
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
          </LoginForm>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
