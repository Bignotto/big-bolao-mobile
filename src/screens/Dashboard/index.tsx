import React from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";

import { Container, Header, HeaderTitle } from "./styles";

interface UserData {
  [key: string]: string;
}

export default function Dashboard() {
  const { signOut, user } = useAuth();

  //TODO: implement User entity
  const { full_name } = user?.user_metadata as UserData;

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
        <HeaderTitle>Olá {full_name}</HeaderTitle>
      </Header>
      <Button title="Logout" onPress={handleSignOut} />
    </Container>
  );
}
