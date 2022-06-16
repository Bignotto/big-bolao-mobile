import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../shared/components/Button";
import Header from "../../shared/components/Header";
import { AppError } from "../../shared/errors/AppError";
import { useAuth } from "../../shared/hooks/AuthContext";
import supabase from "../../shared/services/supabase";

import { Container, ContentText } from "./styles";

export default function Dashboard() {
  const { signOut, session } = useAuth();
  const [user, setUser] = useState<{
    id?: string;
    full_name: string;
    avatar_url: string;
  }>({
    id: "",
    full_name: "",
    //TODO: use a placeholder avatar
    avatar_url:
      "https://kmqurfaofmowoonastqb.supabase.co/storage/v1/object/sign/avatars/avatar1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcjEucG5nIiwiaWF0IjoxNjU0OTgwNDU2LCJleHAiOjE5NzAzNDA0NTZ9.bYJuCu2pk5Eeug9T8p8ZZYOKX_pZZhY9coZgOqPPiCs",
  });

  //TODO: move this logic to useEffect
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

  async function loadUser() {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id,full_name,avatar_url")
        .eq("id", session?.user?.id);
      console.log(data);
      if (!error && data && session)
        setUser({
          id: session?.user?.id,
          full_name: data[0].full_name,
          avatar_url: data[0].avatar_url,
        });
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

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Header
        name={user.full_name}
        logoutFunction={handleSignOut}
        avatarUri={user!.avatar_url}
      />
      <ContentText>{user!.full_name}</ContentText>
      <Button title="Logout" onPress={loadUser} />
    </Container>
  );
}
