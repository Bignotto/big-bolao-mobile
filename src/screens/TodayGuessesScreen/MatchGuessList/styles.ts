import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  children: ReactNode;
}

export const Container = styled.View`
  flex: 1;
`;

export const GroupGuessesButton = styled(RectButton)<ButtonProps>``;

export const GuessesWrapper = styled.View`
  flex: 1;
`;

export const GuessHeader = styled.View`
  flex-direction: row;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const GuessTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const RightWrapper = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const CheckIconWrapper = styled.View`
  margin-left: 42px;
`;

export const LeftWrapper = styled.View`
  width: 50%;
  padding-left: 10px;
`;

export const GuessesContainer = styled.View`
  flex: 1;
`;
