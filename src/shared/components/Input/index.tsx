import React from "react";

import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface Props extends TextInputProps {
  name: string;
}

export default function Input({ name, ...rest }: Props) {
  return <Container {...rest} />;
}
