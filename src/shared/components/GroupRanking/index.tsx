import React from "react";
import { GroupRanking as GroupRankingLine } from "../../hooks/GroupContext";
import { FontAwesome5 } from "@expo/vector-icons";
import RankingLine from "./RankingLine";

import {
  Container,
  IconsWrapper,
  RankingHeader,
  RankingTitle,
  RankingTitleWrapper,
} from "./styles";

interface GroupRankingProps {
  groupRanking: GroupRankingLine[];
}

export default function GroupRanking({ groupRanking }: GroupRankingProps) {
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
      {groupRanking.map((g, i) => (
        <RankingLine
          name={g.full_name}
          points={g.total_points}
          position={i + 1}
          bonus={g.total_bonus}
          guesses={g.exact_matches}
          key={g.user_id}
        />
      ))}
    </Container>
  );
}
