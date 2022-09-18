import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UserGroup } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

interface GroupListProps {
  groups: UserGroup[];
}

export default function GroupList({ groups }: GroupListProps) {
  const navigation = useNavigation();

  async function handleNavigate(group: UserGroup) {
    navigation.navigate("GroupDashboard" as never, { group } as never);
  }

  return (
    <Container>
      {groups.map((g, i) => (
        <GroupCard
          key={g.group_id}
          group={g}
          onPress={() => handleNavigate(g)}
        />
      ))}
    </Container>
  );
}
