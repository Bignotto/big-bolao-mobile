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
  return (
    <Container>
      <GroupNameWrapper>
        <GroupName>Bar dos Caras</GroupName>
      </GroupNameWrapper>
      <ButtonWrapper>
        <JoinButton>
          <ButtonTitle>Entrar</ButtonTitle>
        </JoinButton>
      </ButtonWrapper>
    </Container>
  );
}
