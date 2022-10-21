import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../shared/components/BackButton";
import {
  Group,
  GroupRanking as GroupRankingLine,
  useGroup,
  UserGroup,
} from "../../shared/hooks/GroupContext";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"; //trophy - check - medal
import {
  ButtonWrapper,
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTopWrapper,
  Footer,
  Properties,
} from "./styles";
import GroupRanking from "../../shared/components/GroupRanking";
import { Button } from "../../shared/components/Button";
import KpiPanel from "./KpiPanel";

interface Params {
  group: UserGroup;
}

export default function GroupDashboard() {
  const route = useRoute();
  const { group } = route.params as Params;
  const navigation = useNavigation();
  const theme = useTheme();

  const { getGroupRankingByGroupId } = useGroup();

  const [groupRanking, setGroupRanking] = useState<GroupRankingLine[]>([]);

  async function loadGroupRanking() {
    const response = await getGroupRankingByGroupId(group.group_id!);
    setGroupRanking(response);
  }

  useEffect(() => {
    loadGroupRanking();
  }, []);

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
        <KpiPanel userBonus={0} userMatches={0} userPoints={0} userRank={0} />
        <GroupRanking groupRanking={groupRanking} />
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
