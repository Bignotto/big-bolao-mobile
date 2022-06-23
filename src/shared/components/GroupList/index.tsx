import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { useGroup } from "../../hooks/GroupContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

export default function GroupList() {
  const [groups, setGroups] = useState();

  const { userId } = useAuth();
  const { getUserGroups } = useGroup();

  useEffect(() => {
    getUserGroups();
  });

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
