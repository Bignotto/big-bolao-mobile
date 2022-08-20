import React, { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Group, useGroup, User } from "../../shared/hooks/GroupContext";

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
import { useAuth } from "../../shared/hooks/AuthContext";

interface Params {
  group: Group;
}

export default function JoinGroup() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { getGroupUsers, joinGroup } = useGroup();
  const { userId } = useAuth();

  const route = useRoute();
  const { group } = route.params as Params;

  const [groupPassword, setGroupPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  async function loadGroupUsers() {
    try {
      const data = await getGroupUsers(group.group_id!);
      setUsers(data);
    } catch (error) {
      Alert.alert("Erro ao carregar usuários do grupo");
      console.log(error);
    }
  }

  useEffect(() => {
    loadGroupUsers();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadGroupUsers();
    }, [])
  );

  async function handleJoinGroup() {
    if (groupPassword !== group.password) return Alert.alert("Senha incorreta");

    const user = users.find((u) => u.user_id === userId);

    if (user) return Alert.alert("Você já está no grupo");

    try {
      const data = await joinGroup(group.group_id!);
      navigation.navigate(
        "Confirmation" as never,
        {
          title: `Você entrou no grupo ${group.name}!!`,
          message: `Você já pode registrar seus palpites para os jogos.`,
          instructions: `Clique no botão abaixo para voltar a tela inicial. De lá, clique no grupo para registrar seus palpites.`,
          nextScreen: "Dashboard",
        } as never
      );
    } catch (error) {
      Alert.alert("Erro ao entrar no grupo");
      console.log(error);
    }
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
            <RuleValue>{users.length}</RuleValue>
            <RuleTitle>Amigos no grupo</RuleTitle>
          </GroupRuleContainer>
          <GroupRuleContainer>
            <RuleValue>
              {users.find((u) => u.user_id === group.owner_id)?.full_name}
            </RuleValue>
            <RuleTitle>é o organizador do grupo</RuleTitle>
          </GroupRuleContainer>
        </GroupInfoContainer>
      </Content>
      <GroupPlayersContainer>
        <Players>Jogadores do grupo:</Players>
        <FlatList
          data={users}
          keyExtractor={(u) => u.user_id}
          renderItem={({ item }) => (
            <PlayerContainer>
              <PlayerName>{item.full_name}</PlayerName>
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
