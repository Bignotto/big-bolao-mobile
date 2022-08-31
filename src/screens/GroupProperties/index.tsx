import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
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
import Input from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import PlayersList from "../../shared/components/PlayersList";

interface Params {
  group: Group;
}

export default function GroupProperties() {
  const route = useRoute();
  const { group } = route.params as Params;
  const theme = useTheme();
  const navigation = useNavigation();
  const { getGroupUsers } = useGroup();

  const [users, setUsers] = useState<User[]>([]);
  const [groupOwner, setGroupOwner] = useState<User>();

  async function loadGroupUsers() {
    try {
      const data = await getGroupUsers(group.group_id!);
      const owner = data.filter((u) => u.user_id === group.owner_id);
      setGroupOwner(owner[0]);
      setUsers(data);
    } catch (error) {
      Alert.alert("Erro ao carregar usuários do grupo");
      console.log(error);
    }
  }

  useEffect(() => {
    loadGroupUsers();
  }, []);

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
          />
        </InputField>
        <FormTitle>Pontuação do bolão</FormTitle>
        <InputField>
          <InputLabel>Pontos para o palpite exato:</InputLabel>
          <Input
            name="password"
            placeholder=""
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
        <PlayersList groupPlayers={users} />
      </PlayersListContainer>
      <Footer>
        <Button title="Salvar" enabled={false} />
        <Button title="Sair do grupo" color="#E83F5B" />
      </Footer>
    </Container>
  );
}
