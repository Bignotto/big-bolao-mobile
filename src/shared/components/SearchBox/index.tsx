import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  InputContainer,
  ButtonContainer,
  Input,
  SearchButton,
} from "./styles";
import { useTheme } from "styled-components";

interface SearchBoxProps {
  onPress: () => void;
}

export default function SearchBox({ onPress }: SearchBoxProps) {
  const theme = useTheme();

  return (
    <Container>
      <InputContainer>
        <Input placeholder="nome do bolão" />
      </InputContainer>
      <ButtonContainer>
        <SearchButton onPress={onPress}>
          <Feather name="search" size={28} />
        </SearchButton>
      </ButtonContainer>
    </Container>
  );
}
