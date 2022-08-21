import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group, useGroup } from "../../shared/hooks/GroupContext";
import {
  ButtonWrapper,
  Container,
  Footer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
} from "./styles";
import CupGroupSelector from "../../shared/components/CupGroupSelector";
import MatchGuessInput from "../../shared/components/MatchGuessInput";
import { Button } from "../../shared/components/Button";

interface Params {
  group: Group;
}

export default function GroupPlayerGuesses() {
  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as Params;

  const theme = useTheme();

  const { getUserGuessesByGroupId } = useGroup();

  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  function handleSelectGroup(index: number) {
    setSelectedGroupIndex(index);
  }

  async function handleSaveGuesses() {
    const response = await getUserGuessesByGroupId(group.group_id!);
    console.log(`response.length: ${response.length}`);
  }

  //A3A4
  //user: 06cc005d-28b0-4aba-b9e1-2b2e2b3806f6 seu zé
  //user: 0694f736-eecc-4451-8a2e-21509473445b big
  //group: 4f911dc5-6552-4ad6-9f6f-c0b3e20b7a3c
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
          <HeaderTitle>{group.name}</HeaderTitle>
          <ButtonWrapper></ButtonWrapper>
        </HeaderTopWrapper>
      </Header>
      <CupGroupSelector onSelect={handleSelectGroup} />
      <MatchGuessInput />
      <Footer>
        <Button title="Salvar" onPress={handleSaveGuesses} />
      </Footer>
    </Container>
  );
}
