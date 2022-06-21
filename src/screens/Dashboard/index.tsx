import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";
import { GroupProvider } from "../../shared/hooks/GroupContext";
import { GroupCard } from "../../shared/components/GroupCard/";
import supabase from "../../shared/services/supabase";

import { Container, ContentText } from "./styles";

export default function Dashboard() {
  const { session, userId } = useAuth();

  //TODO: move this logic to group component
  async function handleGetUserGroups() {
    try {
      const { data, error } = await supabase
        .from("user_groups")
        .select("*,group_id(name)")
        .eq("user_id", session?.user?.id);
      console.log({ data });
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  return (
    <Container>
      <Header />
      <GroupProvider userId={userId}>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </GroupProvider>
      <Button title="Logout" onPress={handleGetUserGroups} />
    </Container>
  );
}
