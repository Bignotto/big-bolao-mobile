import React from "react";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"; //trophy - check - medal

import {
  GroupKpi,
  GroupKpiContainer,
  GroupKpiText,
  GroupKpiTitle,
  GroupKpiWrapper,
  HashTagChar,
} from "./styles";
import { useTheme } from "styled-components";

export default function KpiPanel() {
  const theme = useTheme();

  return (
    <GroupKpiContainer>
      <GroupKpiWrapper>
        <GroupKpi>
          <HashTagChar>#</HashTagChar>
          <GroupKpiText>20</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Ranking</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="trophy" color={theme.colors.text} size={20} />
          <GroupKpiText>13</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Pontos</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="medal" color={theme.colors.text} size={20} />
          <GroupKpiText>10</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Bônus</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="check" color={theme.colors.text} size={20} />
          <GroupKpiText>8</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Acertos</GroupKpiTitle>
      </GroupKpiWrapper>
    </GroupKpiContainer>
  );
}
