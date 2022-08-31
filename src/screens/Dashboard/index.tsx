import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { useAuth } from "../../shared/hooks/AuthContext";
import { Group, useGroup, UserGroup } from "../../shared/hooks/GroupContext";

import { Container } from "./styles";
import GroupList from "../../shared/components/GroupList";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { getUserGroups } = useGroup();

  const [groups, setGroups] = useState<Group[]>([]);

  async function loadGroups() {
    let response;
    try {
      response = await getUserGroups();
      const responseGroups = response.map((userGroup) => userGroup.group);

      console.log({ response });
      setGroups(responseGroups);
    } catch (error) {}
  }

  useEffect(() => {
    loadGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadGroups();
    }, [])
  );

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header />

      <GroupList groups={groups} />

      <Button
        title="Encontrar Bolão"
        onPress={() => navigation.navigate("FindGroup" as never)}
      />
      <Button
        title="Novo Bolão"
        onPress={() => navigation.navigate("NewGroup" as never)}
      />
    </Container>
  );
}
