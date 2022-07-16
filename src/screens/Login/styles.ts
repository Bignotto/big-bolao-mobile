import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: space-around;
`;

export const LogoContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 72}px;
`;

export const LoginForm = styled.View`
  flex-direction: column;
  padding: 12px;
  align-items: center;
  margin-top: 72px;
`;

export const Spacer = styled.View`
  width: 100%;
  height: 8px;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const InputField = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  padding: 12px;
`;
