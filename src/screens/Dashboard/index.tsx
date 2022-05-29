import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";

import { Container, ContentText } from "./styles";

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
      <Header
        name="Thiago Bignotto"
        logoutFunction={handleSignOut}
        avatarUri={"https://avatars.githubusercontent.com/u/2911353"}
      />
      <ContentText>{signedUser?.token}</ContentText>
      <Button title="Logout" onPress={handleSignOut} />
    </Container>
  );
}
