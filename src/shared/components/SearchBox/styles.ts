import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;

  flex-direction: row;
`;
export const InputContainer = styled.View`
  width: 85%;
  justify-content: center;
  padding-left: 12px;

  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.success}; ;
`;

export const Input = styled(TextInput).attrs<TextInput>({
  placeholderTextColor: "#9B9B9B",
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonContainer = styled.View`
  width: 15%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  border-top-width: 3px;
  border-top-color: ${({ theme }) => theme.colors.success};

  border-right-width: 3px;
  border-right-color: ${({ theme }) => theme.colors.success};

  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.success};

  background-color: ${({ theme }) => theme.colors.success};
  align-items: center;
  justify-content: center;
`;
