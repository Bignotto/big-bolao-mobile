import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ButtonTitle,
  ButtonWrapper,
  Container,
  GroupName,
  GroupNameWrapper,
  JoinButton,
} from "./styles";

export default function GroupSearchResultItem() {
  const navigation = useNavigation();
  return (
    <Container>
      <GroupNameWrapper>
        <GroupName>Bar dos Caras</GroupName>
      </GroupNameWrapper>
      <ButtonWrapper>
        <JoinButton onPress={() => navigation.navigate("JoinGroup" as never)}>
          <ButtonTitle>Entrar</ButtonTitle>
        </JoinButton>
      </ButtonWrapper>
    </Container>
  );
}
