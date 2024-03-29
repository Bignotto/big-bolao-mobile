import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  useGroup,
  UserGroup,
  UserGuess,
  UserMatchGuess,
} from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Footer,
  Header,
  HeaderBottomWrapper,
  HeaderCounterText,
  HeaderTitle,
  HeaderTopWrapper,
  MatchesScrollWrapper,
} from "./styles";
import CupGroupSelector from "../../shared/components/CupGroupSelector";
import MatchGuessInput from "../../shared/components/MatchGuessInput";
import { Button } from "../../shared/components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../../shared/hooks/AuthContext";

interface Params {
  group: UserGroup;
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

  const [hasChanged, setHasChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [matches, setMatches] = useState<UserMatchGuess[]>([]);

  let isSaving = false;

  async function loadMatchGuesses() {
    const response = await getUserGuessesByGroupId(group.group_id!);
    setMatches(response);
    setIsLoading(false);
  }

  useEffect(() => {
    loadMatchGuesses();
  }, []);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (!hasChanged) return;
        e.preventDefault();

        if (isSaving) {
          navigation.dispatch(e.data.action);
          return;
        }

        Alert.alert(
          "Descartar alterações?",
          "Você tem palpites modificados e não salvou ainda.",
          [
            { text: "Ficar e salvar", style: "cancel", onPress: () => {} },
            {
              text: "Descartar",
              style: "destructive",
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasChanged]
  );

  function handleSelectGroup(index: number) {
    setSelectedGroupIndex(index);
  }

  function updateGuess(matchId: string, homeValue: number, awayValue: number) {
    setHasChanged(true);
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
    setIsLoading(true);

    const filteredGuesses = matches.filter(
      (match) =>
        match.away_team_score_guess ||
        match.away_team_score_guess === 0 ||
        match.home_team_score_guess ||
        match.home_team_score_guess === 0
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
    } finally {
      isSaving = true;
      navigation.goBack();
      setIsLoading(false);
      setHasChanged(false);
    }
  }

  const groupMatches = matches.filter(
    (m) =>
      m.cup_group === String.fromCharCode(97 + selectedGroupIndex).toUpperCase()
  );

  const doneGuesses = matches.filter((m) => m.away_team_score_guess !== null);

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
          <HeaderTitle>{group.group_name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
        <HeaderBottomWrapper>
          <HeaderCounterText>
            {doneGuesses.length}/{matches.length} palpites salvos
          </HeaderCounterText>
        </HeaderBottomWrapper>
      </Header>
      <CupGroupSelector onSelect={handleSelectGroup} />
      {matches.length === 0 ? (
        <View></View>
      ) : (
        <MatchesScrollWrapper>
          <ScrollView>
            {groupMatches.map((m) => (
              <MatchGuessInput
                matchData={m}
                key={m.match_index}
                onUpdate={updateGuess}
                groupId={group.group_id}
              />
            ))}
          </ScrollView>
        </MatchesScrollWrapper>
      )}

      <Footer>
        <Button
          title="Salvar"
          onPress={handleSaveGuesses}
          loading={isLoading}
          enabled={hasChanged}
        />
      </Footer>
    </Container>
  );
}
