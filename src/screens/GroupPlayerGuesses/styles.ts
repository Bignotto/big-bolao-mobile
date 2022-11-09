import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 110px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 24px 24px;
`;

export const HeaderTopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 12px; */
  justify-content: space-between;
`;

export const HeaderBottomWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HeaderCounterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const ButtonWrapper = styled.View`
  width: 18px;
  margin-top: 4px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
`;

export const MatchesScrollWrapper = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Footer = styled.View`
  height: 70px;
  /* background-color: ${({ theme }) => theme.colors.shape}; */
  padding: 0 24px;
  margin-top: 12px;
`;
