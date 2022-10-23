import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";
import { useGroup, User } from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Footer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  InputField,
  InputLabel,
  ProfileForm,
} from "./styles";

export default function ProfileScreen() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [shortName, setShortName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { getUserById } = useGroup();
  const { userId, updateUser, resetPasswordEmail, updateEmail } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  async function loadUserProfile() {
    try {
      const data = await getUserById(userId);

      setFullName(data.full_name);
      setEmail(data.email ?? "");
      setShortName(data.short ?? "");
    } catch (error) {
      Alert.alert("Erro ao carregar dadados do seu perfil!!!!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUserProfile();
  }, []);

  async function handleSaveProfile() {
    setIsLoading(true);
    try {
      await updateUser(fullName.trim(), shortName.trim());
    } catch (error) {
      Alert.alert("Erro ao atualizar dadados do seu perfil!!!!");
    } finally {
      setIsLoading(false);
      navigation.goBack();
    }
  }

  async function handleResetPassword() {
    setIsLoading(true);
    try {
      await resetPasswordEmail(email);
    } catch (error) {
      return Alert.alert("Ocorreu um erro. Tente novamente em alguns minutos.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateEmail() {
    setIsLoading(true);
    try {
      await updateEmail(email.trim());
    } catch (error) {
      console.log(error);
      return Alert.alert("Ocorreu um erro. Tente novamente em alguns minutos.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <HeaderTopWrapper>
          <ButtonWrapper>
            <BackButton
              onPress={() => navigation.goBack()}
              color={theme.colors.text}
            />
          </ButtonWrapper>
          <HeaderTitle>Editar perfil</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <ProfileForm>
        <InputField>
          <InputLabel>E-Mail:</InputLabel>
          <Input
            name="email"
            value={email}
            onChangeText={setEmail}
            editable={true}
          />
        </InputField>
        <InputField>
          <InputLabel>Nome:</InputLabel>
          <Input name="full_name" value={fullName} onChangeText={setFullName} />
        </InputField>
        <InputField>
          <InputLabel>Apelido:</InputLabel>
          <Input
            name="short_name"
            value={shortName}
            onChangeText={setShortName}
          />
        </InputField>
      </ProfileForm>
      <Footer>
        <Button
          title="Salvar"
          onPress={handleSaveProfile}
          loading={isLoading}
        />
        <Button
          title="Nova senha"
          onPress={handleResetPassword}
          color={theme.colors.primary}
        />
        <Button
          title="Update Email"
          onPress={handleUpdateEmail}
          color={theme.colors.secondary}
        />
      </Footer>
    </Container>
  );
}
