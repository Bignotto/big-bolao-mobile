import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, PlayerName, RemovePlayerButton } from "./styles";
import { Alert } from "react-native";
import { User } from "../../../hooks/GroupContext";

interface PlayerListRowProps {
  player: User;
}
export default function PlayerListRow({ player }: PlayerListRowProps) {
  return (
    <Container>
      <PlayerName>{player.full_name}</PlayerName>
      <RemovePlayerButton onPress={() => Alert.alert("Removing...")}>
        <FontAwesome5 name="trash-alt" size={18} color="#FFFFFF" />
      </RemovePlayerButton>
    </Container>
  );
}
