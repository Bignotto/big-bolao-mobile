import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../../hooks/GroupContext";
import PlayerListRow from "./PlayerListRow";
import { Container } from "./styles";

interface PlayerListProps {
  groupPlayers: User[];
  removePlayerFunction(user: User): void;
}

export default function PlayersList({
  groupPlayers,
  removePlayerFunction,
}: PlayerListProps) {
  return (
    <Container>
      <ScrollView>
        {groupPlayers.map((player) => (
          <PlayerListRow
            key={player.user_id}
            player={player}
            removePlayerFunction={removePlayerFunction}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
