import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { Group, useGroup } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

export default function GroupList() {
  const [groups, setGroups] = useState<Group[]>([]);

  const { userId } = useAuth();
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
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
    </Container>
  );
}
