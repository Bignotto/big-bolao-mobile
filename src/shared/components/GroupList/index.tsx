import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Group, useGroup } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

export default function GroupList() {
  const [groups, setGroups] = useState<Group[]>([]);
  const navigation = useNavigation();
  const { getUserGroups } = useGroup();

  async function loadGrops() {
    const fetchedGroups = await getUserGroups();
    setGroups(fetchedGroups);
  }
  useEffect(() => {
    loadGrops();
  }, []);

  async function handleNavigate(group: Group) {
    navigation.navigate("GroupDashboard" as never, { group } as never);
  }

  return (
    <Container>
      {groups.map((g) => (
        <GroupCard
          key={g.id}
          title={g.group.name}
          points={g.user_points}
          friends={0}
          rank={g.user_rank}
          onPress={() => handleNavigate(g)}
        />
      ))}
    </Container>
  );
}
