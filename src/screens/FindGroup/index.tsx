import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import GroupSearchResultItem from "../../shared/components/GroupSearchResultItem";
import SearchBox from "../../shared/components/SearchBox";
import { Group, useGroup } from "../../shared/hooks/GroupContext";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  ButtonWrapper,
  SearchResults,
  SearchTitle,
} from "./styles";

export default function FindGroup() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { searchGroupByName } = useGroup();

  const [searchResults, setSearchResults] = React.useState<Group[]>([]);

  async function handleSearch(searchText: string) {
    const groups = await searchGroupByName(searchText);
    setSearchResults(groups);
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
        {searchResults.length > 0 && (
          <SearchTitle>{searchResults.length} Grupos encontrados:</SearchTitle>
        )}
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.group_id!.toString()}
          renderItem={({ item }) => <GroupSearchResultItem group={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </SearchResults>
    </Container>
  );
}
