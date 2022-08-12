import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../shared/components/Button";
import {
  Container,
  Content,
  ContentText,
  ContentTitle,
  Footer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
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
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate(nextScreen as never)}
        />
      </Footer>
    </Container>
  );
}
