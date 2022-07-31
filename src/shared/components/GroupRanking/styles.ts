import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const RankingHeader = styled.View`
  flex-direction: row;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const RankingTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const IconsWrapper = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const RankingTitleWrapper = styled.View`
  width: 50%;
  padding-left: 20px;
`;
