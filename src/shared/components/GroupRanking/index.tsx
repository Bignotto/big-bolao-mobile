import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import RankingLine from "./RankingLine";

import {
  Container,
  IconsWrapper,
  RankingHeader,
  RankingTitle,
  RankingTitleWrapper,
} from "./styles";
import {
  useGroup,
  GroupRanking as GroupRankingLine,
} from "../../hooks/GroupContext";

interface GroupRankingProps {
  groupId: string;
}

export default function GroupRanking({ groupId }: GroupRankingProps) {
  const { getGroupRankingByGroupId } = useGroup();

  const [groupRanking, setGroupRanking] = useState<GroupRankingLine[]>([]);

  async function loadGroupRanking() {
    const response = await getGroupRankingByGroupId(groupId);
    setGroupRanking(response);
  }

  useEffect(() => {
    loadGroupRanking();
  }, []);

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
