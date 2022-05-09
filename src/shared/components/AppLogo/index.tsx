import React from "react";

import { Container, LogoWrapper, TextWrapper, LogoText } from "./styles";

import LogoSvg from "../../../assets/soccer.svg";

export default function AppLogo() {
  return (
    <Container>
      <LogoWrapper>
        <LogoSvg />
      </LogoWrapper>
      <TextWrapper>
        <LogoText>Bolão</LogoText>
        <LogoText>da</LogoText>
        <LogoText>Copa</LogoText>
      </TextWrapper>
    </Container>
  );
}
