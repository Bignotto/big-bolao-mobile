import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
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
  const [userProfile, setUserProfile] = useState<User>({} as User);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [shortName, setShortName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { getUserById } = useGroup();
  const { userId, updateUser } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  async function loadUserProfile() {
    try {
      const data = await getUserById(userId);

      setUserProfile(data);
      setFullName(data.full_name);
      setEmail(data.email ?? "");
      console.log({ data });
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
    try {
      await updateUser(fullName);
    } catch (error) {
      Alert.alert("Erro ao atualizar dadados do seu perfil!!!!");
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
            editable={false}
          />
        </InputField>
        <InputField>
          <InputLabel>Nome:</InputLabel>
          <Input name="full_name" value={fullName} onChangeText={setFullName} />
        </InputField>
      </ProfileForm>
      <Footer>
        <Button title="Salvar" onPress={handleSaveProfile} />
      </Footer>
    </Container>
  );
}
