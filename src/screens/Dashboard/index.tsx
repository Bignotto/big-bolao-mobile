import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";
import { GroupProvider } from "../../shared/hooks/GroupContext";
import { GroupCard } from "../../shared/components/GroupCard/";
import supabase from "../../shared/services/supabase";

import { Container, ContentText } from "./styles";
import GroupList from "../../shared/components/GroupList";

export default function Dashboard() {
  const { session, userId } = useAuth();

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
