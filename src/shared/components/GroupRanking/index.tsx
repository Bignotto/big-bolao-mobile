import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import RankingLine from "./RankingLine";

import {
  Container,
  IconsWrapper,
  RankingHeader,
  RankingTitle,
  RankingTitleWrapper,
} from "./styles";

export default function GroupRanking() {
  return (
    <Container>
      <RankingHeader>
        <RankingTitleWrapper>
          <RankingTitle># Jogador</RankingTitle>
        </RankingTitleWrapper>
        <IconsWrapper>
          <FontAwesome5 name="trophy" color="#FFFFFF" size={16} />
          <FontAwesome5 name="check" color="#FFFFFF" size={16} />
          <FontAwesome5 name="medal" color="#FFFFFF" size={16} />
        </IconsWrapper>
      </RankingHeader>
      <RankingLine
        name="Thiago"
        points={135}
        position={1}
        bonus={5}
        guesses={5}
      />
      <RankingLine
        name="Felipe"
        points={35}
        position={2}
        bonus={15}
        guesses={5}
      />
      <RankingLine
        name="Thiago"
        points={35}
        position={3}
        bonus={5}
        guesses={5}
      />
      <RankingLine
        name="Thiago"
        points={35}
        position={4}
        bonus={5}
        guesses={5}
      />
    </Container>
  );
}
