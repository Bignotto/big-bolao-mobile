import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  Group,
  useGroup,
  UserMatchGuess,
} from "../../shared/hooks/GroupContext";
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
import { ScrollView } from "react-native-gesture-handler";

interface Params {
  group: Group;
}

//A3A4
//user: 06cc005d-28b0-4aba-b9e1-2b2e2b3806f6 seu zé
//user: 0694f736-eecc-4451-8a2e-21509473445b big
//group: 4f911dc5-6552-4ad6-9f6f-c0b3e20b7a3c teste5
//group: 7957f0eb-0dad-4767-9c44-40a3914e4538 teste refresh

export default function GroupPlayerGuesses() {
  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as Params;

  const theme = useTheme();

  const { getUserGuessesByGroupId } = useGroup();

  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [matches, setMatches] = useState<UserMatchGuess[]>([]);

  async function loadMatchGuesses() {
    const response = await getUserGuessesByGroupId(group.group_id!);
    setMatches(response);
  }

  useEffect(() => {
    loadMatchGuesses();
  }, []);

  function handleSelectGroup(index: number) {
    setSelectedGroupIndex(index);
  }

  async function handleSaveGuesses() {
    Alert.alert("salvando");
  }

  const groupMatches = matches.filter(
    (m) =>
      m.cup_group === String.fromCharCode(97 + selectedGroupIndex).toUpperCase()
  );

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
      {matches.length === 0 ? (
        <View></View>
      ) : (
        <ScrollView>
          {groupMatches.map((m) => (
            <MatchGuessInput matchData={m} key={m.match_index} />
          ))}
        </ScrollView>
      )}

      <Footer>
        <Button title="Salvar" onPress={handleSaveGuesses} />
      </Footer>
    </Container>
  );
}
