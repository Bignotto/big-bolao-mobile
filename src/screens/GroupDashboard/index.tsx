import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import { Group, UserGroup } from "../../shared/hooks/GroupContext";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"; //trophy - check - medal
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
  Properties,
} from "./styles";
import GroupRanking from "../../shared/components/GroupRanking";
import { Button } from "../../shared/components/Button";

interface Params {
  group: UserGroup;
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
          <HeaderTitle>{group.group_name}</HeaderTitle>
          <ButtonWrapper>
            <Properties
              onPress={() =>
                navigation.navigate(
                  "GroupProperties" as never,
                  { groupId: group.group_id } as never
                )
              }
            >
              <FontAwesome name="gear" size={20} color={theme.colors.text} />
            </Properties>
          </ButtonWrapper>
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
        <GroupRanking groupId={group.group_id!} />
      </Content>
      <Footer>
        <Button
          title="Meus Palpites"
          onPress={() =>
            navigation.navigate(
              "GroupPlayerGuesses" as never,
              { group } as never
            )
          }
        />
      </Footer>
    </Container>
  );
}
