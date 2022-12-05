import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
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
import { useTheme } from "styled-components";

interface GuessLineProps {
  name: string;
  home_score: number;
  away_score: number;
  points: number;
  bonus: number;
  exact_match: boolean;
}

export default function PlayerGuess({
  name,
  home_score,
  away_score,
  points,
  bonus,
  exact_match,
}: GuessLineProps) {
  const theme = useTheme();
  return (
    <Container>
      <LeftColumn>
        <NameWrapper>
          <Name>{name}</Name>
        </NameWrapper>
      </LeftColumn>
      <RightColumn>
        <PointsWrapper>
          <Points>
            {home_score} x {away_score}
          </Points>
        </PointsWrapper>
        <GuessesWrapper>
          <Guesses>{points > 0 ? points : bonus}</Guesses>
        </GuessesWrapper>
        <BonusWrapper>
          <Bonus>
            {exact_match && (
              <FontAwesome5
                name="check"
                color={theme.colors.success}
                size={16}
              />
            )}
          </Bonus>
        </BonusWrapper>
      </RightColumn>
    </Container>
  );
}
