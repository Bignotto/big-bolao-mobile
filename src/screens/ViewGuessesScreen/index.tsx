import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { GroupMatchGuesses, useGroup } from "../../shared/hooks/GroupContext";

import {
  ButtonWrapper,
  Container,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";

interface Params {
  groupId: string;
  matchId: string;
}

export default function ViewGuessesScreen() {
  const route = useRoute();
  const { groupId, matchId } = route.params as Params;

  const theme = useTheme();
  const navigation = useNavigation();

  const { getGroupMatchGuesses } = useGroup();

  const [guesses, setGuesses] = useState<GroupMatchGuesses[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadGuesses() {
    try {
      const data = await getGroupMatchGuesses(groupId, matchId);
      setGuesses(data);
      console.log({ data });
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

      {/* <MatchInformationWrapper>

      TODO: create a "match result card" to show on top of view guesses screen
      </MatchInformationWrapper>
      <GuessesContainer>

      </GuessesContainer> */}
    </Container>
  );
}
