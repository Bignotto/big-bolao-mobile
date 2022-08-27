import React, { useState } from "react";
import { UserMatchGuess } from "../../hooks/GroupContext";
import ScoreInput from "./ScoreInput";
import {
  Container,
  TopWrapper,
  ScoreWrapper,
  Score,
  MatchDate,
  BottonWrapper,
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
  return (
    <Container>
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
        />
        <ScoreInput
          initialValue={matchData.away_team_score_guess}
          updateValue={(value) =>
            onUpdate(matchData.match_id, matchData.home_team_score_guess, value)
          }
        />
      </BottonWrapper>
    </Container>
  );
}
