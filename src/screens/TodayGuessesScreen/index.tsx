import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { useGroup, UserMatchGuess } from "../../shared/hooks/GroupContext";

import {
  ButtonWrapper,
  Container,
  Content,
  DateTitle,
  DateWrapper,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  KeyWrapper,
  MatchWrapper,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import MatchGuessList from "./MatchGuessList";

export default function TodayGuessesScreen() {
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

  const matches = guesses.filter(
    (guess, index, self) =>
      self.findIndex((g) => g.match_id === guess.match_id) === index
  );

  let dayIndex = 0;

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
          <HeaderTitle>Palpites Recentes</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <Content>
        <ScrollView>
          {matches.map((m, i) => {
            let printDate = false;
            if (dayIndex !== m.match_day) {
              printDate = true;
              dayIndex = m.match_day;
            } else printDate = false;
            return (
              <KeyWrapper key={`${m.match_id}-${i}`}>
                {printDate && (
                  <DateWrapper>
                    <DateTitle>{`${m.match_day}/${m.match_month}`}</DateTitle>
                  </DateWrapper>
                )}
                <MatchGuessList
                  guesses={guesses.filter((g) => g.match_id === m.match_id)}
                  key={m.match_id}
                />
              </KeyWrapper>
            );
          })}
        </ScrollView>
      </Content>
    </Container>
  );
}
