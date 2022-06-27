import React from "react";
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

interface GroupCardProps {
  title: string;
  points: number;
  friends: number;
  rank: number;
}

function GroupCard({ title, points, friends, rank }: GroupCardProps) {
  return (
    <Container>
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
