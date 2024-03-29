import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface PropertiesProps extends RectButtonProps {
  children: ReactNode;
}

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
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.View`
  margin-top: 4px;
`;

export const Properties = styled(RectButton)<PropertiesProps>``;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: -20px;
`;

export const GroupRankingContainer = styled.View`
  padding: 0 24px;
`;

export const Footer = styled.View`
  height: 90px;
  padding: 0 24px;
`;
