import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  Group,
  useGroup,
  UserGuess,
  UserMatchGuess,
} from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Footer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";
import CupGroupSelector from "../../shared/components/CupGroupSelector";
import MatchGuessInput from "../../shared/components/MatchGuessInput";
import { Button } from "../../shared/components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../../shared/hooks/AuthContext";

interface Params {
  group: Group;
}

//A3A4
//user: 06cc005d-28b0-4aba-b9e1-2b2e2b3806f6 seu zé
//user: 0694f736-eecc-4451-8a2e-21509473445b big
//group: 4f911dc5-6552-4ad6-9f6f-c0b3e20b7a3c teste5
//group: 7957f0eb-0dad-4767-9c44-40a3914e4538 teste refresh

export default function GroupPlayerGuesses() {
  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as Params;

  const theme = useTheme();

  const { getUserGuessesByGroupId, saveUserGuesses } = useGroup();
  const { userId } = useAuth();

  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  //TODO: prevent leaving this screen without save to database
  const [hasChanged, setHasChanged] = useState(false);

  const [matches, setMatches] = useState<UserMatchGuess[]>([]);

  async function loadMatchGuesses() {
    const response = await getUserGuessesByGroupId(group.group_id!);
    setMatches(response);
  }

  useEffect(() => {
    loadMatchGuesses();
  }, []);

  function handleSelectGroup(index: number) {
    setSelectedGroupIndex(index);
  }

  const groupMatches = matches.filter(
    (m) =>
      m.cup_group === String.fromCharCode(97 + selectedGroupIndex).toUpperCase()
  );

  function updateGuess(matchId: string, homeValue: number, awayValue: number) {
    setHasChanged(true);
    console.log(`Update Guess! ${matchId}: ${homeValue} : ${awayValue}`);
    const updated = matches.map((match) => {
      if (match.match_id === matchId)
        return {
          ...match,
          group_id: group.group_id!,
          user_id: userId,
          home_team_score_guess: homeValue ? homeValue : 0,
          away_team_score_guess: awayValue ? awayValue : 0,
        };

      return match;
    });

    setMatches(updated);
  }

  async function handleSaveGuesses() {
    const filteredGuesses = matches.filter(
      (match) => match.away_team_score_guess || match.home_team_score_guess
    );
    const playerGuesses = filteredGuesses.map((match) => {
      return {
        guess_id: match.guess_id,
        match_id: match.match_id,
        group_id: match.group_id,
        user_id: match.user_id,
        home_team_score: match.home_team_score_guess,
        away_team_score: match.away_team_score_guess,
      } as UserGuess;
    });
    try {
      await saveUserGuesses(playerGuesses);
    } catch (error) {
      Alert.alert("Algo errado salvando seus palpites");
      console.log(error);
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
          <HeaderTitle>{group.name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <CupGroupSelector onSelect={handleSelectGroup} />
      {matches.length === 0 ? (
        <View></View>
      ) : (
        <ScrollView>
          {groupMatches.map((m) => (
            <MatchGuessInput
              matchData={m}
              key={m.match_index}
              onUpdate={updateGuess}
            />
          ))}
        </ScrollView>
      )}

      <Footer>
        <Button title="Salvar" onPress={handleSaveGuesses} />
      </Footer>
    </Container>
  );
}
