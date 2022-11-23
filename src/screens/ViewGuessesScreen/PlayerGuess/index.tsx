import React from "react";
import {
  Bonus,
  BonusWrapper,
  Container,
  Guesses,
  GuessesWrapper,
  LeftColumn,
  Name,
  NameWrapper,
  Points,
  PointsWrapper,
  RightColumn,
} from "./styles";

interface GuessLineProps {
  position: number;
  name: string;
  home_score: number;
  away_score: number;
  points: number;
}

export default function PlayerGuess({
  position,
  name,
  home_score,
  away_score,
  points,
}: GuessLineProps) {
  return (
    <Container>
      <LeftColumn>
        <NameWrapper>
          <Name>{name}</Name>
        </NameWrapper>
      </LeftColumn>
      <RightColumn>
        <PointsWrapper>
          <Points>{home_score}</Points>
        </PointsWrapper>
        <GuessesWrapper>
          <Guesses>{away_score}</Guesses>
        </GuessesWrapper>
        <BonusWrapper>
          <Bonus>{points}</Bonus>
        </BonusWrapper>
      </RightColumn>
    </Container>
  );
}
