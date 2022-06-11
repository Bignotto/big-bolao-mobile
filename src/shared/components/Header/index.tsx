import React from "react";
import {
  Container,
  UserInfoWrapper,
  AvatarImage,
  GreetingText,
  LogoutWrapper,
  LogoutButton,
} from "./styles";

import LogoutSvg from "../../../assets/logout.svg";

interface HeaderProps {
  name: string;
  avatarUri: string;
  logoutFunction(): Promise<void>;
}

export default function Header({
  name,
  avatarUri,
  logoutFunction,
}: HeaderProps) {
  async function handleLogout() {
    await logoutFunction();
  }
  return (
    <Container>
      <UserInfoWrapper>
        <AvatarImage
          source={{
            uri: avatarUri,
          }}
        />
        <GreetingText>
          Olá 👋
          {`\n${name}`}
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
