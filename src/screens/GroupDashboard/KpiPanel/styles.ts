import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const GroupKpiContainer = styled.View`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.success};
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 8px;
  margin-bottom: 18px;
`;

export const GroupKpiWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const GroupKpi = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GroupKpiText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_italic};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(26)}px;
  margin-left: 8px;
`;

export const GroupKpiTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: -8px;
`;

export const HashTagChar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_italic};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(26)}px;
`;
