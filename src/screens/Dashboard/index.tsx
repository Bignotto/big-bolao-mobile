import React from "react";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { useAuth } from "../../shared/hooks/AuthContext";
import { GroupProvider } from "../../shared/hooks/GroupContext";

import { Container } from "./styles";
import GroupList from "../../shared/components/GroupList";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { userId } = useAuth();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header />

      <GroupList />

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
