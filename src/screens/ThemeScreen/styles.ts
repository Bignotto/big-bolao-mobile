import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  background-color: antiquewhite;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(18)}px;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black_italic};
  font-size: ${RFValue(38)}px;
`;

export const Content = styled.View``;

export const ContentTitle = styled.Text``;

export const ContentText = styled.Text``;

export const Footer = styled.View``;

export const FooterTitle = styled.Text``;

export const FooterText = styled.Text``;
