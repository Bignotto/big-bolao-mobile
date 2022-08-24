import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Group } from "../../hooks/GroupContext";
import {
  ButtonTitle,
  ButtonWrapper,
  Container,
  GroupName,
  GroupNameWrapper,
  JoinButton,
} from "./styles";

interface GropuSearchResultItemProps {
  group: Group;
}

export default function GroupSearchResultItem({
  group,
}: GropuSearchResultItemProps) {
  const navigation = useNavigation();
  return (
    <Container>
      <GroupNameWrapper>
        <GroupName>{group.name}</GroupName>
      </GroupNameWrapper>
      <ButtonWrapper>
        <JoinButton
          onPress={() =>
            navigation.navigate("JoinGroup" as never, { group } as never)
          }
        >
          <ButtonTitle>Entrar</ButtonTitle>
        </JoinButton>
      </ButtonWrapper>
    </Container>
  );
}
