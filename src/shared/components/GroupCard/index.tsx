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

function GroupCard() {
  return (
    <Container>
      <InfoContainer>
        <GroupTitleContainer>
          <GroupTitle>Bar do Zé</GroupTitle>
        </GroupTitleContainer>
        <GroupInfoContainer>
          <GroupPointsText>35 pontos</GroupPointsText>
          <GroupFriendsText>8 amigos</GroupFriendsText>
        </GroupInfoContainer>
      </InfoContainer>
      <RankingContainer>
        <RankingTitleText>Position</RankingTitleText>
        <RankingPositionText>1</RankingPositionText>
      </RankingContainer>
    </Container>
  );
}

export { GroupCard };
