import styled from "styled-components/native";

export const TempText = styled.Text`
  color: aqua;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoImage = styled.Image`
  width: 287px;
  height: 159px;
`;

export const LogoContainer = styled.View``;

export const LoginForm = styled.View`
  flex-direction: column;
  padding: 12px;
  align-items: center;
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
