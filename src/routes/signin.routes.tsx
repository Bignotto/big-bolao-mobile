import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import RegisterAccountScreen from "../screens/RegisterAccount";

const { Navigator, Screen } = createStackNavigator();

export function SigninRoutes() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="RegisterAccount" component={RegisterAccountScreen} />
    </Navigator>
  );
}
