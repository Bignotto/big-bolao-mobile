import React from "react";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../shared/hooks/AuthContext";
import { SigninRoutes } from "./signin.routes";
import ThemeScreen from "../screens/ThemeScreen";

export function Routes() {
  const { user, isLoading } = useAuth();
  return (
    <NavigationContainer theme={DarkTheme}>
      {user ? <AppRoutes /> : <SigninRoutes />}
    </NavigationContainer>
  );
}
