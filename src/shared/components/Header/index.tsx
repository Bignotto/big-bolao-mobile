import React from "react";
import { Image } from "react-native";
import {
  Container,
  UserInfoWrapper,
  AvatarImage,
  GreetingText,
  LogoutWrapper,
} from "./styles";

interface HeaderProps {
  name: string;
  avatarUri: string;
  logoutFunction(): void;
}

export default function Header({
  name,
  avatarUri,
  logoutFunction,
}: HeaderProps) {
  function handleLogout() {
    logoutFunction();
  }

  return (
    <Container>
      <UserInfoWrapper>
        <AvatarImage
          source={{
            uri: avatarUri,
          }}
        />
        <GreetingText>Olá {name}</GreetingText>
      </UserInfoWrapper>
      <LogoutWrapper>{`[-> `}</LogoutWrapper>
    </Container>
  );
}
