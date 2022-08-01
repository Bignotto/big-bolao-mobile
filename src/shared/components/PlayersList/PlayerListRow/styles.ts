import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 25px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const PlayerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
