import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: ${RFValue(18)}px;
  color: black;
`;
