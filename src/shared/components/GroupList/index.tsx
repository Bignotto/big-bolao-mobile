import React from "react";
import { useAuth } from "../../hooks/AuthContext";
import { GroupCard } from "../GroupCard";
import { Container } from "./styles";

export default function GroupList() {
  const { userId } = useAuth();

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
