import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 110px;
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
  line-height: 30px;
  padding-top: 4px;
`;

export const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoutWrapper = styled.Text``;
