import React from "react";
import { SelectButton } from "./SelectButton";
import { Container } from "./styles";

export default function CupGroupSelector() {
  return (
    <Container>
      <SelectButton title="Cup 1" selected={false} />
    </Container>
  );
}
