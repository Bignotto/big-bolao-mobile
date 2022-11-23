import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import MatchGuessInput from "../../shared/components/MatchGuessInput";
import { useAuth } from "../../shared/hooks/AuthContext";
import {
  GroupMatchGuesses,
  useGroup,
  UserMatchGuess,
} from "../../shared/hooks/GroupContext";
import PlayerGuess from "./PlayerGuess";

import {
  ButtonWrapper,
  Container,
  Content,
  GuessesContainer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  MatchWrapper,
} from "./styles";

interface Params {
  groupId: string;
  matchId: string;
}

export default function ViewGuessesScreen() {
  const { userId } = useAuth();
  const route = useRoute();
  const { groupId, matchId } = route.params as Params;

  const theme = useTheme();
  const navigation = useNavigation();

  const { getGroupMatchGuesses } = useGroup();

  const [guesses, setGuesses] = useState<UserMatchGuess[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadGuesses() {
    try {
      const data = await getGroupMatchGuesses(groupId, matchId);
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

  const groupName = isLoading ? "carregando..." : guesses[0].group_name;
  const userGuess = guesses.filter((g) => g.user_id === userId);
  const playerGuesses = guesses.filter((g) => g.user_id !== userId);

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
          <HeaderTitle>{groupName}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <Content>
        <MatchWrapper>
          {userGuess.length > 0 && (
            <MatchGuessInput
              onUpdate={() => {}}
              matchData={userGuess[0]}
              cardOnly
            />
          )}
        </MatchWrapper>
        <GuessesContainer>
          {playerGuesses.map((g, i) => (
            <PlayerGuess
              away_score={g.away_team_score_guess}
              home_score={g.home_team_score_guess}
              name={g.user_full_name!}
              position={0}
              points={g.match_score_points}
              key={g.user_id}
            />
          ))}
        </GuessesContainer>
      </Content>
    </Container>
  );
}
