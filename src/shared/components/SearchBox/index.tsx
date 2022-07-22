import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, InputContainer, ButtonContainer, Input } from "./styles";
import { useTheme } from "styled-components";

export default function SearchBox() {
  const theme = useTheme();
  return (
    <Container>
      <InputContainer>
        <Input placeholder="nome do bolão" />
      </InputContainer>
      <ButtonContainer>
        <Feather name="search" size={28} />
      </ButtonContainer>
    </Container>
  );
}
