import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ThemeScreen from "../screens/ThemeScreen";
import Dashboard from "../screens/Dashboard";
import NewGroup from "../screens/NewGroup";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="NewGroup" component={NewGroup} />
    </Navigator>
  );
}
