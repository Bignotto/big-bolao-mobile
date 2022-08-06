import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ReactNode } from "react";

interface ButtonProps extends RectButtonProps {
  selected: boolean;
  children: ReactNode;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 88px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  /* margin-bottom: 8px; */
`;

export const ButtonStyle = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.success};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_italic};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
