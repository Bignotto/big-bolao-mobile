import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
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
  GroupFriendsText,
} from "./styles";

interface GroupCardProps extends RectButtonProps {
  title: string;
  points: number;
  friends: number;
  rank: number;
}

function GroupCard({ title, points, friends, rank, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <GroupTitleContainer>
          <GroupTitle>{title}</GroupTitle>
        </GroupTitleContainer>
        <GroupInfoContainer>
          <GroupPointsText>{points} pontos</GroupPointsText>
          <GroupFriendsText>{friends} amigos</GroupFriendsText>
        </GroupInfoContainer>
      </InfoContainer>
      <RankingContainer>
        <RankingTitleText>Position</RankingTitleText>
        <RankingPositionText>{rank}</RankingPositionText>
      </RankingContainer>
    </Container>
  );
}

export { GroupCard };
