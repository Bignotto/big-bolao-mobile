import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  color?: string;
  children: ReactNode;
}

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  border-radius: 4px;
`;

export const GroupNameWrapper = styled.View`
  width: 80%;
  justify-content: center;
`;

export const GroupName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const ButtonWrapper = styled.View`
  width: 20%;
  justify-content: center;
`;

export const JoinButton = styled(RectButton)<ButtonProps>`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.success};
  border-radius: 5px;
  padding: 8px 0;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;
