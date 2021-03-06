import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group } from "../../shared/hooks/GroupContext";
import { FontAwesome5 } from "@expo/vector-icons"; //trophy - check - medal
import {
  ButtonWrapper,
  Container,
  Content,
  GroupKpiContainer,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  GroupKpiWrapper,
  GroupKpi,
  GroupKpiText,
  GroupKpiTitle,
  HashTagChar,
  Footer,
  GroupRankingContainer,
} from "./styles";
import GroupRanking from "../../shared/components/GroupRanking";
import { Button } from "../../shared/components/Button";

interface Params {
  group: Group;
}

export default function GroupDashboard() {
  const route = useRoute();
  const { group } = route.params as Params;
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.shape}
      />
      <Header>
        <HeaderTopWrapper>
          <ButtonWrapper>
            <BackButton
              onPress={() => navigation.goBack()}
              color={theme.colors.text}
            />
          </ButtonWrapper>
          <HeaderTitle>{group.group.name}</HeaderTitle>
        </HeaderTopWrapper>
      </Header>
      <Content>
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
              <FontAwesome5 name="trophy" color="#FFFFFF" size={20} />
              <GroupKpiText>13</GroupKpiText>
            </GroupKpi>
            <GroupKpiTitle>Pontos</GroupKpiTitle>
          </GroupKpiWrapper>
          <GroupKpiWrapper>
            <GroupKpi>
              <FontAwesome5 name="medal" color="#FFFFFF" size={20} />
              <GroupKpiText>10</GroupKpiText>
            </GroupKpi>
            <GroupKpiTitle>B??nus</GroupKpiTitle>
          </GroupKpiWrapper>
          <GroupKpiWrapper>
            <GroupKpi>
              <FontAwesome5 name="check" color="#FFFFFF" size={20} />
              <GroupKpiText>8</GroupKpiText>
            </GroupKpi>
            <GroupKpiTitle>Acertos</GroupKpiTitle>
          </GroupKpiWrapper>
        </GroupKpiContainer>
        <GroupRanking />
      </Content>
      <Footer>
        <Button title="Meus Palpites" />
      </Footer>
    </Container>
  );
}
