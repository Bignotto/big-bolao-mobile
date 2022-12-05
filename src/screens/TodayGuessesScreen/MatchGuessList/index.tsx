import React from "react";
import { UserMatchGuess } from "../../../shared/hooks/GroupContext";
import { FontAwesome5 } from "@expo/vector-icons";

import MatchGuessInput from "../../../shared/components/MatchGuessInput";
import {
  CheckIconWrapper,
  Container,
  GroupGuessesButton,
  GuessesContainer,
  GuessesWrapper,
  GuessHeader,
  GuessTitle,
  LeftWrapper,
  RightWrapper,
} from "./styles";
import PlayerGuess from "../../../shared/components/PlayerGuess";
import { useNavigation } from "@react-navigation/native";

interface MatchGuessListProps {
  guesses: UserMatchGuess[];
}

export default function MatchGuessList({ guesses }: MatchGuessListProps) {
  const navigation = useNavigation();

  return (
    <>
      <MatchGuessInput
        onUpdate={() => {}}
        matchData={guesses[0]}
        cardOnly
        groupId=""
      />
      <GuessesWrapper>
        <GuessHeader>
          <LeftWrapper>
            <GuessTitle>Grupo</GuessTitle>
          </LeftWrapper>
          <RightWrapper>
            <GuessTitle>Palpite</GuessTitle>
            <GuessTitle style={{ marginLeft: 24 }}>Pts</GuessTitle>
            <CheckIconWrapper>
              <FontAwesome5 name="check" color="#ffffff" size={16} />
            </CheckIconWrapper>
          </RightWrapper>
        </GuessHeader>
        <GuessesContainer>
          {guesses.map((g, i) => (
            <GroupGuessesButton
              key={`${g.guess_id}${i}`}
              onPress={() =>
                navigation.navigate(
                  "ViewGroupGuessesScreen" as never,
                  {
                    groupId: g.group_id,
                    matchId: g.match_id,
                  } as never
                )
              }
            >
              <PlayerGuess
                away_score={g.away_team_score_guess}
                home_score={g.home_team_score_guess}
                name={g.group_name!}
                points={g.guess_points!}
                bonus={g.guess_bonus!}
                exact_match={g.exact_match!}
              />
            </GroupGuessesButton>
          ))}
        </GuessesContainer>
      </GuessesWrapper>
    </>
  );
}
