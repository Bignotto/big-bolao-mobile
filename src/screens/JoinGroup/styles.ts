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
  margin-bottom: 12px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 4px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
  margin-left: 12px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: -20px;
`;

export const GroupTitleContainer = styled.View`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.success};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const GroupTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(28)}px;
`;
