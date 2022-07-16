import React from "react";

import { Container, LogoWrapper, TextWrapper, LogoText } from "./styles";

import LogoSvg from "../../../assets/soccer2.svg";

export default function AppLogo() {
  return (
    <Container>
      <LogoWrapper>
        <LogoSvg width={106} height={150} />
      </LogoWrapper>
      <TextWrapper>
        <LogoText>Bolão</LogoText>
        <LogoText>da</LogoText>
        <LogoText>Copa</LogoText>
      </TextWrapper>
    </Container>
  );
}
