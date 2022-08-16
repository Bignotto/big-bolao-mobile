import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  InputContainer,
  ButtonContainer,
  Input,
  SearchButton,
} from "./styles";

interface SearchBoxProps {
  onPress: (searchText: string) => void;
}

export default function SearchBox({ onPress }: SearchBoxProps) {
  const [searchText, setSearchText] = useState("");
  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="nome do bolão"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </InputContainer>
      <ButtonContainer>
        <SearchButton onPress={() => onPress(searchText)}>
          <Feather name="search" size={28} />
        </SearchButton>
      </ButtonContainer>
    </Container>
  );
}
