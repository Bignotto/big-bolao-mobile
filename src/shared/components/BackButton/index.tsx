import React from "react";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  onPress: () => void;
  color?: string;
}
export default function BackButton({
  onPress,
  color = "#fff",
  ...rest
}: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <Feather name="arrow-left" size={24} color={color} />
    </Container>
  );
}
