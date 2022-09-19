import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../shared/components/Button";

import SoccerDark from "../../assets/soccer_dark.svg";

import {
  Container,
  Content,
  ContentText,
  ContentTitle,
  Footer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  ImageWrapper,
} from "./styles";

interface ConfirmationScreenProps {
  title: string;
  message: string;
  instructions: string;
  nextScreen: string;
}

export default function ConfirmationScreen() {
  const route = useRoute();
  const { title, message, instructions, nextScreen } =
    route.params as ConfirmationScreenProps;

  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );

  function handleGoBack() {
    console.log("cliquei!");
    navigation.dispatch((state) => {
      // Remove the home route from the stack
      const routes = state.routes.filter((r) => r.name === "Dashboard");

      return CommonActions.reset({
        ...state,
        routes,
        index: 0,
      });
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <HeaderTopWrapper>
          <HeaderTitle>Golaço!</HeaderTitle>
        </HeaderTopWrapper>
      </Header>
      <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{message}</ContentText>
        <ContentText>{instructions}</ContentText>
        <ImageWrapper>
          <SoccerDark width={189} height={270} />
        </ImageWrapper>
      </Content>
      <Footer>
        <Button title="Ok" onPress={handleGoBack} />
      </Footer>
    </Container>
  );
}
