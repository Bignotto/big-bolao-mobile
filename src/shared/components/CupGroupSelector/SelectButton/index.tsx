import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, ButtonStyle } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  selected: boolean;
}

export function SelectButton({ title, onPress, selected }: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <ButtonStyle selected={selected}>
        <Title>{title}</Title>
      </ButtonStyle>
    </Container>
  );
}
