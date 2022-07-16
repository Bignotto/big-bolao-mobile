import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  children: ReactNode;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 25px;
`;
