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
  margin-bottom: 18px;
`;

export const GroupTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(28)}px;
`;

export const GroupInfoContainer = styled.View`
  padding: 8px 24px;
`;

export const GroupRuleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;

export const RuleValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const RuleTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  margin-left: 12px;
  line-height: 24px;
`;

export const Rules = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const Players = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  margin-bottom: 8px;
`;

export const GroupPlayersContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const PlayerContainer = styled.View`
  height: 36px;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 0 12px;
  margin-bottom: 8px;
`;

export const PlayerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const Footer = styled.View`
  height: 180px;
  /* background-color: ${({ theme }) => theme.colors.shape}; */
  padding: 0 24px;
  margin-top: 12px;
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
