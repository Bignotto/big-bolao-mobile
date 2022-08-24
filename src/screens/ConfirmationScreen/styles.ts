import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 205px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-bottom: 28px;
`;

export const HeaderTopWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(72)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const ContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(28)}px;
  margin-top: 24px;
`;

export const ContentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: 12px;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  padding: 0 24px;
  margin-bottom: 12px;
`;
