import React from "react";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import { Container, PlayerName, RemovePlayerButton } from "./styles";
import { User } from "../../../hooks/GroupContext";
import { useTheme } from "styled-components";

interface PlayerListRowProps {
  player: User;
  removePlayerFunction(user: User): void;
  isGroupOwner: boolean;
  theGroupOwner: boolean;
}
export default function PlayerListRow({
  player,
  removePlayerFunction,
  isGroupOwner,
  theGroupOwner,
}: PlayerListRowProps) {
  const theme = useTheme();

  return (
    <Container>
      <PlayerName>
        {player.full_name}
        {theGroupOwner && (
          <Foundation name="crown" size={18} color={theme.colors.text} />
        )}
      </PlayerName>
      {isGroupOwner && !theGroupOwner && (
        <RemovePlayerButton onPress={() => removePlayerFunction(player)}>
          <FontAwesome5 name="trash-alt" size={18} color={theme.colors.text} />
        </RemovePlayerButton>
      )}
    </Container>
  );
}
