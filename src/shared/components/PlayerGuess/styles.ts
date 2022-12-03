import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 25px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const LeftColumn = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const RightColumn = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
`;

export const NameWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const PointsWrapper = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: center;
`;

export const Points = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const GuessesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Guesses = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const BonusWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Bonus = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
