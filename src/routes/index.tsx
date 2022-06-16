import React from "react";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../shared/hooks/AuthContext";
import { SigninRoutes } from "./signin.routes";
import ThemeScreen from "../screens/ThemeScreen";

export function Routes() {
  const { session, isLoading } = useAuth();
  return (
    <NavigationContainer theme={DarkTheme}>
      {session ? <AppRoutes /> : <SigninRoutes />}
    </NavigationContainer>
  );
}
