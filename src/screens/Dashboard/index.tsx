import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";
import supabase from "../../shared/services/supabase";

import { Container, ContentText } from "./styles";

//TODO: implement User entity

export default function Dashboard() {
  const { signOut, user } = useAuth();

  useEffect(() => {}, []);

  async function handleGetUserGroups() {
    console.log("handle get user groups");
    try {
      const { data, error } = await supabase
        .from("user_groups")
        .select("*,group_id(name)")
        .eq("user_id", user?.id);

      console.log({ data });
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }
  return (
    <Container>
      <Header
        name="Thiago Bignotto"
        logoutFunction={handleSignOut}
        avatarUri={"https://avatars.githubusercontent.com/u/2911353"}
      />
      <ContentText>{user?.user_metadata.full_name}</ContentText>
      <Button title="Logout" onPress={handleGetUserGroups} />
    </Container>
  );
}
