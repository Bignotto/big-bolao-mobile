import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group } from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Footer,
  FormTitle,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  InputField,
  InputLabel,
  PlayersListContainer,
  RegisterForm,
  Spacer,
} from "./styles";
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import PlayersList from "../../shared/components/PlayersList";

interface Params {
  group: Group;
}

export default function GroupProperties() {
  const route = useRoute();
  const { group } = route.params as Params;
  const theme = useTheme();
  const navigation = useNavigation();

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
          <HeaderTitle>{group.group.name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <RegisterForm>
        <InputField>
          <InputLabel>Senha:</InputLabel>
          <Input name="name" placeholder="senha do grupo" value="XPTO027" />
        </InputField>
        <FormTitle>Pontuação do bolão</FormTitle>
        <InputField>
          <InputLabel>Pontos para o palpite exato:</InputLabel>
          <Input name="password" placeholder="" value="5" />
        </InputField>
        <FormTitle>Pontos bônus</FormTitle>
        <InputField>
          <InputLabel>
            Conceder pontos extras para o palpite que acertar o vencedor da
            partida:
          </InputLabel>
          <Input
            name="bonus"
            placeholder="pontos extras"
            keyboardType="numeric"
            value="1"
          />
        </InputField>
      </RegisterForm>
      <PlayersListContainer>
        <FormTitle>Jogadores do grupo:</FormTitle>
        <Spacer />
        <PlayersList />
      </PlayersListContainer>
      <Footer>
        <Button title="Salvar" enabled={false} />
        <Button title="Sair do grupo" color="#E83F5B" />
      </Footer>
    </Container>
  );
}
