import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-bottom: 4px;
`;

export const InputField = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  margin-top: 24px;
`;

export const Header = styled.View`
  height: 205px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${getStatusBarHeight() + 12}px 24px;
`;

export const HeaderTopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
  margin-left: 12px;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: 12px;
`;

export const RegisterForm = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 12px;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
