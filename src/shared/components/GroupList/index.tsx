import React, { useEffect, useState } from "react";
import { Group, useGroup } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

export default function GroupList() {
  const [groups, setGroups] = useState<Group[]>([]);

  const { getUserGroups } = useGroup();

  async function loadGrops() {
    const fetchedGroups = await getUserGroups();
    setGroups(fetchedGroups);
  }
  useEffect(() => {
    loadGrops();
  }, []);

  return (
    <Container>
      {groups.map((g) => (
        <GroupCard
          key={g.id}
          title={g.group.name}
          points={g.user_points}
          friends={0}
          rank={g.user_rank}
        />
      ))}
    </Container>
  );
}
