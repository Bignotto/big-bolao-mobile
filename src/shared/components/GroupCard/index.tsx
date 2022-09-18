import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { UserGroup } from "../../hooks/GroupContext";
import {
  Container,
  InfoContainer,
  RankingContainer,
  GroupTitleContainer,
  GroupInfoContainer,
  RankingTitleText,
  RankingPositionText,
  GroupTitle,
  GroupPointsText,
} from "./styles";

interface GroupCardProps extends RectButtonProps {
  group: UserGroup;
}

function GroupCard({ group, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <GroupTitleContainer>
          <GroupTitle>{group.group_name}</GroupTitle>
        </GroupTitleContainer>
        <GroupInfoContainer>
          <GroupPointsText>{group.total_points || 0} pontos</GroupPointsText>
        </GroupInfoContainer>
      </InfoContainer>
      <RankingContainer>
        <RankingTitleText>Position</RankingTitleText>
        <RankingPositionText>{group.ranking}</RankingPositionText>
      </RankingContainer>
    </Container>
  );
}

export { GroupCard };
