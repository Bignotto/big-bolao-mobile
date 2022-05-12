import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ReactNode } from "react";

interface ButtonProps extends RectButtonProps {
  color?: string;
  children: ReactNode;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.success};
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.text_disabled : theme.colors.text};
`;
