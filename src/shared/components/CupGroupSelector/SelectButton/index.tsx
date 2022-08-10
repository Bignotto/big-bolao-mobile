import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, ButtonStyle } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  selected: boolean;
}

export function SelectButton({ title, onPress, selected }: Props) {
  return (
    <Container onPress={onPress}>
      <ButtonStyle selected={selected}>
        <Title>{title}</Title>
      </ButtonStyle>
    </Container>
  );
}
