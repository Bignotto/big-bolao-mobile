import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { ButtonWrapper } from "../FindGroup/styles";
import { Container, Header, HeaderTitle, HeaderTopWrapper } from "./styles";

export default function JoinGroup() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <HeaderTopWrapper>
          <ButtonWrapper>
            <BackButton
              onPress={() => navigation.goBack()}
              color={theme.colors.text}
            />
          </ButtonWrapper>
          <HeaderTitle>Encontrar um{`\n`}Bolão:</HeaderTitle>
        </HeaderTopWrapper>
      </Header>
    </Container>
  );
}
