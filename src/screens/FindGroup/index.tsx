import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import GroupSearchResultItem from "../../shared/components/GroupSearchResultItem";
import SearchBox from "../../shared/components/SearchBox";
import {
  Container,
  Header,
  HeaderText,
  HeaderTitle,
  HeaderTopWrapper,
  ButtonWrapper,
  SearchResults,
  SearchTitle,
} from "./styles";

export default function FindGroup() {
  const theme = useTheme();
  const navigation = useNavigation();

  async function handleSearch() {
    Alert.alert("Searching...");
  }

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
          <HeaderTitle>Encontrar um{`\n`}Bolão:</HeaderTitle>
        </HeaderTopWrapper>
        <SearchBox onPress={handleSearch} />
      </Header>
      <SearchResults>
        <SearchTitle>Grupos encontrados:</SearchTitle>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <GroupSearchResultItem />}
          showsHorizontalScrollIndicator={false}
        />
      </SearchResults>
    </Container>
  );
}
