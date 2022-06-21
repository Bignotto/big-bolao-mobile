import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: red;
  flex-direction: row;
  height: 75px;
`;

export const InfoContainer = styled.View`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.shape};

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: center;

  padding-left: 8px;
`;

export const RankingContainer = styled.View`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.background};

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  border-top-width: 3px;
  border-top-color: ${({ theme }) => theme.colors.shape};

  border-right-width: 3px;
  border-right-color: ${({ theme }) => theme.colors.shape};

  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.shape};

  justify-content: center;
  align-items: center;
`;

export const GroupTitleContainer = styled.View``;

export const GroupInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const RankingTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const RankingPositionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black_italic};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GroupTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black_italic};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GroupPointsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GroupFriendsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
