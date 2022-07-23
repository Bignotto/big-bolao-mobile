import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 205px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${getStatusBarHeight()}px 24px;
`;

export const HeaderTopWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
  margin-left: 12px;
  line-height: 48px;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: 12px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 4px;
`;
