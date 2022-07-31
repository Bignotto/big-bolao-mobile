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
  Position,
  PositionWrapper,
  RightColumn,
} from "./styles";

interface RankingLineProps {
  position: number;
  name: string;
  points: number;
  bonus: number;
  guesses: number;
}

export default function RankingLine({
  position,
  name,
  points,
  bonus,
  guesses,
}: RankingLineProps) {
  return (
    <Container>
      <LeftColumn>
        <PositionWrapper>
          <Position>{position}.</Position>
        </PositionWrapper>
        <NameWrapper>
          <Name>{name}</Name>
        </NameWrapper>
      </LeftColumn>
      <RightColumn>
        <PointsWrapper>
          <Points>{points}</Points>
        </PointsWrapper>
        <GuessesWrapper>
          <Guesses>{guesses}</Guesses>
        </GuessesWrapper>
        <BonusWrapper>
          <Bonus>{bonus}</Bonus>
        </BonusWrapper>
      </RightColumn>
    </Container>
  );
}
