import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group } from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Content,
  GroupTitle,
  GroupTitleContainer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";

interface Params {
  group: Group;
}

export default function GroupDashboard() {
  const route = useRoute();
  const { group } = route.params as Params;
  const navigation = useNavigation();
  const theme = useTheme();

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
        </HeaderTopWrapper>
      </Header>
      <Content>
        <GroupTitleContainer>
          <GroupTitle>{group.group.name}</GroupTitle>
        </GroupTitleContainer>
      </Content>
    </Container>
  );
}
