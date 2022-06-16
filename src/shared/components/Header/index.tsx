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

interface HeaderProps {
  userId?: string;
  logoutFunction(): Promise<void>;
}

interface UserInfo {
  id?: string;
  full_name: string;
  avatar_url: string;
}

export default function Header({ userId, logoutFunction }: HeaderProps) {
  const [user, setUser] = useState<UserInfo>();

  async function loadUser() {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id,full_name,avatar_url")
        .eq("id", userId);

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
    await logoutFunction();
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
