import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, PlayerName, RemovePlayerButton } from "./styles";
import { User } from "../../../hooks/GroupContext";

interface PlayerListRowProps {
  player: User;
  removePlayerFunction(user: User): void;
  isGroupOwner: boolean;
}
export default function PlayerListRow({
  player,
  removePlayerFunction,
  isGroupOwner,
}: PlayerListRowProps) {
  return (
    <Container>
      <PlayerName>{player.full_name}</PlayerName>
      {isGroupOwner && (
        <RemovePlayerButton onPress={() => removePlayerFunction(player)}>
          <FontAwesome5 name="trash-alt" size={18} color="#FFFFFF" />
        </RemovePlayerButton>
      )}
    </Container>
  );
}
