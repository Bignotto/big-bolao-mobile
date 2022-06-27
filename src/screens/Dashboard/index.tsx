import React from "react";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { useAuth } from "../../shared/hooks/AuthContext";
import { GroupProvider } from "../../shared/hooks/GroupContext";

import { Container } from "./styles";
import GroupList from "../../shared/components/GroupList";

export default function Dashboard() {
  const { userId } = useAuth();

  return (
    <Container>
      <Header />
      <GroupProvider userId={userId}>
        <GroupList />
      </GroupProvider>
      <Button title="Logout" />
    </Container>
  );
}
