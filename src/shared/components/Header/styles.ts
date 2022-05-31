import { ReactNode } from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends BorderlessButtonProps {
  children: ReactNode;
}

export const Container = styled.View`
  height: ${getStatusBarHeight() + 110}px;
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${getStatusBarHeight()}px;
  padding-left: 16px;
  padding-right: 16px;
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

export const LogoutButton = styled(BorderlessButton)<ButtonProps>`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;
