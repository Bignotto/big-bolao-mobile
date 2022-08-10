import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
