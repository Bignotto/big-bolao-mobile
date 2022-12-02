import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import MatchGuessInput from "../../shared/components/MatchGuessInput";
import { useAuth } from "../../shared/hooks/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { useGroup, UserMatchGuess } from "../../shared/hooks/GroupContext";

import {
  ButtonWrapper,
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export default function TodayGuessesScreen() {
  const { userId } = useAuth();

  const theme = useTheme();
  const navigation = useNavigation();

  const { getUserGuessesByDays } = useGroup();

  const [guesses, setGuesses] = useState<UserMatchGuess[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadGuesses() {
    const today = new Date();
    var yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    const days = [yesterday.getDate(), today.getDate(), tomorrow.getDate()];

    const months = [
      yesterday.getMonth() + 1,
      today.getMonth() + 1,
      tomorrow.getMonth() + 1,
    ];

    try {
      const data = await getUserGuessesByDays(months, days);
      setGuesses(data);
    } catch (error) {
      Alert.alert("Erro ao palpites do grupo!!!!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadGuesses();
  }, []);

  //TODO: get distinct groups
  //TODO: filter guesses per group
  // const groupName = isLoading ? "carregando..." : guesses[0].group_name;
  // const userGuess = guesses.filter((g) => g.user_id === userId);
  // const playerGuesses = guesses.filter((g) => g.user_id !== userId);

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
          <HeaderTitle>Palpites do Dia</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <Content></Content>
    </Container>
  );
}
