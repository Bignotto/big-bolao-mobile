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
  justify-content: space-between;
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

export const RegisterForm = styled.View`
  margin-top: 8px;
  padding: 0 24px;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-bottom: 4px;
`;

export const InputField = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  margin-top: 4px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PlayersListContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Spacer = styled.View`
  height: 4px;
  width: 100%;
`;
