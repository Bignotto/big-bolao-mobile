import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";

import { Container, ContentText, Header, HeaderTitle } from "./styles";

//TODO: implement User entity
interface UserData {
  [key: string]: string;
}

export default function Dashboard() {
  const { signOut, getUser, session } = useAuth();
  const [signedUser, setSignedUser] = useState<{
    name: string;
    email: string | undefined;
    token: string | undefined;
  }>();

  useEffect(() => {
    const user = getUser();

    if (user) {
      const { full_name } = user.user_metadata as UserData;

      setSignedUser({
        email: user.email,
        token: session?.access_token,
        name: full_name,
      });
    }
  }, []);

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
        <HeaderTitle>Olá {signedUser?.name}</HeaderTitle>
      </Header>
      <ContentText>{signedUser?.token}</ContentText>
      <Button title="Logout" onPress={handleSignOut} />
    </Container>
  );
}
