import React from "react";

import {
  Container,
  LogoContainer,
  TempText,
  LoginForm,
  LogoImage,
} from "./styles";

import LogoPng from "../../assets/Logo.png";
import LogoSvg from "../../assets/soccer.svg";
import { RFValue } from "react-native-responsive-fontsize";
import AppLogo from "../../shared/components/AppLogo";

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <LoginForm>
        <TempText>Here goes login form</TempText>
      </LoginForm>
    </Container>
  );
}
