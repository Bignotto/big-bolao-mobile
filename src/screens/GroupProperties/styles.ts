import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

export const Title = styled.Text`
  color: black;
  font-size: ${RFValue(16)}px;
`;
