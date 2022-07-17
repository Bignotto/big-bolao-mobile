import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { RegisterForm } from "../RegisterAccount/styles";
import {
  Container,
  Footer,
  FooterText,
  Header,
  HeaderText,
  HeaderTitle,
  InputField,
  InputLabel,
  HeaderTopWrapper,
  FormTitle,
} from "./styles";

export default function NewGroup() {
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
          <BackButton
            onPress={() => navigation.goBack()}
            color={theme.colors.text}
          />
          <HeaderTitle>Novo Bolão</HeaderTitle>
        </HeaderTopWrapper>
        <HeaderText>
          Preencha seus dados para criar um nogo grupo de bolão.{`\n\n`}Use uma
          senha segura para seus amigos entrarem no seu grupo.
        </HeaderText>
      </Header>
      <RegisterForm>
        <InputField>
          <InputLabel>Nome do grupo</InputLabel>
          <Input name="name" placeholder="Quem chuta busca" />
        </InputField>
        <InputField>
          <InputLabel>Senha:</InputLabel>
          <Input
            name="password"
            placeholder="senha para seus amigos entrarem no seu grupo"
          />
        </InputField>
        <FormTitle>Pontuação do bolão:</FormTitle>
        <InputField>
          <InputLabel>Pontos para o palpite exato:</InputLabel>
          <Input
            name="points"
            placeholder="pontos para o placar exato do jogo"
            keyboardType="numeric"
          />
        </InputField>
        <FormTitle>Pontos bônus:</FormTitle>
        <InputField>
          <InputLabel>
            Conceder pontos extras para o palpite que acertar o vencedor da
            partida:
          </InputLabel>
          <Input
            name="bonus"
            placeholder="pontos extras"
            keyboardType="numeric"
          />
        </InputField>
      </RegisterForm>
      <Footer>
        <Button title="Criar conta!" />
      </Footer>
    </Container>
  );
}
//TODO: implementar o formulário de cadastro de grupo
