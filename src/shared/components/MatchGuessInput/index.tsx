import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import { UserMatchGuess } from "../../hooks/GroupContext";
import { Button } from "../Button";
import ScoreInput from "./ScoreInput";
import {
  Container,
  TopWrapper,
  ScoreWrapper,
  Score,
  MatchDate,
  BottonWrapper,
  InfoButtonsWrapper,
} from "./styles";
import TeamFlag from "./TeamFlag";

interface MatchGuessProps {
  matchData: UserMatchGuess;
  onUpdate(matchId: string, homeValue: number, awayValue: number): void;
}

export default function MatchGuessInput({
  matchData,
  onUpdate,
}: MatchGuessProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  const exactMatch =
    matchData.home_team_score === matchData.home_team_score_guess &&
    matchData.away_team_score === matchData.away_team_score_guess;

  const resultMatch =
    (matchData.home_team_score > matchData.away_team_score &&
      matchData.home_team_score_guess > matchData.away_team_score_guess) ||
    (matchData.away_team_score > matchData.home_team_score &&
      matchData.away_team_score_guess > matchData.home_team_score_guess) ||
    (matchData.home_team_score === matchData.away_team_score &&
      matchData.home_team_score_guess === matchData.away_team_score_guess &&
      matchData.is_finished);

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;

  const canUpdate =
    todayMonth < matchData.match_month
      ? true
      : todayMonth === matchData.match_month
      ? todayDay < matchData.match_day
        ? true
        : false
      : false;

  return (
    <Container
      type={
        exactMatch
          ? "EXACT"
          : resultMatch
          ? "RESULT"
          : matchData.home_team_score_guess !== null
          ? "DONE"
          : "NULL"
      }
    >
      <TopWrapper>
        <TeamFlag
          name={matchData.home_team_name}
          flagUri={matchData.home_team_flag}
        />
        <ScoreWrapper>
          <Score>{`${matchData.home_team_score} : ${matchData.away_team_score}`}</Score>
          <MatchDate>{`${matchData.local_time}:00 - ${matchData.match_day}/${matchData.match_month}`}</MatchDate>
        </ScoreWrapper>
        <TeamFlag
          name={matchData.away_team_name}
          flagUri={matchData.away_team_flag}
        />
      </TopWrapper>
      <BottonWrapper>
        <ScoreInput
          initialValue={matchData.home_team_score_guess}
          updateValue={(value) =>
            onUpdate(matchData.match_id, value, matchData.away_team_score_guess)
          }
          canUpdate={canUpdate}
        />
        <ScoreInput
          initialValue={matchData.away_team_score_guess}
          updateValue={(value) =>
            onUpdate(matchData.match_id, matchData.home_team_score_guess, value)
          }
          canUpdate={canUpdate}
        />
      </BottonWrapper>

      {!canUpdate && (
        <InfoButtonsWrapper>
          <Button
            title="Palpites do grupo"
            color={theme.colors.shape}
            onPress={() =>
              navigation.navigate(
                "ViewGroupGuessesScreen" as never,
                {
                  groupId: matchData.group_id,
                  matchId: matchData.match_id,
                } as never
              )
            }
          />
        </InfoButtonsWrapper>
      )}
    </Container>
  );
}
