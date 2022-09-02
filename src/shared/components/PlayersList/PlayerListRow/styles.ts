import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface RemovePlayerButtonProps extends RectButtonProps {
  children: ReactNode;
}

export const Container = styled.View`
  flex: 1;
  height: 30px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 0 12px;
`;

export const PlayerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const RemovePlayerButton = styled(RectButton)<RemovePlayerButtonProps>``;
