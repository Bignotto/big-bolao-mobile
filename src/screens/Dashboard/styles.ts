import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentText = styled.Text`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const GroupListWrapper = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Footer = styled.View`
  padding: 24px;
`;
