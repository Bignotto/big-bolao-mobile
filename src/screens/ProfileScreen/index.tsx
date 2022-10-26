import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, StatusBar } from "react-native";

import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { FontAwesome5 } from "@expo/vector-icons";

import { useAuth } from "../../shared/hooks/AuthContext";
import { useGroup } from "../../shared/hooks/GroupContext";
import { useTheme } from "styled-components";
import {
  ButtonWrapper,
  Container,
  Footer,
  FormTitle,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  InfoText,
  InfoWrapper,
  InputField,
  InputLabel,
  ProfileForm,
  Spacer,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";

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
      Alert.alert(
        "Foi enviado um e-mail com instruções para redefinição da senha em seu endereço."
      );
      navigation.goBack();
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

      Alert.alert(
        "Clique no link que você vai receber em seu novo e-mail para confirmar a alteração."
      );
      navigation.goBack();
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
      <ScrollView>
        <ProfileForm>
          <InputField>
            <InputLabel>Nome:</InputLabel>
            <Input
              name="full_name"
              value={fullName}
              onChangeText={setFullName}
            />
          </InputField>
          <InputField>
            <InputLabel>Apelido:</InputLabel>
            <Input
              name="short_name"
              value={shortName}
              onChangeText={setShortName}
            />
          </InputField>
          <Button
            title="Salvar"
            onPress={handleSaveProfile}
            loading={isLoading}
          />

          <FormTitle>Alterar seu e-mail:</FormTitle>
          <InputField>
            <InputLabel>E-Mail</InputLabel>
            <Input
              name="email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              editable={true}
            />
          </InputField>
          <Button
            title="Atualizar e-mail"
            onPress={handleUpdateEmail}
            loading={isLoading}
          />
          <InfoWrapper>
            <InfoText>
              Você vai precisar confirmar seu novo endereço de e-mail se quiser
              alterá-lo.
            </InfoText>
          </InfoWrapper>
          <FormTitle>Redefinir sua senha:</FormTitle>
          <InfoText>
            Ao clicar no botão abaixo você receberá um e-mail com instruções
            para redefinir sua senha.
          </InfoText>
          <Spacer />
          <Button
            title="Redefinir senha"
            onPress={handleResetPassword}
            color={theme.colors.primary}
            loading={isLoading}
          />
        </ProfileForm>
      </ScrollView>
    </Container>
  );
}
