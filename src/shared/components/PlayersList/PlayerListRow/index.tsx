import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, PlayerName, RemovePlayerButton } from "./styles";
import { Alert } from "react-native";

export default function PlayerListRow() {
  return (
    <Container>
      <PlayerName>Jogador 1</PlayerName>
      <RemovePlayerButton onPress={() => Alert.alert("Removing...")}>
        <FontAwesome5 name="trash-alt" size={18} color="#FFFFFF" />
      </RemovePlayerButton>
    </Container>
  );
}
