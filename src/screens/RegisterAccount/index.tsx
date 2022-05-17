import React from "react";
import Input from "../../shared/components/Input";

import { Container, InputField, InputLabel } from "./styles";

export default function RegisterAccountScreen() {
  return (
    <Container>
      <InputField>
        <InputLabel>E-Mail:</InputLabel>
        <Input
          name="email"
          keyboardType="email-address"
          placeholder="email@address.com"
          value={""}
          onChangeText={(text) => console.log(text)}
        />
      </InputField>
    </Container>
  );
}
