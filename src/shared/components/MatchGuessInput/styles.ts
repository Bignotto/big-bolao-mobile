import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 8px;

  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.success};
  padding: 12px 0;
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Score = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MatchDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BottonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
