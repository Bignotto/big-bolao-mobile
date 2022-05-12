import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const LogoWrapper = styled.View``;

export const TextWrapper = styled.View`
  margin-left: 16px;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(56)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 16px;
  padding-top: 38px;
`;
