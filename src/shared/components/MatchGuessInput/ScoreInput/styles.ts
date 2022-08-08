import { ReactNode } from "react";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ScoreButtonProps {
  children: ReactNode;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScoreButton = styled(RectButton)<ScoreButtonProps>``;

export const ScoreInputBox = styled(TextInput).attrs<TextInput>({
  //TODO: get color from theme
  placeholderTextColor: "#9B9B9B",
})`
  height: 56px;
  width: 68px;

  margin: 0 4px 0 4px;

  font-family: ${({ theme }) => theme.fonts.bold_italic};
  font-size: ${RFValue(38)}px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  text-align: center;
`;
