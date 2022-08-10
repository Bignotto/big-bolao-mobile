import React from "react";
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

export default function MatchGuessInput() {
  return (
    <Container>
      <TopWrapper>
        <TeamFlag name="Brasil" flagUri="https://countryflagsapi.com/png/bra" />
        <ScoreWrapper>
          <Score>-- : --</Score>
          <MatchDate>16:00 - 24 NOV</MatchDate>
        </ScoreWrapper>
        <TeamFlag name="Sérvia" flagUri="https://countryflagsapi.com/png/srb" />
      </TopWrapper>
      <BottonWrapper>
        <ScoreInput />
        <ScoreInput />
      </BottonWrapper>
    </Container>
  );
}
