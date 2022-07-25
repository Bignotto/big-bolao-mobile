import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  GroupTitle,
  GroupTitleContainer,
  Content,
  ButtonWrapper,
} from "./styles";

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
          <HeaderTitle>Entrar no grupo</HeaderTitle>
        </HeaderTopWrapper>
      </Header>
      <Content>
        <GroupTitleContainer>
          <GroupTitle>Bar dos caras</GroupTitle>
        </GroupTitleContainer>
      </Content>
    </Container>
  );
}
