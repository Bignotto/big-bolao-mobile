import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  GroupTitle,
  GroupTitleContainer,
  Content,
  ButtonWrapper,
  GroupInfoContainer,
  GroupRuleContainer,
  RuleValue,
  RuleTitle,
  Rules,
  Players,
  GroupPlayersContainer,
  PlayerContainer,
  PlayerName,
} from "./styles";

export default function JoinGroup() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <HeaderTopWrapper>
          <ButtonWrapper>
            <BackButton
              onPress={() => navigation.goBack()}
              color={theme.colors.text}
            />
          </ButtonWrapper>
          <HeaderTitle>Entrar no grupo</HeaderTitle>
        </HeaderTopWrapper>
      </Header>
      <Content>
        <GroupTitleContainer>
          <GroupTitle>Bar dos caras</GroupTitle>
        </GroupTitleContainer>
        <Rules>Regras do grupo:</Rules>
        <GroupInfoContainer>
          <GroupRuleContainer>
            <RuleValue>5</RuleValue>
            <RuleTitle>Pontos por palpite correto</RuleTitle>
          </GroupRuleContainer>
          <GroupRuleContainer>
            <RuleValue>5</RuleValue>
            <RuleTitle>
              pontos bônus por acertar o vencedor da partida
            </RuleTitle>
          </GroupRuleContainer>
          <GroupRuleContainer>
            <RuleValue>8</RuleValue>
            <RuleTitle>Amigos no grupo</RuleTitle>
          </GroupRuleContainer>
          <GroupRuleContainer>
            <RuleValue>Thiago</RuleValue>
            <RuleTitle>é o organizador do grupo</RuleTitle>
          </GroupRuleContainer>
        </GroupInfoContainer>
      </Content>
      <GroupPlayersContainer>
        <Players>Jogadores:</Players>
        <FlatList
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PlayerContainer>
              <PlayerName>{item}</PlayerName>
            </PlayerContainer>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </GroupPlayersContainer>
    </Container>
  );
}
