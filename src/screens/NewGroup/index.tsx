import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AppError } from "../../shared/errors/AppError";
import { useGroup } from "../../shared/hooks/GroupContext";
import { RegisterForm } from "../RegisterAccount/styles";
import {
  Container,
  Footer,
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
  const { createGroup, findGroupByName } = useGroup();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [matchScorePoints, setMatchScorePoints] = useState("");
  const [matchWinnerPoints, setMatchWinnerPoints] = useState("");

  async function handleCreateNewGroup() {
    if (!name || !password || !matchScorePoints || !matchWinnerPoints)
      return Alert.alert(`Preencha todos os campos`);
    if (isNaN(Number(matchScorePoints)))
      return Alert.alert(
        `É preciso informar os pontos para os palpites certos corretamente.`
      );
    if (Number(matchScorePoints) === 0)
      return Alert.alert(
        `A pontuação não pode ser zero! Qual a graça de um bolão sem pontos?`
      );
    if (Number(matchScorePoints) === 1) return Alert.alert(`Sério?`);
    if (isNaN(Number(matchWinnerPoints)))
      return Alert.alert(
        `É preciso informar os pontos bônus corretamente. Se não quiser atribuir pontos bônus preencha com zero.`
      );

    try {
      const found = await findGroupByName(name);
      if (found.length > 0)
        return Alert.alert(`Já existe um grupo com este nome. Esconha outro.`);

      await createGroup({
        name,
        password,
        match_score_points: Number(matchScorePoints),
        match_winner_points: Number(matchWinnerPoints),
      });

      navigation.navigate(
        "Confirmation" as never,
        {
          title: "Novo grupo criado!",
          message: "Agora você pode entrar no grupo e começar a jogar!",
          instructions:
            "Clique em meus palpites na tela principal para ver ou registrar seus palpites.",
          nextScreen: "Dashboard",
        } as never
      );
    } catch (error) {
      if (error instanceof AppError)
        return Alert.alert(`${error.message} - ${error.statusCode}`);
      console.log(`unknown ERROR: ${error}`);
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
          <BackButton
            onPress={() => navigation.goBack()}
            color={theme.colors.text}
          />
          <HeaderTitle>Novo Bolão:</HeaderTitle>
        </HeaderTopWrapper>
        <HeaderText>
          Preencha os campos para criar um nogo grupo de bolão.{`\n\n`}
          Use uma senha segura para seus amigos entrarem no seu grupo.
        </HeaderText>
      </Header>
      <ScrollView>
        <RegisterForm>
          <InputField>
            <InputLabel>Nome do grupo</InputLabel>
            <Input
              name="name"
              placeholder="Quem chuta busca"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </InputField>
          <InputField>
            <InputLabel>Senha:</InputLabel>
            <Input
              name="password"
              placeholder="senha para seus amigos entrarem no seu grupo"
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </InputField>
          <FormTitle>Pontuação do bolão</FormTitle>
          <InputField>
            <InputLabel>Pontos para o placar exato:</InputLabel>
            <Input
              name="points"
              placeholder="pontos para o placar exato do jogo"
              keyboardType="numeric"
              value={matchScorePoints}
              onChangeText={(text) => setMatchScorePoints(text)}
            />
          </InputField>
          <FormTitle>Pontos bônus</FormTitle>
          <InputField>
            <InputLabel>
              Conceder pontos extras para o palpite que acertar o resultado da
              partida:
            </InputLabel>
            <Input
              name="bonus"
              placeholder="pontos extras"
              keyboardType="numeric"
              value={matchWinnerPoints}
              onChangeText={(text) => setMatchWinnerPoints(text)}
            />
          </InputField>
        </RegisterForm>
      </ScrollView>
      <Footer>
        <Button title="Criar novo grupo!" onPress={handleCreateNewGroup} />
      </Footer>
    </Container>
  );
}
