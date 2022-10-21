import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import {
  GroupRanking as GroupRankingLine,
  useGroup,
  UserGroup,
} from "../../shared/hooks/GroupContext";
import { FontAwesome } from "@expo/vector-icons";

import BackButton from "../../shared/components/BackButton";
import GroupRanking from "../../shared/components/GroupRanking";
import { Button } from "../../shared/components/Button";
import KpiPanel from "./KpiPanel";

import { useAuth } from "../../shared/hooks/AuthContext";

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

interface Params {
  group: UserGroup;
}

export default function GroupDashboard() {
  const route = useRoute();
  const { group } = route.params as Params;

  const navigation = useNavigation();
  const theme = useTheme();

  const { userId } = useAuth();
  const { getGroupRankingByGroupId } = useGroup();

  const [groupRanking, setGroupRanking] = useState<GroupRankingLine[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadGroupRanking() {
    const response = await getGroupRankingByGroupId(group.group_id!);
    setGroupRanking(response);
    setIsLoading(false);
  }

  useEffect(() => {
    loadGroupRanking();
  }, []);

  const userRank = groupRanking.findIndex((u) => u.user_id === userId);

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
        <KpiPanel
          userBonus={isLoading ? 0 : groupRanking[userRank].total_bonus}
          userMatches={isLoading ? 0 : groupRanking[userRank].exact_matches}
          userPoints={isLoading ? 0 : groupRanking[userRank].total_points}
          userRank={isLoading ? 0 : userRank + 1}
        />
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
