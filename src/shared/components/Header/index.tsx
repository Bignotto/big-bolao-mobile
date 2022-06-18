import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfoWrapper,
  AvatarImage,
  GreetingText,
  LogoutWrapper,
  LogoutButton,
} from "./styles";

import LogoutSvg from "../../../assets/logout.svg";
import supabase from "../../services/supabase";
import { AppError } from "../../errors/AppError";
import { Alert } from "react-native";
import { useAuth } from "../../hooks/AuthContext";

interface UserInfo {
  id?: string;
  full_name: string;
  avatar_url: string;
}

export default function Header() {
  const [user, setUser] = useState<UserInfo>();

  const { signOut, session } = useAuth();

  async function loadUser() {
    if (!session) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id,full_name,avatar_url")
        .eq("id", session.user?.id);

      if (!error && data)
        setUser({
          id: data[0].id,
          full_name: data[0].full_name,
          avatar_url: data[0].avatar_url,
        });
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  async function handleLogout() {
    try {
      await signOut();
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <UserInfoWrapper>
        <AvatarImage
          source={{
            uri: user?.avatar_url,
          }}
        />
        <GreetingText>
          Olá 👋
          {`\n${user?.full_name}`}
        </GreetingText>
      </UserInfoWrapper>
      <LogoutWrapper>
        <LogoutButton onPress={handleLogout}>
          <LogoutSvg />
        </LogoutButton>
      </LogoutWrapper>
    </Container>
  );
}
