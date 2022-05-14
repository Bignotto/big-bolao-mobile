import React from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";

import { Container, Header, HeaderTitle } from "./styles";

export default function Dashboard() {
  const { session, signOut } = useAuth();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }
  return (
    <Container>
      <Header>
        <HeaderTitle>Olá {session?.user?.email}</HeaderTitle>
      </Header>
      <Button title="Logout" onPress={handleSignOut} />
    </Container>
  );
}
