import React, { useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Group, useGroup } from "../../shared/hooks/GroupContext";

import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
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
  Footer,
  InputField,
  InputLabel,
} from "./styles";

interface Params {
  group: Group;
}

export default function JoinGroup() {
  const [groupPassword, setGroupPassword] = useState("");
  const theme = useTheme();
  const navigation = useNavigation();
  const { getGroupUsers } = useGroup();
  const route = useRoute();
  const { group } = route.params as Params;

  async function handleJoinGroup() {
    const data = await getGroupUsers(group.group_id!);
    console.log({ data });
  }

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
          <GroupTitle>{group.name}</GroupTitle>
        </GroupTitleContainer>
        <Rules>Regras do grupo:</Rules>
        <GroupInfoContainer>
          <GroupRuleContainer>
            <RuleValue>{group.match_score_points}</RuleValue>
            <RuleTitle>Pontos por palpite correto</RuleTitle>
          </GroupRuleContainer>
          <GroupRuleContainer>
            <RuleValue>{group.match_winner_points}</RuleValue>
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
        <Players>Jogadores do grupo:</Players>
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
      <Footer>
        <InputField>
          <InputLabel>Senha do grupo:</InputLabel>
          <Input
            name="password"
            placeholder="senha para entrar no grupo"
            onChangeText={(text) => setGroupPassword(text)}
            value={groupPassword}
          />
        </InputField>
        <Button title="Entrar no grupo" onPress={handleJoinGroup} />
      </Footer>
    </Container>
  );
}
