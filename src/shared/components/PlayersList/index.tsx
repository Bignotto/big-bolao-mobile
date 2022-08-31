import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../../hooks/GroupContext";
import PlayerListRow from "./PlayerListRow";
import { Container } from "./styles";

interface PlayerListProps {
  groupPlayers: User[];
}

export default function PlayersList({ groupPlayers }: PlayerListProps) {
  return (
    <Container>
      <ScrollView>
        {groupPlayers.map((player) => (
          <PlayerListRow key={player.user_id} player={player} />
        ))}
      </ScrollView>
    </Container>
  );
}
