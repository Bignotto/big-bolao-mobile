import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AvatarImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const GreetingText = styled.Text``;

export const UserInfoWrapper = styled.View``;

export const LogoutWrapper = styled.Text``;
