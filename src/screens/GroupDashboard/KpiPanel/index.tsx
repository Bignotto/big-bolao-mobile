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

interface KpiPanelProps {
  userRank: number;
  userPoints: number;
  userBonus: number;
  userMatches: number;
}

export default function KpiPanel({
  userBonus,
  userMatches,
  userPoints,
  userRank,
}: KpiPanelProps) {
  const theme = useTheme();

  return (
    <GroupKpiContainer>
      <GroupKpiWrapper>
        <GroupKpi>
          <HashTagChar>#</HashTagChar>
          <GroupKpiText>{userRank}</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Ranking</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="trophy" color={theme.colors.text} size={20} />
          <GroupKpiText>{userPoints}</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Pontos</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="medal" color={theme.colors.text} size={20} />
          <GroupKpiText>{userBonus}</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Bônus</GroupKpiTitle>
      </GroupKpiWrapper>
      <GroupKpiWrapper>
        <GroupKpi>
          <FontAwesome5 name="check" color={theme.colors.text} size={20} />
          <GroupKpiText>{userMatches}</GroupKpiText>
        </GroupKpi>
        <GroupKpiTitle>Acertos</GroupKpiTitle>
      </GroupKpiWrapper>
    </GroupKpiContainer>
  );
}
