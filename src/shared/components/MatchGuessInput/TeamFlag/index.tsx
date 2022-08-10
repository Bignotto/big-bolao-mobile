import React from "react";
import { Container, Flag, Name } from "./styles";

interface TeamFlagProps {
  name: string;
  flagUri: string;
}

export default function TeamFlag({ name, flagUri }: TeamFlagProps) {
  return (
    <Container>
      <Flag source={{ uri: flagUri }} />
      <Name>{name}</Name>
    </Container>
  );
}
