import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../shared/hooks/AuthContext";
import { SigninRoutes } from "./signin.routes";

export function Routes() {
  const { session } = useAuth();
  return (
    <NavigationContainer>
      {session ? <AppRoutes /> : <SigninRoutes />}
    </NavigationContainer>
  );
}
