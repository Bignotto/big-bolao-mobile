import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import {
  Group,
  useGroup,
  User,
  UserGroup,
} from "../../shared/hooks/GroupContext";

import {
  ButtonWrapper,
  Container,
  Footer,
  FormTitle,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  InputField,
  InputLabel,
  PlayersListContainer,
  RegisterForm,
  Spacer,
} from "./styles";
import BackButton from "../../shared/components/BackButton";
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import PlayersList from "../../shared/components/PlayersList";
import { useAuth } from "../../shared/hooks/AuthContext";
import { ScrollView } from "react-native-gesture-handler";

interface Params {
  groupId: string;
}

export default function GroupProperties() {
  const route = useRoute();
  const { groupId } = route.params as Params;
  const theme = useTheme();
  const navigation = useNavigation();
  const {
    getGroupUsers,
    removeUserFromGroup,
    updateGroup,
    getGroupById,
    getUserById,
  } = useGroup();
  const { userId } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [groupOwner, setGroupOwner] = useState<User>();
  const [group, setGroup] = useState<Group>({} as Group);

  const [groupPassword, setGroupPassword] = useState("");
  const [groupScorePoints, setGroupScorePoints] = useState("");
  const [groupWinnerPoints, setGroupWinnerPoints] = useState("");

  async function loadGroupUsers() {
    try {
      const data = await getGroupUsers(groupId);
      const group = await getGroupById(groupId);

      const owner = await getUserById(group.owner_id!);

      setGroup(group);
      setGroupOwner(owner);
      setUsers(data);
      setGroupPassword(group.password);
      setGroupScorePoints(String(group.match_score_points));
      setGroupWinnerPoints(String(group.match_winner_points));
    } catch (error) {
      Alert.alert("Erro ao carregar usuários do grupo!!!!");
      console.log(error);
    }
  }

  useEffect(() => {
    loadGroupUsers();
    // setGroupPassword(group.password);
    // setGroupScorePoints(String(group.match_score_points));
    // setGroupWinnerPoints(String(group.match_winner_points));
  }, []);

  async function handleUpdateGroup() {
    try {
      await updateGroup({
        group_id: group.group_id,
        password: groupPassword,
        match_score_points: parseInt(groupScorePoints),
        match_winner_points: parseInt(groupWinnerPoints),
        name: group.name,
      });
    } catch (errors) {
      Alert.alert("Erro salvar as configurações do grupo");
    }
  }

  async function handleLeaveGroup() {
    Alert.alert(
      `Sair do grupo ${group.name}`,
      `Tem certeza que quer sair do grupo ${group.name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await removeUserFromGroup(userId, group.group_id!);
            navigation.navigate("Dashboard" as never);
          },
        },
      ]
    );
  }

  async function handleRemoveUser(user: User) {
    Alert.alert(
      `Remover ${user.full_name}`,
      `Tem certeza que quer remover ${user.full_name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await removeUserFromGroup(user.user_id, group.group_id!);
            const updatedUserList = users.filter(
              (u) => u.user_id !== user.user_id
            );
            setUsers(updatedUserList);
          },
        },
      ]
    );
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
          <HeaderTitle>{group.name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <ScrollView>
        <RegisterForm>
          <InputField>
            <InputLabel>Senha:</InputLabel>
            <Input
              name="name"
              placeholder="senha do grupo"
              value={groupPassword}
              editable={group.owner_id === userId}
              onChangeText={setGroupPassword}
            />
          </InputField>
          <FormTitle>Pontuação do bolão</FormTitle>
          <InputField>
            <InputLabel>Pontos para o placar exato:</InputLabel>
            <Input
              name="password"
              placeholder="pontos"
              keyboardType="numeric"
              editable={group.owner_id === userId}
              value={groupScorePoints}
              onChangeText={setGroupScorePoints}
            />
          </InputField>
          <FormTitle>Pontos bônus</FormTitle>
          <InputField>
            <InputLabel>
              Conceder pontos extras para o palpite que acertar o resultado da
              partida:
            </InputLabel>
            <Input
              name="bonus"
              placeholder="pontos extras"
              keyboardType="numeric"
              editable={group.owner_id === userId}
              value={groupWinnerPoints}
              onChangeText={setGroupWinnerPoints}
            />
          </InputField>
          <InputField>
            <InputLabel>Criador do grupo:</InputLabel>
            <Input
              name="name"
              placeholder="criador do grupo"
              value={groupOwner ? groupOwner.full_name : ""}
              editable={false}
            />
          </InputField>
        </RegisterForm>
        <PlayersListContainer>
          <FormTitle>Jogadores do grupo:</FormTitle>
          <Spacer />
          <PlayersList
            groupPlayers={users}
            removePlayerFunction={handleRemoveUser}
            isGroupOwner={group.owner_id === userId}
            groupOwnerId={group.owner_id!}
          />
        </PlayersListContainer>
      </ScrollView>
      <Footer>
        {groupOwner?.user_id === userId ? (
          <Button
            title="Salvar"
            enabled={group.owner_id === userId}
            onPress={handleUpdateGroup}
          />
        ) : (
          <Button
            title="Sair do grupo"
            color="#E83F5B"
            onPress={handleLeaveGroup}
          />
        )}
      </Footer>
    </Container>
  );
}
