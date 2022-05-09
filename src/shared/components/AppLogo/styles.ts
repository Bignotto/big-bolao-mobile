import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const LogoWrapper = styled.View``;

export const TextWrapper = styled.View`
  background-color: beige;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(46)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFPercentage(78.5)};
`;
