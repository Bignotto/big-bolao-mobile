import React from "react";
import {
  Container,
  UserInfoWrapper,
  AvatarImage,
  GreetingText,
  LogoutWrapper,
} from "./styles";

import LogoutSvg from "../../../assets/logout.svg";

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
        <GreetingText>
          Olá
          {`\n${name} 👋`}
        </GreetingText>
      </UserInfoWrapper>
      <LogoutWrapper>
        <LogoutSvg />
      </LogoutWrapper>
    </Container>
  );
}
