import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../../hooks/GroupContext";
import PlayerListRow from "./PlayerListRow";
import { Container } from "./styles";

interface PlayerListProps {
  groupPlayers: User[];
  removePlayerFunction(user: User): void;
  isGroupOwner: boolean;
  groupOwnerId: string;
}

export default function PlayersList({
  groupPlayers,
  removePlayerFunction,
  isGroupOwner,
  groupOwnerId,
}: PlayerListProps) {
  return (
    <Container>
      <ScrollView>
        {groupPlayers.map((player) => (
          <PlayerListRow
            key={player.user_id}
            player={player}
            removePlayerFunction={removePlayerFunction}
            isGroupOwner={isGroupOwner}
            theGroupOwner={player.user_id === groupOwnerId}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
