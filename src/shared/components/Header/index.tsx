import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfoWrapper,
  AvatarImage,
  GreetingText,
  LogoutWrapper,
  LogoutButton,
  ProfileButton,
} from "./styles";

import LogoutSvg from "../../../assets/logout.svg";
import { AppError } from "../../errors/AppError";
import { Alert } from "react-native";
import { useAuth } from "../../hooks/AuthContext";
import { useGroup, User } from "../../hooks/GroupContext";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const [user, setUser] = useState<User>();

  const { signOut, session } = useAuth();
  const { getUserById } = useGroup();
  const navigation = useNavigation();

  async function loadUser() {
    if (!session) return;

    try {
      const user = await getUserById(session.user!.id);
      setUser(user);
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
        <ProfileButton onPress={() => navigation.navigate("Profile" as never)}>
          <AvatarImage
            source={{
              uri: user?.avatar_url,
            }}
          />
        </ProfileButton>
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
