import React from "react";
import { FontAwesome5 } from "@expo/vector-icons"; //trophy - check - medal

import { Container, IconsWrapper, RankingHeader, RankingTitle } from "./styles";

export default function GroupRanking() {
  return (
    <Container>
      <RankingHeader>
        <RankingTitle># Jogador</RankingTitle>
        <IconsWrapper>
          <FontAwesome5 name="trophy" color="#FFFFFF" size={16} />
          <FontAwesome5 name="check" color="#FFFFFF" size={16} />
          <FontAwesome5 name="medal" color="#FFFFFF" size={16} />
        </IconsWrapper>
      </RankingHeader>
    </Container>
  );
}
