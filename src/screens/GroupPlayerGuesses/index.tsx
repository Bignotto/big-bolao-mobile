import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group } from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";

interface Params {
  group: Group;
}

export default function GroupPlayerGuesses() {
  const route = useRoute();
  const { group } = route.params as Params;
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
          <HeaderTitle>{group.group.name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
    </Container>
  );
}
