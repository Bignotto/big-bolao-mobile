import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Group } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

interface GroupListProps {
  groups: Group[];
}

export default function GroupList({ groups }: GroupListProps) {
  const navigation = useNavigation();

  async function handleNavigate(group: Group) {
    navigation.navigate("GroupDashboard" as never, { group } as never);
  }

  return (
    <Container>
      {groups.map((g) => (
        <GroupCard
          key={g.group_id}
          title={g.name}
          points={0}
          friends={0}
          rank={0}
          onPress={() => handleNavigate(g)}
        />
      ))}
    </Container>
  );
}
