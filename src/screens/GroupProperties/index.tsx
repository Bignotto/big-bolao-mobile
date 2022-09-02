import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Group, useGroup, User } from "../../shared/hooks/GroupContext";

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

interface Params {
  group: Group;
}

export default function GroupProperties() {
  const route = useRoute();
  const { group } = route.params as Params;
  const theme = useTheme();
  const navigation = useNavigation();
  const { getGroupUsers, removeUserFromGroup } = useGroup();
  const { userId } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [groupOwner, setGroupOwner] = useState<User>();

  async function loadGroupUsers() {
    try {
      const data = await getGroupUsers(group.group_id!);
      const [owner] = data.filter((u) => u.user_id === group.owner_id);
      setGroupOwner(owner);
      setUsers(data);
    } catch (error) {
      Alert.alert("Erro ao carregar usuários do grupo");
      console.log(error);
    }
  }

  useEffect(() => {
    loadGroupUsers();
  }, []);

  async function handleLeaveGroup() {
    //TODO: confirm before leave group
    await removeUserFromGroup(userId, group.group_id!);
    navigation.navigate("Dashboard" as never);
  }

  async function handleRemoveUser(user: User) {
    Alert.alert(`remove user ${user.full_name}`);
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
      <RegisterForm>
        <InputField>
          <InputLabel>Senha:</InputLabel>
          <Input
            name="name"
            placeholder="senha do grupo"
            value={group.password}
            editable={group.owner_id === userId}
          />
        </InputField>
        <FormTitle>Pontuação do bolão</FormTitle>
        <InputField>
          <InputLabel>Pontos para o palpite exato:</InputLabel>
          <Input
            name="password"
            placeholder=""
            editable={group.owner_id === userId}
            value={String(group.match_score_points)}
          />
        </InputField>
        <FormTitle>Pontos bônus</FormTitle>
        <InputField>
          <InputLabel>
            Conceder pontos extras para o palpite que acertar o vencedor da
            partida:
          </InputLabel>
          <Input
            name="bonus"
            placeholder="pontos extras"
            keyboardType="numeric"
            editable={group.owner_id === userId}
            value={String(group.match_winner_points)}
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
        />
      </PlayersListContainer>
      <Footer>
        <Button title="Salvar" enabled={group.owner_id === userId} />
        <Button
          title="Sair do grupo"
          color="#E83F5B"
          onPress={handleLeaveGroup}
        />
      </Footer>
    </Container>
  );
}
